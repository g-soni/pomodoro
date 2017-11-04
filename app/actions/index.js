import {
  COUNTER_STARTED,
  COUNTER_PAUSED,
  COUNTER_CLEARED,
  UPDATE_SESSION_TIME,
  UPDATE_BREAK_TIME,
  START_POMODORO,
  CLEAR_POMODORO,
  STOP_POMODORO,
  UPDATE_REMAINING_SECONDS,
  SWITCH_POMODORO_STATE,
} from './actionTypes';

export const startPomodoro = () => ({
  type: START_POMODORO,
  state: COUNTER_STARTED,
});

export const stopPomodoro = () => ({
  type: STOP_POMODORO,
  state: COUNTER_PAUSED,
});

export const clearPomodoro = () => ({
  type: CLEAR_POMODORO,
  state: COUNTER_CLEARED,
});

export const updateSessionTime = byAmount => ({
  type: UPDATE_SESSION_TIME,
  byAmount,
});

export const updateBreakTime = byAmount => ({
  type: UPDATE_BREAK_TIME,
  byAmount,
});

export const switchPomodoroState = () => ({
  type: SWITCH_POMODORO_STATE,
});

export const updateRemainingSeconds = seconds => ({
  type: UPDATE_REMAINING_SECONDS,
  seconds,
});
