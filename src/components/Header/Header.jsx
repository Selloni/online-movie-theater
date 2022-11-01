import './Header.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function HeadearLine() {
  const find = <FontAwesomeIcon icon={faMagnifyingGlass} />;

  const [activeIndex, setIndex] = useState(0);
  const onClickIndex = (index) => {
    setIndex(index);
  };
  return (
    <div class="background-line-top">
      <div class="header-line">
        <h3 onClick={() => onClickIndex(0)} class="navigation-panel-no-delite">
          FujeFilm
        </h3>
        <div>
          <a
            onClick={() => onClickIndex(1)}
            class={activeIndex == 1 ? 'navigation-panel-activ' : 'navigation-panel'}>
            Фильмы
          </a>
          <a
            onClick={() => onClickIndex(2)}
            class={activeIndex == 2 ? 'navigation-panel-activ' : 'navigation-panel'}>
            Сериалы
          </a>
          <a
            onClick={() => onClickIndex(3)}
            class={activeIndex == 3 ? 'navigation-panel-activ' : 'navigation-panel'}>
            Мультфильмы
          </a>
          <a
            onClick={() => onClickIndex(4)}
            class={activeIndex == 4 ? 'navigation-panel-activ' : 'navigation-panel'}>
            Аниме
          </a>
        </div>
        <a onClick={() => onClickIndex(0)} class="find">
          {' '}
          {find} Поиск
        </a>
        <a onClick={() => onClickIndex(0)} class="button">
          Login
        </a>
      </div>
    </div>
  );
}

export default HeadearLine;
