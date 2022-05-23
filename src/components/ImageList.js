import React from "react";

function ImageList(props) {
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.src.medium} alt={image.alt} />;
  });

  return <div>{images}</div>;
}

export default ImageList;
