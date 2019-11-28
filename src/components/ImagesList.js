import React from 'react';
import ImageCard from './ImageCard';
import '../App.css';

function ImagesList(props) {
  return (
    <div className="ImagesList">
      {props.images.map((img) => (
        <ImageCard key={img.id} url={img.url} id={img.id} clickHandler={props.cardClickHandler} />
      ))}
    </div>
  );
}

export default ImagesList;
