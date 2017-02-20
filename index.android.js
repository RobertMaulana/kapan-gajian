/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import moment from 'moment'
import locale_id from 'moment/locale/id'

export default class KapanGajian extends Component {
  render() {
    let now = moment();
    let date_payday = 25;
    let summary = '';
    let next_payday = '';
    let last_payday = '';

    let last_month = parseInt(now.get('month')) + 1 - 1;
    let this_month = parseInt(now.get('month')) + 1;
    let next_month = parseInt(now.get('month')) + 1 + 1;

    let tes_hari  = moment();

    if (now.get('date') < date_payday) {
      summary = 'belum gajian';
      last_payday = moment(date_payday + '-'+ last_month +'-2017', 'DD-MM-YYYY');
      next_payday = moment(date_payday + '-'+ this_month +'-2017', 'DD-MM-YYYY');

    } else if (now.get('date') > date_payday) {
      summary = 'sudah gajian';
      last_payday = moment(date_payday + '-'+ this_month +'-2017', 'DD-MM-YYYY');
      next_payday = moment(date_payday + '-'+ next_month +'-2017', 'DD-MM-YYYY');

    } else {
      summary = 'gajian';
      last_payday = moment(date_payday + '-'+ this_month +'-2017', 'DD-MM-YYYY');
      next_payday = moment(date_payday + '-'+ next_month +'-2017', 'DD-MM-YYYY');
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            🎉 Alhamdulillah, gajian!
          </Text>
        </View>
      )
    }

    // next_payday = moment('25-02-2017', 'DD-MM-YYYY');

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          💰 Gajian masih { next_payday.fromNow() }!
        </Text>
        <Text style={styles.instructions}>
          Mohon bersabar ini masih tanggal { now.format('LL') }, {'\n'}
          sisa gaji { last_payday.fromNow() } masih ada kan?
        </Text>
        <Text style={styles.instructions}>
          Terakhir gajian { last_payday.format('LL') } {'\n'}
          Gajian berikutnya { next_payday.format('LL') } {'\n'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('KapanGajian', () => KapanGajian);
