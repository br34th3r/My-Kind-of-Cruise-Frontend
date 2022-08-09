import PropTypes from 'prop-types'
import Image from 'next/image'

import styles from '../styles/components/Hero.module.css'

function Hero({ src, children }) {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.backgroundImage}>
                <Image className={styles.background} src={src} alt="Hero Image" layout="intrinsic" objectFit="cover" objectPosition='center' />
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

Hero.propTypes = {
    src: PropTypes.object
}

export default Hero;