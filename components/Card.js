import PropTypes from 'prop-types'
import Image from 'next/image'

import styles from '../styles/components/Card.module.css'

function Card({ src, alt, children }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardImageContainer}>
                <img src={src} alt={alt} />
            </div>
            <div className={styles.cardContent}>
                {children}
            </div>
        </div>
    )
}

Card.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export default Card;