import React, { useState, useContext, useEffect, useRef } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './armaPlan.scss'
import iconBack from '../../assets/img/icon_Back.svg'
import add from '../../assets/img/add.svg'
import rest from '../../assets/img/rest.svg'
import iconLLanta from '../../assets/img/icon_llanta.svg'
import icon_damage from '../../assets/img/icon_damage.svg'
import icon_perdidatotal from '../../assets/img/icon_perdidatotal.svg'
import rowUp from '../../assets/img/rowUp.svg'
import rowUpRed from '../../assets/img/rowUpRed.svg'
import rowDown from '../../assets/img/rowDown.svg'
import rowDownRed from '../../assets/img/rowDownRed.svg'
import Icon_dissable from '../../assets/img/Icon_dissable.svg'
import Icon_done from '../../assets/img/Icon_done.svg'
import iconBackRed from '../../assets/img/icon_BackRed.svg'
import peopleArmaPlanDesktop from '../../assets/img/people-armaPlanDesktop.svg'
import peopleArmaPlan from '../../assets/img/people-armaPlan.svg'
import quitar from '../../assets/img/quitar.svg'
import agregar from '../../assets/img/agregar.svg'
import check from '../../assets/img/check.svg'
import Header from '../../Components/Header/Header';
import AuthContext from '../../context/AuthContext';

