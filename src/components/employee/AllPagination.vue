<template>
    <section>

        <b-field grouped group-multiline>
            <!-- <b-select v-model="defaultSortDirection">
                <option value="asc">Default sort direction: ASC</option>
                <option value="desc">Default sort direction: DESC</option>
            </b-select> -->
            <b-select v-model="perPage" :disabled="!isPaginated">
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="15">15 per page</option>
                <option value="20">20 per page</option>
            </b-select>
            <!-- <div class="control"> -->
                <button class="button" @click="currentPage = 2" :disabled="!isPaginated">Set page to 2</button>
            <!-- </div> -->
            <!-- <div class="control is-flex">
                <b-switch v-model="isPaginated">Paginated</b-switch>
            </div> -->
            <!-- <div class="control is-flex">
                <b-switch v-model="isPaginationSimple" :disabled="!isPaginated">Simple pagination</b-switch>
            </div> -->
            <!-- <b-select v-model="paginationPosition" :disabled="!isPaginated">
                <option value="bottom">bottom pagination</option>
                <option value="top">top pagination</option>
                <option value="both">both</option>
            </b-select> -->
            <!-- <b-select v-model="sortIcon">
                <option value="arrow-up">Arrow sort icon</option>
                <option value="menu-up">Caret sort icon</option>
                <option value="chevron-up">Chevron sort icon </option>
            </b-select> -->
            <!-- <b-select v-model="sortIconSize">
                <option value="is-small">Small sort icon</option>
                <option value="">Regular sort icon</option>
                <option value="is-medium">Medium sort icon</option>
                <option value="is-large">Large sort icon</option>
            </b-select> -->
        </b-field>

        <b-table
            :data="data[1]"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :pagination-position="paginationPosition"
            :default-sort-direction="defaultSortDirection"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

           <template slot-scope="props">
                <b-table-column field="id" label="ID" width="40" sortable numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="employee_name" label="Name" sortable>
                    {{ props.row.employee_name }}
                </b-table-column>

                <b-table-column field="employee_salary" label="Salary" sortable>
                    {{ props.row.employee_salary }}
                </b-table-column>
                <b-table-column field="employee_age" label="Age" sortable>
                    {{ props.row.employee_age }}
                </b-table-column>

                <b-table-column  label="Actions">
                     <b-button type="is-success"
                        @click="isComponentModalActive = true">
                        View
                    </b-button>
                    <b-modal :active.sync="isComponentModalActive"
                            has-modal-card
                            trap-focus
                            aria-role="dialog"
                            aria-modal>
                        <modal-form :name="props.row.employee_name" :salary="props.row.employee_salary" :age="props.row.employee_age"></modal-form>
                    </b-modal>
                    <router-link
                                :to="'/edit/' + props.row.id"
                                style="cursor: pointer"><b-button type="is-success">Edit</b-button></router-link>
                    <router-link
                    :to="'/u/delete/' + props.row.id"
                    style="cursor: pointer"><b-button type="is-danger">Delete</b-button></router-link>

                    &nbsp;&nbsp;&nbsp;
                </b-table-column>   
            </template>
        </b-table>
    </section>
</template>

<script>
    import ModalForm from './FormComponent.vue'
    export default {
        data() {
            return {
                data:[],
                name:'',
                salary:'',
                age:'',
                isPaginated: true,
                isPaginationSimple: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 5,
                isComponentModalActive: false,
                formProps: {
                    name: this.name,
                    salary:this.salary,
                    age: this.age
                }
            }
        },
        created(){
            this.showAll()
        },
        components:{
            ModalForm
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
            showAll() {
                this.$http.get('http://dummy.restapiexample.com/api/v1/employees')
                    .then(res => {
                        return res.json()
                    })
                    .then(data => {
                        const usersArray = [];
                        // console.log(data.customers)
                        for(let key in data){
                            usersArray.push(data[key])
                        }
                        this.data = usersArray
                        // console.log(this.users)
                    })
            }
        }
    }
</script>
