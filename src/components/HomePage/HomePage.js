import { useState, useEffect } from "react";
import { getLatestGame } from "../../services/api/data";
import LatestGame from "./LatestGame";

const HomePage = ({
  navigationChangeHandler,
}) => {

  const [games, setGames] = useState({});
  useEffect(() => {
    const allLatestGames = async () => {
      const data = await getLatestGame();
      setGames(data);
    }
    allLatestGames();

  }, [])
  const latestGames = (games) => {
    return games.length > 0
      ? games.map(x => <LatestGame key={x._id} game={x} navigationChangeHandler={navigationChangeHandler} />)
      : <p className="no-articles">No games yet</p>;
  }
  return (
    <section id="welcome-world">

      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="/images/four_slider_img01.png" alt="hero" />

      <div id="home-page">
        <h1>Latest Games</h1>
        {latestGames(games)}

      </div>
    </section>
  );
}

export default HomePage;