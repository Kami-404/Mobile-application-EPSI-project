import React from 'react';

const devices = await Camera.getAvailableCameraDevices()
const newCameraPermission = await Camera.requestCameraPermission()
const newMicrophonePermission = await Camera.requestMicrophonePermission()
export default class Camera extends React.Component {
    render(){
        const devices = useCameraDevices()
        const device = devices.back
        return (
            <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
          />
        )
    }
}

