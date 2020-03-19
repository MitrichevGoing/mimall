<template>
    <div>
        order
        <order-header></order-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import NavFooter from './../components/NavFooter'
    import OrderHeader from './../components/OrderHeader'
    export default {
        name: 'nav-home',
        components:{
            OrderHeader,
            NavFooter
        }
    }
</script>