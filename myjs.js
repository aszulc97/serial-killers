//API-key 61374ddb43cedb6d1f97edc6

const url = "https://serialkillers-7bdb.restdb.io/rest/new-db";

const options = {
  headers: {
    "x-apikey": "61374ddb43cedb6d1f97edc6",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => handlePics(data));

function handlePics(data) {
  data.forEach(showPic);
}

function showPic(sk) {
  console.log(sk);
  const shCard = document.querySelector("#pic-card").content;
  const clone = shCard.cloneNode(true);
  clone.querySelector(".sk-name").textContent = sk.alias;
  // clone.querySelector(".sk-pic").src = ;
  const aEl = clone.querySelector(".sk-link");
  aEl.addEventListener("click", showPopUp);
  function showPopUp(e) {
    e.preventDefault();
    alert("k");
    document.querySelector(".skc-name").textContent = sk.alias;
    document.querySelector(".sk-real-name").textContent = sk.realname;
    document.querySelector(".location").textContent = sk.location;
    document.querySelector(".years").textContent = sk.activity;
    document.querySelector(".killstreak").textContent = sk.killstreak;
    document.querySelector(".motive").textContent = sk.motive;
    document.querySelector(".weapon").textContent = sk.weapon;
  }
  // .setAttribute("href", "pop-up.html?id=" + sk._id);
  clone.querySelector(".sk-pic").setAttribute("alt", sk.alias);
  const parent = document.querySelector("#pic-grid");
  parent.appendChild(clone);
}
