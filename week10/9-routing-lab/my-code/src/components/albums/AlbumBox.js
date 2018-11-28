import React from 'react';
import { Link } from 'react-router-dom';

function Box({ album }) {
  // The destructuring above does the same as these two lines:
  // function Box(props) {
  // const album = props.album;
  return (
    <div className="box">
      <img src={album.coverPic} />
      <h2>Name: {album.name}</h2>
      <h3>Label: {album.label}</h3>
      {album.comments && album.comments.length}
    </div>
  );
}

export default Box;
