import scss from './Button.module.scss';

const Button = ({ onClick }) => {
    return (
        <button className={scss.button} onClick={onClick}>
        Sort by name
        </button>
    );
}
    
export default Button;