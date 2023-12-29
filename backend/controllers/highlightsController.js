// const speech = require('@google-cloud/speech');
import speech from "@google-cloud/speech"
import * as mm from 'music-metadata';
import fs from "fs"

async function speechToTextGreater60(audioBytes, channels, hertz) {
    let data = null

    const client = new speech.SpeechClient();

    const config = {
        enableWordTimeOffsets: true,
        enableAutomaticPunctuation: true,
        encoding: 'LINEAR16',
        languageCode: 'ur-PK',
        audioChannelCount: channels,
        sampleRateHertz: hertz,
        model: 'command_and_search'

    }
    let word_time = []
    // Divide the audio into chunks of one minute each
    const chunkDuration = 60000; // milliseconds
    const chunks = audioBytes.match(new RegExp(`.{1,${chunkDuration}}`, 'g'));

    // Process each chunk
    let totalStart = 0
    let totalEnd = 0
    let chunkNo = 0
    for (const chunk of chunks) {
        const audio = {
            content: chunk,
        }
        const request = {
            audio: audio,
            config: config,

        }
        const [operation] = await client.longRunningRecognize(request);

        // Get a Promise representation of the final result of the job
        const [response] = await operation.promise();

        response.results.forEach(result => {
            result.alternatives[0].words.forEach(wordInfo => {
                // NOTE: If you have a time offset exceeding 2^32 seconds, use the
                // wordInfo.{x}Time.seconds.high to calculate seconds.

                const st = totalEnd
                const et = parseInt(`${wordInfo.endTime.seconds}`) + totalEnd

                const startSecs =
                    `${st}`
                const endSecs =
                    `${et}` +
                    '.' +
                    wordInfo.endTime.nanos / 100000000;

                totalStart = st
                totalEnd = et
                // console.log(`${wordInfo.startTime.seconds}`, `${wordInfo.end.seconds}`)
                // store in word and time in output.txt
                word_time.push({
                    end: endSecs,
                    start: startSecs,
                    text: wordInfo.word,

                });

            });
        });

    }
    data = word_time;
    return await formatData(data)

}

async function speechToText(audioBytes, channels, hertz) {
    let data = null

    const client = new speech.SpeechClient();
    // const fileName = './taimoor.wav';

    // const file = fs.readFileSync(fileName);
    // const audioBytes = file.toString('base64');

    const audio = {
        content: audioBytes,
    }
    const config = {
        enableWordTimeOffsets: true,
        enableAutomaticPunctuation: true,
        encoding: 'LINEAR16',
        sampleRateHertz: hertz,
        languageCode: 'ur-PK',
        audioChannelCount: channels,


    }
    const request = {
        audio: audio,
        config: config,

    }
    const [operation] = await client.longRunningRecognize(request);

    // Get a Promise representation of the final result of the job
    const [response] = await operation.promise();
    let word_time = [];
    response.results.forEach(result => {
        // console.log(`Transcription: ${result.alternatives[0].transcript}`);
        result.alternatives[0].words.forEach(wordInfo => {
            // NOTE: If you have a time offset exceeding 2^32 seconds, use the
            // wordInfo.{x}Time.seconds.high to calculate seconds.
            const startSecs =
                `${wordInfo.startTime.seconds}`
            const endSecs =
                `${wordInfo.endTime.seconds}` +
                '.' +
                wordInfo.endTime.nanos / 100000000;
            // store in word and time in output.txt
            word_time.push({
                end: endSecs,
                start: startSecs,
                text: wordInfo.word,

            });

        });
    });
    // console.log(word_time);
    data = word_time;

    return await formatData(data)

}

async function formatData(data) {
    // let fileName = "output.txt"
    // let data = fs.readFileSync(fileName);
    // data = JSON.parse(data);
    const word1 = "ہیں";
    const word2 = "ہے";
    let newData = [];
    let i = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].text == word1) {
            data[i - 1].text = data[i - 1].text + " " + data[i].text
            data[i - 1].end = data[i].end;
            data.splice(i, 1)
            i--;
        }
        if (data[i].text == word2) {
            data[i - 1].text = data[i - 1].text + " " + data[i].text;
            data[i - 1].end = data[i].end;
            data.splice(i, 1)
            i--;
        }
    }
    // console.log(data);


    // get all elements with same start time///////////////////////////
    for (let i = 0; i < data.length; i++) {
        let start = data[i].start;
        let end = data[i].end;
        let text = data[i].text;
        let j = i + 1;
        while (j < data.length && data[j].start == start) {
            end = data[j].end;
            text = text + " " + data[j].text;
            j++;
        }
        let start_new = ""
        if (i == 0) {
            start_new = "0.0"
        }
        else {
            start_new = data[i - 1].end
        }
        newData.push({
            end: end,
            start: start_new,
            text: text,
            type: 0
        });
        i = j - 1;
    }

    ////////////////////////////////////////////////////////////////
    return newData;
}

export const converter = async (req, res) => {
    console.log("in converter ")
    const data = await req.file
    mm.parseBuffer(data.buffer, data.mimetype)
        .then(async metadata => {
            const channels = metadata.format.numberOfChannels
            const hertz = metadata.format.sampleRate
            const buffer = data.buffer
            const audioBytes = buffer.toString('base64');
            const big = metadata.format.duration > 60 ? true : false
            if (big == true) {
                console.log("HE")
                const ret = await speechToTextGreater60(audioBytes, channels, hertz);
                res.send(ret);
            }
            else if (big == false) {
                console.log("HO")
                const ret = await speechToText(audioBytes, channels, hertz);
                res.send(ret);
            }
        })
        .catch(err => console.error(err));
}
