import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform} from 'react-native';

const toRad = x => (x * Math.PI) / 180;
const earthRadius = 6371;

//remember [longitude, latittude]
export const distanceBetween = (pointA, pointB) => {
  const [lngA, latA] = pointA;
  const [lngB, latB] = pointB;

  const deltaLat = latB - latA;
  const deltaLng = lngB - lngA;

  const radDeltaLat = toRad(deltaLat);
  const radDeltaLng = toRad(deltaLng);

  const haversine =
    Math.sin(radDeltaLat / 2) * Math.sin(radDeltaLat / 2) +
    Math.cos(toRad(latA)) *
      Math.cos(toRad(latB)) *
      Math.sin(radDeltaLng / 2) *
      Math.sin(radDeltaLng / 2);

  const distance =
    2 *
    Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine)) *
    earthRadius;

  return distance;
};

export const getLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    const permission = await Geolocation.requestAuthorization('whenInUse');
    if (permission === 'granted') return true;
  }

  if (Platform.OS === 'android') {
    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (permission === PermissionsAndroid.RESULTS.GRANTED) return true;
  }

  return false;
};

export const getLocation = async (callbackSuccess, callbackError) => {
  const permission = await getLocationPermission();
  if (permission) {
    Geolocation.getCurrentPosition(
      position => {
        callbackSuccess(position);
      },
      error => {
        callbackError(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  } else {
    throw new Error('you need permission to use this feature');
  }
};
