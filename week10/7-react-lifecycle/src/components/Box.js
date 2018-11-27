import React from 'react';

function Box({ album }) {
  // The destructuring above does the same as these two lines:
  // function Box(props) {
  // const album = props.album;
  return (
    <div>
      <p>Name: {album.name}</p>
      <p>Label: {album.label}</p>
      {album.comments && album.comments.length}
    </div>
  );
}

export default Box;
