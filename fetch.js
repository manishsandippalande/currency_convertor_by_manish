const currency_code = [
  "AUD",
  "BRL",
  "CAD",
  "CHF",
  "CNY",
  "CZK",
  "DKK",
  "EUR",
  "GBP",
  "HKD",
  "HRK",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "ISK",
  "JPY",
  "KRW",
  "MXN",
  "MYR",
  "NOK",
  "NZD",
  "PHP",
  "PLN",
  "RON",
  "RUB",
  "SEK",
  "SGD",
  "THB",
  "TRY",
  "USD",
  "ZAR",
];

// Get a reference to the select element
const from = document.getElementById("from");
const to = document.getElementById("to");

// Loop through the currency codes and create option elements
for (const code of currency_code) {
  const optionto = document.createElement("option");
  optionto.value = code;
  optionto.text = code;

  to.appendChild(optionto);
}

for (const codefrom of currency_code) {
  const optionfrom = document.createElement("option");
  optionfrom.value = codefrom;
  optionfrom.text = codefrom;

  from.appendChild(optionfrom);
}

function convert() {
  fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_91yIOD8PmTDIvD04Y12Z0jW2eUuvkQi6xYaVPoYD`
  )
    .then((resp) => resp.json())
    .then((data) => {
      //console.log(data.rates);
      const fromvalue = document.getElementById("from").value;
      const tovalue = document.getElementById("to").value;
      const amount = parseFloat(document.getElementById("value").value);
      let fromRate = data.data[fromvalue];
      let toRate = data.data[tovalue];

      let convertedValue = (amount / fromRate) * toRate;
      document.getElementById("result").innerHTML = convertedValue;
      console.log("hii"+ convertedValue)
    });
}
