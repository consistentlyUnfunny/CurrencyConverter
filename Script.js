const currency_list = [
    ["AED", "United Arab Emirates Dirhams"],
    ["AFN", "Afghan Afghani"],
    ["ALL", "Albanian Lek"],
    ["AMD", "Armenian Dram"],
    ["ANG", "Netherlands Antillean Guilder"],
    ["AOA", "Angolan Kwanza"],
    ["ARS", "Argentine Peso"],
    ["AUD", "Australian Dollar"],
    ["AWG", "Aruban Florin"],
    ["AZN", "Azerbaijani Manat"],
    ["BAM", "Bosnia Herzegovina Convertible Mark"],
    ["BBD", "Barbadian Dollar"],
    ["BGN", "Bulgarian Lev"],
    ["BHD", "Bahraini Dinar"],
    ["BIF", "Burundian Franc"],
    ["BMD", "Bermudan Dollar"],
    ["BOB", "Bolivian Boliviano"],
    ["BRL", "Brazilian Real"],
    ["BSD", "Bahamian Dollar"],
    ["BWP", "Botswanan Pula"],
    ["BYN", "Belarusian Ruble"],
    ["BZD", "Belize Dollar"],
    ["CDF", "Congolese Franc"],
    ["CHF", "Swiss Franc"],
    ["CLP", "Chilean Peso"],
    ["CNY", "Chinese Yuan"],
    ["COP", "Colombian Peso"],
    ["CRC", "Costa Rican Colón"],
    ["CUP", "Cuban Peso"],
    ["CZK", "Czech Koruna"],
    ["DJF", "Djiboutian Franc"],
    ["DKK", "Danish Krone"],
    ["DOP", "Dominican Peso"],
    ["DZD", "Algerian Dinar"],
    ["EGP", "Egyptian Pound"],
    ["ERN", "Eritrean Nakfa"],
    ["EUR", "Euro"],
    ["FJD", "Fijian Dollar"],
    ["FKP", "Falkland Islands Pound"],
    ["GBP", "British Pound"],
    ["GEL", "Georgian Lari"],
    ["GHS", "Ghanaian Cedi"],
    ["GIP", "Gibraltar Pound"],
    ["GMD", "Gambian Dalasi"],
    ["GNF", "Guinean Franc"],
    ["GTQ", "Guatemalan Quetzal"],
    ["GYD", "Guyanaese Dollar"],
    ["HKD", "Hong Kong Dollar"],
    ["HNL", "Honduran Lempira"],
    ["HRK", "Croatian Kuna"],
    ["HTG", "Haitian Gourde"],
    ["HUF", "Hungarian Forint"],
    ["IDR", "Indonesian Rupiah"],
    ["ILS", "Israeli New Shekel"],
    ["INR", "Indian Rupee"],
    ["IQD", "Iraqi Dinar"],
    ["IRR", "Iranian Rial"],
    ["ISK", "Icelandic Króna"],
    ["JMD", "Jamaican Dollar"],
    ["JOD", "Jordanian Dinar"],
    ["JPY", "Japanese Yen"],
    ["KES", "Kenyan Shilling"],
    ["KGS", "Kyrgystani Som"],
    ["KHR", "Cambodian Riel"],
    ["KMF", "Comorian Franc"],
    ["KRW", "South Korean Won"],
    ["KWD", "Kuwaiti Dinar"],
    ["KYD", "Cayman Islands Dollar"],
    ["KZT", "Kazakhstani Tenge"],
    ["LAK", "Laotian Kip"],
    ["LBP", "Lebanese Pound"],
    ["LKR", "Sri Lankan Rupee"],
    ["LRD", "Liberian Dollar"],
    ["LSL", "Lesotho Loti"],
    ["LYD", "Libyan Dinar"],
    ["MAD", "Moroccan Dirham"],
    ["MDL", "Moldovan Leu"],
    ["MGA", "Malagasy Ariary"],
    ["MKD", "Macedonian Denar"],
    ["MMK", "Myanmar Kyat"],
    ["MNT", "Mongolian Tugrik"],
    ["MOP", "Macanese Pataca"],
    ["MRU", "Mauritanian Ouguiya"],
    ["MUR", "Mauritian Rupee"],
    ["MVR", "Maldivian Rufiyaa"],
    ["MWK", "Malawian Kwacha"],
    ["MXN", "Mexican Peso"],
    ["MYR", "Malaysian Ringgit"],
    ["MZN", "Mozambican Metical"],
    ["NAD", "Namibian Dollar"],
    ["NGN", "Nigerian Naira"],
    ["NIO", "Nicaraguan Córdoba"],
    ["NOK", "Norwegian Krone"],
    ["NPR", "Nepalese Rupee"],
    ["NZD", "New Zealand Dollar"],
    ["OMR", "Omani Rial"],
    ["PAB", "Panamanian Balboa"],
    ["PGK", "Papua New Guinean Kina"],
    ["PHP", "Philippine Peso"],
    ["PKR", "Pakistani Rupee"],
    ["PLN", "Polish Zloty"],
    ["PYG", "Paraguayan Guarani"],
    ["QAR", "Qatari Riyal"],
    ["RON", "Romanian Leu"],
    ["RSD", "Serbian Dinar"],
    ["RUB", "Russian Ruble"],
    ["RWF", "Rwandan Franc"],
    ["SAR", "Saudi Riyal"],
    ["SBD", "Solomon Islands Dollar"],
    ["SCR", "Seychellois Rupee"],
    ["SDG", "Sudanese Pound"],
    ["SEK", "Swedish Krona"],
    ["SGD", "Singapore Dollar"],
    ["SHP", "St. Helena Pound"],
    ["SLL", "Sierra Leonean Leone (1964—2022)"],
    ["SOS", "Somali Shilling"],
    ["SRD", "Surinamese Dollar"],
    ["SSP", "South Sudanese Pound"],
    ["STN", "São Tomé Príncipe Dobra"],
    ["SYP", "Syrian Pound"],
    ["SZL", "Swazi Lilangeni"],
    ["THB", "Thai Baht"],
    ["TJS", "Tajikistani Somoni"],
    ["TMT", "Turkmenistani Manat"],
    ["TND", "Tunisian Dinar"],
    ["TOP", "Tongan Paanga"],
    ["TRY", "Turkish Lira"],
    ["TTD", "Trinidad Tobago Dollar"],
    ["TWD", "New Taiwan Dollar"],
    ["TZS", "Tanzanian Shilling"],
    ["UAH", "Ukrainian Hryvnia"],
    ["UGX", "Ugandan Shilling"],
    ["USD", "US Dollar"],
    ["UYU", "Uruguayan Peso"],
    ["UZS", "Uzbekistani Som"],
    ["VES", "Venezuelan Bolívar"],
    ["VND", "Vietnamese Dong"],
    ["VUV", "Vanuatu Vatu"],
    ["WST", "Samoan Tala"],
    ["XAF", "Central African CFA Franc"],
    ["XCD", "East Caribbean Dollar"],
    ["XOF", "West African CFA Franc"],
    ["XPF", "CFP Franc"],
    ["YER", "Yemeni Rial"],
    ["ZAR", "South African Rand"],
    ["ZMW", "Zambian Kwacha"],
    ["ZWL", "Zimbabwean Dollar (2009)"]
];

