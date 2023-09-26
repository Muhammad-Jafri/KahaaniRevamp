import React, { useState } from 'react';
import Navbar from '../../common/navbar/Navbar';
import SearchBar from '../../common/SearchBar/SearchBar';
import './librarypage.css';
import {IoArrowRedoSharp, IoArrowUndoSharp} from 'react-icons/io5';
import MyButton from '../../common/Button/MyButton';



const Librarypage = () => {
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

 
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const moveRight = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <Navbar />
      <SearchBar />
      <div className="container">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? 'left-container' : index === 1 ? 'center-container' : 'right-container'
            }`}
            style={{
              backgroundImage: `url('${image.picture}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            {index === 0 && (
              <div className="my-button-container">
                <MyButton name="Moral Stories" />
              </div>
            )}
          </div>
        ))}
      </div>


      <div className="arrow-box">
        {currentIndex === 0 ? (
          <IoArrowUndoSharp className="arrow-left end" />
        ) : (
          <IoArrowUndoSharp className="arrow-left" onClick={moveLeft} />
        )}
        <div className="arrow-text">
          <h3>{images[currentIndex+1].title}</h3>
          <p>{images[currentIndex+1].author}</p>
        </div>

        {currentIndex + 3 === images.length ? (
          <IoArrowRedoSharp className="arrow-right end" />
        ) : (
          <IoArrowRedoSharp className="arrow-right" onClick={moveRight} />
        )}
      </div>
    </>
  );
};

export default Librarypage;