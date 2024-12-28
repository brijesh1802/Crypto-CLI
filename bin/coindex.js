#!/usr/bin/env node

const { Command } = require('commander');
const pkg = require('../package.json');

// Create the main program instance
const program = new Command();

// Define the version and description
program
  .version(pkg.version)
  .description('Crypto CLI tool to check and manage cryptocurrency prices and settings');

// Add the 'check' command from the separate file
program
  .command('check', 'Check Coin Price and Other Information')
  .alias('c') // Optionally add an alias for convenience
  .action(() => {
    require('./coindex-check.js'); // Execute the coindex-check.js file
  });

// Parse the command-line arguments
program.parse(process.argv);
