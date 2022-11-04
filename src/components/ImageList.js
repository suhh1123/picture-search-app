import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

function ImageList(props) {
  const images = props.images.map((image, index) => {
    return <ImageCard key={index} image={image} />;
  });

  return <div className="image-list">{images}</div>;
}

export default ImageList;
