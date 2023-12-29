import { useState, useEffect } from 'react'
import axios from 'axios';
import './LibraryPage2.css'
import Navbar from '../../common/navbar/Navbar';
import SearchBar from '../../common/SearchBar/SearchBar';
import MyButton from '../../common/Button/MyButton'
// import { Link } from 'react-router-dom';

//import firebase db
import db from '../../firebase.js'









const LibraryPage3 = () => {



  

  const moral_images = [
    { picture: "https://images.freeimages.com/images/large-previews/155/bridge-1559052.jpg?fmt=webp&w=350", title:"Pyaray bachay", author: "Badhshah"},
    { picture: "https://images.unsplash.com/photo-1528785198459-ec50485704c7?ixlib=rb-0.3.5&s=3a2fc3039516555bbb2e9cd2967bd321&auto=format&fit=crop&w=1537&q=80",title:"Bachay man ke sachay", author: "Geo TV"},
    { picture: "https://media.istockphoto.com/id/1411960046/photo/young-asian-family-of-three-walking-hand-in-hand.jpg?s=1024x1024&w=is&k=20&c=e3sug4QAt2NCkl8iIon8Y_3qLEvj1AoizNR5D2aAdv0=",title:"Pyaray bachay", author: "Badhshah"},
    { picture: "https://images.unsplash.com/photo-1528785198459-ec50485704c7?ixlib=rb-0.3.5&s=3a2fc3039516555bbb2e9cd2967bd321&auto=format&fit=crop&w=1537&q=80",title:"Naani teri morni", author: "Nana"},
    { picture: "https://images.unsplash.com/photo-1525543907410-b2562b6796d6?ixlib=rb-0.3.5&s=9ff8e5e718a6a40cbd0e1471235912f4&auto=format&fit=crop&w=3452&q=80",title:"Laal Kabootar", author: "Ahmed Ali Akbar"},
    { picture: "https://images.freeimages.com/images/large-previews/add/golden-gate-1471075.jpg?fmt=webp&w=350",title:"Pyaray bachay", author: "Badhshah"},
    { picture: "https://images.unsplash.com/photo-1525543907410-b2562b6796d6?ixlib=rb-0.3.5&s=9ff8e5e718a6a40cbd0e1471235912f4&auto=format&fit=crop&w=3452&q=80",title:"Kabhi Khushi Kabhi Gham", author: "ShahRukh Khan"},
    { picture: "https://images.freeimages.com/images/large-previews/155/bridge-1559052.jpg?fmt=webp&w=350",title:"My name is Khan", author: "Badhshah"}
  ];
  const funny_images = [
    { picture: "https://images.freeimages.com/images/large-previews/155/bridge-1559052.jpg?fmt=webp&w=350", title:"Pyaray bachay", author: "Badhshah"},
    { picture: "https://images.unsplash.com/photo-1528785198459-ec50485704c7?ixlib=rb-0.3.5&s=3a2fc3039516555bbb2e9cd2967bd321&auto=format&fit=crop&w=1537&q=80",title:"Bachay man ke sachay", author: "Geo TV"},
    { picture: "https://media.istockphoto.com/id/1411960046/photo/young-asian-family-of-three-walking-hand-in-hand.jpg?s=1024x1024&w=is&k=20&c=e3sug4QAt2NCkl8iIon8Y_3qLEvj1AoizNR5D2aAdv0=",title:"Pyaray bachay", author: "Badhshah"},
    { picture: "https://images.unsplash.com/photo-1528785198459-ec50485704c7?ixlib=rb-0.3.5&s=3a2fc3039516555bbb2e9cd2967bd321&auto=format&fit=crop&w=1537&q=80",title:"Naani teri morni", author: "Nana"},
    { picture: "https://images.unsplash.com/photo-1525543907410-b2562b6796d6?ixlib=rb-0.3.5&s=9ff8e5e718a6a40cbd0e1471235912f4&auto=format&fit=crop&w=3452&q=80",title:"Laal Kabootar", author: "Ahmed Ali Akbar"},
    { picture: "https://images.freeimages.com/images/large-previews/add/golden-gate-1471075.jpg?fmt=webp&w=350",title:"Pyaray bachay", author: "Badhshah"},
    { picture: "https://images.unsplash.com/photo-1525543907410-b2562b6796d6?ixlib=rb-0.3.5&s=9ff8e5e718a6a40cbd0e1471235912f4&auto=format&fit=crop&w=3452&q=80",title:"Kabhi Khushi Kabhi Gham", author: "ShahRukh Khan"},
    { picture: "https://images.freeimages.com/images/large-previews/155/bridge-1559052.jpg?fmt=webp&w=350",title:"My name is Khan", author: "Badhshah"}
  ];

  const [library, setLibrary] = useState(null);

  useEffect(() => {
    axios.get("https://kahaani-backend.onrender.com/api/story/getStories").then(
      response => {
        console.log(response.data.dataItems);
        const dee = response.data.dataItems;
        setLibrary(dee)
        console.log("Library", library)
      }
    )
      .catch(err => {
        console.log(err)

      })

  }, [library]);

  const all_images = [moral_images,funny_images]
  const all_titles = [" Stories","Funny Stories"]


  const [showMoreStates, setShowMoreStates] = useState(all_images.map(() => false));
  const [showButton, setShowButton] = useState(all_images.map(() => true));

  const toggleShowMore = (index) => {
    setShowMoreStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      console.log("Library2", library)
      return newStates;
    }); 
  };





  return (
    <>
      <Navbar />
      <SearchBar />
      
      {library && Object.keys(library).map((genre, index) => {
        const data2 = library[genre];
        const data = data2.flatMap(story => [story, { ...story }]);
        console.log("Checkk", data)

        return(
          <div key={index} className="lib-page">
            <h1>{genre !== "undefined" ? genre : "Other"}</h1>

            <div className="lp2-image-container">
              {data.slice(0, showMoreStates[index] ? data.length : 4, data.length<5 ? setShowButton[index] = false: setShowButton[index] = true).map((story, index) => {
                  // console.log(story)
                  return (
                    <div key={index} className="wrapper ">
                      <div className={`column d-flex flex-column align-items-left edits`}>

                      {/* <Link
                        key={index}
                        to={{
                          pathname: '/story',
                          state: {
                            audio: story.audio,
                            text: story.text,
                            title: story.title,
                            img: story.image,
                          },
                        }}
                      > */}
                        <a href="\story" key={index} data={{audio: JSON.stringify(story.audio), text:JSON.stringify(story.audio)}}>
                        <div className="lp2-image-item">
                          <img src={story.image} alt="Card images cap" />
                          <p>{story.title}</p>
                        </div>
                        </a>
                        {/* </Link> */}
                      </div>
                    </div>
                  )
                
                })
                
                
              }

            </div>
          
              {showButton[index] && !showMoreStates[index] && <MyButton name="Show More" onClick={() => toggleShowMore(index)}/>}
              {showButton[index] && showMoreStates[index] && <MyButton name="Show Less" onClick={() => toggleShowMore(index)}/>}
        
          </div>
        )
      

      })
      }

      {/* ///////////// */}
      {all_images.map((images,index) => (
        <>

          <div className="lib-page">
          <h1>{all_titles[index]}</h1>

          <div className="lp2-image-container">

            {images.slice(0, showMoreStates[index] ? images.length : 4).map((image, index) => (
              <div key={index} className="lp2-image-item">
                <img src={image.picture} alt={`Image ${index + 1}`} />
                <p>{image.title}</p>
              </div>
            ))}
          </div>
          
          {!showMoreStates[index] && <MyButton name="Show More" onClick={() => toggleShowMore(index)}/>}
          {showMoreStates[index] && <MyButton name="Show Less" onClick={() => toggleShowMore(index)}/>}
          
          {/* {!showMoreStates[index] && <h2 onClick={() => toggleShowMore(index)}>SHOW MORE STORIES</h2>}
          {showMoreStates[index] && <h2 onClick={() => toggleShowMore(index)}>SHOW LESS</h2>}
           */}
          {/* <div className="show-more" onClick={() => toggleShowMore(index)}>
            {!showMoreStates[index] && <p>SHOW MORE STORIES</p>}
            {showMoreStates[index] && <p>SHOW LESS</p>}
          </div> */}
        </div>
      </>
      ))}
  
    </>
  )
}

export default LibraryPage3

