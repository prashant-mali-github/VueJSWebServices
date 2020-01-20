<template>
    <div>
    <h1>Edit customer </h1>
       <section>
       <form  @submit.prevent="submit">
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

        <b-field label="Mobile" :type="check_status($v.customer.c_mobileno)">
            <b-input v-model="$v.customer.c_mobileno.$model" type="text" placeholder="Contact"></b-input>
        </b-field>
        <div class="error" v-if="!$v.customer.c_mobileno.required">Mobile number is required</div>
        <div class="error" v-if="!$v.customer.c_mobileno.numeric">Mobile number contain only number not character</div>
        <div class="error" v-if="!$v.customer.c_mobileno.phoneValidate"></div>

        <button type="submit" :disabled="submitStatus === 'PENDING'" id="edit-btn">Edit </button>

        </form>
        </section>
    </div>
</template>

<script>
    import { required, minLength, alpha, email, numeric } from 'vuelidate/lib/validators'
    export default {
        data(){
            return {
                customer:{
                    customer_name: "",
                    c_address: "",
                    c_email: "",
                    c_mobileno:''
                },
                id:"",
                info:'',
                submitStatus:null
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
                numeric,
                phoneValidate:(v) =>{
                    if(v.toString().length == 10) return true
                    else return false
                }
            }
        }
        },
        mounted() {
            this.customer.customer_name =  this.$route.params.user.customer_name
            this.customer.c_address =  this.$route.params.user.c_address
            this.customer.c_email =   this.$route.params.user.c_email
            this.customer.c_mobileno = this.$route.params.user.c_mobileno
        },
        methods: {
            success() {
                this.$buefy.toast.open({
                    message: 'customer edited',
                    type: 'is-success'
                })
            },
            check_status(validation){
                return{
                    "is-danger":validation.$error,
                    "is-success":validation.$dirty
                }
            },
            Update() {
                this.id = this.$route.params.id // id of the article
                this.$http.put(`http://prashantrestapi.herokuapp.com/api/customers/${this.id}`, { "customer":this.customer })
                .then(()=> {
                    this.success();
                    this.$router.push('/allpagination')
                })
                .catch(err => {
                // eslint-disable-next-line
                console.log(err)
                })
            },
            submit() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                        this.Update()
                        this.submitStatus = 'PENDING'
                        setTimeout(() => {
                        this.submitStatus = 'OK'
                        }, 500)
                }
                }
            },
            deletecustomer(){
                this.id = this.$route.params.id // id of the article
                this.$http.delete(`http://prashantrestapi.herokuapp.com/api/customers/${this.id}`)
                    .then(() => {
                        // console.log(this.id)
                    this.$router.push('/allpagination')
                    })
                    .catch(err => {
                    // eslint-disable-next-line
                    console.log(err)
                })
            },
    }
</script>

<style scoped>
#edit-btn {
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