<template>
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Customer Details</p>
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
                        <b-field label="Address">
                            <b-input
                                type="text"
                                :value="address"
                                placeholder="Address"
                                required>
                            </b-input>
                        </b-field>
                          <b-field label="Email">
                            <b-input
                                type="text"
                                :value="email"
                                placeholder="Email"
                                required>
                            </b-input>
                        </b-field>
                          <b-field label="Contact">
                            <b-input
                                type="text"
                                :value="mno"
                                placeholder="Contact"
                                required>
                            </b-input>
                        </b-field>
                    </section>
                    <footer class="modal-card-foot">
                        <b-button class="button" type="is-danger" @click="$parent.close()">Close</b-button>
                         <!-- <button class="button is-primary">Login</button> -->
                    </footer>
                </div>
            </form>
</template>

<script>
export default {
    props:['name', 'address', 'email', 'mno'],
    methods:{
        backTo(){
            this.$router.push('/allpagination')
        }
    }
}
</script>

<style scoped>

</style>