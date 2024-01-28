const mockImpl = new (require('@react-native-async-storage/async-storage').AsyncStorage)();

jest.mock('@react-native-async-storage/async-storage', () => ({
  ...mockImpl,
  multiGet: jest.fn(),
  multiSet: jest.fn(),
  multiRemove: jest.fn(),
  multiMerge: jest.fn(),
}));

export default mockImpl;