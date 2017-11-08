<template>
    <div>
        <q-card>
            <q-card-title id="card-title">
                <q-icon name="fa-envelope" /> Contact Me
                <q-icon name="fa-envelope" />
            </q-card-title>
            <q-card-main>
                <div id="contact">
                    <form action="https://formspree.io/mail@blakejs.com" method="POST">
                        </br>
                        <q-input v-model="email" name="Email" type="email" placeholder="Email" @blur="$v.email.$touch" @keyup.enter="submit" :error="$v.email.$error" />
                        </br>
                        <q-input v-model="message" name="Message" type="textarea" placeholder="Message" />
                        </br>
                        <input type="text" name="_gotcha" style="display:none" />
                        <q-btn color="primary" @click="submit">Send</q-btn>
                    </form>
                </div>
            </q-card-main>
        </q-card>
    </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { Toast } from 'quasar'

export default {
    data() {
        return {
            email: '',
            message: 'Hello, I would like to know more about your web development services.'
        }
    },
    validations: {
        email: { required, email }
    },
    methods: {
        submit() {
            this.$v.$touch()
            if (this.$v.$error) {
                Toast.create('Please review fields again.')
                return
            }
        }
    }
}
</script>

<style>
#contact {
    padding: 1em;
}

span.error {
    color: #9F3A38;
}
</style>
