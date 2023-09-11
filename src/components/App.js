import React, { useEffect, useState } from "react";

const URL = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [dog, setDog] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function getRandomDog(url) {
    const res = await fetch(url);
    const data = await res.json();
    setLoaded(true);
    setDog(data.message);
  }

  useEffect(() => {
    getRandomDog(URL);
  }, []);
  return (
    <main>
      {!loaded && <p>Loading...</p>}
      {loaded && <img src={dog} alt="A Random Dog" />}
    </main>
  );
}

export default App;
