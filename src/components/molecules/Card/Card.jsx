import { Text } from '../../atoms/Text/Text'
import styles from './Card.module.css'

export const Card = ({ imageUrl, title, body}) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="title" width="150px" height="200px" />
      <br />
      <Text variant={'h3'} size={'1.2rem'}>{title.slice(0, 14)}...</Text>
      <Text variant={'p'} size={'.9rem'}>
        {body.slice(0, 100)}...
      </Text>
    </div>
  )
}
