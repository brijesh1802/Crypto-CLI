#!/usr/bin/env node

const { Command } = require('commander');
const pkg = require('../package.json');
const check = require('../commands/check');

const program = new Command();

program
  .command('price')
  .description('Check price of specific cryptocurrency(ies)')
  .option(
    '--coin <types>',
    'Comma-separated list of coin types (e.g., BTC,ETH,XRP)',
    'BTC,ETH,XRP'
  )
  .action(cmd => check.price(cmd));

program
  .command('price-all')
  .description('Check prices of all available cryptocurrencies')
  .action(cmd => check.priceall());

program
  .command('price20')
  .description('Check top 20 cryptocurrencies by price')
  .action(cmd => check.price20());

program
  .command('price5')
  .description('Check top 5 cryptocurrencies by price')
  .action(cmd => check.price5());

program.parse(process.argv);
