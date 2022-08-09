import PropTypes from 'prop-types'
import Image from 'next/image'

import styles from '../styles/components/Card.module.css'

function Card({ src, alt, children }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardImageContainer}>
                <Image src={src} alt={alt} layout="fill" />
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