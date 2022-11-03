import './Header.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function HeadearLine() {
  const find = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  // для отслеживания клика
  const [activeIndex, setIndex] = useState(5);
  const onClickIndex = (index) => {
    setIndex(index);
  };
  //достаю из массива перменые с каждым обращением через map
  const val_genre = ['Фильмы', 'Сериалы', 'Мульфильмы', 'Аниме'];
  return (
    <div class="background-line-top">
      <div class="header-line">
        <h3 onClick={() => onClickIndex(5)} class="navigation-panel-no-delite">
          FujeFilm
        </h3>
        <div className="burger"></div>
        <div>
          {val_genre.map((value, i) => (
            <a
              key={i} //  для рендеринга при работе с map
              onClick={() => onClickIndex(i)}
              class={activeIndex === i ? 'navigation-panel-activ' : 'navigation-panel'}>
              {value}
            </a>
          ))}
        </div>

        <a onClick={() => onClickIndex(5)} class="find">
          {find} Поиск
        </a>
        <a onClick={() => onClickIndex(5)} class="button">
          Login
        </a>
      </div>
    </div>
  );
}

export default HeadearLine;
