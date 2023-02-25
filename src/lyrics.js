import React, { useState } from 'react';

function Lyrics() {
  const [songName, setSongName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [lyrics, setLyrics] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'd157624229mshc0fb90d703a2bd5p179491jsnb9c7e8ba7959',
        'X-RapidAPI-Host': 'scrapesoft-music-lyrics.p.rapidapi.com'
      },
      body: `{"songName":"${songName}","artistName":"${artistName}"}`
    };
    const response = await fetch('https://scrapesoft-music-lyrics.p.rapidapi.com/api/lyrics?access_token=%7BaccessToken%7D', options);
    const data = await response.json();
    setLyrics(data.lyrics || 'Lyrics not found');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Find Music Lyrics</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="songNameInput">Song Name</label>
          <input type="text" className="form-control" id="songNameInput" value={songName} onChange={(e) => setSongName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="artistNameInput">Artist Name</label>
          <input type="text" className="form-control" id="artistNameInput" value={artistName} onChange={(e) => setArtistName(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Get Lyrics</button>
      </form>
      <div className="mt-5">
        <h2>Lyrics</h2>
        <p>{lyrics}</p>
      </div>
    </div>
  );
}

export default Lyrics;
