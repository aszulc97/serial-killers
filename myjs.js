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
  if (sk.alias === null) {
    sk.alias = sk.realname;
  }
  console.log(sk);
  const shCard = document.querySelector("#pic-card").content;
  const clone = shCard.cloneNode(true);
  if (sk.alias) {
    clone.querySelector(".sk-name").textContent = sk.alias;
  } else {
    clone.querySelector(".sk-name").textContent = sk.realname;
  }
  //clone.querySelector(".sk-name").textContent = sk.alias;
  clone.querySelector(".sk-pic").src = `https://sh1ban.github.io/pictures/${sk.id}.png`;
  const aEl = clone.querySelector(".sk-link");
  aEl.addEventListener("click", showPopUp);
  function showPopUp(e) {
    e.preventDefault();
    document.querySelector("#sk-pop-up").classList.remove("hidden");
    document.querySelector(".skc-pic").src = `https://sh1ban.github.io/pictures/${sk.id}.png`;
    if (sk.alias) {
      document.querySelector(".skc-name").textContent = sk.alias;
    } else {
      document.querySelector(".skc-name").textContent = sk.realname;
    }
    document.querySelector(".sk-real-name").textContent = sk.realname;
    document.querySelector(".location").textContent = sk.location;
    document.querySelector(".years").textContent = sk.activity;
    document.querySelector(".killstreak").textContent = sk.killstreak;
    document.querySelector(".motive").textContent = sk.motive;
    document.querySelector(".weapon").textContent = sk.weapon;
    document.querySelector(".read-link").setAttribute("href", "profile.html?id=" + sk._id);
    document.querySelector(".close-button").addEventListener("click", closePopUp);
  }
  // .setAttribute("href", "pop-up.html?id=" + sk._id);
  clone.querySelector(".sk-pic").setAttribute("alt", sk.alias);
  const parent = document.querySelector("#pic-grid");
  parent.appendChild(clone);
}

function closePopUp() {
  document.querySelector("#sk-pop-up").classList.add("hidden");
}
