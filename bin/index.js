#!/usr/bin/env node

const sade = require('sade');
const { bin, version } = require('../package.json');
const { encode, decode } = require('../dist');

const program = sade(Object.keys(bin)[0]);

program.version(version);

program
  .command('encode <text>')
  .describe('Encode text as a base36 string')
  .action(text => {
    let encoded;
    try {
      encoded = encode(text);
    } catch (err) {
      console.error(err);
      process.exit(0);
    }

    console.log(encoded);
    process.exit(1);
  });

program
  .command('decode <base36-string>')
  .describe('Decode text from a base36 string')
  .action(base36String => {
    let decoded;
    try {
      decoded = decode(base36String);
    } catch (err) {
      console.error(err);
      process.exit(0);
    }

    console.log(decoded);
    process.exit(1);
  });

program.parse(process.argv);
