import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CameraScreen from './CameraScreen';

jest.mock('expo-camera', () => {
  return {
    Camera: {
      requestPermissionsAsync: jest.fn().mockResolvedValue({ status: 'granted' }),
    },
    Constants: {
      Type: {
        back: 1,
      },
    },
  };
});

test('It renders the camera preview', async () => {
  const { getByTestId, queryByText } = render(<CameraScreen />);

  await new Promise((r) => setTimeout(r, 0));

  const cameraPreview = getByTestId('camera-preview');
  expect(cameraPreview).toBeTruthy();

  const noAccessText = queryByText('No access to camera');
  expect(noAccessText).toBeNull();
});

test('It takes a picture when the "Snap" button is pressed', async () => {
  const { getByTestId, getByText } = render(<CameraScreen />);

  await new Promise((r) => setTimeout(r, 0));

  const mockTakePictureAsync = jest.fn().mockResolvedValue({ uri: 'mocked_uri' });
  getByTestId('camera-preview').takePictureAsync = mockTakePictureAsync;

  const snapButton = getByText('Snap');
  fireEvent.press(snapButton);

  await new Promise((r) => setTimeout(r, 0));

  const cameraScreenInstance = getByTestId('camera-preview');
  expect(cameraScreenInstance.state.photo).toBe('mocked_uri');
});
