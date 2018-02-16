<template>
  <div>
    <div class="promo-bar">
      <div class="promo-bar__bg" style="background-image:url(https://images.unsplash.com/photo-1446770145316-10a05382c470?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f83e4b1e921bb496711ab1299032d555&auto=format&fit=crop&w=1355&q=80)" data-aos="fade-left"></div>
      <div class="promo-bar__content" data-aos="fade-right" @mouseenter.self="showBack" @mouseleave.self="showFront">
        <div class="promo-bar__flipper">
          <div class="promo-bar__side promo-bar__side--front">
            <h3>My Title</h3>
            <p>Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
          <div class="promo-bar__side promo-bar__side--back">
            <p>Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <a href="#" class="btn btn--white">View More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'AOS'
export default {
  mounted () {
    AOS.init()
  },
  methods: {
    showBack (e) {
      e.target.querySelector('.promo-bar__flipper').classList.add('promo-bar__flipper--flipped')
    },
    showFront (e) {
      e.target.querySelector('.promo-bar__flipper').classList.remove('promo-bar__flipper--flipped')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../node_modules/aos/dist/aos.css';

* {
  box-sizing: border-box;
}
.btn {
  display: inline-block;
  text-decoration: none;

  &::after {
    content: '';
    display: inline-block;
    width: 25%;
    height: 2px;
    background-color: blue;
    transform: translateY(-5px);
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
}
.btn--white {
  color: white;

  &::after {
    background-color: white;
  }
}
.promo-bar {
  padding: 100px 0;
  position: relative;
  max-width: 1200px;
  margin: 40px auto;
}
.promo-bar__bg {
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 30%;
  width: 70%;
  height: 100%;
}
.promo-bar__content {
  width: 45%;
  height: 260px;
  position: relative;
  perspective: 1000px;
}
.promo-bar__flipper {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
}
.promo-bar__side {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.promo-bar__side--front {
  padding: 50px;
  background-color: white;
}
.promo-bar__side--back {
  padding: 50px;
  background-color: rgba(100, 100, 255, 0.85);
  color: white;
  transform: rotateY(180deg);
}
.promo-bar__flipper--flipped {
  transform: rotateY(180deg);
}
</style>
