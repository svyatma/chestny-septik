import './Callout.scss';
import Button from '../Button/Button.jsx';

function Callout({
                   className = '',
                   variant = '',
                   head,
                   info,
                   phone,
                   messengers,
                   actions,
                   onPhoneClick,
                 }) {
  const variants = variant.split(' ').filter(Boolean);
  const modifierClasses = variants.map((v) => `callout--${v}`).join(' ');
  const finalClass = `callout ${modifierClasses} ${className}`.trim();
  
  const hasActions =
    phone ||
    (messengers && messengers.length > 0) ||
    (actions && actions.length > 0);
  
  return (
    <div className={finalClass}>
      <div className="callout__inner">
        {head && <h3 className="callout__head">{head}</h3>}
        {info && <p className="callout__info">{info}</p>}
        
        {hasActions && (
          <div className="callout__actions">
            {phone && (
              <a
                href={`tel:${phone}`}
                className="callout__phone"
                tabIndex={-1}
                onClick={onPhoneClick}
              >
                {phone}
              </a>
            )}
            
            {messengers && messengers.length > 0 && (
              <div className="callout__messangers">
                {messengers.map((m) => (
                  <Button
                    key={m.icon}
                    variant="quaternary"
                    icon={m.icon}
                    to={m.url}
                    ymGoal={m.ymGoal}
                  >
                    {m.icon === 'telegram'
                      ? 'Телеграм'
                      : m.icon === 'whatsapp'
                        ? 'WhatsApp'
                        : m.icon}
                  </Button>
                ))}
              </div>
            )}
            
            {actions &&
              actions.length > 0 &&
              actions.map((actionProps, index) => (
                <Button
                  key={actionProps.key || index}
                  {...actionProps}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Callout;


// <Callout
//   variant="dark"
//   head="Остались вопросы?"
//   info="Свяжитесь с нами удобным способом"
//   phone="+7 999 123-45-67"
//   messengers={[
//     { icon: 'telegram', url: 'https://t.me/yourbot' },
//   ]}
//   actions={[
//     {
//       key: 'callback',
//       variant: 'primary',
//       children: 'Заказать звонок',
//       onClick: () => alert('Заказ звонка'),
//     },
//   ]}
// />