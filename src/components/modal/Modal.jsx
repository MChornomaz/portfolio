import Button from '../button/Button'
import './modal.scss'

const Modal = ({close}) => {
  return (
    <div className='modal'>
        <div className="wrapper">
            <h3>Message was sent successfully!</h3>
            <p>I will reply you as soon as possible!</p>
            <Button type='button' onClick={close}>Great!</Button>
        </div>
      
    </div>
  )
}

export default Modal
