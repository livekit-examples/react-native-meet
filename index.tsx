import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { registerGlobals } from '@livekit/react-native';
import ReactNativeForegroundService from '@supersami/rn-foreground-service';

registerGlobals();
ReactNativeForegroundService.register();
AppRegistry.registerComponent(appName, () => App);
