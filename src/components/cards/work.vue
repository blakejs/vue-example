<template>
    <div id="work">
        <q-card>
            <q-card-title id="card-title">
                <q-icon name="fa-briefcase" /> Recent Work
                <q-icon name="fa-briefcase" />
            </q-card-title>
            <q-gallery-carousel dots infinite autoplay :src="gallery"></q-gallery-carousel>
        </q-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gallery: [

            ]
        }
    }
}
</script>

<style>

</style>