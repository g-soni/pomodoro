import * as React from 'react';
import PropTypes from 'prop-types';

const styles = require('./styles.css');

const ControlBar = props => (
  <div className={styles.container}>
    <div className={styles.controls}>
      <button className={`btn btn-default btn-lg ${styles.button}`} onClick={props.onStart}>
        Start
      </button>
      <button className={`btn btn-default btn-lg ${styles.button} ${styles.stop}`} onClick={props.onStop}>
        Stop
      </button>
      <button className={`btn btn-default btn-lg ${styles.button}`} onClick={props.onClear}>
        Clear
      </button>
    </div>
  </div>
);

ControlBar.propTypes = {
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default ControlBar;
