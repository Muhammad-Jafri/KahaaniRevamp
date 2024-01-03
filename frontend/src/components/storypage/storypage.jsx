/* eslint-disable react/prop-types */

import { useState, useRef, useEffect } from 'react'
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import { GrBackTen } from "react-icons/gr"
import { GrForwardTen } from "react-icons/gr"
import Navbar from "../../common/navbar/Navbar"
import './storypage.css'
import 'tippy.js/dist/tippy.css'
import 'reactjs-popup/dist/index.css'
import "../../common/audioPlayer/audioPlayer.css"
// import { useLocation } from 'react-router-dom';


/*
Code taken from: https://www.codepunker.com/blog/sync-audio-with-text-using-javascript
*/

const StoryPage = () => {
    
    const [story, setStory] = useState(null);
    let audio, text, img, title;

    useEffect(() => {
        // Retrieve and deserialize data from localStorage
        const storedData = localStorage.getItem('Props');
        setStory(JSON.parse(storedData));

    }, []);



    
    const author = "Morle Minto";
    audio = story != null? story.audio:'https://firebasestorage.googleapis.com/v0/b/kahaani-55fc7.appspot.com/o/audio%2FChalakchiriya.wav?alt=media&token=75be835b-7aa2-4fc6-a050-0940a04298c6';
    text =story != null? JSON.parse(story.text): [{"end":"1.2","start":"0.0","text":"ایک چڑیا تھی","type":0},{"end":"2.2","start":"1.2","text":"اس کا نام جنسی","type":0},{"end":"3.0","start":"2.2","text":"تھا ایک دن","type":0},{"end":"4.7","start":"3.0","text":"کی بات ہے کہ چیچڑیاں","type":0},{"end":"5.0","start":"4.7","text":"گائے","type":0},{"end":"6.1","start":"5.0","text":"کے پاس بیٹھی تھی","type":0},{"end":"7.0","start":"6.1","text":"اور وہ دانے","type":0},{"end":"8.0","start":"7.0","text":"چکر کھا رہی","type":0},{"end":"10.9","start":"8.0","text":"تھی اور اس","type":0},{"end":"11.9","start":"10.9","text":"کی","type":0},{"end":"12.3","start":"11.9","text":"پرواہ","type":0},{"end":"13.0","start":"12.3","text":"نہ کی اور","type":0},{"end":"14.0","start":"13.0","text":"دوسری طرف سے","type":0},{"end":"15.1","start":"14.0","text":"ایک کتا یا چھریاں","type":0},{"end":"16.2","start":"15.1","text":"نے اس سے کہا کہ","type":0},{"end":"17.5","start":"16.2","text":"بھائی کہتے مجھے نکال","type":0},{"end":"18.2","start":"17.5","text":"کرتے نے کہا","type":0},{"end":"19.3","start":"18.2","text":"کہ میں اگر نکالوں","type":0},{"end":"20.0","start":"19.3","text":"گا تو میں تجھے","type":0},{"end":"21.0","start":"20.0","text":"کھا لوں گا چڑیا","type":0},{"end":"22.1","start":"21.0","text":"نے کھا","type":0},{"end":"23.0","start":"22.1","text":"لینا کتنا ہے","type":0},{"end":"24.0","start":"23.0","text":"کیا کو پھر سے","type":0},{"end":"25.1","start":"24.0","text":"باہر نکالا اور","type":0},{"end":"26.4","start":"25.1","text":"جولیا نے کہا مجھے","type":0},{"end":"27.3","start":"26.4","text":"دوبارہ کتاب","type":0},{"end":"28.1","start":"27.3","text":"شریعت کونسل","type":0},{"end":"29.0","start":"28.1","text":"پر لے گیا وہ","type":0},{"end":"30.4","start":"29.0","text":"چڑیا کو دھو کر اسے","type":0},{"end":"31.0","start":"30.4","text":"کھانے لگا","type":0},{"end":"32.3","start":"31.0","text":"چڑیا نے کہا مجھے","type":0},{"end":"33.1","start":"32.3","text":"سکھا تو لے کر","type":0},{"end":"36.3","start":"33.1","text":"کھا لینا دیر","type":0},{"end":"37.1","start":"36.3","text":"میں چڑیا کے","type":0},{"end":"38.0","start":"37.1","text":"پر سو گئے اور","type":0},{"end":"39.1","start":"38.0","text":"وہ پھر سے ورگی","type":0},{"end":"40.1","start":"39.1","text":"کتاب منہ دیکھتا","type":0},{"end":"40.4","start":"40.1","text":"رہ گیا","type":0}]
    img = story != null? story.image: "https://images.freeimages.com/images/large-previews/155/bridge-1559052.jpg?fmt=webp&w=350";
    title = story != null? story.title: "Pyaray bachay";


    


    
    
    
    /**
     * type 0 = regular string
     * type 1 = word with definition (English Urdu both)
     * type 2 = word with definiton and image
     * type 3 = word with definition and video
    */
   
   const firstScroll = useRef(null)
   // state
   const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState("00:00");
    const [currentTime, setCurrentTime] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(1.0);

    // references
    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation
    console.log(duration)
    useEffect(() => {
        // Update duration when audio metadata is loaded
        const handleLoadedMetadata = () => {
            const seconds = Math.floor(audioPlayer.current.duration);
            setDuration(seconds);
            progressBar.current.max = seconds;
        };

        audioPlayer.current.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            audioPlayer.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, []);


    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();

            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }
    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }
    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }
    const backTen = () => {
        progressBar.current.value = Number(progressBar.current.value - 10);
        changeRange();
    }
    const forwardTen = () => {
        const newTime = Number(progressBar.current.value) + 10;
        const maxValue = progressBar.current.max;
        const currentTime = newTime > maxValue ? maxValue : newTime;
        progressBar.current.value = currentTime;
        changeRange();
    }
    const handlePlaybackSpeed = () => {
        let speed = playbackSpeed === 1.0 ? 1.5 : playbackSpeed === 1.5 ? 2.0 : playbackSpeed === 2.0 ? 0.5 : playbackSpeed === 0.5 ? 1.0 : 1.0;
        audioPlayer.current.playbackRate = speed;
        setPlaybackSpeed(speed);

    }

    // // // // // // // // // // // // 
    const textJSON = JSON.stringify(text);

    const syncData = JSON.parse(textJSON);


    // State storing the background colors of each subtitle text
    const [bgColors, setBgColors] = useState(new Array(syncData.length).fill("transparent"));

    const handleTimeChange = () => {
        let newBgColors = [...bgColors];
        syncData.forEach(function (element, index) {
            if (audioPlayer.current.currentTime >= element.start && audioPlayer.current.currentTime <= element.end) {
                newBgColors[index] = "#D0DAF6";
            } else {
                newBgColors[index] = "transparent";
            }

            if (audioPlayer.current.currentTime >= 78 && audioPlayer.current.currentTime < 79) {
                console.log("scrolling 1")
                scrollDown(firstScroll)
            }
        });
        setBgColors(newBgColors);
    };


    const scrollDown = (ref) => {
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest',
        });
    }


    return (
        <div className="player">
            <Navbar/>

            <div className="player-sub-container">
                <div className="player-text-box">
                    <container id="subtitles" className="player-text">
                        {
                            syncData.map((data, i) => {
                                return (
                                    <span id={"c_" + i} style={{ background: bgColors[i] }} key={i} className="player-text" >
                                        {" " + data.text}
                                    </span>
                                )
                            })
                        }
                    </container>
                </div>
            </div>

            <div className="audio-player-container">
                <div className="audioPlayer">
                    <div className='sm-row'>
                        <audio ref={audioPlayer} src={audio} preload="metadata" onTimeUpdate={handleTimeChange}
                        ></audio>
                        {/*  */}
                        <button className="backward" onClick={backTen}><GrBackTen size={23.53} /></button>
                        <button onClick={togglePlayPause} className="playPause-button">
                            {isPlaying ? <FaPause /> : <FaPlay className="play-player-icon" />}
                        </button>
                        <button className="forward" onClick={forwardTen}> <GrForwardTen size={23.53} /></button>
                        {/*  */}
                        <button onClick={handlePlaybackSpeed} className="playbackSpeedButton-sm">
                            {playbackSpeed === 1.0 ? "1.0x" : playbackSpeed === 1.5 ? "1.5x" : playbackSpeed === 2.0 ? "2.0x" : playbackSpeed === 0.5 ? "0.5x" : "1.0x"}
                        </button>
                    </div>
                    <div className="play-player">
                        {/* current time */}
                        <div className="currentTime">{calculateTime(currentTime)}</div>
                        {/* progress bar */}
                        <div className="pbx7">
                            <input type="range" className="progressBar-f1" defaultValue="0" ref={progressBar} onChange={changeRange} />
                        </div>
                        {/* duration */}
                        <div className="duration">{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
                        {/* playback speed */}
                    </div>
                </div >
                < div className="audio-player-img-name-container">
                    <img className="audio-player-img" src={img} />
                    <div className="audio-player-name-container">
                        <h1 className="audio-player-name">{title}</h1>
                        <h1 className="audio-player-author">{author}</h1>
                    </div>
                </div>

            </div>
        </div >

    );
}

export default StoryPage;