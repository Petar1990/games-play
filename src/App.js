import CreateGame from "./components/CreateGame/CreateGame";
import DetailsGame from "./components/DetailsGame/DetailsGame";
import LoginPage from "./components/LoginPage/LoginPage";
import NavPage from "./components/NavPage/NavPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import WelcomeWorld from "./components/HomePage/HomePage";
import CatalogGame from "./components/CatalogGame/CatalogGame";

function App() {
  return (
    <div id="box">
      <NavPage />

      <main id="main-content">
        <WelcomeWorld />
      </main>

      <LoginPage />

      <RegisterPage />

      <CreateGame />

      <DetailsGame />      

      <CatalogGame />
    </div>



  );
}

export default App;
