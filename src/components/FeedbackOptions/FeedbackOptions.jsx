import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'; // підключення стилів на картку


function FeedbackOptions({clickBad, clickNeutral, clickGood}) {
    return (
        <div className='Counter__controls'>
            <button  onClick={clickGood} type="button" className={css.btn}>Good</button>
            <button  onClick={clickNeutral} type="button" className={css.btn}>Neutral</button>
            <button  onClick={clickBad} type="button" className={css.btn}>Bad</button>
        </div>
    );
  }
  
//   FeedbackOptions.prototype = {
//     options: PropTypes.arrayOf(PropTypes.string).isRequired,
//     onLeaveFeedback: PropTypes.func.isRequired,
//   };
  
  export default FeedbackOptions;