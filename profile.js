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
    showProfile(data);
    console.log(data);
  });

function showProfile(sk) {
  document.querySelector(".profile-pic").src = `https://sh1ban.github.io/pictures/${sk.id}.png`;
  document.querySelector(".sk-alias").innerHTML = sk.alias;
  document.querySelector(".sk-info").innerHTML = sk.info;
}
