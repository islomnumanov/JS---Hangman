const getPuzzle = (wordCount, callbackFunction) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callbackFunction(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callbackFunction("An error has taken place", undefined);
    }
  });

  request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  request.send();
};

const getCountry = (countryCode, callback) => {
  const countryRequest = new XMLHttpRequest();

  countryRequest.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      const country = data.find(
        (country) => country.alpha2Code === countryCode
      );
      callback(undefined, country);
    } else if (e.target.readyState === 4) {
      callback("This is the error", undefined);
    }
  });

  countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
  countryRequest.send();
};

// const getSquareIfEven = (callback) => {
//     data = [3, 4, 5, 6, 7]
//     data.forEach((number) => {
//         let result = []
//         if (number % 2 === 0) {
//             result.push(number*2)
//             callback(undefined, result)
//         } else {
//             callback(`The number was odd ${number}`, undefined)
//         }
//     })
// }
