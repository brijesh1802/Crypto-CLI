# 💰 CryptoCLI

A Command-Line Interface (CLI) tool for checking cryptocurrency prices and managing cryptocurrency settings with ease. Built using Node.js, this tool fetches live data from Binance API and allows you to check the price of various coins in different currencies.

## ✨ Features

- 📈 Check the price of specific coins.
- 🌐 Filter prices by different currencies (USD, EUR, JPY, INR, etc.).
- 🔝 View the top 5 and top 20 coins based on their price.
- 🖥️ Easy to use command-line interface.

## 📦 Installation

You can install this CLI globally or locally in your project.

### 🌍 Global Installation

To install it globally, run the following command:

```bash
npm install -g @brijesh18/cryptocli
```

After installation, you can use the `coindex` command in your terminal.

### 📂 Local Installation

To install it locally in your project, run:

```bash
npm install @brijesh18/cryptocli
```

Then, you can run the commands by using `npx`:

```bash
npx coindex <command>
```

## 🚀 Usage

After installation, you can use the following commands:

### 💵 Check Price

Check the price of a specific coin.

```bash
coindex check price --coin BTC,ETH,XRP
```

Replace `BTC,ETH,XRP` with the coins you want to check.

### 💰 Check Price-All

Check the prices of all available coins in the selected currency.

```bash
coindex check price-all
```

### 🔝 Check Price20

Check the top 20 coins based on their prices.

```bash
coindex check price20
```

### 🔝 Check Price5

Check the top 5 coins based on their prices.

```bash
coindex check price5
```

## 📜 Commands

- `check price`: Check the price of specific coins.
- `check price-all`: Check the price of all available coins.
- `check price20`: View the top 20 coins based on price.
- `check price5`: View the top 5 coins based on price.

## 📝 Example

```bash
$ coindex check price --coin BTC,ETH,SHIB
Prices in USD ($):
#1 Symbol: BTCUSDT | Price: $  44970.000
#2 Symbol: ETHUSDT | Price: $  3754.410
#3 Symbol: SHIBUSDT | Price: $  0.00005
```

## 🌍 Currency Options

- USD ($)
- JPY (¥)
- EUR (€)
- INR (₹)
- NGN (₦)
- IDR (Rp)
- ARS (AR$)

## 📄 License

MIT License. See LICENSE file for more details.
