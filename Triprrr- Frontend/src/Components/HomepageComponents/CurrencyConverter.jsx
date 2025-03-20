import React, { useState, useEffect } from "react";
import { ArrowLeftRight } from "lucide-react";

const CURRENCY_DATA = {
  EUR: { flag: "eu", symbol: "€" },
  USD: { flag: "us", symbol: "$" },
  INR: { flag: "in", symbol: "₹" },
  GBP: { flag: "gb", symbol: "£" },
  JPY: { flag: "jp", symbol: "¥" },
};

function CurrencyConverter() {
  const [amount, setAmount] = useState("1");
  const [convertedAmount, setConvertedAmount] = useState("0");
  const [exchangeRate, setExchangeRate] = useState(0);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("INR");

  useEffect(() => {
    const fetchConversion = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/currency-converter?amount=${amount}&baseCurrency=${baseCurrency}&targetCurrency=${targetCurrency}`
        );
        const data = await response.json();
        setConvertedAmount(data.convertedAmount);
        setExchangeRate(data.exchangeRate);
      } catch (error) {
        console.error("Error fetching conversion:", error);
      }
    };

    if (amount) {
      fetchConversion();
    }
  }, [amount, baseCurrency, targetCurrency]);

  const handleSwap = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
  };

  const renderCurrencyInput = (
    value,
    currency,
    onCurrencyChange,
    readOnly = false
  ) => (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => !readOnly && setAmount(e.target.value)}
        readOnly={readOnly}
        className="w-full h-11 px-3 rounded-lg border-2 border-gray-200 focus:outline-none text-lg focus:border-[#2E7D32]"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
        <img
          src={`https://flagcdn.com/w20/${CURRENCY_DATA[currency].flag}.png`}
          alt={currency}
          className="w-4 h-4 rounded-full"
        />
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="appearance-none bg-transparent py-1 pl-1 pr-4 border-none focus:outline-none text-sm text-[#347928] font-medium"
        >
          {Object.keys(CURRENCY_DATA).map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-[#2E7D32] text-center mb-8">
          Currency Converter
        </h2>

        <div className="flex flex-col md:flex-row items-end gap-6 justify-center">
          <div className="w-full md:w-2/5">
            <label className="block text-black mb-1.5 font-medium text-lg">
              Amount
            </label>
            {renderCurrencyInput(amount, baseCurrency, setBaseCurrency)}
          </div>

          <button
            onClick={handleSwap}
            className="flex items-center justify-center w-10 h-10 bg-white text-black transition-colors mb-1.5 flex-shrink-0"
          >
            <ArrowLeftRight size={20} />
          </button>

          <div className="w-full md:w-2/5">
            <label className="block text-black mb-1.5 font-medium text-lg">
              Converted To
            </label>
            {renderCurrencyInput(
              convertedAmount,
              targetCurrency,
              setTargetCurrency,
              true
            )}
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-gray-100">
          <p className="text-black text-lg">
            {CURRENCY_DATA[baseCurrency].symbol}1.00 ={" "}
            <span className="text-[#2E7D32] font-semibold">
              {CURRENCY_DATA[targetCurrency].symbol}
              {exchangeRate.toFixed(2)}
            </span>{" "}
            {targetCurrency}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
