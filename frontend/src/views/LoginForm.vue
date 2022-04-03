<template>
    <div id="login">
        <h1>Log In</h1>
        <p v-if="errorFlag" class="error errorMessage">Incorrect email or password!</p>
        <form @submit.prevent="submitForm">
            <InputField
                type="email"
                label="Email"
                otherValues="email"
                ref="mail"/>
            <p class="error" v-if="v$.form.mail.$error">{{ v$.form.mail.$errors[0].$message }}</p>
            <InputField
                type="password"
                label="Password"
                otherValues="password"
                ref="password"/>
            <p class="error" v-if="v$.form.password.$error">{{ v$.form.password.$errors[0].$message }}</p>
            <input id="submit" type="submit" value="Sign in">
        </form>
        <p>Don't have an account yet?
            <router-link id="link" to="/register">Sign Up</router-link>
        </p>
    </div>
</template>

<script>
import InputField from '../components/InputField.vue'
import useValidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'
import axios from '../axios'

export default {
    components: {
        InputField
    },
    data() {
        return {
            v$: useValidate(),
            errorFlag: false,
            form: {
                mail: '',
                password: ''   
            }
        }
    },
    validations() {
        return {
            form: {
                mail: {
                    required,
                    email,
                    min: minLength(8)
                },
                password: {
                    required,
                    min: minLength(8),
                    max: maxLength(50)
                }   
            }
        }
    },
    methods: {
        getData() {
            //  Get data from components
            this.form.mail = this.$refs.mail.getValue()
            this.form.password = this.$refs.password.getValue()
        },
        async submitForm() {
            this.getData()

            //  Flag for error message
            this.errorFlag = false

            //  Valid for each field
            this.v$.form.mail.$touch()
            this.v$.form.password.$touch()

            //  Set/unset error style for each field 
            this.v$.form.mail.$error ? this.$refs.mail.isError(true) : this.$refs.mail.isError(false)
            this.v$.form.password.$error ? this.$refs.password.isError(true) : this.$refs.password.isError(false)

            //  Check if everything is oK
            if(!this.v$.form.mail.$error && !this.v$.form.password.$error)
            {
                //  Try to login and get token
                try {
                    const res = await axios.post('/login', {
                        email: this.form.mail,
                        password: this.form.password
                    })

                    //  Save token to local storage
                    localStorage.setItem('token', res.data.token)

                    //  Move to homepage
                    this.$router.push('/homepage')
                } catch (err) {
                    //  Flag for error message
                    this.errorFlag = true
                    console.log(err.response?.data)
                }
            }
        }
    }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        letter-spacing: 0.0625em;
    }

    #login {
        width: 40vw;
        height: 80vh;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-size: 3em;
        color: #343a40;
    }

    form {
        padding: 1em 3em 1em 3em;
    }

    .error {
        width: 25em;
        color: #ff0000;
    }

    .errorMessage {
        text-align: center;
        font-weight: bold;
        font-size: 1.2em;
        margin-top: 1em;
    }

    #submit {
        width: 25em;
        height: 2.5em;
        margin-top: 0.5em;
        font-size: 1.2em;
        font-weight: bold;
        background-color: #0594B4;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }

    #submit:hover {
        opacity: 0.95;
    }

    #submit:active {
        transform: scale(0.99);
    }

    #link {
        text-decoration: none;
        color: #0594B4;
    }

    #link:hover {
        opacity: 0.8;
    }
</style>