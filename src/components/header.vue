<template>
    <q-toolbar slot="header" class="shadow-1">
        <!-- <router-link to="/">
                <q-btn color="white" flat>
                    <q-icon color="white" name="home" />
                </q-btn>
            </router-link> -->
        <q-toolbar-title align="left">
            Portfolio
            <span slot="subtitle">
                Services
            </span>
        </q-toolbar-title>
        <a v-scroll-to="'#about'">
            <q-btn flat color="white">About</q-btn>
        </a>
        <a v-scroll-to="'#work'">
            <q-btn flat color="white">Work</q-btn>
        </a>
        <a v-scroll-to="'#contact'">
            <q-btn flat color="white">Contact</q-btn>
        </a>
    </q-toolbar>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style>

</style>