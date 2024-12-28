#!/usr/bin/env node

const { Command } = require('commander');
const pkg = require('../package.json')
const check = require('../commands/check')

const program = new Command();

program
    .command('price')
    .description('Check price of Coins')
    .option(
        '--coin <type>',
        'Add specific coin types in CSV Format',
        'BTC,ETH,XRP'
    )
    .action(cmd => check.price(cmd));

program
    .command('price-all')
    .description('Check price of Coins')
    .action(cmd => check.priceall());

program
    .command('price20')
    .description('Check price of Coins')
    .action(cmd => check.price20());


program
    .command('price5')
    .description('Check price of Coins')
    .action(cmd => check.price5());

program.parse(process.argv)