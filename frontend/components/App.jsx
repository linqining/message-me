
import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  withRouter
} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MessageListContainer from './message_list/message_list_container';
import ConversationListContainer from './conversation_list/conversation_list_container';
import MessageInputContainer from './message_input/message_input_container';

const App = () => (
  <div className="app">
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route exact path="/" render={()=>(<Redirect to="/login"/>)} />

    <ProtectedRoute path="/conversations" component={ConversationListContainer} />
    <ProtectedRoute path="/conversations" component={MessageListContainer} />
    <ProtectedRoute path="/conversations" component={MessageInputContainer} />

  </div>
);

export default App;

// <ProtectedRoute path="/conversations" component={ConversationsContainer} />
// <ProtectedRoute path="/conversations" component={MessageInputContainer} />
