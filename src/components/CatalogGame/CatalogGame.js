import { useEffect, useState } from "react";
import { getAllGames } from "../../services/api/data";
import GamesCard from "./GameCard/GameCard";

const CatalogGame = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const data = getAllGames();
      data.then(res => {
        setGames(res);
        setLoading(false);
      });
    }, 1000);
  }, [])
  function allGames(games) {
    return games.length !== 0
      ? games.map(x => <GamesCard key={x._id} game={x} />)
      : <h3 className="no-articles">No articles yet</h3>
  }

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      { loading 
      ? <h1>Loading...</h1>
      : allGames(games)
      }
    </section>
  );
}

export default CatalogGame;