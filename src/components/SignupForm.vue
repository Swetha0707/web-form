<template>
  <div class="formdemo">
    <h3>Registration Form</h3>
    <form @submit.prevent="handleSubmit">
      <div class="forminput">
        <fw-input label="Email" name="email" v-model="state.email" placeholder="Enter your Email " required>
        </fw-input>
        <div class="error" v-for="error of v$.email.$silentErrors" :key="error.$message">

          <strong>{{ error.$message }}</strong>
        </div>
      </div>
      <br />
      <div class="forminput">
        <fw-input label="Password" type="text" name="password" v-model="state.password"
          placeholder="Enter your Password" required>
        </fw-input>
        <div class="error" v-for="error of v$.password.$silentErrors" :key="error.$message">

          <strong>{{ error.$message }}</strong>
        </div>
      </div><br />
      <div class="forminput">
        <fw-checkbox id="check" @click="state.terms=!state.terms" v-model="state.terms" required> Remember Me </fw-checkbox>
        <div class="error" v-if="!state.terms" >
                  <strong>{{ "Pls tick the field" }}</strong>

        </div>
      </div>
      <br />
      <div class="submit">
        <fw-button>Create an Account</fw-button>
      </div>
    </form>
  </div>
  <p>Email: {{ state.email }}</p>
  <p>Password:{{ state.password }}</p>
  <p>Terms accepted:{{ state.terms }}</p>
</template>

<script>
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  setup() {
    const state = reactive({
      email: '',
      password: '',
      terms: false,

    })

    const rules = {
      email: { required, email }, // Matches state.contact.email
      password: { required, minLength: minLength(10) },
      terms: {
        required
      },
    }

    const v$ = useVuelidate(rules, state)

    return { state, v$ }

  }

};
</script>

<style>
.formdemo {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

.forminput {
  display: block;
  padding: 10 px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background: rgb(54, 99, 204);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}

.error {
  color: rgb(204, 79, 79);
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>