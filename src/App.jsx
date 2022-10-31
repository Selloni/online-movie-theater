import './App.scss';
// import './scss/app.scss'
import HeadearLine from './components/Header/Header';
import Carts_films from './components/Carts_film/Carts_films';
import Categories from './components/Categories/Categories';
// import { faScarecrow } from '@fortawesome/react-fontawesome';
// import { faScarecrow } from 'fontawesome-svg-cor0e';

function App() {
  return (
    <body>
      <HeadearLine />
      <div class="conteiner">
        <h2 class="films">Популярно</h2>
        <Carts_films />
        <Categories />
        <h2 class="films">Фильмы</h2>
        <Carts_films />
        <h2 class="films">Сериалы</h2>
        <Carts_films />
        <h2 class="films">Мультфильмы</h2>
        <Carts_films />
        <h2 class="films">Аниме</h2>
        <Carts_films />
        <div> О нас </div>
        <div> Правообладателям </div>
      </div>
    </body>
  );
}

export default App;
