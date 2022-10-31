import './Genre.scss';
import avg from '../../img/genre.svg';
import map from '../../img/maps.svg';
import smile from '../../img/laughing.png';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faCameraRetro,
  faFaceGrinSquint,
  faGhost,
  faHandBackFist,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import { height } from '@mui/system';

function Categories() {
  return (
    <div class="conteiner_categor">
      <h2 class="films">Категории</h2>
      <div class="section_genre">
        <div class="genre">
          <FontAwesomeIcon icon={faHandBackFist} class="genre_img" />
          <div>БОЕВИК</div>
        </div>
        <div class="genre">
          <img class="genre_img" src={map} />
          <div>ПРИКЛЮЧЕНИЯ</div>
        </div>
        <div class="genre">
          <img class="genre_img" src={avg} />
          <div>АНИМАЦИЯ</div>
        </div>
        <div class="genre">
          {<FontAwesomeIcon icon={faBook} class="genre_img" />}
          <div>БИОГРАФИЯ</div>
        </div>
        <div class="genre">
          <img class="genre_img" src={smile} />
          <div>КОМЕДИЯ</div>
        </div>
        <div class="genre">
          {<FingerprintIcon style={{ width: '75%', height: '75%' }} />}
          <div>КРИМИНАЛ</div>
        </div>
        <div class="genre">
          <FontAwesomeIcon icon={faCameraRetro} className="genre_img" />
          <div className="genre">ДОКУМЕНТАЛКА</div>
        </div>
        <div class="genre">
          <img class="genre_img" src={avg} />
          <div>ДРАМА</div>
        </div>
        <div class="genre">
          <img class="genre_img" src={avg} />
          <div>СЕМЕЙНЫЙ</div>
        </div>
        <div class="genre">
          <img class="genre_img" src={avg} />
          <div>ФЭНТЕЗИ</div>
        </div>
        <div class="genre">
          <img class="genre_img" src={avg} />
          <div>ИСТОРИЯ</div>
        </div>
        {/* <div class="genre">
          <FontAwesomeIcon icon={faGhost} className="genre_img" />
          <div>УЖАСЫ</div>
        </div>
        <div class="genre">
          <img class="genre_img" src={avg} />
          <div>МЮЗИКЛ</div>
        </div>
        <div class="genre">
          <img class="genre_img" src={avg} />
          <div>МИСТИКА</div>
        </div>
        <div class="genre">
          <img class="genre_img" src={avg} />
          <div>РОМАНТИКА</div>
        </div>
        <div class="genre">
          <img class="genre_img" src={avg} />
          <div>НАУЧНАЯ ФАНТАСТИКА</div>
        </div>
        <div class="genre">
          <img class="genre_img" src={avg} />
          <div>СПОРТ</div>
        </div>
        <div class="genre">
          <img class="genre_img" src={avg} />
          <div>ТРИЛЛЕР</div>
        </div>
        <div class="genre">
          <img class="genre_img" src={avg} />
          <div>ВОЙНА</div>
        </div>
        <div class="genre">
          <img class="genre_img" src={avg} />
          <div>ВЕСТЕРН</div>
        </div> */}
      </div>
    </div>
  );
}
export default Categories;
