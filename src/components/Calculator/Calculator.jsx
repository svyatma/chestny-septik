import './Calculator.scss';
import { useState } from 'react';
import { useFormHandler } from '../../hooks/useFormHandler.js';
import ModalThanks from '../ModalThanks/ModalThanks.jsx';
import Callout from "../Callout/Callout.jsx";
import RadioGroup from "../RadioGroup/RadioGroup.jsx";
import FormInput from "../FormInput/FormInput.jsx";
import Agreement from "../Agreement/Agreement.jsx";
import Button from "../Button/Button.jsx";

function Calculator({ goalPrefix = '' }) {
  const [isThanksOpen, setIsThanksOpen] = useState(false);
  const { handleSubmit } = useFormHandler({
    formType: 'calculator',
    goalPrefix: goalPrefix,
    onSuccess: () => setIsThanksOpen(true),
  });
  
  return (
    <div className="calculator">
      <div className="calculator__inner">
        <div className="calculator__callouts">
          <Callout
            variant="white"
            head="Взвесим все и подумаем за Вас"
            info={
              <>
                Расскажите о Вашем участке и эксперт свяжется с пулом готовых решений{' '}<span>“Станция + установка под ключ”</span>
              </>
            }
          />
          <Callout
            variant="accent"
            head="Не хотите ждать?"
            info="Позвоните нам и задайте все интересующие вопросы эксперту здесь и сейчас"
            phone="+7 812 920 46 60"
            onPhoneClick={() => {
              if (typeof window.ym === 'function') {
                window.ym(110089865, 'reachGoal', 'Calculator_Callout_Phone');
              }
            }}
          />
        </div>
        <form
          className="calculator__form"
          id="calculator-form"
          method="POST"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="calculator__form-asks">
            <RadioGroup
              label="Проживание"
              name="residency"
              options={[
                { id: 'res-perm', value: 'Постоянно', label: 'Постоянное' },
                { id: 'res-season', value: 'На сезон', label: 'Сезонное' },
              ]}
            />
            
            <RadioGroup
              label="Количество проживающих"
              name="people"
              options={[
                { id: 'ppl-1', value: '1-3 человек', label: '1-3 человек' },
                { id: 'ppl-2', value: '4-6 человек', label: '4-6 человек' },
                { id: 'ppl-3', value: '7-9 человек', label: '7-9 человек' },
                { id: 'ppl-4', value: '10+ человек', label: '10+ человек' },
              ]}
            />
            
            <RadioGroup
              label="Планируется ли ванна?"
              name="bath"
              options={[
                { id: 'bath-yes', value: 'Ванну', label: 'Да' },
                { id: 'bath-none', value: 'Ничего', label: 'Нет' },
              ]}
            />
            
            <RadioGroup
              label="Количество ванн"
              name="bathCount"
              options={[
                { id: 'bc-1', value: 'Одна', label: 'Одна' },
                { id: 'bc-2', value: 'Две', label: 'Две' },
                { id: 'bc-3', value: 'Три или больше', label: 'Три или\u00a0больше' },
              ]}
            />
            
            <RadioGroup
              label="Когда планируете установку?"
              name="timing"
              options={[
                { id: 'tim-urgent', value: 'Как можно скорее', label: 'Как можно скорее' },
                { id: 'tim-month', value: 'В течение месяца', label: 'В\u00a0течение месяца' },
                { id: 'tim-later', value: 'Позже', label: 'Позже' },
              ]}
            />
            
            <RadioGroup
              label={
                <>
                  Удаленность участка от&nbsp;КАД
                </>
              }
              name="distance"
              options={[
                { id: 'dist-kad', value: 'В пределах КАД', label: 'В\u00a0пределах КАД' },
                { id: 'dist-50', value: 'До 50 км', label: 'До\u00a050 км' },
                { id: 'dist-100', value: 'До 100 км', label: 'До\u00a0100 км' },
                { id: 'dist-100plus', value: 'Более 100 км', label: 'Более 100 км' },
              ]}
            />
          </div>
          <div className="calculator__form-wrapper">
            <div className="calculator__form-callout">
              <p className="">
                Эксперт свяжется с пулом готовых решений в течение часа после отправки формы каждый день до 21:00
              </p>
            </div>
            <div className="calculator__form-fields">
              <FormInput
                variant="dark"
                label="Имя"
                name="name"
                id="calculator-name"
              />
              <FormInput
                variant="dark"
                label="Телефон"
                name="phone"
                type="tel"
                id="calculator-phone"
                placeholder=' '
              />
              <FormInput
                label="Email"
                name="email"
                type="text"
                id="email"
                placeholder=" "
                tabIndex={-1}
                ariaHidden={true}
              />
            </div>
            <div className="calculator__form-submit">
              <Agreement
                variant="dark"
              />
              <Button
                type="submit"
              >
                Отправить
              </Button>
            </div>
          </div>
        </form>
        
        <ModalThanks isOpen={isThanksOpen} onClose={() => setIsThanksOpen(false)} />
        {/*<form className="calculator__form"*/}
        {/*      id="calculator-form" method="POST" noValidate="">*/}
        {/*  <div className="calculator__form-asks">*/}
        {/*    <div className="calculator__form-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">*/}
        {/*      <label className="calculator__form-label">*/}
        {/*        Проживание*/}
        {/*      </label>*/}
        {/*      <div className="calculator__form-options">*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">*/}
        {/*          <input type="radio" name="residency" value="Постоянно" id="res-perm"/>*/}
        {/*          <label htmlFor="res-perm">*/}
        {/*            Постоянное*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="350">*/}
        {/*          <input type="radio" name="residency" value="На сезон" id="res-season"/>*/}
        {/*          <label htmlFor="res-season">*/}
        {/*            Сезонное*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="calculator__form-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">*/}
        {/*      <label className="calculator__form-label">*/}
        {/*        Количество человек*/}
        {/*      </label>*/}
        {/*      <div className="calculator__form-options">*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">*/}
        {/*          <input type="radio" name="people" value="1-3 человек" id="ppl-1"/>*/}
        {/*          <label htmlFor="ppl-1">*/}
        {/*            1-3*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="350">*/}
        {/*          <input type="radio" name="people" value="4-6 человек" id="ppl-2"/>*/}
        {/*          <label htmlFor="ppl-2">*/}
        {/*            4-6*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">*/}
        {/*          <input type="radio" name="people" value="7-9 человек" id="ppl-3"/>*/}
        {/*          <label htmlFor="ppl-3">*/}
        {/*            7-9*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="450">*/}
        {/*          <input type="radio" name="people" value="10+ человек" id="ppl-4"/>*/}
        {/*          <label htmlFor="ppl-4">*/}
        {/*            10+*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="calculator__form-item aos-init aos-animate" data-aos="fade-up">*/}
        {/*      <label className="calculator__form-label">*/}
        {/*        Планируется ли ванна?*/}
        {/*      </label>*/}
        {/*      <div className="calculator__form-options">*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">*/}
        {/*          <input type="radio" name="bath" value="Ванну" id="bath-yes"/>*/}
        {/*          <label htmlFor="bath-yes">*/}
        {/*            Да*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="450">*/}
        {/*          <input type="radio" name="bath" value="Ничего" id="bath-none"/>*/}
        {/*          <label htmlFor="bath-none">*/}
        {/*            Нет*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="calculator__form-item aos-init aos-animate" data-aos="fade-up">*/}
        {/*      <label className="calculator__form-label">*/}
        {/*        Количество ванн*/}
        {/*      </label>*/}
        {/*      <div className="calculator__form-options">*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">*/}
        {/*          <input type="radio" name="bathCount" value="Одна" id="bc-1"/>*/}
        {/*          <label htmlFor="bc-1">*/}
        {/*            Одна*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="350">*/}
        {/*          <input type="radio" name="bathCount" value="Две" id="bc-2"/>*/}
        {/*          <label htmlFor="bc-2">*/}
        {/*            Две*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">*/}
        {/*          <input type="radio" name="bathCount" value="Три или больше" id="bc-3"/>*/}
        {/*          <label htmlFor="bc-3">*/}
        {/*            Три или&nbsp;больше*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="calculator__form-item aos-init aos-animate" data-aos="fade-up">*/}
        {/*      <label className="calculator__form-label">*/}
        {/*        Когда планируете установку?*/}
        {/*      </label>*/}
        {/*      <div className="calculator__form-options">*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">*/}
        {/*          <input type="radio" name="timing" value="Как можно скорее" id="tim-urgent"/>*/}
        {/*          <label htmlFor="tim-urgent">*/}
        {/*            Как можно скорее*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="350">*/}
        {/*          <input type="radio" name="timing" value="В течение месяца" id="tim-month"/>*/}
        {/*          <label htmlFor="tim-month">*/}
        {/*            В&nbsp;течение месяца*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">*/}
        {/*          <input type="radio" name="timing" value="Позже" id="tim-later"/>*/}
        {/*          <label htmlFor="tim-later">*/}
        {/*            Позже*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="calculator__form-item aos-init aos-animate" data-aos="fade-up">*/}
        {/*      <label className="calculator__form-label">*/}
        {/*        Удаленность участка от&nbsp;КАД*/}
        {/*      </label>*/}
        {/*      <div className="calculator__form-options">*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">*/}
        {/*          <input type="radio" name="distance" value="В пределах КАД" id="dist-kad"/>*/}
        {/*          <label htmlFor="dist-kad">*/}
        {/*            В&nbsp;пределах КАД*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="350">*/}
        {/*          <input type="radio" name="distance" value="До 50 км" id="dist-50"/>*/}
        {/*          <label htmlFor="dist-50">*/}
        {/*            До&nbsp;50 км*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">*/}
        {/*          <input type="radio" name="distance" value="До 100 км" id="dist-100"/>*/}
        {/*          <label htmlFor="dist-100">*/}
        {/*            До&nbsp;100 км*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*        <div className="calculator__form-option aos-init aos-animate" data-aos="zoom-in" data-aos-delay="450">*/}
        {/*          <input type="radio" name="distance" value="Более 100 км" id="dist-100plus"/>*/}
        {/*          <label htmlFor="dist-100plus">*/}
        {/*            Более 100 км*/}
        {/*          </label>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="calculator__form-fields">*/}
        {/*    <div className="field aos-init aos-animate" data-aos="fade-up">*/}
        {/*      <label className="label" htmlFor="calculator-name">*/}
        {/*        Имя*/}
        {/*      </label>*/}
        {/*      <input className="input" type="text" id="calculator-name" name="name" required=""/>*/}
        {/*      <span className="callback__error" aria-live="polite"></span>*/}
        {/*    </div>*/}
        {/*    <div className="field aos-init aos-animate" data-aos="fade-up">*/}
        {/*      <label className="label" htmlFor="calculator-phone">*/}
        {/*        Телефон*/}
        {/*      </label>*/}
        {/*      <input className="input" type="tel" id="calculator-phone" name="phone" placeholder=" " required=""/>*/}
        {/*      <span className="callback__error" aria-live="polite"></span>*/}
        {/*    </div>*/}
        {/*    <div className="field aos-init aos-animate" data-aos="fade-up">*/}
        {/*      Email*/}
        {/*      <label className="label" htmlFor="email">*/}
        {/*        Email*/}
        {/*      </label>*/}
        {/*      <input className="input" type="text" id="email" name="email" placeholder=" " tabIndex="-1"*/}
        {/*             aria-hidden="true"/>*/}
        {/*      <span className="callback__error" aria-live="polite"></span>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div style="height: 120px;" id="captcha-container" className="smart-captcha"*/}
        {/*       data-sitekey="ysc1_p7rXAD0CUK6LkIbfJRZr40Y55c0NQpKOgXZePXfg2ea741ac"*/}
        {/*       data-testid="smartCaptcha-container">*/}
        {/*    <div style="display: none;">*/}
        {/*      <iframe frameBorder="0"*/}
        {/*              src="https://smartcaptcha.yandexcloud.net/backend.13a5060930553252.html?sitekey=ysc1_p7rXAD0CUK6LkIbfJRZr40Y55c0NQpKOgXZePXfg2ea741ac&amp;theme=light&amp;hl=ru&amp;host=chestnyseptik.ru&amp;href=https%3A%2F%2Fchestnyseptik.ru%2F&amp;test=false&amp;webview=false&amp;hideChallengeContainer=false"*/}
        {/*              allow="encrypted-media *; accelerometer" data-testid="backend-iframe" title="SmartCaptcha backend"*/}
        {/*              aria-hidden="true"*/}
        {/*              style="display: block; width: 100%; height: 100%; z-index: 0; transform: translate3d(0px, 0px, 0px);"></iframe>*/}
        {/*    </div>*/}
        {/*    <input type="hidden" name="smart-token" data-testid="smart-token"/>*/}
        {/*    <iframe frameBorder="0"*/}
        {/*            src="https://smartcaptcha.yandexcloud.net/checkbox.ru.2e94c0142a465b4a.html?sitekey=ysc1_p7rXAD0CUK6LkIbfJRZr40Y55c0NQpKOgXZePXfg2ea741ac&amp;theme=light&amp;hl=ru&amp;host=chestnyseptik.ru&amp;href=https%3A%2F%2Fchestnyseptik.ru%2F&amp;test=false&amp;webview=false&amp;hideChallengeContainer=false"*/}
        {/*            allow="encrypted-media *; accelerometer" data-testid="checkbox-iframe" title="SmartCaptcha checkbox"*/}
        {/*            style="display: block; width: 100%; height: 100%; z-index: 0; transform: translate3d(0px, 0px, 0px);"></iframe>*/}
        {/*  </div>*/}
        {/*  <div className="agreement aos-init aos-animate" data-aos="fade-up">*/}
        {/*    <div className="agreement__label-wrapper">*/}
        {/*      <label className="agreement__label">*/}
        {/*        <input className="agreement__checkbox" type="checkbox" name="agreement"*/}
        {/*               aria-label="Согласие на обработку персональных данных" required=""/>*/}
        {/*      </label>*/}
        {/*    </div>*/}
        {/*    <span className="agreement__text">*/}
				{/*					Я соглашаюсь на&nbsp;<a href="./politika-obrabotki-dannyh.html" target="_blank">обработку персональных данных</a>*/}
				{/*				</span>*/}
        {/*    <span className="callback__error" aria-live="polite"></span>*/}
        {/*  </div>*/}
        {/*  <button className="button button--primary calculator__submit aos-init" data-aos="fade-up" type="submit">*/}
        {/*    Отправить*/}
        {/*  </button>*/}
        {/*</form>*/}
      </div>
    </div>
  )
}

export default Calculator;