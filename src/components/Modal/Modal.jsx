import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { incrementModalCount, decrementModalCount } from '../../utils/modalState';
import './Modal.scss';

function Modal({
                 isOpen,
                 onClose,
                 children,
                 className = '',
                 ariaLabel = 'Диалоговое окно',
               }) {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);
  
  const [visible, setVisible] = useState(isOpen);
  const [closing, setClosing] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setClosing(false);
    } else if (visible) {
      setClosing(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setClosing(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen, visible]);
  
  useEffect(() => {
    if (!visible) return;
    
    previousFocusRef.current = document.activeElement;
    
    if (modalRef.current) {
      modalRef.current.focus();
    }
    
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      
      if (event.key === 'Tab') {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    incrementModalCount();
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      
      decrementModalCount();
      
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [visible, onClose]);
  
  if (!visible) return null;
  
  return createPortal(
    <div
      className={`modal__overlay ${closing ? 'modal__overlay--closing' : ''} ${className}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className={`modal ${closing ? 'modal--closing' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        tabIndex={-1}
      >
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Закрыть окно"
        />
        <div className="modal__content">{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;