const api_key = "https://api.currencyapi.com/v3/latest?apikey=cur_live_b6Zude7XDvlXDPV9dzRzSyvx7mq8QCRoTYSEBQ5x";


        
populateCurrencyDropdown(currency_list, 'baseCurrency');
populateCurrencyDropdown(currency_list, 'targetCurrency');


function populateCurrencyDropdown(currency_list, selectorId){
    const selector = document.getElementById(selectorId);

    currency_list.forEach(([code, name]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = `${code} - ${name}`;
        selector.appendChild(option);
    })
    if (selectorId === 'baseCurrency'){
        selector.value = 'USD';
    } else {   
        selector.value = 'MYR';
    }

}

function swapCurrency(){
    const baseCurrency = document.getElementById('baseCurrency');
    const targetCurrency = document.getElementById('targetCurrency');

    const temp = baseCurrency.value;
    baseCurrency.value = targetCurrency.value;
    targetCurrency.value = temp;
}

async function convert(){
    const baseCurrencyCode = document.getElementById('baseCurrency').value.slice(0, 3);
    const targetCurrencyCode = document.getElementById('targetCurrency').value.slice(0, 3);
    const amount = document.getElementById('amount').value;
    const resultText = document.getElementById('resultText');
    const result = document.getElementById('result');
    const footer = document.getElementById('footer');

    if (amount === '' || isNaN(amount) || parseFloat(amount) <= 0 || /^[a-zA-Z]+$/.test(amount)){
        resultText.textContent = "Invalid amount";
        resultText.style.color = 'red';
        result.style.backgroundColor = '#ffcccc';
        return;
    }

    try {
        const response = await fetch(api_key);
        if (!response.ok){
            throw new Error('Could not fetch data');
        }
        const data = await response.json();

        const baseRate = data.data[baseCurrencyCode].value;
        const targetRate = data.data[targetCurrencyCode].value;
        const lastUpdate = data.meta.last_updated_at;


        const convertedAmount = (amount/baseRate) * targetRate;
        resultText.textContent = `${amount} ${baseCurrencyCode} = ${convertedAmount.toFixed(2)} ${targetCurrencyCode}`;
        resultText.style.color = 'black';
        result.style.backgroundColor = '#77f777';

        
        const [date, timeZ] = lastUpdate.split('T');
        let time = timeZ.replace('Z', '');
        footer.textContent = `Last updated at ${date} ${time} (UTC)`;

    } catch (error) {
        resultText.textContent = "Failed to fetch data, please try again later";
        resultText.style.color = 'red';
        result.style.backgroundColor = '#ffcccc';
        console.log(error);
    }
}


// add event listener
document.querySelector('.material-symbols-outlined').addEventListener('click', swapCurrency);
document.querySelector('#convert').addEventListener('click', convert);