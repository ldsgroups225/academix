import AsyncStorage from '@react-native-async-storage/async-storage';
import { addStoreDataAsync, getStoreDataAsync, getStoreStringAsync, removeStoreDataAsync } from './index';
import { StoreEnum } from './storeEnum';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe('addStoreDataAsync', () => {
  it('should store the data in AsyncStorage', async () => {
    const key = StoreEnum.ColorMode;
    const value = 'testValue';

    await addStoreDataAsync(key, value);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(key.toString(), value);
  });

  it('should stringify the value if it is an object', async () => {
    const key = StoreEnum.ColorMode;
    const value = { foo: 'bar' };

    await addStoreDataAsync(key, JSON.stringify(value));

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(key.toString(), JSON.stringify(value));
  });
});

describe('getStoreDataAsync', () => {
  it('should return the stored data', async () => {
    const key = StoreEnum.ColorMode;
    const value = 'exampleValue';
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(value));

    const result = await getStoreDataAsync(key);

    expect(result).toEqual(value);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(key.toString());
  });

  it('should return an empty string if the stored data is null', async () => {
    const key = StoreEnum.ColorMode;
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

    const result = await getStoreDataAsync(key);

    expect(result).toEqual('');
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(key.toString());
  });

  it('should return an empty string if there is an error', async () => {
    const key = StoreEnum.ColorMode;
    (AsyncStorage.getItem as jest.Mock).mockRejectedValue(new Error('AsyncStorage error'));

    const result = await getStoreDataAsync(key);

    expect(result).toEqual('');
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(key.toString());
  });
});


describe('getStoreStringAsync', () => {
  it('should return the stored string', async () => {
    const key = StoreEnum.ColorMode;
    const value = 'exampleValue';
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(value);

    const result = await getStoreStringAsync(key);

    expect(result).toEqual(value);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(key.toString());
  });

  it('should return an empty string if the value is null', async () => {
    const key = StoreEnum.ColorMode;
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

    const result = await getStoreStringAsync(key);

    expect(result).toEqual('');
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(key.toString());
  });

  it('should return an empty string if an error occurs', async () => {
    const key = StoreEnum.ColorMode;
    (AsyncStorage.getItem as jest.Mock).mockRejectedValue(new Error('AsyncStorage error'));

    const result = await getStoreStringAsync(key);

    expect(result).toEqual('');
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(key.toString());
  });
});


describe('removeStoreDataAsync', () => {
  it('should remove the data from AsyncStorage', async () => {
    const key = StoreEnum.ColorMode;
    await removeStoreDataAsync(key);

    expect(AsyncStorage.removeItem).toHaveBeenCalledWith(key.toString());
  });

  it('should handle errors', async () => {
    const key = StoreEnum.ColorMode;
    const error = new Error('AsyncStorage error');
    (AsyncStorage.removeItem as jest.Mock).mockRejectedValue(error); //Corrected Mock

    await expect(removeStoreDataAsync(key)).rejects.toThrow();
  });
});
