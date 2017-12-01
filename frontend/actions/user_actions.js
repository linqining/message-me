import { searchUserDatabase } from '../util/user_api_util';
export const RECEIVE_USER_SEARCH_RESULTS = 'RECEIVE_USER_SEARCH_RESULTS';
export const RECEIVE_USER_SELECTION = 'RECEIVE_USER_SELECTION';
export const CLEAR_USER_SELECTIONS = 'CLEAR_USER_SELECTIONS';

const receiveUserSearchResults = (users) => ({
  type: RECEIVE_USER_SEARCH_RESULTS,
  users
});

export const receiveUserSelection = (user) => ({
  type: RECEIVE_USER_SELECTION,
  user
});

export const clearUserSelections = () => ({
  type: CLEAR_USER_SELECTIONS
});

export const searchDatabase = (query) => (dispatch) => (
  searchUserDatabase(query).then(
    (users) => dispatch(receiveUserSearchResults(users))
  )
);