<template>
    <b-navbar>
        <template slot="start">
            <b-navbar-item>
               <router-link to="/" active-class="active" exact><a>Home</a></router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/addUser" active-class="active"><a>Add Employee</a></router-link>
            </b-navbar-item>
            <!-- <b-navbar-item>
                <router-link to="/showEmployees" active-class="active"><a>Show Employees</a></router-link>
            </b-navbar-item> -->
            <b-navbar-item>
                <router-link to="/pagination" active-class="active"><a>Pagination</a></router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/allpagination" active-class="active"><a>All Pagination</a></router-link>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>
export default {
    
}
</script>

<style lang="stylus" scoped>

</style>