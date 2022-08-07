import React from "react";
import "./gallery.css";

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
// Note from the docs -> Warning: The arguments passed to require.context must be literals!
importAll(require.context("./img/", false, /\.(png|jpe?g|svg)$/));

const images = Object.entries(cache).map((module) => module[1]);

const GaleriaDinamica = () => {
  // example with styles just for clarity
  return (
    <>
      <div className="gallery">
        {images.map((image) => (
          <div className="pics" key={image} /* onClick={() => getImg(image)} */>
            {console.log(images)}
            <img style={{ width: "100%" }} src={image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default GaleriaDinamica;
