import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import Section from './components/Section/Section';
import { fetchTopAlbums, fetchNewAlbums } from './api/api';
import { useEffect, useState } from 'react';

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setnewAlbumsData] = useState([]);
  const generateTopAlbumsData = async () => {
    try {
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbumsData(data);
    }
    catch (err) {
      console.log(err);
    }

  }
  const generateNewAlbumsData = async () => {
    try {
      const data = await fetchNewAlbums();
      console.log("newAlbumsData", data);
      setnewAlbumsData(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    generateTopAlbumsData();
    generateNewAlbumsData();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Hero />
      {/* {
        topAlbumsData.map((item) => {
          return (
            <Card key={item.id} data={item} type="album" />
          )
        })
      } */}
      <div>
        <Section data={topAlbumsData} title="Top Albums" />
        <Section data={newAlbumsData} title={"New Albums"} />
      </div>
    </div>
  );
}

export default App;
