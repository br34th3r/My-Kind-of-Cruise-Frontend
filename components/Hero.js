import Image from 'next/image'

import styles from '../styles/components/Hero.module.css'

function Hero({ src, children }) {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.backgroundImage}>
                <Image src={src} alt="Hero Image" />
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default Hero;