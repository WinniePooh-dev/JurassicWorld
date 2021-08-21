import {AnyAction} from 'redux';

export const timelimit = 60;

export interface UI {
  loading: boolean;
  timer: number;
}

const initialState: UI = {
  loading: false,
  timer: timelimit
};

export const SET_LOADING = 'SET_LOADING';
export const SET_TIMER = 'SET_TIMER';

export default (state = initialState, action: AnyAction): UI => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: action.payload.loading};
    case SET_TIMER:
      return {...state, timer: action.payload.timer};

    default:
      return state;
  }
};

export const setLoading = (loading: boolean): AnyAction => {
  return {type: SET_LOADING, payload: {loading}};
};

export const setTimer = (timer: number): AnyAction => {
  return {type: SET_TIMER, payload: {timer}};
};
