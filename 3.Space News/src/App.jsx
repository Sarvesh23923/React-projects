import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setNewsList(data.results);
    })
  }, []);

  return(
    <div className="app">
      <div className="title">
        <h1>Space News</h1>
      </div>

      <div className="news-container">
        {newsList.map((val, key) => (
          <div key={key} className="article" onClick={() => {window.location.href = val.url}}>
            <h3>{val.title}</h3>
            <div className="img-container">
              <img src={val.image_url} alt="" />
            </div>
            <h4>{val.summary}</h4>
            <p>{val.published_at}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;