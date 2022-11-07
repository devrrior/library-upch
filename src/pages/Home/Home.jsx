import { Text } from '../../components/atoms/Text/Text';
import { Card } from '../../components/molecules/Card/Card';
import styles from './Home.module.css';
import data from '../../data/books.json';

export const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Text variant='h2' size='2em'>
          Más adquiridos
        </Text>
        <div>
          {data.bestSellers.map((book, index) => (
            <Card
              key={index}
              imageUrl={book.imageUrl}
              title={book.title}
              body={book.description}
            />
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <Text variant='h2' size='2em'>
          Nuevos lanzamientos
        </Text>
        <div>
          {data.newReleases.map((book, index) => (
            <Card
              key={index}
              imageUrl={book.imageUrl}
              title={book.title}
              body={book.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
