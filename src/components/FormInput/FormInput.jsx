import './FormInput.scss';
import { useEffect, useRef, useState } from 'react';

function FormInput({
                     label,
                     name,
                     type = 'text',
                     id,
                     placeholder = '',
                     tabIndex,
                     ariaHidden,
                     className = '',
                     variant = '',
                     error: externalError,
                     ...rest
                   }) {
  const fieldRef = useRef(null);
  const inputRef = useRef(null);
  const [phoneError, setPhoneError] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const isPhone = type === 'tel';
  
  // Функция форматирования телефона
  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    let formatted = '+7';
    if (digits.length > 1) formatted += ` (${digits.slice(1, 4)}`;
    if (digits.length >= 4) formatted += `) ${digits.slice(4, 7)}`;
    if (digits.length >= 7) formatted += `-${digits.slice(7, 9)}`;
    if (digits.length >= 9) formatted += `-${digits.slice(9, 11)}`;
    return formatted;
  };
  
  // Обработчик ввода для телефона
  const handlePhoneInput = (e) => {
    const input = e.target;
    input.value = formatPhone(input.value);
    setPhoneError(false);
    setHasValue(input.value.trim().length > 0);
  };
  
  // Обработчик клавиш для телефона (удаление символов маски)
  const handlePhoneKeyDown = (e) => {
    const input = e.target;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const currentValue = input.value;
    
    if (e.key === 'Backspace' || e.key === 'Delete') {
      if (start !== end) return;
      
      let deleteIndex;
      if (e.key === 'Backspace') {
        deleteIndex = start - 1;
        if (deleteIndex < 0) {
          e.preventDefault();
          return;
        }
      } else {
        deleteIndex = start;
        if (deleteIndex >= currentValue.length) {
          e.preventDefault();
          return;
        }
      }
      
      const charToDelete = currentValue[deleteIndex];
      if (/\d|\+/.test(charToDelete)) return;
      
      e.preventDefault();
      let digitPos = -1;
      if (e.key === 'Backspace') {
        for (let i = deleteIndex - 1; i >= 0; i--) {
          if (/\d/.test(currentValue[i]) || currentValue[i] === '+') {
            digitPos = i;
            break;
          }
        }
      } else {
        for (let i = deleteIndex + 1; i < currentValue.length; i++) {
          if (/\d/.test(currentValue[i]) || currentValue[i] === '+') {
            digitPos = i;
            break;
          }
        }
      }
      if (digitPos === -1) return;
      
      const newValue = currentValue.slice(0, digitPos) + currentValue.slice(digitPos + 1);
      const formatted = formatPhone(newValue);
      input.value = formatted;
      const newCursor = digitPos;
      input.setSelectionRange(newCursor, newCursor);
      setHasValue(formatted.trim().length > 0);
    }
  };
  
  // Обработчик ввода для обычных полей
  const handleRegularInput = (e) => {
    setHasValue(e.target.value.trim().length > 0);
  };
  
  // Обработчики фокуса и блюра
  const handleFocus = (e) => {
    setIsFocused(true);
    if (rest.onFocus) rest.onFocus(e);
  };
  
  const handleBlur = (e) => {
    setIsFocused(false);
    // Если поле пустое, убираем has-value
    if (!e.target.value.trim()) {
      setHasValue(false);
    }
    if (rest.onBlur) rest.onBlur(e);
  };
  
  // Подписка на submit ближайшей формы
  useEffect(() => {
    const form = fieldRef.current?.closest('form');
    if (!form) return;
    
    const handleSubmit = (event) => {
      if (isPhone && inputRef.current) {
        const digits = inputRef.current.value.replace(/\D/g, '');
        if (digits.length < 11) {
          event.preventDefault();
          setPhoneError(true);
        } else {
          setPhoneError(false);
        }
      }
    };
    
    const handleReset = () => {
      setPhoneError(false);
      setHasValue(false);
      setIsFocused(false);
    };
    
    form.addEventListener('submit', handleSubmit);
    form.addEventListener('reset', handleReset);
    
    return () => {
      form.removeEventListener('submit', handleSubmit);
      form.removeEventListener('reset', handleReset);
    };
  }, [isPhone]);
  
  const hasError = externalError || phoneError;
  const showLabel = isFocused || hasValue; // label скрыт при фокусе или заполненности
  const variants = variant.split(' ').filter(Boolean);
  const variantClasses = variants.map((v) => `field--${v}`).join(' ');
  const finalFieldClass = `field ${variantClasses} ${className} ${hasError ? 'error' : ''} ${showLabel ? 'has-value' : ''}`.trim();
  
  return (
    <div ref={fieldRef} className={finalFieldClass}>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        ref={inputRef}
        className="input"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        tabIndex={tabIndex}
        aria-hidden={ariaHidden}
        aria-invalid={hasError ? true : undefined}
        onInput={isPhone ? handlePhoneInput : handleRegularInput}
        onKeyDown={isPhone ? handlePhoneKeyDown : rest.onKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={rest.onChange}
        {...rest}
      />
    </div>
  );
}

export default FormInput;