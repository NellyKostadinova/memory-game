import React, { useState } from 'react';
import '../App.css';

function ImageCard(props) {
  let [isPlayable, setisPlayable] = useState(true);

  let handleClick = () => {
    if (isPlayable) {
      props.clickHandler(true);
      setisPlayable(false);
    } else {
      props.clickHandler(false);
    }
  };

  return (
    <div className="ImageCard" onClick={handleClick}>
      <img src={props.url} alt={props.id} />
    </div>
  );
}

export default ImageCard;
