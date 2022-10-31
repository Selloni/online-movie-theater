import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function HeadearLine() {
  const find = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  return (
    <div class="background-line-top">
      <div class="header-line">
        <h3 class="navigation-panel-no-delite">FujeFilm</h3>
        <div>
          <a class="navigation-panel">Фильмы</a>
          <a class="navigation-panel">Сериалы</a>
          <a class="navigation-panel">Мультфильмы</a>
          <a class="navigation-panel">Аниме</a>
        </div>
        <a class="find"> {find} Поиск</a>
        <a class="button">Login</a>
      </div>
    </div>
  );
}

export default HeadearLine;
