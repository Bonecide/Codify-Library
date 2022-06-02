import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './ModalWindow.scss';

function Modal({ close, children }) {
    
const CloseStyle = {
    position: 'absolute',
    fontSize: 15,
    color: 'var(--light-brown)',
    right: '20%',
    top: '17%',
    cursor: 'pointer',
  };
  return (
    <div className='modal' onClick={close}>
      <div className='modalContent' onClick={(e) => e.stopPropagation()}>
      <CloseIcon className='close_icon' onClick={close} />
        {children}
      </div>
    </div>
  );
}
export default Modal;