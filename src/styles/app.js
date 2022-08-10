import Colors from './color';
import Fonts from './font';
import Metrics from './metric';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const TAB_BAR_HEIGHT = 41;
const NAV_BAR_HEIGHT = 56;

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.white,
      paddingBottom: 90,
    },
    mainContainerSafeAreaAddon: {
      backgroundColor: Colors.white,
    },
    alignCenterScreen: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    container: {
      flex: 1,
      padding: Metrics.baseMargin,
      backgroundColor: Colors.transparent,
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin,
    },
    sectionText: {
      ...Fonts.size.medium,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.white,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
    },
    subtitle: {
      color: Colors.white,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin,
    },
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.tertiary,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin,
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.white,
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabBarNavigation: {
    height: TAB_BAR_HEIGHT,
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
  },
  appBackground: {
    backgroundColor: Colors.grey.lightest,
    flex: 1,
  },
  footer: {
    color: Colors.black,
    marginTop: 8,
  },
  itemContainerApprove: {
    padding: 16,
    paddingBottom: 24,
    marginHorizontal: 16,
    marginBottom: 6,
    marginTop: 6,
    backgroundColor: Colors.white,
    shadowColor: Colors.translucentBlack,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 15,
    elevation: 4,
  },
  listContainerApprove: {
    width: Metrics.screenWidth,
  },
  containerApprove: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
    // paddingHorizontal: 10,
  },
  shadowPopup: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  margin: {
    small: 5,
    medium: 8,
    standard: 10,
    large: 12,
  },
  border: {
    width: {
      standard: 1,
      thick: 2,
    },
    radius: {
      pill: 50,
      rounded: 5,
      hard: 0,
    },
  },
  centerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
};

export default ApplicationStyles;
