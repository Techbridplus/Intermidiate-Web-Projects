// Function to fetch currency codes
async function fetchCurrencies() {
    try {
        const response = await fetch('https://openexchangerates.org/api/currencies.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching currencies:', error);
    }
}

// Function to populate select element with currency codes
async function populateSelect(currencySelectID,defaultCurrency) {
    const currencies = await fetchCurrencies();
    const selectElement = document.getElementById(currencySelectID);

    // Add currency options
    for (const currencyCode in currencies) {
        const option = document.createElement('option');
        option.text = `${currencyCode}`;
         option.value = currencyCode;
        // Set USD as default
        if (currencyCode === defaultCurrency) {
            option.selected = true;
        }

        selectElement.appendChild(option);
    }
    


}
document.getElementById("from").addEventListener("change", function() {
    var selectedValue = this.value;
    var img = document.getElementById('fromimg');
    img.src = `https://flagsapi.com/${selectedValue.substr(0,2)}/flat/64.png`;
  });
  document.getElementById("to").addEventListener("change", function() {
    var selectedValue = this.value;

    var img = document.getElementById('toimg');
    img.src = `https://flagsapi.com/${selectedValue.substr(0,2)}/flat/64.png`;
  });
  const apiUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

async function fetchExchangeRate() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const exchangeRate = data.eur.jpy;
    console.log('Exchange rate from EUR to JPY:', exchangeRate);
  } catch (error) {
    console.error('There was a problem fetching the exchange rate:', error);
  }
}

fetchExchangeRate();

    populateSelect('from', 'USD');
    populateSelect('to', 'INR');

