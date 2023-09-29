import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import Section from './components/Section/Section';
import TabSection from './components/TabSection/TabSection';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchTabCategories } from './api/api';
import { useEffect, useState } from 'react';

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setnewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const generateTopAlbumsData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumsData(data);
    }
    catch (err) {
      console.log(err);
    }

  }
  const generateNewAlbumsData = async () => {
    try {
      const data = await fetchNewAlbums();
      setnewAlbumsData(data);
    } catch (err) {
      console.log(err);
    }
  }
  const generateSongsData = async () => {
    try {
      const data = await fetchSongs();
      console.log(data, "songs Data in app.js");
      setSongsData(data);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    generateTopAlbumsData();
    generateNewAlbumsData();
    generateSongsData();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div>
        <Section type="album" data={topAlbumsData} title="Top Albums" />
        <Section type="album" data={newAlbumsData} title="New Albums" />
        <TabSection type="songs" songsData={songsData} title="Songs" />
      </div>
    </div>
  );
}

export default App;
