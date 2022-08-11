/** @format */

import {StyleSheet} from 'react-native';
import {metric, color} from '~styles';

export default StyleSheet.create({
  modalWrapper: {
    flex: 1,
    position: 'absolute',
    width: metric.screenWidth,
    height: metric.screenHeight,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: color.translucentBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalUnderlay: {
    position: 'absolute',
    width: metric.screenWidth,
    height: metric.screenHeight,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: color.transparent,
  },
  modalContainer: {
    width: metric.screenWidth * 0.75,
    backgroundColor: color.white,
    opacity: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  alertContent: {
    width: metric.screenWidth * 0.75,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  alertView: {
    alignItems: 'flex-start',
  },
  modalTitle: {
    color: color.black,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  alertTitle: {
    borderBottomWidth: 1,
    borderBottomColor: color.grey.lighter,
    paddingVertical: 10,
  },
  modalMessage: {
    fontSize: 18,
    color: color.black,
  },
  button: {
    width: metric.screenWidth * 0.75,
    height: 40,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: color.grey.lighter,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: color.error,
    fontSize: 18,
    backgroundColor: color.transparent,
  },
  scrollViewStyles: {
    maxHeight: metric.screenWidth * 0.5,
  },
});
