<template>
    <section>
        <b-field label="Name">
            <b-input v-model="customer.customer_name" type="text"></b-input>
        </b-field>
        <b-field label="Address">
            <b-input v-model="customer.c_address" type="text"></b-input>
        </b-field>
        <b-field label="Email">
            <b-input v-model="customer.c_email" type="text"></b-input>
        </b-field>
        <b-field label="Mobile">
            <b-input v-model="customer.c_mobileno" type="text"></b-input>
        </b-field>
        <!-- <b-button @click ="submit" type="is-success">Add Customer</b-button> -->
        <b-button @click ="submit" type="is-success">Add Customer</b-button>
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
                msg:''
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
            submit(){
                // console.log(this.user);
                this.$http.post('http://prashantrestapi.herokuapp.com/api/customers/', { "customer":this.customer })
                 .then(() => {
                    this.success();
                    this.$router.push('/allpagination')
                 })
                .catch(err => {
                    // eslint-disable-next-line
                    console.log(err)
                })
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
    }
</script>