<template>
    <div class="container containerExtended">
        <h1>Register</h1>
        <p v-if="errorFlag" class="error errorMessage">{{ errorMessage }}</p>
        <p v-if="successFlag" class="successMessage">{{ successMessage }}</p>
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
            <input type="submit" class="submit" value="Create Account"/>
        </form>
        <p>Have an account?
            <router-link class="link" to="/">Sign in</router-link>
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
            successFlag: false,
            successMessage: 'Congratulations! Your account has been created',
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

            //  Flag for success message
            this.successFlag = false

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

                    //  Success message
                    this.successFlag = true
                    
                    //  Wait for success message and move to login page
                    setTimeout(() => this.$router.push('/'), 3000)                    
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

<style scoped>
    .containerExtended {
        height: 100vh;
        justify-content: center;
        margin-top: -5vh;
    }

    .successMessage {
        width: 25em;
        color: #22bb33;
        text-align: center;
        font-weight: bold;
        font-size: 1.2em;
        margin-top: 1em;
    }

    /* TABLET */
    @media screen and (max-width: 1250px) {
        .successMessage {
            font-size: 1.5em;
        }
    }
    /* END */

    /* PHONE */
    @media screen and (max-width: 450px) {
        .containerExtended {
            width: 95vw;
            height: 100vh;
            margin-top: -5vh;
        }

        .successMessage {
            font-size: 1em;
        }

        p {
            font-size: 1.1em;
        }
    }
    /* END */
</style>