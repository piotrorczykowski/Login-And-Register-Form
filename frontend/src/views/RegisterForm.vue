<template>
    <div id="register">
        <h1>Register</h1>
        <p v-if="errorFlag" class="error errorMessage">{{ errorMessage }}</p>
        <form @submit.prevent="submitForm">
            <InputField
                type="text"
                label="First Name"
                otherValues="firstName"
                ref="firstName"/>
            <p class="error" v-if="v$.form.firstName.$error">{{ v$.form.firstName.$errors[0].$message }}</p>
            <InputField
                type="text"
                label="Last Name"
                otherValues="lastName"
                ref="lastName"/>
            <p class="error" v-if="v$.form.lastName.$error">{{ v$.form.lastName.$errors[0].$message }}</p>
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
            <InputField
                type="password"
                label="Confirm Password"
                otherValues="confirmPassword"
                ref="confirmPassword"/>
            <p class="error" v-if="v$.form.confirmPassword.$error">{{ v$.form.confirmPassword.$errors[0].$message }}</p>
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
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators'
import axios from '../axios'

export default {
    components: {
        InputField
    },
    data() {
        return {
            v$: useValidate(),
            errorFlag: false,
            errorMessage: '',
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
                    min: minLength(3)
                },
                lastName: {
                    required,
                    min: minLength(3)
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
                    isConfirmed: helpers.withMessage('Confirm password must be the same as the password!', (confirmPassword) => confirmPassword === this.form.password )
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
        validEachField() {
            this.v$.form.firstName.$touch()
            this.v$.form.lastName.$touch()
            this.v$.form.mail.$touch()
            this.v$.form.password.$touch()
            this.v$.form.confirmPassword.$touch()
        },
        setUnsetErrorStyles() {
            this.v$.form.firstName.$error ? this.$refs.firstName.isError(true) : this.$refs.firstName.isError(false)
            this.v$.form.lastName.$error ? this.$refs.lastName.isError(true) : this.$refs.lastName.isError(false)
            this.v$.form.mail.$error ? this.$refs.mail.isError(true) : this.$refs.mail.isError(false)
            this.v$.form.password.$error ? this.$refs.password.isError(true) : this.$refs.password.isError(false)
            this.v$.form.confirmPassword.$error ? this.$refs.confirmPassword.isError(true) : this.$refs.confirmPassword.isError(false)
        },
        async submitForm() {
            this.getData()

            //  Flag for error message
            this.errorFlag = false

            this.validEachField()
            this.setUnsetErrorStyles()

            //  Check if everything is oK
            if(!this.v$.form.firstName.$error && !this.v$.form.lastName.$error && !this.v$.form.mail.$error && !this.v$.form.password.$error && !this.v$.form.confirmPassword.$error)
            {
                try {
                    const res = await axios.post('/register', {
                        firstName: this.form.firstName,
                        lastName: this.form.lastName,
                        email: this.form.mail,
                        password: this.form.password
                    })

                    console.log(res.data?.message)
                    
                    //  Move to login page
                    this.$router.push('/')
                } catch (err) {
                    //  Error message handling
                    this.errorFlag = true
                    this.errorMessage = err.response?.data.message
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

    #register {
        width: 40vw;
        height: 100vh;
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