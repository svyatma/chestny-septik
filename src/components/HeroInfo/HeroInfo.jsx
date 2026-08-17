function HeroInfo({ items = [] }) {
  return (
    <ul className="hero__info">
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