import React, {useRef} from 'react';
import {View, Alert} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import {app, metric} from '~styles';
import {NavHeader} from '~components';

export default function QRDetail() {
  const QRRef = useRef;

  const onRead = e => {
    Alert.alert('QR scaner here', e.data, [
      () => {
        QRRef.current.reactivate();
      },
    ]);
  };

  return (
    <View style={app.screen.mainContainer}>
      <NavHeader />
      <QRCodeScanner
        onRead={onRead}
        ref={node => {
          QRRef.current = node;
        }}
        reactivateTimeout={10000}
        reactivate={true}
        showMarker={true}
        markerStyle={{
          borderColor: 'white',
          borderRadius: 10,
        }}
        containerStyle={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        topViewStyle={{display: 'none'}}
        cameraContainerStyle={{top: 75}}
        flashMode={RNCamera.Constants.FlashMode.off}
      />
    </View>
  );
}
