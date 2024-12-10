import Card from "./components/card";
import { useState, useEffect } from "react";
import Jokes from "./components/joke";

function App() {
  const [characters, setCharacters] = useState([]);
  const [joke, setJoke] = useState({});
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://thronesapi.com/api/v2/Characters");
      const json = await response.json();
      console.log(json);
      setCharacters(json);
    };
    getData();

    const getJoke = async () => {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const json = await response.json();
      console.log(json);
      setJoke(json);
    };
    getJoke();
  }, []);
  console.log(characters);
  return (
    <>
      <div>
        <div className="titleCharacters">
          <h1>Characters from Game of Thrones</h1>
        </div>
        <div className="characterContainer">
          {characters.map((character) => {
            if (character.id == 0 || character.id == 2 || character.id == 3)
              return (
                <div className="card">
                  <Card
                    Name={character.fullName}
                    Family={character.family}
                    Picture={character.imageUrl}
                  />
                </div>
              );

            return null;
          })}{" "}
        </div>
      </div>
      <footer className="bg">
        <div className="jokePlace">
          <h1 className="title"> Check your random joke!</h1>
          <div className="container">
            <Jokes setup={joke.setup} punchline={joke.punchline} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
