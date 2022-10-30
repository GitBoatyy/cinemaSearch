import React from "react";

const MediaShow = ({ media }) => {
  return (
    <div className="media">
      <div>
        <p>{media.Year}</p>
      </div>
      <div>
        <img
          src={
            media.Poster !== "N/A"
              ? media.Poster
              : "https://via.placeholder.com/400"
          }
          alt={media.Title}
        />
      </div>
      <div>
        <span>{media.Type}</span>
        <h3>{media.Title}</h3>
      </div>
    </div>
  );
};
export default MediaShow;
