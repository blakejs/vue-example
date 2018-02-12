<template>
    <q-toolbar slot="footer" class="shadow-up-1">
        <h6>©Your Site</h6>
        <div id="footerIcons">
            <a>
                <q-btn id="flaticons" flat color="white">
                    <q-icon name="ion-social-octocat" /></q-btn>
            </a>
            <a>
                <q-btn id="flaticons" flat color="white">
                    <q-icon name="fa-twitter" /></q-btn>
            </a>
            <a>
                <q-btn id="flaticons" flat color="white">
                    <q-icon name="fa-google-plus" /></q-btn>
            </a>
            <a>
                <q-btn id="flaticons" flat color="white">
                    <q-icon name="fa-linkedin" /></q-btn>
            </a>
        </div>
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
#footerIcons {
    vertical-align: middle;
    position: absolute;
    right: 2%
}
</style>
