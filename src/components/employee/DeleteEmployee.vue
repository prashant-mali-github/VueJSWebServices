<template>
    <div>
        <h1>User Deleted</h1>
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
        created(){
            this.id = this.$route.params.id // id of the article
            this.$http.delete(`http://dummy.restapiexample.com/api/v1/delete/${this.id}`)
                .then(() => {
                    // console.log(this.id)
                this.$router.push('/allpagination')
                })
                .catch(err => {
                // eslint-disable-next-line
                console.log(err)
                })
        }
    }
    
</script>