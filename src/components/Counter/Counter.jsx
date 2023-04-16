import React from 'react';
import css from "./Counter.module.css"; // підключення стилів на картку




// РЕНДНЕРІНГ - counter
class Counter extends React.Component {
    render () {
        return (
            <div className="Counter">

            <div className='Counter__controls'>
                <button onClick={() => {console.log("Клик - Good")}} type="button" className={css.btn}>Good</button>
                <button onClick={() => {console.log("Клик - Neutral")}} type="button" className={css.btn}>Neutral</button>
                <button onClick={() => {console.log("Клик - Bad")}} type="button" className={css.btn}>Bad</button>
            </div>

            <h2>Statistics</h2>
            <ul className='Counter_list'>
                <li className='Counter_item'>
                    <p>Good: <span className='Counter__value'>0</span></p>
                </li>
                <li className='Counter_item'>
                    <p>Neutral: <span className='Counter__value'>0</span></p>
                </li>
                <li className='Counter_item'>
                    <p>Bad: <span className='Counter__value'>0</span></p>
                </li>
                <li className='Counter_item'>
                    <p>Total: <span className='Counter__total'>0</span></p>
                </li>
                <li className='Counter_item'>
                    <p>Positive feedback: <span className='Counter__percent'>0</span> %</p>
                </li>
            </ul>
        </div>
        )
    }
}

export default Counter