import styles from './Button.module.css';

export const Button = ({
    children,
    variant = 'primary', // primary, secondary, chaos
    onClick,
    className = ''
}) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
