<template>
    <div id="register">
        <h1>Register</h1>
        <form>
            <InputField
                type="email"
                label="First Name"
                otherValues="firstName"/>
            <InputField
                type="text"
                label="Last Name"
                otherValues="lastName"/>      
            <InputField
                type="password"
                label="Password"
                otherValues="password"/>
            <InputField
                type="password"
                label="Confirm Password"
                otherValues="confirmPassword"/>
            <input type="submit" id="submit" value="Create Account"/>
        </form>
        <p>Have an account?
            <router-link id="link" to="/">Log in</router-link>
        </p>
    </div>
</template>

<script>
import InputField from '../components/InputField.vue'

export default {
    components: {
        InputField
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
        height: 80vh;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
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