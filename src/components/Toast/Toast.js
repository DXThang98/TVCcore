import React, {Component, useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import RootSiblings from 'react-native-root-siblings';

import {Avatar} from '~components/Avatar';

import styles from './styles';

const ToastContainer = props => {
  const {closeOnTouch = true, message, title, close, id} = props;
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    let timer;

    if (isVisible) {
      timer = setTimeout(() => {
        handleHide();
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleHide = () => {
    close(id);
    setVisible(false);
  };

  return (
    <>
      {isVisible ? (
        <View style={[styles.toastContainer, {top: id * 55}]}>
          <TouchableOpacity style={{flex: 1}} onPress={handleHide}>
            <View style={styles.toast}>
              <View style={styles.toastIcon}>
                <Avatar />
              </View>
              <View style={styles.toastMessage}>
                <Text style={styles.message}>{message}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};

let elements = {};

export class Toast extends Component {
  static displayName = 'Alert';

  static toast = (message, options = {}) => {
    const index = Object.keys(elements).length;
    let sibling = new RootSiblings(
      (
        <ToastContainer
          {...options}
          id={Object.keys(elements).length}
          close={id => this.hide(id)}
          message={message}
        />
      ),
    );
    elements[index] = sibling;
  };

  static hide = id => {
    if (elements[id]) {
      elements[id].manager.destroy();
      delete elements[id];
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
