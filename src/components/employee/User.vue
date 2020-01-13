<template>
    <div class="component">
        <!-- <p> User Detail reset name:{{ name }} </p> -->
        <!-- <h1>User Parent Component</h1> -->
        <!-- <b-field label="Name">
            <b-input v-model="u_name" position="is-centered"></b-input>
        </b-field> -->
        <!-- <input type="text" v-model="u_name">&nbsp;&nbsp;&nbsp; -->
        <!-- <button @click="changeName">Save</button>
        <hr> -->
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    @nameWasReset="name = $event"
                    :resetFn = "resetName"
                    :name="name"
                    :salary="salary"
                     :age="age"
                    ></app-user-detail>
            </div>
               <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :age="age"
                    @ageWasEdited="age = $event"
                    @nameWasChanged="name = $event"
                    ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'

export default {
    data(){
            return {
                name: "",
                salary: "",
                age: "",
                id:"",
                info:''
            }
    },
      mounted() {
            this.id = this.$route.params.id // id of the article
            //this.fetchData(this.id)
            this.$http.get(`http://dummy.restapiexample.com/api/v1/employee/${this.id}`)
            .then(response => {
                // this.info = response.data.data
                this.name =  response.data.data.employee_name
                this.salary = response.data.data.employee_salary
                this.age =  response.data.data.employee_age
            })
        },
    methods:{
      changeName(){
        this.name = this.name
      },
      resetName(){
          this.name = 'Max'
      }
    },
    components:{
        appUserDetail: UserDetail,
        appUserEdit: UserEdit
    }
}
</script>