function HeroInfo({ items = [], className = '', variant = '' }) {
  // Преобразуем строку variant в массив классов-модификаторов
  const variantClasses = variant
    .split(' ')
    .filter(Boolean)
    .map(v => `hero__info--${v}`)
    .join(' ');
  
  const finalClass = `hero__info ${variantClasses} ${className}`.trim();
  
  return (
    <ul className={finalClass}>
      {items.map((item, index) => (
        <li key={index} className="hero__info-item">
          <div className="hero__info-item-head">{item.head}</div>
          <div className="hero__info-item-desc">{item.desc}</div>
        </li>
      ))}
    </ul>
  );
}

export default HeroInfo;