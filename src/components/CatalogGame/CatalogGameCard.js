const CatalogGameCard = ({
    game,
    navigationChangeHandler
}) => {
    const onDetailsClick = (e) =>{
        e.preventDefault();
        navigationChangeHandler(`/details/${game._id}`)
    }
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={game.imageUrl} />
                <h6>{game.category}</h6>
                <h2>{game.title}</h2>
                <a onClick={onDetailsClick} href={`/details/${game._id}`} className="details-button">Details</a>
            </div>
        </div>
    );
}

export default CatalogGameCard;