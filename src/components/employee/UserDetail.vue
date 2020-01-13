<template>
    <section>
        <h3>User detail compoenent</h3>
        <!-- <p>Many Detail</p> -->
        <section>
        <b-field label="Name">
            <b-input v-model="name"></b-input>
        </b-field>
        <b-field label="Salary">
            <b-input v-model="salary"></b-input>
        </b-field>
        <b-field label="Age">
            <b-input v-model="age"></b-input>
        </b-field>
        <!-- <b-button @click ="Update" type="is-success">Edit Customer</b-button> -->
        </section>
        <!-- <button @click="resetName">resetName</button>
        <button @click="resetFn()">resetNameprop</button> -->
        <b-button class="button is-primary is-medium"
            @click="isComponentModalActive = true">
            View
        </b-button>
        <b-modal :active.sync="isComponentModalActive"
                 has-modal-card
                 trap-focus
                 aria-role="dialog"
                 aria-modal>
            <modal-form v-bind="formProps"></modal-form>
        </b-modal>
    </section>
</template>

<script>
import ModalForm from './FormComponent.vue'
export default {
    data(){
            return {
                employee: 
                {
                    name: "",
                    salary: "",
                    age: ""
                },
                id:"",
                info:'',
                isComponentModalActive: false,
                formProps: {
                    name: this.name,
                    salary:this.salary,
                    age: this.age
                }
            }
        },
    components: {
        ModalForm
    },
    props:['name','age','salary'],
    methods:{
        // switchName(){
        //     return this.myName.split("").reverse().join("");
        // },
        resetName(){
            this.myName = 'Max';
            this.$emit('nameWasReset', this.myName)
        }
    }
}
</script>

<style scoped>

</style>