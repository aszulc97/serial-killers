//API-key 61374ddb43cedb6d1f97edc6

const url = "https://serialkillers-7bdb.restdb.io/rest/new-db";

const options = {
  headers: {
    "x-apikey": "61374ddb43cedb6d1f97edc6",
  },
};

let dataset = [];

fetch(url, options)
  .then((response) => response.json())
  .then((data) => (dataset = data));

console.log(dataset);
handlePics(dataset);

function handlePics(data) {
  data.forEach(showPic);
}

function showPic(sk) {
  console.log(sk);
  console.log(sk.alias);
  const shCard = document.querySelector("#pic-card").content;
  const clone = shCard.cloneNode(true);
  clone.querySelector(".sk-name").textContent = sk.alias;
  clone.querySelector(".sk-link").addEventListener("click", showSkCard);
  const parent = document.querySelector("#pic-grid");
  parent.appendChild(clone);
}

// function showPic(sk) {
//   console.log(sk);
//   const shCard = document.querySelector("#pic-card").content;
//   const clone = shCard.cloneNode(true);
//   clone.querySelector(".sk-name").textContent = sk.alias;
//   // clone.querySelector(".sk-pic").src = ;
//   clone.querySelector(".sk-link").addEventListener("click", showSkCard);
//   const parent = document.querySelector("#pic-grid");
//   parent.appendChild(clone);
// }

function showSkCard(skc) {
  console.log("done");
  console.log(skc.target);
  document.querySelector(".sk-link").removeEventListener("click", showSkCard);
  const shSkCard = document.querySelector("#sk-card").content;
  const copy = shSkCard.cloneNode(true);
  copy.querySelector(".skc-name").textContent = skc.target.textContent;
  // copy.querySelector(".sk-real-name").textContent = skc.;

  // clone.querySelector(".sk-pic").src = ;

  const parent = document.querySelector("#pic-grid");
  parent.appendChild(copy);
  //show card
  //add event listener for closing tab
  //clone template, add to parent
}

// function search(el) {
//   let result;
//   for (let i=0; i<da)
// }
{
  /* <template id="pic-card">
<div class="sk-link">
    <div class="sk-pic"></div>
    <h2 class="sk-name"></h2>
</div>
</template>

<template id="sk-card">
<img src="" class="skc-pic">
<div class="skc-txt">
    <h1 class="skc-name"></h1>
    <h2 class="sk-real-name"></h2>
    <div class="close-button">X</div>
    <ul>
        <li>Location: <span class="location"></span></li>
        <li>Years of Activity: <span class="years"></span></li>
        <li>Gender: <span class="killstreak"></span></li>
        <li>Motive: <span class="motive"></span></li>
        <li>Modus Operandi: <span class="weapon"></span></li>
    </ul>
    <p class="bio"></p>
    <button class="read-more"><a href="" class="read-link">Read More</a></button>
</div>
</template> */
}
