<template>
    <section>
        <b-field grouped group-multiline>
            <b-select v-model="perPage" :disabled="!isPaginated">
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="15">15 per page</option>
                <option value="20">20 per page</option>
            </b-select>
            <div class="control is-flex">
                <b-switch v-model="isPaginated">Paginated</b-switch>
            </div>
            <div class="control is-flex">
                <b-switch v-model="isPaginationSimple" :disabled="!isPaginated">Simple pagination</b-switch>
            </div>
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
                    {{ props.row.c_id }}
                </b-table-column>

                <b-table-column field="Name" label="Name" sortable>
                    {{ props.row.customer_name }}
                </b-table-column>

                <b-table-column field="c_address" label="Address" sortable>
                    {{ props.row.c_address }}
                </b-table-column>
                <b-table-column field="c_email" label="Email" sortable>
                    {{ props.row.c_email }}
                </b-table-column>
                <b-table-column field="c_mobileno" label="Contact No" sortable>
                    {{ props.row.c_mobileno }}
                </b-table-column>
                <b-table-column  label="Actions">
                    <router-link
                                tag="button"
                                :to="'/editc/props/' + props.row.c_id"
                                style="cursor: pointer"><b-button>Edit</b-button></router-link>
                    <router-link
                    tag="button"
                    :to="'/:u/delete/' + props.row.id"
                    style="cursor: pointer"><b-button>Delete</b-button></router-link>
                </b-table-column>   
            </template>
        </b-table>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                data:[],
                //   columns: [
                //     {
                //         field: 'c_id',
                //         label: 'ID',
                //         numeric: true
                //     },
                //     {
                //         field: 'customer_name',
                //         label: 'Name',
                //     },
                //     {
                //         field: 'c_address',
                //         label: 'Address',
                //     },
                //     {
                //         field: 'c_email',
                //         label: 'Email',
                //         centered: true
                //     },
                //     {
                //         field: 'c_mobileno',
                //         label: 'Contact',
                //         centered: true
                //     },
                // ],
                isPaginated: true,
                isPaginationSimple: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 5
            }
        },
        created(){
            this.showAll()
        },
        methods:{
            showAll() {
                this.$http.get('http://prashantrestapi.herokuapp.com/api/customers/')
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
                },
            }
    }
</script>


