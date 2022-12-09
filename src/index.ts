import baseX from 'base-x';

const BASE_36_CHARSET = '0123456789abcdefghijklmnopqrstuvwxyz';
const base36 = baseX(BASE_36_CHARSET);

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export function encode(text: string): string {
  return base36.encode(encoder.encode(text));
}

export function decode(base36string: string): string {
  return decoder.decode(base36.decode(base36string));
}
