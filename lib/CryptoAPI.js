const axios = require('axios');
const colors = require('colors');

const cryptoAPI = {

    async getPriceData(symbol) {
        try {
            const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}USDT`;
            const response = await axios.get(url);
    
            if (response.data && response.data.price) {
                return `Price for ${symbol}: ${response.data.price}`;
            } else {
                throw new Error('Price data not found');
            }
        } catch (error) {
            console.error('Error fetching price data:', error.message);
        }
    },
    async getAllPrices() {
        try {
            const url = 'https://api.binance.com/api/v3/ticker/price';
            const response = await axios.get(url);

            let output = '';
            response.data.forEach((crypto) => {
                output += `\nCurrency: ${colors.yellow(crypto.symbol)} | Price: ${colors.green(crypto.price)}`;
            });

            return output;
        } catch (error) {
            console.error('Error fetching all prices:', error.message.red);
        }
    },
    async getTop20Prices() {
        try {
            const url = 'https://api.binance.com/api/v3/ticker/price';
            const response = await axios.get(url);

            const sortedData = response.data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

            const top20 = sortedData.slice(0, 20);

            let output = '';
            top20.forEach((crypto, index) => {
                output += `\n#${index + 1} Currency: ${colors.yellow(crypto.symbol)} | Price: ${colors.green(crypto.price)}`;
            });

            return output;
        } catch (error) {
            console.error('Error fetching top 20 prices:', error.message.red);
        }
    },
    async getTop5Prices() {
        try {
            const url = 'https://api.binance.com/api/v3/ticker/price';
            const response = await axios.get(url);

            const sortedData = response.data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

            const top5 = sortedData.slice(0, 5);

            let output = '';
            top5.forEach((crypto, index) => {
                output += `\n#${index + 1} Currency: ${colors.yellow(crypto.symbol)} | Price: ${colors.green(crypto.price)}`;
            });

            return output;
        } catch (error) {
            console.error('Error fetching top 5 prices:', error.message.red);
        }
    },
};

module.exports = cryptoAPI;
