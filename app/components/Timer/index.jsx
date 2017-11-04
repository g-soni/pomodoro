import * as React from 'react';
import PropTypes from 'prop-types';

import Digit from '../Digit';
import Separator from '../ClockSeparator';
import generateArray from '../../utils/generateArray';
import {
  extractMinutes,
  extractSeconds,
  getStandardTimeDigits,
} from '../../utils/timer';

const styles = require('./styles.css');

const Timer = (props) => {
  let seconds = extractSeconds(props.seconds);
  let minutes = extractMinutes(props.seconds);

  minutes = getStandardTimeDigits(minutes);
  seconds = getStandardTimeDigits(seconds);

  const numberOfDigitsInMinute = minutes.length;

  return (
    <div className={styles.container}>
      <div className={styles.timerContainer}>
        <p>Minutes</p>
        <div className={styles.digitContainer}>
          {
            generateArray(numberOfDigitsInMinute).map(index => (
              <Digit key={index} value={minutes[index]} />
            ))
          }
        </div>
      </div>
      <div className={styles.separator}>
        <Separator />
      </div>
      <div className={styles.timerContainer}>
        <p>Seconds</p>
        <div className={styles.digitContainer}>
          <Digit value={seconds[0]} />
          <Digit value={seconds[1]} />
        </div>
      </div>
    </div>
  );
};

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default Timer;
