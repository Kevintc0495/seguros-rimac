import React from 'react'
import { useParams } from "react-router-dom";
import './armaPlan.scss'
import iconBack from '../../assets/img/icon_Back.svg'
import people from '../../assets/img/people-armaPlan.svg'
import add from '../../assets/img/add.svg'
import rest from '../../assets/img/rest.svg'

import Header from '../../Components/Header/Header';


const ArmaPlan = () => {
  const { placa } = useParams()
  console.log(placa);

  return (
    <>
      {/* {`Arma tu plan ${placa}`} */}
      <Header/>
      <div className='div-spacio'></div>
      <section className='arma--plan__container'>
        <section className='arma--plan__progress'>
          <article className='arma--plan__controls'>
            <img src={iconBack} alt="icon back" />
            <span>PASO 2 DE 2</span>
            <progress max="100" value="100"></progress>
          </article>
        </section>
        <section className='arma--plan__cobertura'>
          <article className='arma--plan__vehiculo'>
            <h2>Mira las coberturas</h2>
            <p>Conoce las coberturas para tu plan</p>
            <div className='arma--plan__datos'>
              <h4>{`placa: ${placa}`}</h4>
              <h3>Wolkswagen 2019 Golf</h3>
              <img src={people} alt="people" />
            </div>
          </article>
          <article className='arma--plan__costo'>
            <h4>Indica la suma asegurada</h4>
            <span className='arma--plan min'>MIN $12.500</span>
            <span className='arma--plan max'>MAX $16,500</span>
            <div className='arma--plan__box'>
              <img src={rest} alt="people" />
              <div>
                $<input type="tel" name='costo'/>
              </div>
              <img src={add} alt="people" />
            </div>
          </article>
          <article className='arma--plan__coberturas'>
            <h2>Agrega o quita coberturas</h2>
            <article className='arma--plan__planes'>
              <div>
                <p>PROTEGE A TU AUTO</p>
              </div>
              <div>
              <p>PROTEGE A LOS QUE TE RODEAN</p>
                
              </div>
              <div>
              <p>MEJORA TU PLAN</p>
                
              </div>
            </article>
          </article>
        </section>
      </section>
    </>
  )
}

export default ArmaPlan