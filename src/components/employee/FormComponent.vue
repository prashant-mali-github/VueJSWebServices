<template>
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Employee Details</p>
                    </header>
                    <section class="modal-card-body">

                        <b-field label="Name">
                            <b-input
                                type="text"
                                :value="name"
                                placeholder="Your Name"
                                required>
                            </b-input>
                        </b-field>
                        <b-field label="Salary">
                            <b-input
                                type="text"
                                :value="salary"
                                placeholder="Salary"
                                required>
                            </b-input>
                        </b-field>
                          <b-field label="Age">
                            <b-input
                                type="text"
                                :value="age"
                                placeholder="Age"
                                required>
                            </b-input>
                        </b-field>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$parent.close(); backTo()">Close</button>
                         <!-- <button class="button is-primary">Login</button> -->
                    </footer>
                </div>
            </form>
</template>

<script>
export default {
    props:['name', 'salary', 'age'],
    methods:{
        backTo(){
            this.$router.push('/allpagination')
        }
    }
}
</script>

<style scoped>

</style>