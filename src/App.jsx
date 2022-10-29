import './App.scss';
// import './scss/app.scss'
import HeadearLine from './components/Header/Header';
import Carts_films from './components/Carts_film/Carts_films';
import Categories from './components/Categories/Categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
  const element = <FontAwesomeIcon icon={faCoffee} />;
  return (
    <body>
      <HeadearLine />
      {element}

      <FontAwesomeIcon icon={faCoffee} />

      <Carts_films />
      <Categories />
      <Carts_films />
      <div class="conteiner">
        <div> О нас </div>
        <div> Правообладателям </div>
      </div>
    </body>
  );
}

export default App;
