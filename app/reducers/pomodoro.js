import {
  UPDATE_SESSION_TIME,
  UPDATE_BREAK_TIME,
  START_POMODORO,
  STOP_POMODORO,
  CLEAR_POMODORO,
  COUNTER_NOT_STARTED,
  COUNTER_CLEARED,
  SWITCH_POMODORO_STATE,
  UPDATE_REMAINING_SECONDS,
  SESSION_IN_PROGRESS,
  BREAK_IN_PROGRESS,
} from '../actions/actionTypes';

const initialState = {
  sessionTime: 5,
  breakTime: 2,
  counterState: COUNTER_NOT_STARTED,
  pomodoroState: SESSION_IN_PROGRESS,
  remainingSeconds: 0,
  hasSessionUpdated: false,
};

const isSessionInProgress = (state) => (state.pomodoroState === SESSION_IN_PROGRESS);
const canUpdateTime = (time, timeToUpdate) => time === 1 && timeToUpdate < 0


export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SESSION_TIME:
      return canUpdateTime(state.sessionTime, action.byAmount) ? state : {
        ...state,
        sessionTime: state.sessionTime + action.byAmount,
        hasSessionUpdated: true,
      };

    case UPDATE_BREAK_TIME:
      return canUpdateTime(state.breakTime, action.byAmount) ? state : {
        ...state,
        breakTime: state.breakTime + action.byAmount,
      };

    case START_POMODORO: {
      let remainingSeconds = state.remainingSeconds;
      let pomodoroState = state.pomodoroState;

      if (
        state.hasSessionUpdated ||
        state.counterState === COUNTER_NOT_STARTED ||
        state.counterState === COUNTER_CLEARED
      ) {
        remainingSeconds = state.sessionTime * 60;
        pomodoroState = SESSION_IN_PROGRESS;
      }

      return {
        ...state,
        counterState: action.state,
        hasSessionUpdated: false,
        remainingSeconds,
        pomodoroState,
      };
    }

    case STOP_POMODORO:
      return {
        ...state,
        counterState: action.state,
      };

    case CLEAR_POMODORO:
      return {
        ...state,
        counterState: action.state,
        remainingSeconds: 0,
      };

    case SWITCH_POMODORO_STATE: {
      const pomodoroState = isSessionInProgress(state) ? BREAK_IN_PROGRESS : SESSION_IN_PROGRESS;

      const remainingSeconds = (isSessionInProgress(state) ? state.breakTime : state.sessionTime) * 60;

      return {
        ...state,
        pomodoroState,
        remainingSeconds,
      };
    }
  
    case UPDATE_REMAINING_SECONDS:
      return {
        ...state,
        remainingSeconds: action.seconds,
      };

    default:
      return state;
  }
};
