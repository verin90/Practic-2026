import { useState } from 'react'
import classes from './Mane.module.css'


function Mane() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
        <div className={classes.component}>
            <div className={classes.comp1}>
                <div className={classes.text}>
                    <p className={classes.p1}>УЧАСТВУЙ В МИРОВОМ</p>
                    <div className={classes.p_big}>
                        <p className={classes.p2}>ПЕРВЕНСТВЕ</p>
                        <p className={classes.p3}>#USF</p>
                    </div>
                </div>
                <div className={classes.button_text}>
                    <p className={classes.p_button}>«Grand-Prix»</p>
                    <p className={classes.p2_button}>$ 1 000 000</p>
                    <button>ЗАЯВКА НА УЧАСТИЕ</button>
                </div>
            </div>
            <div className={classes.comp2}>

            </div>
        </div>
        <div className={classes.component2}>
            <div className={classes.point1}>
                <p>ВСЕГО ПОДАНО ЗАЯВОК НА УЧАСТИЕ</p>
            </div>
            <div className={classes.point2}>
                <div className={classes.txt}>
                    <p className={classes.text}>
                        45
                    </p>
                    <p>Легкий вес</p>
                </div>
                <div className={classes.txt}>
                    <p className={classes.text}>
                        32
                    </p>
                    <p>Средний вес</p>
                </div>
                <div className={classes.txt}>
                    <p className={classes.text}>
                        13
                    </p>
                    <p>Полусредний вес</p>
                </div>
                <div className={classes.txt}>
                    <p className={classes.text}>
                        54
                    </p>
                    <p>Средний вес</p>
                </div>
                <div className={classes.txt}>
                    <p className={classes.text}>
                        22
                    </p>
                    <p>Полутяжелый вес</p>
                </div>
                <div className={classes.txt}>
                    <p className={classes.text}>
                        65
                    </p>  
                    <p>Тяжелый вес</p>                  
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default Mane