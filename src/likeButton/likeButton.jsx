import React, { useState, useEffect } from "react";
import './styles.css';
import cn from "classnames";


function clicked(likes) {
  likes = likes + 1;
}

const LikeButton = () => {
  const [likes, setLikes] = useState(100);
  const [liked, setLiked] = useState(false);
  const [dogClicked, setDogClicked] = useState(false);
  const [dog, setDog] = useState('');
  const [number, setNumber] = useState();

  const url = 'https://dog.ceo/api/breeds/image/random';


  useEffect(() => {
    // async
    fetch(url)
      .then(response => response.json())
      .then(json => setDog(json.message))
      .then(setDogClicked(false))
      .then(setNumber(getRandomInt(100)))
  }, [dogClicked]);

  function getRandomInt(max) {
    // change this to result in a maodal popping up
    return Math.floor(Math.random() * max);
  };

  const date = JSON.stringify(new Date());

  const handleClick = () => {
    setLiked(!liked);
    liked ? setLikes(likes - 1) : setLikes(likes + 1);
  };

  const getRandomDog = () => {
    setDogClicked(true);
  };

  return(
    <>
      <div>
        {
          number %2 === 0 &&
          <h1>{date}</h1>
        }
      </div>
      <button
        onClick={() => handleClick()}
        className={cn('like-button', { liked })}
      >
        Like | <span className="likes-counter">{likes}</span>
      </button>

      <img src={dog} alt="Italian Trulli" height="600"></img>
      <button onClick={() => getRandomDog()}>Get a Dog!</button>
    </>

  );

};

export default LikeButton;
