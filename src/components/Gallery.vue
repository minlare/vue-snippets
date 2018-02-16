<template>
  <div>
    <div class="gallery">
      <div class="gallery__item" v-for="(image, index) in images" :key="image.src" @click="openGallery(index)">
        <img class="gallery__img" :ref="'image' + index" :src="image.src">
      </div>
    </div>
    <div class="pswp">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
              <div class="pswp__counter"></div>
              <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
              <button class="pswp__button pswp__button--share" title="Share"></button>
              <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
              <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
              <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
              <!-- element will get class pswp__preloader--active when preloader is running -->
              <div class="pswp__preloader">
                  <div class="pswp__preloader__icn">
                    <div class="pswp__preloader__cut">
                      <div class="pswp__preloader__donut"></div>
                    </div>
                  </div>
              </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div class="pswp__share-tooltip"></div>
          </div>
          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
          <div class="pswp__caption">
              <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoSwipe from 'PhotoSwipe'
import photoSwipeUiDefault from './../../node_modules/photoswipe/dist/photoswipe-ui-default'

export default {
  data () {
    return {
      images: [
        { src: 'https://images.unsplash.com/photo-1504682213184-3082b2bc5c3a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=27511b6b9a3c833fcc67b9df730abf21&auto=format&fit=crop&w=600&q=80' },
        { src: 'https://images.unsplash.com/photo-1415045550139-59b6fafc832f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f45ba72eb49317564dcfe37b759d97bc&auto=format&fit=crop&w=1350&q=80' },
        { src: 'https://images.unsplash.com/photo-1494249465471-5655b7878482?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=191559dc1cae3f8967d568dfd8a77093&auto=format&fit=crop&w=1350&q=80' },
        { src: 'https://images.unsplash.com/photo-1509118006148-49464a497f74?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0676a35ddc7237fdc3f9cf80face89e&auto=format&fit=crop&w=634&q=80' }
      ]
    }
  },
  methods: {
    openGallery (i) {
      let imagesDimensions = this.images
      for (let x in imagesDimensions) {
        const image = this.$refs['image' + x][0]
        imagesDimensions[x] = { ...imagesDimensions[x], w: image.naturalWidth, h: image.naturalHeight }
      }
      const gallery = new PhotoSwipe(document.querySelector('.pswp'), photoSwipeUiDefault, imagesDimensions, { index: i })
      gallery.init()
    }
  }
}
</script>

<style>
@import './../../node_modules/photoswipe/dist/photoswipe.css';
@import './../../node_modules/photoswipe/dist/default-skin/default-skin.css';
</style>

<style lang="scss" scoped>
.gallery__item {
  width: 200px;
  height: 200px;
  display: inline-block;
  margin: 10px;
}
.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
