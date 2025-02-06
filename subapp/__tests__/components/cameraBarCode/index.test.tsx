import React from 'react';
import { create, act } from 'react-test-renderer';
import CameraBarCode from '../../../src/components/cameraBarCode/index'; 

// Mock de react-native-vision-camera
const mockRequestCameraPermission = jest.fn().mockResolvedValue('authorized');
const mockGetCameraPermissionStatus = jest.fn().mockResolvedValue('authorized');
const mockGetAvailableCameraDevices = jest.fn().mockResolvedValue([{
  id: 'back-camera',
  position: 'back',
  name: 'Back Camera'
}]);

jest.mock('react-native-vision-camera', () => ({
  Camera: jest.fn(() => null),
  getCameraPermissionStatus: (...args) => mockGetCameraPermissionStatus(...args),
  requestCameraPermission: (...args) => mockRequestCameraPermission(...args),
  getAvailableCameraDevices: (...args) => mockGetAvailableCameraDevices(...args)
}));

describe('CameraBarCode Component', () => {
  const defaultProps = {
    ableToRead: true,
    handleReadCode: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Función helper para esperar a que las promesas se resuelvan
  const waitForEffects = async () => {
    await act(async () => {
      await Promise.resolve();
      await new Promise(resolve => setTimeout(resolve, 0));
    });
  };

  it('does not render camera when permission is denied', async () => {
    mockGetCameraPermissionStatus.mockResolvedValueOnce('denied');
    let component;
    await act(async () => {
      component = create(<CameraBarCode {...defaultProps} />);
    });
    await waitForEffects();
    expect(component.toJSON()).toBeNull();
  });

  it('does not render camera when no back camera is available', async () => {
    mockGetAvailableCameraDevices.mockResolvedValueOnce([]);
    let component;
    await act(async () => {
      component = create(<CameraBarCode {...defaultProps} />);
    });
    await waitForEffects();
    expect(component.toJSON()).toBeNull();
  });

  it('does not render camera when isReading is false', async () => {
    let component;
    await act(async () => {
      component = create(
        <CameraBarCode {...defaultProps} ableToRead={false} />
      );
    });
    await waitForEffects();
    expect(component.toJSON()).toBeNull();
  });
});
