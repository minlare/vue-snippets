<template>
  <div>
    <div class="banner-bar banner-bar--full-width" style="background-image:url(https://images.unsplash.com/photo-1506701234424-ef06760d8c8e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=936e1dfe17a85554008d1fe1995f055a&auto=format&fit=crop&w=1350&q=80)" data-aos="fade-in">
      <div class="banner-bar__content" data-aos="slide-up">
        <h3>My Title</h3>
        <p>Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <a href="#" class="btn btn--white">View More</a>
      </div>
    </div>
    <div class="banner-bar" style="background-image:url(https://images.unsplash.com/photo-1506701234424-ef06760d8c8e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=936e1dfe17a85554008d1fe1995f055a&auto=format&fit=crop&w=1350&q=80)" data-aos="fade-in">
      <div class="banner-bar__content" data-aos="flip-up">
        <h3>My Title</h3>
        <p>Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <a href="#" class="btn btn--white">View More</a>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'AOS'
export default {
  mounted () {
    AOS.init()
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
.banner-bar {
  max-width: 1200px;
  margin: 40px auto;
  background-size: cover;
  background-position: center;
  padding: 140px 200px;
  font-weight: 100;
}
.banner-bar--full-width {
  max-width: none;
}
.banner-bar__content {
  width: 70%;
  background-color: rgba(black, 0.5);
  margin: 0 auto;
  padding: 40px 80px;
  color: white;
  text-align: center;
}
</style>
