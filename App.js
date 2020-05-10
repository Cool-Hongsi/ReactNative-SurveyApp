import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StartSurvey from './screens/StartSurvey';
import drawerNavigator from './routes/Drawer';

/* Font */
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

/* Redux */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './store';
import rootSaga from './saga';

const getFonts = () => {
  return Font.loadAsync({
    'OpenSans-Bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Regular' : require('./assets/fonts/OpenSans-Regular.ttf')
  });
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);
  const [startSurvey, setStartSurvey] = useState(false);

  if(fontLoaded){
    if(startSurvey){
      return(
        <Provider store={store}>
          <View style={styles.container}>
            {drawerNavigator()}
          </View>
        </Provider>
      )
    } else {
      return(
        <StartSurvey startSurveyClick={() => setStartSurvey(true)} />
      )
    }
  } else {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 26
  },
});
