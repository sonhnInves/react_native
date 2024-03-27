import Token from '../../models/token';
import {UserAction} from '../actions';
import {combineReducers} from 'redux';

type UserState = {
  user: Token;
  error: string | undefined;
  loading: boolean;
};

const initialState = {
  user: {} as Token,
  error: undefined,
  loading: false,
};

const UserReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case 'ON_LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'ON_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SHOW_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'HIDE_LOADING':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export {UserReducer};
export default combineReducers({
  UserReducer,
});
