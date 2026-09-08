import Container from "../Container/Container.jsx";

function Section({ id, children, isMax = false }) {
  return (
    <section className="section" id={id || undefined}>
      <Container variant={isMax ? 'max' : ''}>
        {children}
      </Container>
    </section>
  );
}

export default Section;