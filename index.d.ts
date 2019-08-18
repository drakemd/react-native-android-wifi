declare module 'react-native-android-wifi' {
    import { NativeModules } from 'react-native'
    
    function loadWifiList(successCallback: any, errorCallback: any): void
    function forceWifiUsage(useWifi: boolean): void
    function connectionStatusOfBoundNetwork(connectionStatusResult: any): void
    function isEnabled(callback: any): void
    function setEnabled(enabled: boolean): void
    function findAndConnect(ssid: string, password: string, ssidFoundCallback: any): void
    function connectionStatus(connectionStatusResult: any): void
    function connectTo(result: any, password: string, ssid: string): boolean
    function setWifiConfig(ssid: string, sharedKey: string): number
    function connectToHiddenNetwork(ssid: string, password: string, networkAddedCallback: any): void
    function disconnect(): void
    function getSSID(callback: any): void
    function getBSSID(callback: any): void
    function getCurrentSignalStrength(callback: any): void
    function getFrequency(callback: any): void
    function getIP(callback: any): void
    function isRemoveWifiNetwork(ssid: string, callback: any): void
    function reScanAndLoadWifiList(successCallback: any, errorCallback: any): void
    function getDhcpServerAddress(callback: any): void

    export{
        loadWifiList,
        forceWifiUsage,
        connectionStatusOfBoundNetwork,
        isEnabled,
        setEnabled,
        findAndConnect,
        connectionStatus,
        connectTo,
        setWifiConfig,
        connectToHiddenNetwork,
        disconnect,
        getSSID,
        getBSSID,
        getCurrentSignalStrength,
        getFrequency,
        getIP,
        isRemoveWifiNetwork,
        reScanAndLoadWifiList,
        getDhcpServerAddress
    }
}