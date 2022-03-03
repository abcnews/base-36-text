import { encode, decode } from './index';

const TEXT = 'example text';
const B36 = '31ltulurfcfzwo4gm7o';

describe('encode', () => {
  test('encodes text to expected string', () => {
    expect(encode(TEXT)).toBe(B36);
  });
});
describe('decode', () => {
  test('decodes string to expected text', () => {
    expect(decode(B36)).toBe(TEXT);
  });
});
