import * as APIUtil from 'util/conversation_list_api_util';
export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS';
export const START_LOADING_INDEX = 'START_LOADING_INDEX';
export const RECEIVE_NEW_CONVERSATION ='RECEIVE_NEW_CONVERSATION';

export const receiveConversations = conversations => ({
  type: RECEIVE_CONVERSATIONS,
  conversations
});

const startLoadingIndex = () => ({
  type: START_LOADING_INDEX
})

export const fetchConversations = () => dispatch => {
  dispatch(startLoadingIndex());
  return APIUtil.fetchConversations().then(conversations => (
    dispatch(receiveConversations(conversations))
  ));
};

export const receiveNewConversation = newConversation => ({
  type: RECEIVE_NEW_CONVERSATION,
  newConversation
})