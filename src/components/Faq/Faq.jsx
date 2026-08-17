import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Faq.scss';
import faqData from '../../data/faqData.json';

function Faq() {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const faqBlock = faqData.find((block) => block.slug === slug);
  if (!faqBlock) return null;
  
  const items = faqBlock.items;
  const [openIndexes, setOpenIndexes] = useState([]);
  
  const handleToggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
  
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-jsonld';
    script.textContent = JSON.stringify(faqSchema);
    
    const oldScript = document.getElementById('faq-jsonld');
    if (oldScript) {
      oldScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const currentScript = document.getElementById('faq-jsonld');
      if (currentScript) {
        currentScript.remove();
      }
    };
  }, [slug]);
  
  return (
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
  );
}

export default Faq;