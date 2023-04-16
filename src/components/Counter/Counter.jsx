import React from 'react';
import css from "./Counter.module.css"; // підключення стилів на картку




// РЕНДНЕРІНГ - counter
class Counter extends React.Component {

    // !!! ОБОВ'ЯЗКОВО (Стан застосунку повинен бути наступного вигляду, додавати нові властивості не можна)
      state = {
        good: 0,
        neutral: 0,
        bad: 0
      }


    // BUTTON - Good команди при click
    clickGood = () => {
        console.log("Клик - Good");

        // Додавання обов'язково робимо через функцію, з поверненням стану
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            }  
        });
    }

    // BUTTON - Neutral команди при click
    clickNeutral = () => {
        console.log("Клик - Neutral");

        // Додавання обов'язково робимо через функцію, з поверненням стану
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            }  
        });

    }

    // BUTTON - Bad команди при click
    clickBad = () => {
        console.log("Клик - Bad");

        // Додавання обов'язково робимо через функцію, з поверненням стану
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            }  
        });
    }

    // МЕТОД - відображення загальної кількості зібраних відгуків
    // countTotalFeedback()



    // МЕТОД - відсоток позитивних відгуків
    // countPositiveFeedbackPercentage()


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
                    <p>Good: <span className={css.counter__value}>{this.state.valueGod}</span></p>
                </li>
                <li className='Counter_item'>
                    <p>Neutral: <span className={css.counter__value}>{this.state.valueNeutral}</span></p>
                </li>
                <li className='Counter_item'>
                    <p>Bad: <span className={css.counter__value}>{this.state.valueBad}</span></p>
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