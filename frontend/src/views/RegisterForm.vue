<template>
    <div id="register">
        <h1>Register</h1>
        <form @submit.prevent="submitForm">
            <InputField
                type="text"
                label="First Name"
                otherValues="firstName"
                ref="firstName"/>
            <InputField
                type="text"
                label="Last Name"
                otherValues="lastName"
                ref="lastName"/>
            <InputField
                type="email"
                label="Email"
                otherValues="email"
                ref="mail"/>     
            <InputField
                type="password"
                label="Password"
                otherValues="password"
                ref="password"/>
            <InputField
                type="password"
                label="Confirm Password"
                otherValues="confirmPassword"
                ref="confirmPassword"/>
            <input type="submit" id="submit" value="Create Account"/>
        </form>
        <p>Have an account?
            <router-link id="link" to="/">Log in</router-link>
        </p>
    </div>
</template>

<script>
import InputField from '../components/InputField.vue'
import useValidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'

export default {
    components: {
        InputField
    },
    data() {
        return {
            v$: useValidate(),
            form: {
                firstName: '',
                lastName: '',
                mail: '',
                password: '',
                confirmPassword: ''
            }
        }
    },
    validations() {
        return {
            form: {
                firstName: {
                    required,
                    min: minLength(4)
                },
                lastName: {
                    required,
                    min: minLength(4)
                },
                mail: {
                    required,
                    email,
                    min: minLength(8)
                },
                password: {
                    required,
                    min: minLength(8),
                    max: maxLength(50)
                },
                confirmPassword: {
                    required,
                    min: minLength(8),
                    max: maxLength(50),
                    isConfirmed: (confirmPassword) => confirmPassword === this.form.password
                }
            }
        }
    },
    methods: {
        getData() {
            //  Get data from components
            this.form.firstName = this.$refs.firstName.getValue()
            this.form.lastName = this.$refs.lastName.getValue()
            this.form.mail = this.$refs.mail.getValue()
            this.form.password = this.$refs.password.getValue()
            this.form.confirmPassword = this.$refs.confirmPassword.getValue()
        },
        submitForm() {
            this.getData()

            //  Validate data
            this.v$.$validate()
            if(!this.v$.$error) {
                alert('Form successfully submitted.')
                console.log(this.form)
            }
            else {
                alert('Form failed validation')
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

    #register {
        width: 40vw;
        height: 90vh;
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

    #submit {
        width: 25em;
        height: 2.5em;
        margin-top: 1.5em;
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
</style>