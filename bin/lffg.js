#! /usr/bin/env node

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const { run } = require('../src');
const { parseArgv } = require('../src/utils/argv');

run(parseArgv());
