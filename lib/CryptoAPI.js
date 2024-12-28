const axios = require('axios');
const colors = require('colors');
const inquirer = require('inquirer');

const currencySymbols = {
    USDT: '$',
    JPY: '¥',
    EUR: '€',
    INR: '₹',
    NGN: '₦',
    IDR: 'Rp',
    ARS: 'AR$',
};

const cryptoAPI = {
    async getPriceData(symbol) {
        try {
            const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}USDT`;
            const response = await axios.get(url);

            if (response.data && response.data.price) {
                const price = parseFloat(response.data.price).toFixed(3);
                return `Price for ${colors.yellow(symbol)}: ${colors.green(`$${price}`)}`;
            } else {
                throw new Error('Price data not found');
            }
        } catch (error) {
            console.error('Error fetching price data:', error.message.red);
        }
    },

    async getAllPrices() {
        try {
            // Fetch all prices
            const url = 'https://api.binance.com/api/v3/ticker/price';
            const response = await axios.get(url);
            const prices = response.data;

            // Predefined list of currencies
            const currencies = Object.keys(currencySymbols);

            // Ask user to select a currency
            const { currency } = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'currency',
                    message: 'Select the currency you want to filter by:',
                    choices: currencies,
                },
            ]);

            // Filter results by the selected currency
            const filteredPrices = prices.filter((price) => price.symbol.endsWith(currency));

            if (filteredPrices.length === 0) {
                console.log(`No prices found for currency: ${currency}`.red);
                return;
            }

            console.log(`Prices in ${currency} (${currencySymbols[currency] || '?'})`.green);
            filteredPrices.forEach((item, index) => {
                if (item && item.symbol && item.price) {
                    const price = parseFloat(item.price).toFixed(3); // Limit decimal precision
                    const symbol = currencySymbols[currency] || '?'; // Fallback symbol
                    console.log(
                        `#${index + 1} Symbol: ${colors.yellow(item.symbol)} | Price: ${symbol}${colors.green(price)}`
                    );
                }
            });
        } catch (error) {
            console.error('Error fetching price data:', error.message.red);
        }
    },

    async getTop20Prices() {
        try {
            const url = 'https://api.binance.com/api/v3/ticker/price';
            const response = await axios.get(url);

            const sortedData = response.data
                .filter((item) => item.price) // Ensure valid price data
                .sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

            const top20 = sortedData.slice(0, 20);

            console.log('Top 20 Cryptocurrencies by Price:');
            top20.forEach((crypto, index) => {
                const price = parseFloat(crypto.price).toFixed(3);
                console.log(`#${index + 1} Currency: ${colors.yellow(crypto.symbol)} | Price: ${colors.green(`$${price}`)}`);
            });
        } catch (error) {
            console.error('Error fetching top 20 prices:', error.message.red);
        }
    },

    async getTop5Prices() {
        try {
            const url = 'https://api.binance.com/api/v3/ticker/price';
            const response = await axios.get(url);

            const sortedData = response.data
                .filter((item) => item.price) // Ensure valid price data
                .sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

            const top5 = sortedData.slice(0, 5);

            console.log('Top 5 Cryptocurrencies by Price:');
            top5.forEach((crypto, index) => {
                const price = parseFloat(crypto.price).toFixed(3);
                console.log(`#${index + 1} Currency: ${colors.yellow(crypto.symbol)} | Price: ${colors.green(`$${price}`)}`);
            });
        } catch (error) {
            console.error('Error fetching top 5 prices:', error.message.red);
        }
    },
};

module.exports = cryptoAPI;
