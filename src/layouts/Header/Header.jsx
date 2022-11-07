import { SearchIcon } from '../../components/atoms/SearchIcon/SearchIcon';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.container}>

      <div className={styles.leftContainer}>
        <div className={styles.leftContainer__logo}>
          <img
            src='https://www.upchiapas.edu.mx/images/logo_upw1.png'
            alt='upchiapas-logo'
          />
        </div>

        <nav className={styles.leftContainer__linkMenu}>
          <ul>
            <li><a href="#">Libros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Nosotros</a></li>
          </ul>
        </nav>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.rightContainer__searchBar}>
          <SearchIcon size={'18px'} />
          <input type='text' placeholder='Buscar' />
        </div>
      </div>
    </header>
  );
};
