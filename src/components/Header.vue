<template>
    <div>
        <ul class="nav nav-pills">
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/addUser" tag="li" active-class="active"><a>Add Employee</a></router-link>
            <router-link to="/showEmployees" tag="li" active-class="active"><a>Show Employees</a></router-link>
            <!-- <router-link to="/edit/:id" tag="li" active-class="active"><a>EditEmployee</a></router-link> -->
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>

</style>