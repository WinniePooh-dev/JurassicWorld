import {AnyAction} from 'redux';

export interface UI {
  loading: boolean;
}

const initialState: UI = {
  loading: false
};

export const SET_LOADING = 'SET_LOADING';

export default (state = initialState, action: AnyAction): UI => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: action.payload.loading};

    default:
      return state;
  }
};

export const setLoading = (loading: boolean): AnyAction => {
  return {type: SET_LOADING, payload: {loading}};
};
