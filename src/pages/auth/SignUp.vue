<template>
  <div>
    <base-card>
      <h2>Sign Up</h2>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="firstname">Name</label>
          <input
            type="text"
            id="name"
            v-model.trim="name"
          />
        </div>
        <div class="form-control">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            v-model.trim="email"
          />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model.trim="password"
          />
        </div>
        <div class="form-control">
          <label for="address">Address</label>
          <textarea
            v-model.trim="address"
          />
        </div>
        <div class="form-control">
          <label for="pin">Pin</label>
          <input
            type="text"
            id="pin"
            v-model.trim="pin"
          />
        </div>
        <button>Register</button>
      </form>
    </base-card>
    <button @click="getUser">Click</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name: "",
      email: "",
      password: "",
      address: "",
      pin: ""
    };
  },
  methods: {
    async submitForm(){
      const dataStr = {
        name: this.name,
        email: this.email,
        password: this.password,
        address: this.address,
        pin: this.pin
      }
      // console.log(dataStr)
      await this.$store.dispatch('auth/signUp', dataStr)
    
    },
    getUser(){
      this.$store.dispatch('auth/getUser');
    }
     
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