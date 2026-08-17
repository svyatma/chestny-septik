function Container({
                     className = '',
                     variant = '',
                     children,
                     ...rest
                   }) {
  const variants = variant.split(' ').filter(Boolean);
  const variantClasses = variants.map((v) => `container--${v}`).join(' ');
  const finalClass = `container ${variantClasses} ${className}`.trim();
  
  return (
    <div className={finalClass} {...rest}>
      {children}
    </div>
  );
}

export default Container;