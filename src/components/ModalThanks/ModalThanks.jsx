import Modal from '../Modal/Modal.jsx';

function ModalThanks({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="modal-thanks"
      ariaLabel="Спасибо за заявку"
    >
      <div className="modal__thanks-content">
        <h3 className="">Спасибо!</h3>
        <p>Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.</p>
      </div>
    </Modal>
  );
}

export default ModalThanks;