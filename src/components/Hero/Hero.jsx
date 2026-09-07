import './Hero.scss';
import Container from "../Container/Container.jsx";

function Hero({ children }) {
  return (
    <section className="section hero">
      <Container>
        <div className="hero__body">
          {children}
        </div>
      </Container>
    </section>
  )
}

export default Hero;