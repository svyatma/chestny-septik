import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Agreement.scss';

function Agreement({
                     className = '',
                     variant = '',
                     linkUrl = '/politika-obrabotki-dannyh',
                     linkText = 'обработку данных',
                     text = 'Я соглашаюсь на',
                     checked,
                     onChange,
                     ...rest
                   }) {
  const variants = variant.split(' ').filter(Boolean);
  const variantClasses = variants.map((v) => `agreement--${v}`).join(' ');
  const [internalError, setInternalError] = useState(false);
  const labelRef = useRef(null);
  const inputRef = useRef(null);
  
  useEffect(() => {
    const form = labelRef.current?.closest('form');
    if (!form) return;
    
    const handleSubmit = () => {
      if (inputRef.current && !inputRef.current.checked) {
        setInternalError(true);
      } else {
        setInternalError(false);
      }
    };
    
    const handleReset = () => {
      setInternalError(false);
    };
    
    form.addEventListener('submit', handleSubmit);
    form.addEventListener('reset', handleReset);
    
    return () => {
      form.removeEventListener('submit', handleSubmit);
      form.removeEventListener('reset', handleReset);
    };
  }, []);
  
  const handleChange = (event) => {
    setInternalError(false);
    if (onChange) onChange(event);
  };
  
  const finalClass = `agreement ${variantClasses} ${className} ${internalError ? 'error' : ''}`.trim();
  
  return (
    <label ref={labelRef} className={finalClass}>
      <input
        ref={inputRef}
        type="checkbox"
        name="agreement"
        className="agreement__input"
        checked={checked}
        onChange={handleChange}
        {...rest}
      />
      <span className="agreement__checkmark"></span>
      <span className="agreement__text">
        {text}&nbsp;
        <Link
          to={linkUrl}
          className="agreement__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </Link>
      </span>
    </label>
  );
}

export default Agreement;