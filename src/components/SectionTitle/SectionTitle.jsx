function SectionTitle({ variant = '', children }) {
  const variants = variant ? variant.split(/\s+/).filter(Boolean) : [];
  
  const className = [
    'section__title',
    ...variants.map((v) => `section__title--${v}`),
  ].join(' ');
  
  return(
    <h2 className={className}>
      {children}
    </h2>
  )
}

export default SectionTitle;