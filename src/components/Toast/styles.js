/** @format */

import {StyleSheet, Dimensions} from 'react-native';
import {metric, color} from '~styles';

export default StyleSheet.create({
  toastContainer: {
    left: 0,
    height: 50,
    width: metric.screenWidth,
    backgroundColor: color.transparent,
    position: 'absolute',
  },
  toast: {
    flex: 1,
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  toastIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastMessage: {
    justifyContent: 'center',
    flex: 1,
  },
  message: {
    color: color.black,
  },
});
