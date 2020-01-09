<template>
    <div>
        <!-- <hr>
        <button @click="navigateToHome" class="btn btn-primary">Delete Employee</button>
        <hr> -->
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                id:''
            }
        },
        methods:{
              danger() {
                this.$buefy.toast.open({
                    duration: 5000,
                    message: `Employee deleted successfully`,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
            }
        },
        created(){
            this.id = this.$route.params.id // id of the article
            this.$http.delete(`http://dummy.restapiexample.com/api/v1/delete/${this.id}`)
                .then(() => {
                    this.danger();
                    this.$router.push('/allpagination')
                })
                .catch(err => {
                // eslint-disable-next-line
                console.log(err)
                })
        }
    }
    
</script>