const cryptoAPI = require('../lib/CryptoAPI');

const check = {
    async price(cmd) {
        try {
            if (!cmd.coin) {
                console.error('Please provide a cryptocurrency symbol (e.g., BTC, ETH).'.red);
                return;
            }

            const { currency } = await cryptoAPI.promptCurrency();

            const priceOutput = await cryptoAPI.getPriceData(cmd.coin, currency);
            if (!priceOutput) {
                console.log('No price data found for the given symbol.'.yellow);
            }
        } catch (error) {
            console.error('Error fetching price data:'.red, error.message.red);
        }
    },

    async priceall() {
        try {
            console.log('Fetching all cryptocurrency prices...'.cyan);
            const { currency } = await cryptoAPI.promptCurrency();
            await cryptoAPI.getAllPrices(currency);
        } catch (error) {
            console.error('Error fetching all prices:'.red, error.message.red);
        }
    },

    async price20() {
        try {
            console.log('Fetching top 20 cryptocurrencies by price...'.cyan);
            const { currency } = await cryptoAPI.promptCurrency();
            await cryptoAPI.getTop20Prices(currency);
        } catch (error) {
            console.error('Error fetching top 20 prices:'.red, error.message.red);
        }
    },

    async price5() {
        try {
            console.log('Fetching top 5 cryptocurrencies by price...'.cyan);
            const { currency } = await cryptoAPI.promptCurrency();
            await cryptoAPI.getTop5Prices(currency);
        } catch (error) {
            console.error('Error fetching top 5 prices:'.red, error.message.red);
        }
    },
};

module.exports = check;