const ArmaPlan = () => {
  const selectRef = useRef();
  const { people } = useContext(AuthContext);
  const { placa } = useParams();
  const navigate = useNavigate();
  const [monto, setMonto] = useState(0);
  const [pagoMensual, setPagoMensual] = useState(20);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const backUrl = () => {
    navigate(`/`);
  }

  const addCosto = () => {
    setMonto(monto => (monto + 100))
  }

  const handleInputCosto = ({target}) => {
    if (parseFloat(target.value) > 0) {
      setMonto(parseFloat(target.value));
    }
  }

  const restCosto = () => {
    if (monto > 0)
      setMonto(monto => (monto - 100))

    if(monto < 0 )
      setMonto(0)
  }

  const cobertura = ({target}) => {
    if (target.className === "") {
     console.log("sin clase");
     target.classList.add("hidden");
     target.nextSibling.classList.remove("hidden");
    }

    if (target.className === "add") {
      target.classList.add("hidden");
      target.previousSibling.classList.remove("hidden");
    }
  }

  const openText = ({target}) => {
    if (target.className === "") {
      target.parentElement.previousSibling.classList.remove("hidden");
      target.parentElement.classList.remove("ver-mas");
      target.parentElement.classList.add("ver-menos");
      target.previousSibling.innerText = "VER MENOS"
      target.classList.add("hidden");
      target.nextSibling.classList.remove("hidden");
    }
    if (target.className === "row") {
      target.parentElement.previousSibling.classList.add("hidden");
      target.parentElement.classList.remove("ver-menos");
      target.parentElement.classList.add("ver-mas");
      target.parentElement.firstChild.innerText= "VER MÁS";
      target.classList.add("hidden");
      target.previousSibling.classList.remove("hidden");
    }
  }

  useEffect(() => {
    setMin(monto * 0.87413)
    setMax(monto * 1.15385)
  }, [monto])

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
          <article className='arma--plan__controlsDesktop'>
            <div className='arma--plan__one'>
              <img src={Icon_dissable} alt="Icono desactivado" />
              <span>Datos</span>
            </div>
            <div className='arma--plan__one'>
              <img src={Icon_done} alt="Icono activado" />
              <span>Arma tu plan</span>
            </div>
          </article>
        </section>
        <section className='arma--plan__cobertura'>
          <article className='arma--plan__vehiculo'>
            <div className='arma--plan__user'>
              <div className='arma--plan__back'>
                <img src={iconBackRed} alt="icon back" onClick={backUrl}/>
                <span>VOLVER</span>
              </div>
              <p>¡Hola,</p>
              <h2>{people?.name || ""}</h2>
            </div>
            <h2 className='arma--plan__title--cobertura'>Mira las coberturas</h2>
            <p>Conoce las coberturas para tu plan</p>
            <div className='arma--plan__datos'>
              <h4>{`placa: ${placa}`}</h4>
              <h3>Wolkswagen 2019 Golf</h3>
              <img className='arma--plan__people-d' src={peopleArmaPlanDesktop} alt="people"/>
              <img className='arma--plan__people-m' src={peopleArmaPlan} alt="people" />
            </div>
          </article>
          <article className='arma--plan__costo'>
            <div className='arma--plan__cifras'>
              <h4>Indica la suma asegurada</h4>
              <span className='arma--plan min'>MIN $ {min.toFixed(0)}</span>
              <span className='arma--plan max'>MAX $ {max.toFixed(0)}</span>
            </div>
            <div className='arma--plan__box'>
              <img src={rest} alt="people" onClick={restCosto}/>
              <div>
                $<input type="tel" name='costo' value={monto} onChange={handleInputCosto}/>
              </div>
              <img src={add} alt="people" onClick={addCosto}/>
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
            <article className='arma--plan__active'>
              <section className='arma--plan__plan'>
                <div className='arma--plan__icon'>
                  <img src={iconLLanta} alt="icono de llanta" />
                </div>
                <div className='arma--plan__information'>
                  <h5>Llanta robada</h5>
                  <div className='arma--plan__icono'>
                    <img src={quitar} alt="Quitar" onClick={cobertura} className=''/>
                    <img src={agregar} alt="Agregar" onClick={cobertura} className='add hidden'/>
                  </div>
                  <p className='hidden'>He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis</p>
                  <div className='arma--plan__ver ver-mas'>
                    <span>VER MÁS</span>
                    <img src={rowDown} alt="row" onClick={openText}/>
                    <img src={rowUp} alt="row" onClick={openText} className='row hidden'/>
                  </div>
                </div>
              </section>
              {monto <= 16000 &&
              <section className='arma--plan__plan'>
                <div className='arma--plan__icon'>
                  <img src={icon_damage} alt="icono choque" />
                </div>
                <div className='arma--plan__information'>
                  <h5> Choque y/o pasarte la luz roja </h5>
                  <div className='arma--plan__icono'>
                    <img src={quitar} alt="Quitar" onClick={cobertura} className=''/>
                    <img src={agregar} alt="Agregar" onClick={cobertura} className='add hidden'/>
                  </div>
                  <p className='hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus auctor blandit. Aenean congue volutpat faucibus. Nullam mattis eros a metus luctus imperdiet. In justo dolor, lobortis sed nisl ut, tempor interdum metus. Aliquam eget pellentesque dolor, eu efficitur nisl. Sed rhoncus cursus eros, et vulputate sapien ullamcorper eget. In tellus quam, hendrerit in mi et, suscipit lacinia nisi. Nullam condimentum quis tellus vel consectetur.</p>
                  <div className='arma--plan__ver ver-mas'>
                    <span>VER MÁS</span>
                    <img src={rowDown} alt="row" onClick={openText}/>
                    <img src={rowUp} alt="row" onClick={openText} className='row hidden'/>
                  </div>
                </div>
              </section>}
              <section className='arma--plan__plan'>
                <div className='arma--plan__icon '>
                  <img src={icon_perdidatotal} alt="icono atropello" />
                </div>
                <div className='arma--plan__information '>
                  <h5>Atropello en la vía Evitamiento </h5>
                  <div className='arma--plan__icono'>
                    <img src={quitar} alt="Quitar" onClick={cobertura} className=''/>
                    <img src={agregar} alt="Agregar" onClick={cobertura} className='add hidden'/>
                  </div>
                  <p className='hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus auctor blandit. Aenean congue volutpat faucibus. Nullam mattis eros a metus luctus imperdiet. In justo dolor, lobortis sed nisl ut, tempor interdum metus. Aliquam eget pellentesque dolor, eu efficitur nisl. Sed rhoncus cursus eros, et vulputate sapien ullamcorper eget. In tellus quam, hendrerit in mi et, suscipit lacinia nisi. Nullam condimentum quis tellus vel consectetur.</p>
                  <div className='arma--plan__ver ver-mas'>
                    <span>VER MÁS</span>
                    <img src={rowDown} alt="row" onClick={openText}/>
                    <img src={rowUp} alt="row" onClick={openText} className='row hidden'/>
                  </div>
                </div>
              </section>
            </article>
          </article>
        </section>
        <section className='arma--plan__cotizacion'>
          <article className='arma--plan__monto'>
            <h2 className='monto'>MONTO</h2>
            <p className='costo'>{`$ ${pagoMensual}`}</p>
            <p className='mensual'>MENSUAL</p>
          </article>
          <article className='arma--plan__incluye'>
            <h3>El precio incluye:</h3>
            <div className='arma--plan__check'>
              <img src={check} alt="check"/>
              <span>Llanta de respuesto</span>
            </div>
            <div className='arma--plan__check'>
              <img src={check} alt="check"/>
              <span>Analisis de motor</span>
            </div>
            <div className='arma--plan__check'>
              <img src={check} alt="check"/>
              <span>Aros gratis</span>
            </div>
          </article>
          <button className='arma--plan__button'>LO QUIERO</button>
        </section>
      </section>
    </>
  )
}

export default ArmaPlan