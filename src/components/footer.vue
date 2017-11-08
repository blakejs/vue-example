<template>
    <q-toolbar slot="footer" class="shadow-up-1">
        <h6>©blakejs.com</h6>
        <div id="footerIcons">
            <a href="https://www.github.com/zutton">
                <q-btn id="flaticons" flat color="white">
                    <q-icon name="ion-social-octocat" /></q-btn>
            </a>
            <a href="https://www.twitter.com/zuttton">
                <q-btn id="flaticons" flat color="white">
                    <q-icon name="fa-twitter" /></q-btn>
            </a>
            <a href="https://plus.google.com/u/0/107741953018378199851">
                <q-btn id="flaticons" flat color="white">
                    <q-icon name="fa-google-plus" /></q-btn>
            </a>
            <a href="https://www.linkedin.com/in/blake-sutton-ba48b814b">
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
