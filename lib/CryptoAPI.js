const axios = require('axios');
const colors = require('colors');
const inquirer = require('inquirer');

const currencySymbols = {
    USDT: '$',
    JPY: '¥',
    EUR: '€',
    NGN: '₦',
};

const cryptoAPI = {
    async promptCurrency() {
        const { currency } = await inquirer.prompt([
            {
                type: 'list',
                name: 'currency',
                message: 'Select the currency you want to view the price in:',
                choices: Object.keys(currencySymbols),
            },
        ]);
        return { currency };
    },

    async getPriceData(symbol, currency) {
        try {
            const coinPair = `${symbol}${currency}`;
            const url = `https://api.binance.com/api/v3/ticker/price?symbol=${coinPair}`;
            const response = await axios.get(url);

            if (response.data && response.data.price) {
                const price = parseFloat(response.data.price).toFixed(3);
                console.log(`Price for ${colors.yellow(symbol)} in ${currency}: ${colors.green(`${currencySymbols[currency]}${price}`)}`);
                return { symbol, price: `${currencySymbols[currency]}${price}` };
            } else {
                console.log(`No price data found for ${symbol} in ${currency}`.red);
                return null;
            }
        } catch (error) {
            console.error('Error fetching price data:', error.message.red);
            return null;
        }
    },

    async getAllPrices(currency) {
        try {
            const url = 'https://api.binance.com/api/v3/ticker/price';
            const response = await axios.get(url);
            const prices = response.data;

            const filteredPrices = prices.filter((price) => price.symbol.endsWith(currency));

            if (filteredPrices.length === 0) {
                console.log(`No prices found for currency: ${currency}`.red);
                return;
            }

            console.log(`Prices in ${currency} (${currencySymbols[currency] || '?'})`.green);
            filteredPrices.forEach((item, index) => {
                if (item && item.symbol && item.price) {
                    const price = parseFloat(item.price).toFixed(3);
                    const symbol = currencySymbols[currency] || '?';
                    console.log(
                        `#${index + 1} Symbol: ${colors.yellow(item.symbol)} | Price: ${symbol}${colors.green(price)}`
                    );
                }
            });
        } catch (error) {
            console.error('Error fetching price data:', error.message.red);
        }
    },

    async getTop20Prices(currency) {
        try {
            const url = 'https://api.binance.com/api/v3/ticker/price';
            const response = await axios.get(url);

            const filteredData = response.data.filter((item) => item.symbol.endsWith(currency) && item.price);

            const sortedData = filteredData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

            const top20 = sortedData.slice(0, 20);

            if (top20.length === 0) {
                console.log(`No cryptocurrencies found for currency: ${currency}`.red);
                return;
            }

            console.log(`Top 20 Cryptocurrencies by Price in ${currency}:`);
            top20.forEach((crypto, index) => {
                const price = parseFloat(crypto.price).toFixed(3);
                console.log(`#${index + 1} Currency: ${colors.yellow(crypto.symbol)} | Price: ${currencySymbols[currency]}${colors.green(price)}`);
            });
        } catch (error) {
            console.error('Error fetching top 20 prices:', error.message.red);
        }
    },

    async getTop5Prices(currency) {
        try {
            const url = 'https://api.binance.com/api/v3/ticker/price';
            const response = await axios.get(url);

            const filteredData = response.data.filter((item) => item.symbol.endsWith(currency) && item.price);

            const sortedData = filteredData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

            const top5 = sortedData.slice(0, 5);

            if (top5.length === 0) {
                console.log(`No cryptocurrencies found for currency: ${currency}`.red);
                return;
            }

            console.log(`Top 5 Cryptocurrencies by Price in ${currency}:`);
            top5.forEach((crypto, index) => {
                const price = parseFloat(crypto.price).toFixed(3);
                console.log(`#${index + 1} Currency: ${colors.yellow(crypto.symbol)} | Price: ${currencySymbols[currency]}${colors.green(price)}`);
            });
        } catch (error) {
            console.error('Error fetching top 5 prices:', error.message.red);
        }
    },
};

module.exports = cryptoAPI;
