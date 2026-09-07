import Container from "../Container/Container.jsx";

function Section({ id, children }) {
  return (
    <section className="section" id={id || undefined}>
      <Container>
        {children}
      </Container>
    </section>
  );
}

export default Section;