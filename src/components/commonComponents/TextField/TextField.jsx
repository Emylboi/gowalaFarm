import styles from "./textField.module.css";

const TextField = ({ title, optTitle, text, boldTitle, boldOptTitle, boldText, backgroundImage }) => {
    return (
        <div 
            className={styles.textField} 
            style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}
        >
            {/* Allows specific text fields to be bolded through props as needed. */}
            {title && <h3 style={{ fontWeight: boldTitle ? 'bold' : 'normal' }}>{title}</h3>}
            {optTitle && <h3 style={{ fontWeight: boldOptTitle ? 'bold' : 'normal' }}>{optTitle}</h3>}
            {text && <p style={{ fontWeight: boldText ? 'bold' : 'normal' }}>{text}</p>}
        </div>
    );
};

export default TextField;
