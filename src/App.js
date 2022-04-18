import NavPage from "./components/NavPage/NavPage";
import HomePage from "./components/HomePage/HomePage";
import CatalogGame from "./components/CatalogGame/CatalogGame";
import LoginPage from "./components/LoginPage/LoginPage";
import { useState } from "react";
function App() {
  const router = {
    '/home': <HomePage />,
    '/allGames': <CatalogGame />,
    '/login': <LoginPage />
  }
  let [page, setPage] = useState('/home')
  const navigationChangeHandler = (path) => {
    setPage(path);
  }
  return (
    <div id="box">
      <NavPage navigationChangeHandler={navigationChangeHandler}/>

      <main id="main-content">
        {router[page] || <p> No Page </p>}
      </main>


    </div>



  );
}

export default App;
