//API-key 61374ddb43cedb6d1f97edc6

const url = "https://serialkillers-7bdb.restdb.io/rest/serial-killers-database";

const options = {
  headers: {
    "x-apikey": "61374ddb43cedb6d1f97edc6",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => console.log(data));
