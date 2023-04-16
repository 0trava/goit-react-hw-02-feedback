import React from 'react';
import css from "./Counter.module.css"; // підключення стилів на картку




// РЕНДНЕРІНГ - counter
class Counter extends React.Component {

    // BUTTON - Good команди при click
    clickGood = () => {
        console.log("Клик - Good");
    }

    // BUTTON - Neutral команди при click
    clickNeutral = () => {
        console.log("Клик - Neutral");

    }

    // BUTTON - Bad команди при click
    clickBad = () => {
        console.log("Клик - Bad");

    }



    render () {
        return (
            <div className="Counter">

            <div className='Counter__controls'>
                <button onClick={this.clickGood} type="button" className={css.btn}>Good</button>
                <button onClick={this.clickNeutral} type="button" className={css.btn}>Neutral</button>
                <button onClick={this.clickBad} type="button" className={css.btn}>Bad</button>
            </div>

            <h2 className={css.counter__stat_title}>Statistics</h2>
            <ul className={css.counter__list}>
                <li className='Counter_item'>
                    <p>Good: <span className={css.counter__value}>0</span></p>
                </li>
                <li className='Counter_item'>
                    <p>Neutral: <span className={css.counter__value}>0</span></p>
                </li>
                <li className='Counter_item'>
                    <p>Bad: <span className={css.counter__value}>0</span></p>
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