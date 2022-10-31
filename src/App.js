import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MediaShow from "./MediaShow";

const API_URL = "https://www.omdbapi.com?apikey=1f544171";

const App = () => {
  const [media, setMedia] = useState([]);
  const [search, setSearch] = useState("");
  const searchForMedia = async (media) => {
    const response = await fetch(`${API_URL}&s=${media}`);
    const mediaData = await response.json();
    console.log(mediaData);
    setMedia(mediaData.Search);
  };

  useEffect(() => {
    searchForMedia("");
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>MediaSearch</h1>
        <div className="search">
          <form onSubmit={(e) => e.preventDefault() & searchForMedia(search)}>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onSubmit={() => searchForMedia(search)}
            />
          </form>
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchForMedia(search)}
          />
        </div>
      </div>
      {media?.length > 0 ? (
        <div className="mediaContainer">
          {media.map((media) => (
            <MediaShow media={media} />
          ))}
        </div>
      ) : (
        <div className="nomedia">
          <h2>None Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
