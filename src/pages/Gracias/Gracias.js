import React, { useContext } from 'react'
import Header from '../../Components/Header/Header';
import AuthContext from '../../context/AuthContext';
import './gracias.scss'
import peopleGracias from '../../assets/img/peopleGracias.svg'
import peopleGraciasDesktop from '../../assets/img/peopleGraciasDesktop.svg'

const Gracias = () => {
  const { people, pago } = useContext(AuthContext);

  return (
    <>
      <Header/>
      <div className='div-spacio'></div>
      <section className='gracias__container'>
        <section className='gracias__wallpaper'>
          <img className='gracias__image-mobile' src={peopleGracias} alt="people gracias" />
          <img className='gracias__image-desktop' src={peopleGraciasDesktop} alt="people gracias" />
        </section>
        <section className="gracias__information">
          <article className='gracias__wellcome'>
            <h2>¡Te damos la bienvenida!</h2>
            <h3>Cuenta con nosotros para proteger tu vehículo</h3>
            <p>
              Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo: 
            </p>
            <span>{people?.email}</span>
          </article>
          <div className='gracias__button'>
            <button>CÓMO USAR MI SEGURO</button>
          </div>
        </section>
      </section>
      <footer>
        <span>© 2021 RIMAC Seguros y Reaseguros.</span>
      </footer>
    </>
  )
}

export default Gracias