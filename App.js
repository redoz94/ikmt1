import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://www.iknowmytoys.com/' }} style={{ marginTop: 20 }} />;
  }
}