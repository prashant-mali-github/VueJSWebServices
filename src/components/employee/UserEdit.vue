<template>
    <div class="compoenent">
         <h3>User Edit  compoenent</h3>
         <b-field label="Name">
            <b-input v-model="e_name"></b-input>
        </b-field>
        <!-- <p>Age :
        <input type="text" v-model="age"></p>
        <hr> -->
        <!-- <button @click="resetName">resetName</button>
        <button @click="resetFn()">resetNameprop</button> -->
        <!-- <button @click="editAge">EditAge</button> -->
        <b-button @click="changeName">Edit</b-button>

    </div>
</template>

<script>
export default {
    data(){
        return {
            e_name: ''
        }
    },
    props: {
        age:{
            type: Number
        },
        myName:{
            type: String
        }
    },
    methods:{
        editAge(){
            this.age = 28
            this.$emit('ageWasEdited', this.age)
        },
        changeName(){
            this.$emit('nameWasChanged', this.e_name) 
        }
    }
}
</script>

<style scoped>

</style>