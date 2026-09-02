import { useState } from 'react';
import { sendYmGoal } from '../utils/analytics.js';

const defaultEndpoint = '/php/save-form.php';

export function useFormHandler({
                                 formType,
                                 endpoint = defaultEndpoint,
                                 onSuccess,
                                 goalPrefix = '',
                                 goalCooldownHours = 24,
                               }) {
  const [errors, setErrors] = useState({});
  
  const validate = (formData) => {
    const newErrors = {};
    
    const phone = formData.get('phone');
    const digits = phone ? phone.replace(/\D/g, '') : '';
    if (digits.length < 11) {
      newErrors.phone = true;
    }
    
    const honeypot = formData.get('email');
    if (honeypot && honeypot.trim() !== '') {
      const botData = {
        bot_attempt: true,
        form_type: formType,
      };
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(botData),
      }).catch(() => {});
      return false;
    }
    
    const agreement = formData.get('agreement');
    if (!agreement || agreement !== 'on') {
      return false;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const collectData = (formData) => {
    const getVal = (key) => formData.get(key) || '';
    const agreement = formData.get('agreement') === 'on';
    const base = {
      name: getVal('name'),
      phone: getVal('phone'),
      agreement,
      form_context: getVal('form_context'),
      form_type: formType,
    };
    
    if (formType === 'calculator') {
      return {
        ...base,
        residency: getVal('residency') || '—',
        people: getVal('people') || '—',
        water: getVal('water') || '—',
        bath: getVal('bath') || '—',
        bathCount: getVal('bathCount') || '—',
        timing: getVal('timing') || '—',
        soil: getVal('soil') || '—',
        distance: getVal('distance') || '—',
      };
    }
    return base;
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    if (!validate(formData)) return;
    
    const data = collectData(formData);
    
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const storageKey = `last_goal_${formType}`;
          const now = Date.now();
          const lastSent = Number(localStorage.getItem(storageKey)) || 0;
          const cooldownMs = goalCooldownHours * 60 * 60 * 1000;
          
          if (now - lastSent >= cooldownMs) {
            localStorage.setItem(storageKey, String(now));
            const goalName = `${goalPrefix}${formType}_form_sent`;
            sendYmGoal(goalName);
          }
        }
      })
      .catch(() => {
      });
    
    form.reset();
    
    const phoneInput = form.querySelector('#calculator-phone, #connect-modal-phone, #engineer-request-phone');
    if (phoneInput) {
      phoneInput.value = '+7';
      phoneInput.closest('.field')?.classList.add('has-value');
    }
    
    if (onSuccess) onSuccess();
  };
  
  return {
    handleSubmit,
    errors,
  };
}