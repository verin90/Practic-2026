import { useState } from 'react'
import classes from './Section1.module.css'
import Photo from '../constants/photo'

function Section1() {
  const [count, setCount] = useState(0)

  return (
    <>
        <section>
            <div className={classes.title}>
                <p className={classes.p1}>#</p>
                <p>БЛИЖАЙШИЕ СОБЫТИЯ</p>
            </div>
            <div className={classes.warp}>
                <div className={classes.login_data}>
                    <div className={classes.data}>
                        <img src={Photo.data} alt="" />
                    </div>
                    <div className={classes.login}>
                        <img src={Photo.logo} alt="" />
                        <img src={Photo.sdsd} alt="" />
                    </div>
                </div>
                <div className={classes.bottom_media}>
                    <div className={classes.finel}>
                        <div className={classes.finel1}>
                            <p>1/16 ФИНАЛА</p>
                        </div>
                        <div className={classes.finel2}>
                            <p>ПЕРВЕНСТВО И ГРАНДИОЗНОЕ ОТКРЫТИЕ СЕЗОНА</p>
                        </div>
                        <div className={classes.finel3}>

                        </div>
                    </div>
                    <div className={classes.buy}>
                        <p>“МЬЮЗИК МЕДИА ДОМ”</p>
                        <button>КУПИТЬ БИЛЕТЫ</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Section1
