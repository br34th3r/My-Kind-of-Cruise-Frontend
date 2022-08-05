import styles from '../styles/components/Section.module.css'

function Section({ title, icon, children }) {
    return (
        <section className={styles.section}>
            <h2>{icon} {title}</h2>
            {children}
        </section>
    )
}

export default Section;