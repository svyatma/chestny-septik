import './Article.scss';
import Section from "../Section/Section.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import Logo from "../Logo/Logo.jsx";

function Article({ title, children }) {
  return (
    <Section id="article">
      <SectionTitle>
        {title}
      </SectionTitle>
      <article className="article">
        <div className="article__body">
          <div className="article__content">
            {children}
          </div>
        </div>
        <Logo />
      </article>
    </Section>
  )
}

export default Article;