import { Navigation } from 'react-native-navigation';
Navigation.registerComponent('wm.mmm', () => require('./mmm').default);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'wm.mmm'
      }
    }
  });
});