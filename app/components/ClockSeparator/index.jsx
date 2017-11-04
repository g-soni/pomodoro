import * as React from 'react';

const styles = require('./styles.css');

const ClockSeparator = () => (
  <span className={styles.separator}>
    <span className={styles.topDot} />
    <span className={styles.bottomDot} />
  </span>
);

export default ClockSeparator;
