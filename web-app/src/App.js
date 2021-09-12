import { useState, useCallback } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [startTime, setStartTime] = useState("");

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      fetch("http://localhost:3001/v1/liveStream", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, url, startTime })
      }).then(() => {
        setTitle("");
        setUrl("");
        setStartTime("");
      });
    },
    [title, url, startTime]
  );

  return (
    <form onSubmit={handleSubmit}>
      <p>Title</p>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <p>YouTube url</p>
      <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
      <p>Start time</p>
      <input
        type="datetime-local"
        value={startTime}
        onChange={e => setStartTime(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default App;
