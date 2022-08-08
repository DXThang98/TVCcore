import NetInfo from '@react-native-community/netinfo'

export const getWifiInfo = async() => {
    try{
        const connectionInfo = await NetInfo.fetch()
        if(
            connectionInfo.type === 'wifi' &&
            connectionInfo.isConnected === true &&
            connectionInfo.isInternetReachable === true
        ) return connectionInfo
        
        throw new Error('no wifi connected')
    } catch (err) {
        if(err.message) throw new Error(err.message)
        else throw new Error('something has gone wrong')
    }
}