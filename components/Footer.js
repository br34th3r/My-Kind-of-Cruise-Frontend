import PartnerImage from "./PartnerImage";

import styles from '../styles/components/Footer.module.css';

import ttamoney from '../public/tta_money_white.png'
import tta from '../public/tta_white.png'
import worldpay from '../public/worldpay_white.png'
import capita from '../public/capita_white.png'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.leftFooter}>
            <div className={styles.footerSection}>
                <h3>Contact Us</h3>
                <hr className={styles.footerTitleDivider} />
                <ul>
                    <li className={styles.footerItem}><a href="mailto:info@mykindofcruise.com?subject=Contact%20Us">info@mykindofcruise.com</a></li>
                </ul>
            </div>
            <div className={styles.footerSection}>
                <h3>Social</h3>
                <hr className={styles.footerTitleDivider} />
                <ul>
                    <li className={styles.footerItem}><a href="https://tiktok.com/@mykindofcruise">TikTok</a></li>
                    <li className={styles.footerItem}><a href="https://instagram.com/mykindofcruise">Instagram</a></li>
                    <li className={styles.footerItem}><a href="https://twitter.com/mykindofcruise">Twitter</a></li>
                    <li className={styles.footerItem}><a href="https://facebook.com/mykindofcruise">Facebook</a></li>
                    <li className={styles.footerItem}><a href="https://www.linkedin.com/company/my-kind">LinkedIn</a></li>
                </ul>
            </div>
            <div className={styles.footerSection}>
                <h3>Useful Info</h3>
                <hr className={styles.footerTitleDivider} />
                <ul>
                    <li className={styles.footerItem}><a href="https://www.mykindofcruise.com/privacypolicy">Privacy Policy</a></li>
                    <li className={styles.footerItem}><a href="https://www.mykindofcruise.com/bookingterms">Booking Terms</a></li>
                    <li className={styles.footerItem}><a href="https://www.mykindofcruise.com/cookiepolicy">Cookie Policy</a></li>
                </ul>
            </div>
            </div>
            <div className={styles.rightFooter}>
                <section className={styles.footerSection}>
                    <h3>Our Partners</h3>
                    <hr className={styles.footerTitleDivider} />
                    <div className={styles.partnerImagesContainer}>
                        <PartnerImage className={styles.partnerImage} src={ttamoney} alt="TTA Money" />
                        <PartnerImage className={styles.partnerImage} src={tta} alt="TTA" />
                        <PartnerImage className={styles.partnerImage} src={worldpay} alt="Worldpay" />
                        <PartnerImage className={styles.partnerImage} src={capita} alt="Capita" />
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer;