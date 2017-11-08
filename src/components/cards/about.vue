<template>
    <div id="about">
        <q-card>
            <q-card-media overlay-position="bottom">
                <img src="statics/about.jpg">
                <q-card-title>
                    <q-icon name="fa-smile-o" /> About Me
                    <q-icon name="fa-smile-o" />
                </q-card-title>
            </q-card-media>
            <q-card-separator/>
            <q-card-main>
                I am a Website Developer based in
                <b>Atlanta, Georgia.</b><br> I am experienced with core, foundational web technologies. 
                <br>
                I started out building wordpress sites and have since then mastered CMS development.
                <br><br>
                <q-card-separator/>
                <br>
                <a href="https://www.w3schools.com/html/html5_intro.asp">
                    <q-btn id="flaticons" flat color="primary" big>
                        <q-icon name="fa-html5" /></q-btn>
                </a>
                <a href="https://www.w3schools.com/css/default.asp">
                    <q-btn id="flaticons" flat color="primary" big>
                        <q-icon name="fa-css3" /></q-btn>
                </a>
                <a href="https://www.w3schools.com/js/default.asp">
                    <q-btn id="flaticons" flat color="primary" big>
                        <q-icon name="ion-social-javascript" /></q-btn>
                </a>
                <a href="https://nodejs.org/en/">
                    <q-btn id="flaticons" flat color="primary" big>
                        <q-icon name="ion-social-nodejs" /></q-btn>
                </a>
                <a href="http://sass-lang.com/">
                    <q-btn id="flaticons" flat color="primary" big>
                        <q-icon name="ion-social-sass" /></q-btn>
                </a>
                <a href="https://wordpress.com/">
                    <q-btn id="flaticons" flat color="primary" big>
                        <q-icon name="ion-social-wordpress" /></q-btn>
                </a>
                <br><br>
                <q-card-separator/>
                <br><br> More recently, I have been focusing on the power of JavaScript Applications. 
                <br>I can design and build highly interactive, stable, websites with unique and creative designs. 
                <br>Responsive, fast, mobile friendly sites are an important focus of mine.
                <br><br>
                <q-card-separator/>
                <br><br> This website is powered by:
                <a href="https://vuejs.org/">VueJS</a> and
                <a href="http://quasar-framework.org/">Quasar Framework.</a>
            </q-card-main>
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

</style>