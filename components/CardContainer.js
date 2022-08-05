import styles from '../styles/components/CardContainer.module.css'

function CardContainer({ children }) {
    return (
        <div className={styles.cardContainer}>
            {children}
        </div>
    )
}

export default CardContainer;