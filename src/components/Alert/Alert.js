import React, {Component, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import RootSiblings from 'react-native-root-siblings';

import styles from './styles';

const AlertContainer = props => {
  const {closeOnTouch = true, visible = true, message, title} = props;

  const [isVisible, setVisible] = useState(visible);

  const hide = () => setVisible(false);
  const handleTouchBackdrop = () => {
    if (closeOnTouch) hide();
  };

  return (
    <>
      {isVisible ? (
        <View style={styles.modalWrapper}>
          <TouchableOpacity
            style={styles.modalUnderlay}
            onPress={handleTouchBackdrop}
          />
          <View style={styles.modalContainer}>
            {title ? (
              <View style={styles.alertTitle}>
                <Text style={styles.modalTitle}>{title}</Text>
              </View>
            ) : null}
            <View style={styles.alertContent}>
              <Text style={styles.modalMessage}>{message}</Text>
            </View>
            <TouchableOpacity onPress={hide}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>OK</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </>
  );
};

export class Alert extends Component {
  static displayName = 'Alert';

  static alert = (message, options = {}) =>
    new RootSiblings(
      <AlertContainer message={message} {...options} visible={true} />,
    );

  static hide = alert => {
    if (alert instanceof RootSiblings) {
      alert.destroy();
    } else {
      console.warn(
        `Alert.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof alert}\` instead.`,
      );
    }
  };

  _alert = null;

  componentDidMount() {
    this._alert = new RootSiblings(<AlertContainer {...this.props} />);
  }

  componentDidUpdate() {
    this._alert.update(<AlertContainer {...this.props} />);
  }

  componentWillUnmount() {
    this._alert.destroy();
  }

  render() {
    return null;
  }
}

