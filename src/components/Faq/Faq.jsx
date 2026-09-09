import './Faq.scss';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import faqData from '../../data/faqData.json';
import Callout from "../Callout/Callout.jsx";
import {Helmet} from "react-helmet-async";
import { getFaqSchema } from '../../seo/schemas.js';

function Faq({ slug: propSlug }) {
  const location = useLocation();
  const slug = propSlug || location.pathname.replace('/', '');

  const faqBlock = faqData.find((block) => block.slug === slug);
  if (!faqBlock) return null;
  
  const items = faqBlock.items;
  const [openIndexes, setOpenIndexes] = useState([]);
  
  const handleToggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  
  const faqSchema = getFaqSchema(items);
  
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      
      <div className="faq">
        {items.map((item, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div key={index} className={`faq__item${isOpen ? ' is-open' : ''}`}>
              <button
                className="faq__header"
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
              >
                <h3 className="faq__question">{item.question}</h3>
                <span className="faq__button" />
              </button>
              <p className="faq__answer">{item.answer}</p>
            </div>
          );
        })}
      </div>
      <Callout
        variant="accent"
        head="Есть вопрос? Задайте эксперту"
        info="Эксперт вдумчиво и ясно ответит на все Ваши вопросы"
        phone="+7 812 920-46-60"
        messengers={[
          { icon: 'telegram', url: 'tg://resolve?domain=ChestnySeptik' },
          { icon: 'whatsapp', url: 'whatsapp://send?phone=79119204660' },
        ]}
      />
    </>
  );
}

export default Faq;