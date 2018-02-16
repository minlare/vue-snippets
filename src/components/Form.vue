<template>
  <form @submit.prevent="submitForm">
    <div class="form-element">
      <label class="form-element__label" :class="{empty: !name}">Name</label>
      <input type="text" name="name" v-model="name" v-validate="'required'" data-vv-delay="500">
      <span v-show="errors.has('name')" class="form-element__error">{{ errors.first('name') }}</span>
    </div>
    <div class="form-element">
      <label class="form-element__label" :class="{empty: !email}">Email</label>
      <input type="email" name="email" v-model="email" v-validate="'required|email'" data-vv-delay="500">
      <span v-show="errors.has('email')" class="form-element__error">{{ errors.first('email') }}</span>
    </div>
    <div class="form-element">
      <label class="form-element__label" :class="{empty: !message}">Message</label>
      <textarea name="message" v-model="message" v-validate="'required'" data-vv-delay="500"></textarea>
      <span v-show="errors.has('message')" class="form-element__error">{{ errors.first('message') }}</span>
    </div>
    <div class="form-element">
      <label class="form-element__label" :class="{empty: !preference.length}">Preference</label>
      <input type="radio" name="preference" v-model="preference" value="one" v-validate="'required'">
      <label>One</label>
      <input type="radio" name="preference" v-model="preference" value="two">
      <label>Two</label>
      <span v-show="errors.has('preference')" class="form-element__error">{{ errors.first('preference') }}</span>
    </div>
    <div class="form-element">
      <label class="form-element__label" :class="{empty: !select}">Select</label>
      <select name="select" v-model="select" v-validate="'required'">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </select>
      <span v-show="errors.has('select')" class="form-element__error">{{ errors.first('select') }}</span>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

export default {
  data () {
    return {
      name: '',
      email: '',
      message: '',
      preference: [],
      select: ''
    }
  },
  methods: {
    submitForm (e) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          return e.target.submit()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form-element {
  margin-bottom: 1em;
}
.form-element__label {
  display: block;
  font-weight: bold;
  line-height: 1.6rem;
  will-change: font-size, font-weight;
  transition: font-size 0.15s, font-weight 0.15s;

  &:not(.empty) {
    font-size: 0.8rem;
    font-weight: 100;
  }
}
.form-element__error {
  display: block;
  color: darkred;
  font-size: 0.9rem;
  margin: 0.5em 0 1em;
}
</style>
