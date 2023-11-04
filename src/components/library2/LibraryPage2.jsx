import { useState } from 'react'
import './LibraryPage2.css'
import Navbar from '../../common/navbar/Navbar';
import SearchBar from '../../common/SearchBar/SearchBar';
import MyButton from '../../common/Button/MyButton'

const LibraryPage2 = () => {
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

  const all_images = [moral_images,funny_images]
  const all_titles = ["MORAL STORIES","FUNNY STORIES"]


  const [showMoreStates, setShowMoreStates] = useState(all_images.map(() => false));

  const toggleShowMore = (index) => {
    setShowMoreStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };



  return (
    <>
      <Navbar />
      <SearchBar />
      
      {all_images.map((images,index) => (
        <>
          <div className="lib-page">
          <h1>{all_titles[index]}</h1>

          <div className="lp2-image-container"
          // style={{ height: showMoreStates[index] ? 'auto' : '250px' }}
          >

            {images.slice(0, showMoreStates[index] ? images.length : 4).map((image, index) => (
              <div key={index} className="lp2-image-item">
                <a href="/story"><img src={image.picture} alt={`Image ${index + 1}`} /></a>
                <p>{image.title}</p>
              </div>
            ))}
          </div>
          
          {!showMoreStates[index] && <MyButton name="SHOW MORE STORIES" onClick={() => toggleShowMore(index)}/>}
          {showMoreStates[index] && <MyButton name="SHOW LESS" onClick={() => toggleShowMore(index)}/>}
          
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

export default LibraryPage2
