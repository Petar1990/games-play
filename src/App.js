import NavPage from "./components/NavPage/NavPage";
import HomePage from "./components/HomePage/HomePage";
import CatalogGame from "./components/CatalogGame/CatalogGame";
import LoginPage from "./components/LoginPage/LoginPage";
import { useState } from "react";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import CreateGame from "./components/CreateGame/CreateGame";
import DetailsGame from "./components/DetailsGame/DetailsGame";

function App() {

  let [page, setPage] = useState('/home')
  const navigationChangeHandler = (path) => {
    console.log(path);
    setPage(path);
  }

  const router = (path) => {
    let pathNames = path.split('/');
    let rootPath = pathNames[1];
    let argument = pathNames[2];

    const routes = {
      'home': <HomePage navigationChangeHandler={navigationChangeHandler}/>,
      'allGames': <CatalogGame navigationChangeHandler={navigationChangeHandler} />,
      'login': <LoginPage />,
      'register': <RegisterPage />,
      'createGame': <CreateGame />,
      'details': <DetailsGame id={argument}/>
    }

    return routes[rootPath]
  }
  return (
    <div id="box">
      <NavPage navigationChangeHandler={navigationChangeHandler} />

      <main id="main-content">
        {router(page) || <h1> No Page </h1>}
      </main>


    </div>



  );
}

export default App;
