<template>
    <section>
        <!-- <b-field label="Name">
            <b-input v-model="customer.customer_name" type="text"></b-input>
        </b-field> -->
        <form  @submit.prevent="formsubmit">
        <b-field label="Name" :type="check_status($v.customer.customer_name)">
            <b-input placeholder="Name" v-model.trim="$v.customer.customer_name.$model"></b-input>
        </b-field>
        <div class="error" v-if="!$v.customer.customer_name.required">Name is required</div>
        <div class="error" v-if="!$v.customer.customer_name.minLength">Name must have at least {{$v.customer.customer_name.$params.minLength.min}} letters.</div>
        <div class="error" v-if="!$v.customer.customer_name.alpha"> Name must contain character not a number</div>

        <b-field label="Address" :type="check_status($v.customer.c_address)">
            <b-input v-model="$v.customer.c_address.$model" type="text" placeholder="Address"></b-input>
        </b-field>
        <div class="error" v-if="!$v.customer.c_address.minLength">Name must have at least {{$v.customer.c_address.$params.minLength.min}} letters.</div>
        <div class="error" v-if="!$v.customer.c_address.required">Address is required</div>

       
        <b-field label="Email" :type="check_status($v.customer.c_email)">
            <b-input placeholder="Email" v-model.trim="$v.customer.c_email.$model"></b-input>
        </b-field>
        <div class="error" v-if="!$v.customer.c_email.required">Email is required</div>
        <div class="error" v-if="!$v.customer.c_email.email">Invalid Id please enter valid email id</div>

        <!-- <b-field label="Email">
            <b-input v-model="customer.c_email" type="text"></b-input>
        </b-field> -->
        <b-field label="Mobile" :type="check_status($v.customer.c_mobileno)">
            <b-input v-model="$v.customer.c_mobileno.$model" type="text" placeholder="Contact"></b-input>
        </b-field>
        <div class="error" v-if="!$v.customer.c_mobileno.required">Mobile number is required</div>
         
        <div class="error" v-if="!$v.customer.c_mobileno.numeric">Mobile number contain only number not character</div>

        <button type="submit" :disabled="$v.$invalid" id="submit-btn">Add</button>
        <!-- <button type="submit" :disabled="submitStatus === 'PENDING'">Submit </button> -->
        </form>
        <!-- <b-button @click ="submit" type="is-success">Add Customer</b-button> -->
        <!-- <b-button @click ="submit" type="is-success">Add Customer</b-button> -->
    </section>
</template>

<!--
<template>
    <div>
        <h1>Add customer Page</h1>
        <hr>
        <section>
        <div class="container">
            <div class="col-xs-12">
                <div class="form-group">
                    <label for=""> Name</label>
                    <input type="text" v-model="customer.name" class="form-group" required>
                </div>
                <div class="form-group">
                    <label for="">Salry</label>
                    <input type="text" v-model="customer.salary" class="form-group" required>
                </div>
                <div class="form-group">
                    <label for="">Age</label>
                    <input type="text" v-model="customer.age" class="form-group" required >
                </div>
                    <b-button @click ="submit" class="btn btn-primary">Add Customer</b-button>
                </div>
            </div>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Back to home</button>
        <hr>
        </section>
    </div>
</template>
-->
<script>
    import { required, minLength, alpha, email, numeric } from 'vuelidate/lib/validators'
    export default {
        data(){
            return {
                customer: 
                {
                    customer_name: "",
                    c_address: "",
                    c_email: "",
                    c_mobileno:''
                },
                msg:'',
                submitStatus: null
            }
        },
        validations: {
            customer: {
                customer_name: {
                    required,
                    alpha,
                    minLength: minLength(4)
                },
                c_address:{
                    required,
                    minLength: minLength(4)
                },
                c_email:{
                    required,
                    email
                },
                c_mobileno:{
                    required,
                    phoneValidator:(value) =>{
                        if(value == '') return true 
                        if(value.length == 10) return true
                        else{
                            return false
                        }
                    },
                    numeric
                }
            }
        },
        methods: {
            navigateToHome() {
                this.$router.push({ name: 'home' });
            },
            success() {
                this.$buefy.toast.open({
                    message: 'customer Added',
                    type: 'is-success'
                })
            },
            check_status(validation){
                return{
                    "is-danger":validation.$error,
                    "is-success":validation.$dirty
                }
            },
            submit(){
                this.$http.post('http://prashantrestapi.herokuapp.com/api/customers/', { "customer":this.customer })
                .then(() => {
                    this.success();
                    this.$router.push('/')
                })
                .catch(err => {
                    // eslint-disable-next-line
                    console.log(err)
                })
                // console.log(this.user);
            },
            formsubmit() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    this.submit()
                }
            }
        },
            // file manipulation
                // .then(res =>{
                //     console.log(res.json())
                //     console.log(this.user)
                // })
                // .then(_ =>{
                //     this.$router.push('/showcustomers')
                // })
                // .catch(err =>{
                //     console.log(err)
                // })
            
    }
</script>

<style>

.error{
  border-color: red !important;;
  color:red !important;;
}
#submit-btn {
  background-color: purple;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>