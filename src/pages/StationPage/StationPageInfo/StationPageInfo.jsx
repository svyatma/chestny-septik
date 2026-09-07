import './StationPageInfo.scss';
import Section from "../../../components/Section/Section.jsx";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs.jsx";
import Button from "../../../components/Button/Button.jsx";
import ModalConnect from "../../../components/ModalConnect/ModalConnect.jsx";
import {useState} from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle.jsx";

function StationPageInfo({ station, goalPrefixOrder, goalPrefixHelp, goalPrefixCallEngineer }) {
  
  const { specs, price, priceWithInstall, brand, name } = station;
  
  const hasValue = (val) => val !== null && val !== undefined && val !== '';
  
  let dimensions = null;
  if (hasValue(specs.size)) {
    const parts = specs.size.split(/[хx]/).map(s => s.trim());
    if (parts.length === 3) {
      dimensions = {
        height: parts[2],
        length: parts[0],
        width: parts[1]
      };
    }
  }
  
  const [isModalOrderOpen, setIsModalOrderOpen] = useState(false);
  const closeModalOrder = () => setIsModalOrderOpen(false);
  
  const modalOrderHead = (
    <>
      Заказать с установкой{' '}
      <span>{name.replace(/ /g, '\u00A0')}</span>
    </>
  );
  
  const formContextOrder = `Заказать с установкой ${name}`;
  
  
  const [isModalHelpOpen, setIsModalHelpOpen] = useState(false);
  const closeModalHelp = () => setIsModalHelpOpen(false);
  
  const modalHelpHead = (
    <>
      Помощь специалиста
    </>
  );
  
  const formContextHelp = `Помощь специалиста`;
  
  
  const [isModalCallEngineerOpen, setIsModalCallEngineerOpen] = useState(false);
  const closeModalCallEngineer = () => setIsModalCallEngineerOpen(false);
  
  const modalCallEngineerHead = (
    <>
      Вызов инженера
    </>
  );
  
  const formContextCallEngineer = `Вызов инженера`;
  
  return (
    <Section id="station-page-info">
      <Breadcrumbs brand={brand} stationName={name} />
      <div className="station-page-info">
        <SectionTitle>
          {name}
        </SectionTitle>
        <div className="station-page-info__body">
          <div className="station-page-info__visual">
            <img
              className="station-page-info__visual-img"
              src={station.image}
              alt={station.name}
              width={456}
              height={456}
            />
          </div>
          <div className="station-page-info__main">
            <div className="station-page-info__characteristics">
              {/* Основные характеристики */}
              <section className="station-page-info__characteristics-section">
                <h3 className="station-page-info__characteristics-title">
                  Основные характеристики
                </h3>
                <dl className="station-page-info__characteristics-list">
                  {hasValue(specs.quantity) && (
                    <div className="station-page-info__characteristics-item">
                      <dt className="station-page-info__characteristics-term">Пользователей</dt>
                      <dd className="station-page-info__characteristics-desc">
                        До {specs.quantity} человек
                      </dd>
                    </div>
                  )}
                  {hasValue(specs.drain) && (
                    <div className="station-page-info__characteristics-item">
                      <dt className="station-page-info__characteristics-term">Залповый сброс</dt>
                      <dd className="station-page-info__characteristics-desc">
                        {specs.drain} л
                      </dd>
                    </div>
                  )}
                  {hasValue(specs.power) && (
                    <div className="station-page-info__characteristics-item">
                      <dt className="station-page-info__characteristics-term">Производительность</dt>
                      <dd className="station-page-info__characteristics-desc">
                        {parseFloat(specs.power) * 1000} л/сутки
                      </dd>
                    </div>
                  )}
                  {hasValue(specs.consumption) && (
                    <div className="station-page-info__characteristics-item">
                      <dt className="station-page-info__characteristics-term">Потребление</dt>
                      <dd className="station-page-info__characteristics-desc">
                        до {specs.consumption} кВт/сутки
                      </dd>
                    </div>
                  )}
                </dl>
              </section>
              
              {/* Размеры */}
              {dimensions && (
                <section className="station-page-info__characteristics-section">
                  <h3 className="station-page-info__characteristics-title">
                    Размеры
                  </h3>
                  <dl className="station-page-info__characteristics-list">
                    <div className="station-page-info__characteristics-item">
                      <dt className="station-page-info__characteristics-term">Высота</dt>
                      <dd className="station-page-info__characteristics-desc">
                        {dimensions.height} см
                      </dd>
                    </div>
                    <div className="station-page-info__characteristics-item">
                      <dt className="station-page-info__characteristics-term">Длина</dt>
                      <dd className="station-page-info__characteristics-desc">
                        {dimensions.length} см
                      </dd>
                    </div>
                    <div className="station-page-info__characteristics-item">
                      <dt className="station-page-info__characteristics-term">Ширина</dt>
                      <dd className="station-page-info__characteristics-desc">
                        {dimensions.width} см
                      </dd>
                    </div>
                  </dl>
                </section>
              )}
              
              {/* Цена */}
              {(hasValue(price) || hasValue(priceWithInstall)) && (
                <section className="station-page-info__characteristics-section">
                  <h3 className="station-page-info__characteristics-title">
                    Цена
                  </h3>
                  <dl className="station-page-info__characteristics-list">
                    {hasValue(price) && (
                      <div className="station-page-info__characteristics-item">
                        <dt className="station-page-info__characteristics-term">Станция</dt>
                        <dd className="station-page-info__characteristics-desc">
                          {price} ₽
                        </dd>
                      </div>
                    )}
                    {hasValue(priceWithInstall) && (
                      <div className="station-page-info__characteristics-item">
                        <dt className="station-page-info__characteristics-term">Станция + монтаж</dt>
                        <dd className="station-page-info__characteristics-desc">
                          {priceWithInstall} ₽
                        </dd>
                      </div>
                    )}
                  </dl>
                </section>
              )}
            </div>
            
            {/*<hr/>*/}
            
            <div className="station-page-info__actions">
              <Button
                onClick={() => setIsModalOrderOpen(true)}
                ymGoal="Stations_Page_FindPrice"
              >
                Заказать с установкой
              </Button>
              <Button
                variant="secondary"
                onClick={() => setIsModalHelpOpen(true)}
                ymGoal="Stations_Page_Help"
              >
                Помощь специалиста
              </Button>
              <Button
                variant="secondary"
                onClick={() => setIsModalCallEngineerOpen(true)}
                ymGoal="Stations_Page_CallEngineer"
              >
                Вызвать инженера
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <ModalConnect
        isOpen={isModalOrderOpen}
        onClose={closeModalOrder}
        head={modalOrderHead}
        formContext={formContextOrder}
        goalPrefix={goalPrefixOrder}
      />
      
      <ModalConnect
        isOpen={isModalHelpOpen}
        onClose={closeModalHelp}
        head={modalHelpHead}
        formContext={formContextHelp}
        goalPrefix={goalPrefixHelp}
      />
      
      <ModalConnect
        isOpen={isModalCallEngineerOpen}
        onClose={closeModalCallEngineer}
        head={modalCallEngineerHead}
        formContext={formContextCallEngineer}
        goalPrefix={goalPrefixCallEngineer}
      />
    
    </Section>
  );
}

export default StationPageInfo;

// station-info-for-page