const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://serialkillers-7bdb.restdb.io/rest/new-db/" + id;

const options = {
  headers: {
    "x-apikey": "61374ddb43cedb6d1f97edc6",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    showSk(data);
    console.log(data);
  });

function showSk(sk) {
  //   document.querySelector(".skc-pic").src = ;
  document.querySelector(".skc-name").textContent = sk.alias;
  document.querySelector(".sk-real-name").textContent = sk.realname;
  document.querySelector(".location").textContent = sk.location;
  document.querySelector(".years").textContent = sk.activity;
  document.querySelector(".killstreak").textContent = sk.killstreak;
  //   document.querySelector(".gender").textContent = sk.gender;
  document.querySelector(".motive").textContent = sk.motive;
  document.querySelector(".weapon").textContent = sk.weapon;
}
