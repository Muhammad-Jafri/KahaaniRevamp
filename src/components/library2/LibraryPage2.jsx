import React, { useState } from 'react'
import './LibraryPage2.css'
import Navbar from '../../common/navbar/Navbar';
import SearchBar from '../../common/SearchBar/SearchBar';

const LibraryPage2 = () => {
  const images = [
    { picture: "https://images.freeimages.com/images/large-previews/155/bridge-1559052.jpg?fmt=webp&w=350", title:"Pyaray bachay", author: "Badhshah"},
    { picture: "https://images.unsplash.com/photo-1528785198459-ec50485704c7?ixlib=rb-0.3.5&s=3a2fc3039516555bbb2e9cd2967bd321&auto=format&fit=crop&w=1537&q=80",title:"Bachay man ke sachay", author: "Geo TV"},
    { picture: "https://media.istockphoto.com/id/1411960046/photo/young-asian-family-of-three-walking-hand-in-hand.jpg?s=1024x1024&w=is&k=20&c=e3sug4QAt2NCkl8iIon8Y_3qLEvj1AoizNR5D2aAdv0=",title:"Pyaray bachay", author: "Badhshah"},
    { picture: "https://images.unsplash.com/photo-1528785198459-ec50485704c7?ixlib=rb-0.3.5&s=3a2fc3039516555bbb2e9cd2967bd321&auto=format&fit=crop&w=1537&q=80",title:"Naani teri morni", author: "Nana"},
    { picture: "https://images.unsplash.com/photo-1525543907410-b2562b6796d6?ixlib=rb-0.3.5&s=9ff8e5e718a6a40cbd0e1471235912f4&auto=format&fit=crop&w=3452&q=80",title:"Laal Kabootar", author: "Ahmed Ali Akbar"},
    { picture: "https://images.freeimages.com/images/large-previews/add/golden-gate-1471075.jpg?fmt=webp&w=350",title:"Pyaray bachay", author: "Badhshah"},
    { picture: "https://images.unsplash.com/photo-1525543907410-b2562b6796d6?ixlib=rb-0.3.5&s=9ff8e5e718a6a40cbd0e1471235912f4&auto=format&fit=crop&w=3452&q=80",title:"Kabhi Khushi Kabhi Gham", author: "ShahRukh Khan"},
    { picture: "https://images.freeimages.com/images/large-previews/155/bridge-1559052.jpg?fmt=webp&w=350",title:"My name is Khan", author: "Badhshah"}
  ];



  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };



  return (
    <>
      <Navbar />
      <SearchBar />
      

      <div className="lp2-image-container">
        {images.slice(0, showMore ? images.length : 4).map((image, index) => (
          <div key={index} className="lp2-image-item">
            <img src={image.picture} alt={`Image ${index + 1}`} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
      <div className="show-more" onClick={toggleShowMore}>
        {!showMore && <p>SHOW MORE STORIES</p>}
        {showMore && <p>SHOW LESS</p>}
      </div>
    
  

      
    </>
  )
}

export default LibraryPage2
