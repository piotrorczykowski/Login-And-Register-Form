<template>
    <div id="login">
        <h1>LOGIN</h1>
        <form>
            <InputField
                type="email"
                label="Email"
                otherValues="email"/>
            <InputField
                type="password"
                label="Password"
                otherValues="password"/>
            <input type="submit" id="submit" value="Login">
        </form>
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
        box-sizing: border-box;
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
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em 3em 1em 3em;
    }

    #submit {
        width: 25em;
        height: 2.5em;
        font-size: 1.2em;
        padding: 3px;
        margin-top: 0.5em;
        background-color: #0594B4;
        border-color: #0594B4;
        color: white;
        font-weight: bold;
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