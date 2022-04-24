import React from 'react'
import './header.scss'
import rimac from '../../assets/img/logoRimac.svg'
import phone from '../../assets/img/ic_phone.svg'

const Header = () => {
  return (
    <>
      <section className='loggin__conta'>
        <article className='login__header'>
          <div className='login__logo'>
            <img src={rimac} alt="logo-rimac" />
          </div>
          <div className='login__logo-phone'>
            <span className='login__logo question'>¿Tienes alguna duda?</span>
            <img src={phone} alt="logo-phone" />
            <span className='login__logo llamanos'>Llámanos</span>
            <span className='login__logo number'>(01) 411 6001</span>
          </div>
        </article>
      </section>
    </>
  )
}

export default Header