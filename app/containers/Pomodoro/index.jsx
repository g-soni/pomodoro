import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Counter from '../../components/Counter';
import Timer from '../../components/Timer';
import Stat from '../../components/Stat';
import ControlBar from '../../components/ControlBar';
import {
  updateBreakTime,
  updateSessionTime,
  startPomodoro,
  stopPomodoro,
  clearPomodoro,
  switchPomodoroState,
  updateRemainingSeconds,
} from '../../actions';
import { COUNTER_STARTED } from '../../actions/actionTypes';

const styles = require('./styles.css');

class Pomodoro extends React.Component {

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.props.counterState === COUNTER_STARTED) {
        if (this.props.remainingSeconds === 0) {
          this.props.switchPomodoroState();
        } else {
          this.props.updateRemainingSeconds(this.props.remainingSeconds - 1);
        }
      }
    }, 1000);
  }

  componentWillUnMount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className={styles.pomodoro}>
        <div className={styles.counterContainer}>
          <Counter
            label="Session Length"
            value={this.props.sessionTime}
            increment={this.props.incrementSessionTime}
            decrement={this.props.decrementSessionTime}
          />
          <Counter
            label="Break Length"
            value={this.props.breakTime}
            increment={this.props.incrementBreakTime}
            decrement={this.props.decrementBreakTime}
          />
        </div>
        <Timer seconds={this.props.remainingSeconds} />
        <Stat
          isOnIdleState={!!this.props.remainingSeconds}
          counterState={this.props.counterState}
          pomodoroState={this.props.pomodoroState}
        />
        <ControlBar
          onStart={this.props.startPomodoro}
          onStop={this.props.stopPomodoro}
          onClear={this.props.clearPomodoro}
        />
      </div>
    );
  }
}

Pomodoro.propTypes = {
  sessionTime: PropTypes.number.isRequired,
  breakTime: PropTypes.number.isRequired,
  counterState: PropTypes.string.isRequired,
  pomodoroState: PropTypes.string.isRequired,
  remainingSeconds: PropTypes.number.isRequired,
  incrementSessionTime: PropTypes.func.isRequired,
  decrementSessionTime: PropTypes.func.isRequired,
  incrementBreakTime: PropTypes.func.isRequired,
  decrementBreakTime: PropTypes.func.isRequired,
  startPomodoro: PropTypes.func.isRequired,
  stopPomodoro: PropTypes.func.isRequired,
  clearPomodoro: PropTypes.func.isRequired,
  switchPomodoroState: PropTypes.func.isRequired,
  updateRemainingSeconds: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sessionTime: state.pomodoro.sessionTime,
  breakTime: state.pomodoro.breakTime,
  counterState: state.pomodoro.counterState,
  pomodoroState: state.pomodoro.pomodoroState,
  remainingSeconds: state.pomodoro.remainingSeconds,
});

const mapDispatchToProps = dispatch => ({
  incrementSessionTime: () => dispatch(updateSessionTime(1)),
  decrementSessionTime: () => dispatch(updateSessionTime(-1)),
  incrementBreakTime: () => dispatch(updateBreakTime(1)),
  decrementBreakTime: () => dispatch(updateBreakTime(-1)),
  startPomodoro: () => dispatch(startPomodoro()),
  stopPomodoro: () => dispatch(stopPomodoro()),
  clearPomodoro: () => dispatch(clearPomodoro()),
  switchPomodoroState: () => dispatch(switchPomodoroState()),
  updateRemainingSeconds: seconds => dispatch(updateRemainingSeconds(seconds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro);
