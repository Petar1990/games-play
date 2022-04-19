const NavPage = ({
    navigationChangeHandler,
}) => {
    const onClickHeader=(event) => {
        event.preventDefault();
        if(event.target.tagName === "A") {
            let url = new URL(event.target.href);
            console.log(url.pathname);
            navigationChangeHandler(url.pathname)
        }
    }

    return (
        <header onClick={onClickHeader}>
            <h1><a className='home' href="/home">GamesPlay</a></h1>
            <nav>
                <a href="/allGames">All games</a>
                <div id="user">
                    <a href="/createGame">Create Game</a>
                    <a href="/logout">Logout</a>
                </div>
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </header>
    );
}

export default NavPage;