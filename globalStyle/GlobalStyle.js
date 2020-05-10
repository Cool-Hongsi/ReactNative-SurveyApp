import { StyleSheet, Dimensions } from 'react-native';

export const globalStyles = StyleSheet.create({
  surveyContainer: {
    marginVertical: 20,
  },
  surveyTitle: {
    fontSize: 18,
    marginBottom: 15
  },
  apiCallingPage: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: 'rgba(33, 33, 33, .8)',
    zIndex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  apiCallingText: {
    color: '#fff',
    fontSize: 24,
    zIndex: 3,
    paddingBottom: 120
  }
});
