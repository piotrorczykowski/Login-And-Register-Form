<template>
    <div id=field>
        <input
            :id=otherValues 
            @blur="isUnfocused = true"
            @focus="isUnfocused = false"
            @change="animationFlag = !animationFlag"
            :type=type
            :name=otherValues
            autocomplete="off"
            v-model="value">
        <label
            :class="[(isUnfocused && !value) ? 'placeholder' : 'placeholderUp', (!animationFlag) ? 'labelClass' : '']"
            :for=type>
            {{ label }}
        </label>
        <span id="line" :class="{ bottomLine: isUnfocused }"></span>
    </div>
</template>

<script>
export default {
    props: [
        'type',
        'label',
        'otherValues'
    ],
    data() {
        return {
            value: '',
            isUnfocused: true,
            animationFlag: false
        }
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

    #field {
        height: 8em;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 1em 0 1em 0;
    }

    /* Styles for placeholder */
    @keyframes placeholderForwards {
        from {
            font-size: 1.5em;
            margin-bottom: -40px;
            opacity: 1;
        }
        to {
            font-size: 1em;
            margin-bottom: -10px;
            opacity: 0.7;
        }
    }

    @keyframes placeholderBackwards {
        from {
            font-size: 1em;
            margin-bottom: -10px;
            opacity: 0.7;
        }
        to {
            font-size: 1.5em;
            margin-bottom: -40px;
            opacity: 1;
        }
    }

    label {
        width: 20em;
        align-self: flex-start;
        font-size: 1.5em;
        margin-bottom: -40px;
        z-index: 100;
        order: -1;
        cursor: pointer;
    }

    input:focus~.labelClass {
        animation: placeholderForwards 0.5s forwards;
    }

    .placeholder {
        animation: placeholderBackwards 0.5s;
    }

    .placeholderUp {
        font-size: 1em;
        margin-bottom: -10px;
        opacity: 0.7;
    }
    /* End */

    input {
        width: 25em;
        height: 2.5em;
        font-size: 1.2em;
        padding: 3px;
        margin-bottom: 1.5em;
        border: none;
    }

    input:focus{
        outline: none;
    }

    /* Styles for line under input */
    @keyframes lineForwards {
        from { width: 0em; }
        to { width: 25em; }
    }

    @keyframes lineBackwards {
        from { width: 25em; }
        to { width: 0em; }
    }

    #line {
        width: 25em;
        height: 3px;
        font-size: 1.2em;
        margin-top: -30px;
        margin-bottom: 2em;
        background-color: #343a40;
    }

    #line::after {
        content: "";
        width: 0;
        height: 3px;
        position: absolute;
        background-color: #0594B4;
    }

    input:focus~#line::after {
        animation: lineForwards 0.3s ease-out 0s 1 forwards;
    }

    .bottomLine::after {
        animation: lineBackwards 0.3s;

    }
    /* End */
</style>