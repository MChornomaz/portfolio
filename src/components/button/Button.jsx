import './button.scss'

const Button = ({ children, type, onClick }) => {
    return (
        <button className='btn' type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
