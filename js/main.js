const suit = ["clubs", "spades", "diamonds", "hearts"];
const picture = ["jack", "queen", "king"];

const wrapperEl = document.querySelector(".wrapper");

let htmlText = "";

// digits
for (let i = 2; i <= 10; i++) {
  for (let j = 0; j <= 3; j++) {
    htmlText += card({ suit: suit[j], symbol: i });
  }
}

// "jack", "queen", "king
for (let i = 0; i <= 2; i++) {
  for (let j = 0; j <= 3; j++) {
    htmlText += card({
      suit: suit[j],
      symbol: picture[i][0].toUpperCase(),
      personType: picture[i],
    });
  }
}

// Aces
for (let j = 0; j <= 3; j++) {
  htmlText += card({
    suit: suit[j],
    symbol: "A",
    personType: suit[j],
  });
}

wrapperEl.insertAdjacentHTML("beforeend", htmlText);

function card({ suit, symbol, personType }) {
  return `<div class="card">
    <div class="card__info">
      ${symbol}<img src="images/${suit}.svg" alt="${suit}" />
    </div>
    ${
      personType
        ? `<img class="person" src="images/${personType}.svg" alt="${personType}" />`
        : ""
    }
    <div class="card__info">
      ${symbol}<img src="images/${suit}.svg" alt="${suit}" />
    </div>
  </div>`;
}
