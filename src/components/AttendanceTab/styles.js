import {StyleSheet} from 'react-native';
import {app, color, font, metric} from '~styles';

export default StyleSheet.create({
  container: {
    backgroundColor: color.white,
    padding: metric.baseMargin,
    margin: metric.baseMargin,
    borderRadius: app.border.radius.rounded,
    borderWidth: 1,
    borderColor: 'gray',
  },
  overview: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon__container: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: color.primary,
    color: color.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon__content: {
    color: color.white,
    fontSize: font.size.extraLarge,
  },
  info__container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
  },
  info__upper: {},
  info__lower: {},
  button__container: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detail__container: {
    marginTop: metric.baseMargin,
  },
  detail__item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
