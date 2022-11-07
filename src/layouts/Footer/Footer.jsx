import { Text } from '../../components/atoms/Text/Text'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <Text variant={'p'} size={'1rem'} color='#fff'>
        &copy; 2022 - Todos los derechos reservados - UP Chiapas
      </Text>
    </div>
  )
}
