import React, { memo, useEffect, useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import './login.scss'
import people from '../../assets/img/people-mobile.svg'
import peopleDesktop from '../../assets/img/people-desktop.svg'
import Header from '../../Components/Header/Header';
import AuthContext from '../../context/AuthContext';

const Login = () => {
  const { dni, setAuth , setDni} = useContext(AuthContext);
  const [ form, setForm ] = useState({});
  const navigate = useNavigate();

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'documento') {
      if (value.length > 8) {
         setForm({...form, documento: value.slice(0,8)});
         return alert("El campo DNI no debe contener mas de 8 digitos")
      }
    }

    setForm({
      ...form,
      [name]: value
    })

    setDni(name === "documento" ? value : dni);

  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/arma-plan/${form.placa}`);
  }

  const consumirAPI = async () => {
    try {
      const user = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await user.json();
      setAuth(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    consumirAPI();
  }, [])

  return (
    <>
      <Header/>
      <section className='login-container'>
        <section className='login__wallpaper'>
          <article className="login__information">
            <div className="login__image">
              <img className='login__image mobile' src={people} alt="" />
              <img className='login__image desktop' src={peopleDesktop} alt="" />
            </div>
            <div className='login__text'>
              <h5>¡NUEVO!</h5>
              <h2 className='login__text-title'>Seguro Vehicular</h2>
              <h2 className='login__text-subtitle'>Tracking</h2>
              <p>Cuentanos donde le haras seguimiento a tu seguro</p>
            </div>
            <div className='login__copyright'>
              <p>© 2021 RIMAC Seguros y Reaseguros.</p>
            </div>
          </article>
        </section>
        <section className='login__form'>
          <form onSubmit={handleSubmit}>
            <h2>Déjanos tus datos</h2>
            <div className='login__box'>
              <select name="select" className='tipe--document' onChange={handleInputChange} >
                <option value="value1" defaultValue >DNI</option>
              </select>
              <input className='n--document' type="text" name="documento" value={form?.documento || ""} placeholder='Nro. de doc' onChange={handleInputChange} required />
            </div>
            <div className='login__box'>
              <input className='login__input' type="text" name="celular" placeholder='Celular' onChange={handleInputChange} required />
            </div>
            <div className='login__box'>
              <input className='login__input' type="text" name="placa" placeholder='Placa' onChange={handleInputChange} required />
            </div>
            <div className='login__terminos'>
              <input type="checkbox" id="acepto" value="acepto" onChange={handleInputChange} required />
              <label htmlFor="acepto">Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones</label>
            </div>
            <input type="submit" className='login__box button' value='COTÍZALO' />
          </form>
        </section>
      </section>
    </>
  )
}

export default memo(Login)