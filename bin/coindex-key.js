#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .name('coindex')
  .description('A CLI tool for managing cryptocurrency settings')
  .version('1.0.0');

program.parse(process.argv);
