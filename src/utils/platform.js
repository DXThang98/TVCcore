import { Platform } from 'react-native'

export const OS = () => Platform.OS
export const version = () => Platform.Version.toString()