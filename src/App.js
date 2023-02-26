import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [artworkList, setArtworkList] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}`
      );
      const data = await response.json();
      const objectIDs = data.objectIDs.slice(0, 10);
      const artworkData = await Promise.all(
        objectIDs.map(async (id) => {
          const response = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          );
          const data = await response.json();
          return data;
        })
      );
      setArtworkList(artworkData);
      setSearchTerm("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <h1>Metropolitan Museum of Art API Example</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="searchInput">Search for artwork:</label>
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="artwork-list">
        {artworkList.map((artwork) => (
          <div key={artwork.objectID} className="artwork-card">
            <img
              src={artwork.primaryImageSmall}
              alt={artwork.title}
              className="artwork-image"
            />
            <h2>{artwork.title}</h2>
            <p>{artwork.artistDisplayName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
