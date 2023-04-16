import {Component} from 'react';

import Section from './Section/Section';// підключення секції Section
import Statistics from './Statistics/Statistics'; // підключення секції Statistics
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'; // підключення секції FeedbackOptions
import css from "./App.module.css";// підключення стилів на картку





class App extends Component {

  // !!! ОБОВ'ЯЗКОВО 
  // (Стан застосунку повинен бути наступного вигляду, 
  // додавати нові властивості не можна)
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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };



// РЕНДНЕРІНГ сторінки
  render () {
    // Змінні для роботи
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.container}>
        <div className={css.card}>
            <Section title="Please leave feedback">
              <FeedbackOptions clickBad={this.clickBad} clickNeutral={this.clickNeutral} clickGood={this.clickGood}/>
            </Section>
            <Section title="Statistics">
              <Statistics good={good} neutral={neutral} bad={bad} countTotalFeedback={this.countTotalFeedback()}/>
            </Section>
        </div>
      </div>
    );
  }
}

export default App;