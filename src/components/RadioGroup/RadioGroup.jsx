function RadioGroup({ label, name, options }) {
  return (
    <div className="calculator__form-item">
      <label className="calculator__form-label">{label}</label>
      <div className="calculator__form-options">
        {options.map((option) => (
          <div key={option.id} className="calculator__form-option">
            <input
              type="radio"
              name={name}
              value={option.value}
              id={option.id}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioGroup;