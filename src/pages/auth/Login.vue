<template>
  <div>
    <base-card>
      <h2>Sign In</h2>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="firstname">Username</label>
          <input type="text" id="name" v-model.trim="name" />
          <p v-if="!isValid">Please enter username and password</p>
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="text" id="password" v-model.trim="password" />
        </div>
        <button>Login</button>
      </form>
    </base-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name: "",
      password: "",
      isValidForm: true
    };
  },
  methods: {
    async submitForm(){
      const dataStr = {
        name: this.name,
        password: this.password
      }
      this.isValidForm = true;
      if(this.name === '' || this.password === ''){
        this.isValidForm = false;
        return;
      }
      await this.$store.dispatch('auth/login', dataStr)
      this.isValidForm = false;
      // this.$store.commit('auth/setlogin');
      // console.log(res);
      // if(this.$store.state)
      // this.$router.replace('/coaches');
    }
  },
  computed:{
    isValid(){
      return this.isValidForm;
    },
    // err(){
    //   return this.$store.state
    // }
  }
}
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}
</style>