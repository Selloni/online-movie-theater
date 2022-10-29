import './style.scss';
import avg from '../../img/genre.svg';

function Categories() {
  return (
    <div class="conteiner">
      <h2 class="films">Категории</h2>
      <div class="section_genre">
        <div class="genre">
          <img class="genre" src={avg} />
          <dev>КОМЕДИЯ</dev>
        </div>
        <div class="genre">
          <img class="genre" src={avg} />
          <dev>КОМЕДИЯ</dev>
        </div>
        <div class="genre">
          <img class="genre" src={avg} />
          <dev>КОМЕДИЯ</dev>
        </div>
        <div class="genre">
          <img class="genre" src={avg} />
          <dev>КОМЕДИЯ</dev>
        </div>
        <div class="genre">
          <img class="genre" src={avg} />
          <dev>КОМЕДИЯ</dev>
        </div>
        <div class="genre">
          <img class="genre" src={avg} />
          <dev>КОМЕДИЯ</dev>
        </div>
        <div class="genre">
          <img class="genre" src={avg} />
          <dev>КОМЕДИЯ</dev>
        </div>
        <div class="genre">
          <img class="genre" src={avg} />
          <dev>КОМЕДИЯ</dev>
        </div>
      </div>
    </div>
  );
}
export default Categories;
