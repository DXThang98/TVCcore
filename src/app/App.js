import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import RootNavigation from '~navigation';
import {getConfig} from '~slices/config';
import {getData} from '~utils/storage';
import {delay} from '~utils/general';

export function App() {
  const config = useSelector(state => state.config);
  const dispatch = useDispatch();

  //get company code from local storage and dispatch if have any
  useEffect(() => {
    (async function loadConfig() {
      const customerCode = await getData('customerCode');

      if (customerCode) dispatch(getConfig({customerCode}));
      else SplashScreen.hide();
    })();
  }, []);

  //just in case if we dispatch => need watcher to close splash screen
  useEffect(() => {
    if (config.data)
      (async function hideSplash() {
        await delay(1000);
        SplashScreen.hide();
      })();
  }, [config.data]);

  return <RootNavigation />;
}
