import * as React from 'react';
import PropTypes from 'prop-types';
import {
  COUNTER_STARTED,
  COUNTER_PAUSED,
  SESSION_IN_PROGRESS,
} from '../../actions/actionTypes';

const styles = require('./styles.css');

const Stat = ({ counterState, pomodoroState, isOnIdleState }) => {
  let statText = 'Pomodoro';

  if (isOnIdleState && counterState === COUNTER_PAUSED || counterState === COUNTER_STARTED) {
    statText = pomodoroState === SESSION_IN_PROGRESS ? 'Session' : 'Break';
  }

  return (
    <div className={styles.statRow}>
      <div className={styles.stats}>
        {statText}
      </div>
    </div>
  );
};

Stat.propTypes = {
  counterState: PropTypes.string.isRequired,
  isOnIdleState: PropTypes.bool.isRequired,
  pomodoroState: PropTypes.string.isRequired,
};

export default Stat;
