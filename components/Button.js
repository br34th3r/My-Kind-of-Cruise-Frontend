import styles from '../styles/components/Button.module.css'
import PropTypes from 'prop-types';

function Button({ type, onClick, children, ...props }) {
    const buttonClass = () => {
        switch(type) {
            case 'secondary':
                return styles.secondaryButton
            default:
                return styles.primaryButton
        }
    }
    return <button onClick={onClick} className={buttonClass()}>{children}</button>
}

Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary']),
    onClick: PropTypes.func
};

Button.defaultProps = {
    type: 'primary',
    onClick: undefined
};

export default Button;