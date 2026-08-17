import './Hero.scss';

function Hero({ children }) {
  return (
    <section className="section hero">
      <div className="container">
        <div className="hero__body">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Hero;