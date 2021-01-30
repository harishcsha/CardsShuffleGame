<template>
  <div class="Udaan--Cntr">
    <!-- button container -->
    <div class="buttonCntr">
      <!-- button to reload the window -->
      <button class="button is-small reset-button" @click="reloadWindow">
        {{ reset }}
      </button>

      <!-- button for suffling the cards -->
      <button class="button is-small shuffle-button" @click="shuffleCards">
        {{ shuffle }}
      </button>
    </div>

    <!-- deck -->
    <div class="deck">
      <!-- cards -->
      <div
        v-for="card in cards"
        :key="card.id"
        class="card"
        :class="suitColor[card.suit]"
      >
        <span class="card__suit card__suit--top">{{ card.suit }}</span>
        <span class="card__number">{{ card.rank }} </span>
        <span class="card__suit card__suit--bottom">{{ card.suit }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Udaan",
  data() {
    return {
      ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
      suits: ["♥", "♦", "♠", "♣"],
      cards: [],
      suitColor: {
        "♠": "black",
        "♣": "black",
        "♦": "red",
        "♥": "red"
      },
      isDeckShuffled: false,
      shuffleCount: 0,
      shuffle: "Click here to shuffle",
      reset: "Click here to reset"
    };
  },
  created() {
    this.displayInitialDeck();
  },
  methods: {
    displayInitialDeck() {
      let id = 1;
      this.cards = [];

      for (let s = 0; s < this.suits.length; s++) {
        for (let r = 0; r < this.ranks.length; r++) {
          let card = {
            id: id,
            rank: this.ranks[r],
            suit: this.suits[s]
          };
          this.cards.push(card);
          id++;
        }
      }

      this.isDeckShuffled = false;
      this.shuffleCount = 0;
    },
    shuffleCards() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        let temp = this.cards[i];
        this.$set(this.cards, i, this.cards[randomIndex]);
        this.$set(this.cards, randomIndex, temp);
      }
      this.isDeckShuffled = true;
      this.shuffleCount = this.shuffleCount + 1;
    },
    reloadWindow() {
      window.location.reload();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import "../assets/scss/_utils.scss";
.Udaan--Cntr {
  .buttonCntr {
    display: table;
    margin: 0 auto;
    @include respond-to(xs) {
      text-align: center;
    }
    .shuffle-button {
      background-image: linear-gradient(
        to right,
        #da22ff 0%,
        #9733ee 51%,
        #da22ff 100%
      );
      -webkit-box-shadow: 4px 7px 24px -6px rgba(255, 255, 255, 1);
      -moz-box-shadow: 4px 7px 24px -6px rgba(255, 255, 255, 1);
      box-shadow: 4px 7px 24px -6px rgba(255, 255, 255, 1);
      padding: 10px;
      margin-top: 10px;
      color: white;
      font-size: 20px;
      font-weight: bold;
      border-radius: 14px;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: #9733ee;
      }
    }
    .reset-button {
      background-image: linear-gradient(
        to right,
        #1fa2ff 0%,
        #12d8fa 51%,
        #1fa2ff 100%
      );
      -webkit-box-shadow: 4px 7px 24px -6px rgba(255, 255, 255, 1);
      -moz-box-shadow: 4px 7px 24px -6px rgba(255, 255, 255, 1);
      box-shadow: 4px 7px 24px -6px rgba(255, 255, 255, 1);
      padding: 10px;
      margin-top: 10px;
      color: white;
      font-size: 20px;
      font-weight: bold;
      border-radius: 14px;
      cursor: pointer;
      outline: none;
      margin-right: 10px;
    }
  }

  .deck {
    margin-left: 30px;
    padding-top: 30px;
  }

  .card {
    width: 75px;
    height: 100px;
    float: left;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 2px;
  }

  .card__suit {
    width: 100%;
    display: block;
  }

  .card__suit--top {
    text-align: left;
    padding-left: 5px;
  }

  .card__suit--bottom {
    position: absolute;
    bottom: 0px;
    text-align: left;
    transform: rotate(180deg);
    padding-left: 5px;
  }

  .card__number {
    width: 100%;
    position: absolute;
    top: 38%;
    text-align: center;
  }

  .red {
    color: #ff0000;
  }

  .black {
    color: #000;
  }

  .twitter-section {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .twitter-section .fa-twitter-square {
    color: #00d1b2;
    font-size: 30px;
  }

  .shuffleSlow-move {
    transition: transform 2s;
  }

  .shuffleMedium-move {
    transition: transform 1s;
  }

  .shuffleFast-move {
    transition: transform 0.5s;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  @media (max-width: 1210px) {
    .deck {
      position: initial;
      top: 0;
    }

    .twitter-section {
      display: none;
    }
  }
}
</style>
