import { Link } from 'react-router-dom';
import { sendYmGoal } from '../../utils/analytics.js';
import './Button.scss';

function Button({
                  variant = 'primary',
                  icon,
                  to,
                  scrollTo,
                  ymGoal,
                  children,
                  onClick,
                  ...props
                }) {
  let finalClass = `button button--${variant}`;
  if (icon) finalClass += ` button--icon-${icon}`;
  
  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (ymGoal) sendYmGoal(ymGoal);
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  if (scrollTo || !to) {
    return (
      <button className={finalClass} onClick={handleClick} {...props}>
        {children}
      </button>
    );
  }
  
  return (
    <Link to={to} className={finalClass} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

export default Button;