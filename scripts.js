
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectedToConvert = document.querySelector(".currency-selected-to-convert")


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outros valores

    console.log(currencySelect.value)


    const dolarToday = 4.94
    const euroToday = 5.35
    const libraToday = 6.26
    const bitcoinToday = 235974.15

    const dolarToEuro = 0.92
    const dolarToLibra = 0.79
    const dolarToBitcoin = 0.000017

    const euroToDolar = 1.08
    const euroToReal= 5.46 
    const euroToLibra = 0.86
    const euroToBitcoin = 0.000018
   


    if (currencySelectedToConvert.value == "real-to") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelectedToConvert.value == "dolar-to") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectedToConvert.value == "euro-to") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)


    }

    //Conversão a partir do real

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }


    //Conversão a partir do Dólar Americano
    if (currencySelectedToConvert.value == "dolar-to" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectedToConvert.value == "dolar-to" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*dolarToday)
    }

    if (currencySelectedToConvert.value == "dolar-to" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue*dolarToEuro)
    }

    if (currencySelectedToConvert.value == "dolar-to" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue*dolarToLibra)
    }

    if (currencySelectedToConvert.value == "dolar-to" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC",
            minimumSignificantDigits: 2,
            maximumSignificantDigits: 6
        }).format(inputCurrencyValue*dolarToBitcoin)
    }

    // conversão a partir do Euro

    if (currencySelectedToConvert.value == "euro-to" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML == new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue)
    }

    if (currencySelectedToConvert.value == "euro-to" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue*euroToDolar)
    }

    if (currencySelectedToConvert.value == "euro-to" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*euroToday)
    }
    
    if (currencySelectedToConvert.value == "euro-to" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue*euroToLibra)
    }
    if (currencySelectedToConvert.value == "euro-to" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC",
            minimumSignificantDigits: 2,
            maximumSignificantDigits: 6
        }).format(inputCurrencyValue*euroToBitcoin)
    }

}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/dolar.png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"

    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    convertValues()
}

function changeCurrencyConvert() {

    const currencyNameConvert = document.getElementById("currency-name-conversion")
    const convertImage = document.querySelector(".convert-img")



    if (currencySelectedToConvert.value == "real-to") {
        currencyNameConvert.innerHTML = "Real"
        convertImage.src = "./assets/real.png"
    }
    if (currencySelectedToConvert.value == "dolar-to") {
        currencyNameConvert.innerHTML = "Dolar americano"
        convertImage.src = "./assets/dolar.png"
    }

    if (currencySelectedToConvert.value == "euro-to") {
        currencyNameConvert.innerHTML = "Euro"
        convertImage.src = "./assets/euro.png"

    }
    convertValues()

}

currencySelectedToConvert.addEventListener("change", changeCurrencyConvert)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)