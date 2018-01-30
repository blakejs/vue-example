<template>
    <div>
        <q-card id="landing">
            <q-item>
                <q-card-media id="blake">
                    <img src="statics/person.png">
                </q-card-media>
                <q-item-main>
                    <q-item-tile id="landingabout">Example Message</q-item-tile>
                </q-item-main>
            </q-item>
            <q-card-actions align="center">
                <a v-scroll-to="'#contact'">
                    <q-btn push color="secondary" id="landingaction">Get in touch</q-btn>
                </a>
            </q-card-actions>
        </q-card>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style>
#blake {
    max-height: 20%;
    max-width: 20%;
    border-radius: 20%;
}

#landing {
    background: url(../../statics/background.png);
    background-size: cover;
    width: 100%;
    height: auto;
    margin: auto;
}

#landingabout {
    font-size: 5vw;
    text-align: right;
    color: white;
}

#landingaction {
    width: 150px;
}
</style>