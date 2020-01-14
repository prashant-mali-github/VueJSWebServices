<template>
    <div>
        <h1>Edit customer Page</h1>
        <p> {{ info }}</p>
        <!-- <router-link to="/delete/:id" tag="li" active-class="active"></router-link> -->
       <section>
        <b-field label="Name">
            <b-input v-model="customer.customer_name"></b-input>
        </b-field>
        <b-field label="Address">
            <b-input v-model="customer.c_address"></b-input>
        </b-field>
        <b-field label="Email">
            <b-input v-model="customer.c_email"></b-input>
        </b-field>
        <b-field label="Contact">
            <b-input v-model="customer.c_mobileno"></b-input>
        </b-field>
        <b-button @click ="Update" type="is-success">Edit Customer</b-button>
        </section>
    </div>
        <!-- <router-view></router-view> -->
</template>

<script>
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
                info:''
            }
        },
         mounted() {
            // this.id = this.$route.params.id// id of the article
            // this.info = this.$route.params.user.id
            //this.fetchData(this.id)
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
            fetchData(id){
                 this.$http.get(`http://dummy.restapiexample.com/api/v1/customer/${id}`)
                    .then(res => {
                    // eslint-disable-next-line
                    const { customer_name, customer_salary, customer_age } = res.data
                    this.customer.name = customer_name
                    this.customer.salary = customer_salary
                    this.customer.age = customer_age
                    // eslint-disable-next-line
                   
                    })
                    .catch(err => {
                    // eslint-disable-next-line
                    console.log(err)
                    })
                }
            }
    }
</script>