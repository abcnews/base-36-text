import 'core-js';
import { encode, decode } from '../dist/base-36-text.esm.js';

window.b36t = { encode, decode };

console.log('Try b36t.encode() and b36t.decode() here');
