<template>
 <form @submit.prevent="handleSubmit">
     <label>Email:</label>
     <input type="email" required v-model="email">

     <label>Password:</label>
          <input type="password" required v-model="password">
          <div v-if="passwordError" class="error">{{passwordError}}</div>

  <label>ROLE:</label>
  <select v-model="role">
      <option value="designer">WEb designer</option>
      <option value="developer">Web developer</option>
  </select>
  <label>Skills:</label>
  <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
<div v-for="skill in skills" :key="skill" class="pill">
    <span @click="deleteSkill(skill)">{{skill}}</span>
</div>
  <div class="terms">
      <input type="checkbox" v-model="terms" required>
      <label> Accept terms and Conditions</label>
  </div>
<div class="submit">
    <button>Create an Account</button>
</div>
 
 </form>  

 <p>Email: {{email}}</p>
 <p>Password:{{password}}</p>
 <p>Role:{{role}}</p>
 <p>Terms accepted:{{terms}}</p>
</template>

<script>
export default {
data(){      
    return{
        email:'',
        password:'',
        role:'',
        terms:false,
        tempSkill:'',
        skills:[] ,
        passwordError:''   }
},
methods:{
    addSkill(e){
        if(e.key===',' && this.tempSkill){
            if(!this.skills.includes(this.tempSkill)){
                    this.skills.push(this.tempSkill)

            }
                this.tempSkill=''
        }
    },
    deleteSkill(skill){
        this.skills=this.skills.filter((item)=>{
            return skill!==item
        })
    },
    handleSubmit(){

//validate password

this.passwordError=this.password.length>5 ?
'':'Password must be atleast 6 chars long'
if(!this.passwordError){
    console.log("email:"+this.email);
    console.log("password:"+this.password);
    console.log("role:"+this.role);
    console.log("skills:"+this.skills);
    console.log("terms:"+this.terms);
}
}
}
}
</script>

<style>
form{
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input,select{
    display: block;
    padding: 10 px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom:1px solid #ddd ;
    color: #555;
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top:2px;
}
.pill{
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
button{
    background: rgb(54, 99, 204);
    border:0;
    padding: 10px 20px;
    margin-top:20px;
    color: white;
    border-radius: 20px;
}
.submit{
    text-align: center;
}
.error{
    color: rgb(204, 79, 79);
    margin-top:10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>