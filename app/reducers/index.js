import { combineReducers } from 'redux';
import pomodoro from './pomodoro';

const reducers = {
  pomodoro,
};

export default combineReducers(reducers);
