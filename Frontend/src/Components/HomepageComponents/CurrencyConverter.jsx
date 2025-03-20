import React, { useState, useEffect } from "react";
import { ArrowLeftRight, Currency } from "lucide-react";

const CURRENCY_DATA = {
  EUR: { flag: "eu", symbol: "€" },
  USD: { flag: "us", symbol: "$" },
  INR: { flag: "in", symbol: "₹" },
};

function CurrencyConverter() {
  const [amount, setAmount] = useState("1");
  const [convertedAmount, setConvertedAmount] = useState("0");
  const [exchangeRate, setExchangeRate] = useState(0);
  const [baseCurrency, setBaseCurrency] = useState("EUR");
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
    label,
    value,
    onChange,
    currency,
    onCurrencyChange,
    readOnly = false
  ) => (
    <div className="w-full">
      <label className="block text-gray-600 text-sm mb-2">{label}</label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          readOnly={readOnly}
          className="w-full p-2.5 border border-gray-300 rounded-lg pr-24"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
          <img
            src={`https://flagcdn.com/w20/${CURRENCY_DATA[currency].flag}.png`}
            alt={currency}
            className="w-4 h-4"
          />
          <select
            value={currency}
            onChange={(e) => onCurrencyChange(e.target.value)}
            className="appearance-none bg-transparent py-1 pl-1 pr-6 border-none focus:outline-none"
          >
            {Object.keys(CURRENCY_DATA).map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-xl">
        <h2 className="text-xl font-semibold text-[#2E7D32] text-center mb-6">
          Currency Converter
        </h2>

        <div className="flex items-center gap-4">
          <div className="flex-1">
            {renderCurrencyInput(
              "Amount",
              amount,
              setAmount,
              baseCurrency,
              setBaseCurrency
            )}
          </div>

          <div className="flex items-center self-end mb-2">
            <button
              onClick={handleSwap}
              className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white p-2 rounded-full shadow-md transition-colors"
              aria-label="Swap currencies"
            >
              <ArrowLeftRight size={20} />
            </button>
          </div>

          <div className="flex-1">
            {renderCurrencyInput(
              "Converted To",
              convertedAmount,
              setConvertedAmount,
              targetCurrency,
              setTargetCurrency,
              true
            )}
          </div>
        </div>

        <div className="text-center mt-6 text-gray-600 text-sm">
          {CURRENCY_DATA[baseCurrency].symbol}1.00 ={" "}
          <span className="text-[#2E7D32] font-medium">
            {CURRENCY_DATA[targetCurrency].symbol}
            {exchangeRate.toFixed(2)}
          </span>{" "}
          {targetCurrency}
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
