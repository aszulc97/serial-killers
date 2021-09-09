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
  document.querySelector(
    ".profile-pic"
  ).src = `https://storage.cloud.google.com/truecrime/compresed/${sk.id}.png`;
  document.querySelector(".sk-alias").innerHTML = sk.alias;
  document.querySelector(".sk-info").innerHTML = sk.info;
}

/* comment section */

document.querySelector(".commentSubmit").addEventListener("click", submitComment);

function submitComment() {
  const comment = document.querySelector(".comment").content;
  const clone = comment.cloneNode(true);
  clone.querySelector("h4").textContent = document.querySelector(".commentName").value;
  clone.querySelector("p").textContent = document.querySelector(".commentText").value;
  const parent = document.querySelector("section");
  parent.appendChild(clone);
}
