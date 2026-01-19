import { useState } from 'react'
import classes from './Header.module.css'
import Photo from '../constants/photo'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
        <div className={classes.container_phone}>
            <div className={classes.logo1}>
                <img src={Photo.logo} alt="" />
            </div>
            <div className={classes.phone}>
                <div className={classes.tel}>
                    <p>RU Viktor <strong>Tihomirenko</strong></p>
                    <p>BR Alexio <strong>Bronko</strong></p>
                </div>
                <div className={classes.tel}>
                    <p>RU Viktor <strong>Tihomirenko</strong></p>
                    <p>BR Alexio <strong>Bronko</strong></p>
                </div>
                <div className={classes.tel}>
                    <p>RU Viktor <strong>Tihomirenko</strong></p>
                    <p>BR Alexio <strong>Bronko</strong></p>
                </div>
                <div className={classes.tel}>
                    <p>29.05 Moscow</p>
                    <p>23:00 UTC+3:00</p>
                </div>
            </div>
            <div className={classes.autorisation}>

            </div>
        </div>
        <div className={classes.text}>
            <div className={classes.logo2}>
              
            </div>
            <div className={classes.Links}>
                <div className={classes.link}>
                    <a href="">ТРАНСЛЯЦИЯ</a>
                    <a href="">ТУРНИР</a>
                    <a href="">БОЙЦЫ</a>
                    <a href="">ПРОМОУШЕН</a>
                </div>
            </div>
        </div>
        <div>

        </div>
    </header>
    </>
  )
}

export default Header
