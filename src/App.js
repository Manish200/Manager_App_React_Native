import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC_mDuKuGF7OvmbwwNVf6l0z69fP_os8wE',
      authDomain: 'manager-ab596.firebaseapp.com',
      databaseURL: 'https://manager-ab596.firebaseio.com',
      projectId: 'manager-ab596',
      storageBucket: 'manager-ab596.appspot.com',
      messagingSenderId: '1013593462640'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return(

        <Provider store = {store}>
          <Router />
        </Provider>
    );
  }
}

export default App;
