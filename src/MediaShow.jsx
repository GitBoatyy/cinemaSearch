import React from "react";

const MediaShow = ({ media }) => {
  const imdbId = "https://www.imdb.com/title/" + media.imdbID + "/";
  return (
    <div className="media">
      <div>
        <p>{media.Year}</p>
      </div>
      <div>
        <a href={imdbId} target="_blank">
          <img
            src={
              media.Poster !== "N/A"
                ? media.Poster
                : "https://via.placeholder.com/400"
            }
            alt={media.Title}
          />
        </a>
      </div>
      <div>
        <span>{media.Type}</span>
        <h3>{media.Title}</h3>
      </div>
    </div>
  );
};
export default MediaShow;
