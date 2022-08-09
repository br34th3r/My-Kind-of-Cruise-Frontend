import PropTypes from 'prop-types'

import styles from '../styles/components/Section.module.css'

function Section({ title, icon, children }) {
    return (
        <section className={styles.section}>
            <h2>{icon} {title}</h2>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.element,
}

export default Section;