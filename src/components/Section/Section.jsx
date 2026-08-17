function Section({ id, children }) {
  return (
    <section className="section" id={id || undefined}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}

export default Section;