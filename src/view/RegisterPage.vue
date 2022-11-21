<template>
  <base-card>
    <form>
        <div class="form-control">
          <label for="full name" class="form-label">Full Name</label>
          <input type="full name" id="full name" aria-describedby="full name">
        </div>
        <div class="form-control">
          <label for="email" class="form-label">E-mail</label>
          <input type="email" id="email" aria-describedby="email">
        </div>
        <div class="form-control">
          <label for="inputPassword5" class="form-label">Password</label>
          <input type="password" id="inputPassword5" aria-describedby="passwordHelpBlock">
        </div>
        <div>
            <input type="checkbox" id="checkbox" value="checkbox">
            <a href="#">Agree Our Terms</a>
        </div>
    </form>
    <!-- <base-button v-on:click="confirmRegister">Register</base-button> -->
    <router-link to="/login">
      <base-button @click="confirmRegister">Register</base-button>
    </router-link>
  </base-card>
</template>

<script>
import BaseButton from '@/ui/BaseButton.vue';

export default {
name: 'LoginPage',
components: { BaseButton },  
methods: {
confirmRegister() {
  this.$router.push('/login');
  this.$router.push({ path: '/login' })
  
}
},

onMounted() {
this.$router.push('/login');
}
}
</script>


<style scoped>
form {
text-align: center;
margin: auto;
padding: auto;
justify-content: center;
}
.form-control {
margin: 0.5rem 0;
border: 0;
}

label {
font-weight: bold;
display: block;
margin-bottom: 0.5rem;
}

input {
width: 20rem;
border: 1px solid #ccc;
border-radius: 8px;
font: inherit;
margin-right: auto;
margin-left: auto;
margin: 0.5rem 0;
}

input[type='checkbox'] {
display: inline;
width: auto;
border: none;
}

a {
display: contents;
}

button {
padding: 5px auto;
max-width: fit-content;
margin: auto;
}
</style>

