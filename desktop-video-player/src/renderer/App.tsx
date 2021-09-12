import React, { useEffect, useState } from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

const css = `
  iframe {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
}`;

const VideoPlayer = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');

  useEffect(() => {
    async function fetchLiveStream() {
      const response = await fetch('http://localhost:3001/v1/liveStream');
      const parsedResponse = await response.json();
      setYoutubeUrl(parsedResponse.url);
    }

    fetchLiveStream();
  }, []);

  return (
    <div>
      <style>{css}</style>
      {youtubeUrl ? (
        <iframe
          width="420"
          height="315"
          src={`${youtubeUrl}?autoplay=1&rel=0`}
          title="Video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : null}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={VideoPlayer} />
      </Switch>
    </Router>
  );
}
