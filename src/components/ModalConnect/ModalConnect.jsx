import { useState } from 'react';
import { useFormHandler } from '../../hooks/useFormHandler.js';
import ModalThanks from '../ModalThanks/ModalThanks.jsx';
import Modal from '../Modal/Modal.jsx';
import Button from '../Button/Button.jsx';
import FormInput from '../FormInput/FormInput.jsx';
import Agreement from '../Agreement/Agreement.jsx';

function ModalConnect({
                        isOpen,
                        onClose,
                        head,
                        formContext = '',
                        goalPrefix = '',
                      }) {
  const [isThanksOpen, setIsThanksOpen] = useState(false);
  const { handleSubmit } = useFormHandler({
    formType: 'callback',
    goalPrefix,
    onSuccess: () => {
      setIsThanksOpen(true);
      onClose();
    },
  });
  
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className="modal__connect"
        ariaLabel="Связаться с экспертом"
      >
        <h3 className="modal__connect-head">{head}</h3>
        
        <div className="modal__connect-actions">
          <Button
            to="tel:+78129204660"
            className="modal__connect-phone"
            ymGoal="Modal_Connect_Phone"
          >
            +7 812 920-46-60
          </Button>
          <div className="modal__connect-messengers">
            <Button
              variant="quaternary"
              icon="telegram"
              to="tg://resolve?domain=ChestnySeptik"
              ymGoal="Modal_Connect_Telegram"
            >
              Телеграм
            </Button>
            <Button
              variant="quaternary"
              icon="whatsapp"
              to="whatsapp://send?phone=79119204660"
              ymGoal="Modal_Connect_Whatsapp"
            >
              WhatsApp
            </Button>
          </div>
          
          <form
            className="modal__connect-form"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Скрытое поле с контекстом */}
            <input
              type="hidden"
              name="form_context"
              value={formContext}
            />
            
            <FormInput
              variant="dark"
              label="Имя"
              name="name"
              id="connect-modal-name"
            />
            <FormInput
              variant="dark"
              label="Телефон"
              name="phone"
              type="tel"
              id="connect-modal-phone"
              placeholder=" "
            />
            <FormInput
              label="Email"
              name="email"
              type="text"
              id="email"
              placeholder=" "
              tabIndex={-1}
              ariaHidden={true}
            />
            <div className="modal__connect-submit">
              <Agreement variant="dark" />
              <Button type="submit">Отправить</Button>
            </div>
          </form>
        </div>
      </Modal>
      
      <ModalThanks
        isOpen={isThanksOpen}
        onClose={() => setIsThanksOpen(false)}
      />
    </>
  );
}

export default ModalConnect;