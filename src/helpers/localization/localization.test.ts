import translate from './index';

describe('translate', () => {
  it('should return the translated string', () => {
    jest.mock('@providers/Localization', () => ({
      t: jest.fn((key: string) => {
        if (key === 'hello') return 'translated hello';
        return `[missing "${key}" translation]`;
      }),
    }));
    const translatedString = translate('hello');
    expect(translatedString).toEqual('translated hello');
  });
});
