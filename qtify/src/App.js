import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import Section from './components/Section/Section';
import { fetchTopAlbums } from './api/api';
import { useEffect, useState } from 'react';

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const generateData = async () => {
    try {
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbumsData(data);
    }
    catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {
    generateData();
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
      </div>
    </div>
  );
}

export default App;
