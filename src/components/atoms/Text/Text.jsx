import styles from './Text.module.css'

export const Text = ({children, variant, size, color}) => {
  switch (variant) {
    case 'h1':
      return <h1 className={styles} style={{fontSize: size, color}}>{children}</h1>
    case 'h2':
      return <h2 className={styles} style={{fontSize: size, color}}>{children}</h2>
    case 'h3':
      return <h3 className={styles} style={{fontSize: size, color}}>{children}</h3>
    case 'h4':
      return <h4 className={styles} style={{fontSize: size, color}}>{children}</h4>
    case 'h5':
      return <h5 className={styles} style={{fontSize: size, color}}>{children}</h5>
    case 'h6':
      return <h6 className={styles} style={{fontSize: size, color}}>{children}</h6>
    case 'p':
      return <p className={styles} style={{fontSize: size, color }}>{children}</p>
    case 'span':
      return <span className={styles} style={{fontSize: size, color}}>{children}</span>
    default:
      return <p className={styles} style={{fontSize: size, color }}>{children}</p>
  }
}
