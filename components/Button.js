import styles from '../styles/components/Button.module.css'

function Button({ type, onClick, children }) {
    const buttonClass = () => {
        switch(type) {
            default:
                return styles.primaryButton
        }
    }
    return <button onClick={onClick} className={buttonClass()}>{children}</button>
}

export default Button;