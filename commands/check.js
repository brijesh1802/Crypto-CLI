const cryptoAPI = require('../lib/CryptoAPI')

const check = {
    async price(cmd){
        try {
            const priceOutput = await cryptoAPI.getPriceData(cmd.coin);

            console.log(priceOutput)
        } catch (error) {
            console.error(error.message.red)
        }
    },
    async priceall(){
        try {
            const priceOutput = await cryptoAPI.getAllPrices();

            console.log(priceOutput)
        } catch (error) {
            console.error(error.message.red)
        }
    },
    async price20(){
        try {
            const priceOutput = await cryptoAPI.getTop20Prices();

            console.log(priceOutput)
        } catch (error) {
            console.error(error.message.red)
        }
    },
    async price5(){
        try {
            const priceOutput = await cryptoAPI.getTop5Prices();

            console.log(priceOutput)
        } catch (error) {
            console.error(error.message.red)
        }
    },
};

module.exports = check;