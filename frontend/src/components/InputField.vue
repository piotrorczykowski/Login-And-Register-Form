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
            v-model="inputValue">
        <label
            :class="[(isUnfocused && !inputValue) ? 'placeholder' : 'placeholderUp', (!animationFlag) ? 'labelClass' : '']"
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
            inputValue: '',
            isUnfocused: true,
            animationFlag: false,
            textColor: '#000000',
            lineColorFirst: '#343a40',
            lineColorSecond: '#0594B4'
        }
    },
    methods: {
        getValue() {
            return this.inputValue
        },
        isError(flag) {
            if(flag)
            {
                this.textColor = '#ff0000'
                this.lineColorFirst = '#ff0000'
                this.lineColorSecond = '#343a40'
            }
            else {
                this.textColor = '#000000'
                this.lineColorSecond = '#0594B4'
                this.lineColorFirst = '#343a40'
            }
        }
    }
}
</script>

<style scoped>
    * {
        --margin-label-1: -40px;
        --margin-label-2: -10px;

        --font-label-1: 1.5em;
        --font-label-2: 1em;

        --width-line-1: 25em;
        --width-line-2: 0;
    }

    #field {
        height: 6em;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    /* Styles for placeholder */
    @keyframes placeholderForwards {
        from {
            font-size: var(--font-label-1);
            margin-bottom: var(--margin-label-1);
            opacity: 1;
        }
        to {
            font-size: var(--font-label-2);
            margin-bottom: var(--margin-label-2);
            opacity: 0.7;
        }
    }

    @keyframes placeholderBackwards {
        from {
            font-size: var(--font-label-2);
            margin-bottom: var(--margin-label-2);
            opacity: 0.7;
        }
        to {
            font-size: var(--font-label-1);
            margin-bottom: var(--margin-label-1);
            opacity: 1;
        }
    }

    label {
        width: 20em;
        align-self: flex-start;
        font-size: var(--font-label-1);
        margin-bottom: var(--margin-label-1);
        z-index: -1;
        order: -1;
        cursor: pointer;
        color: v-bind('textColor');
    }

    input:focus~.labelClass {
        animation: placeholderForwards 0.5s forwards;
    }

    .placeholder {
        animation: placeholderBackwards 0.5s;
    }

    .placeholderUp {
        font-size: var(--font-label-2);
        margin-bottom: var(--margin-label-2);
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
        background-color:rgba(0, 0, 0, 0);
    }

    input:focus{
        outline: none;
    }

    /* Styles for line under input */
    @keyframes lineForwards {
        from { width: var(--width-line-2); }
        to { width: var(--width-line-1); }
    }

    @keyframes lineBackwards {
        from { width: var(--width-line-1); }
        to { width: var(--width-line-2); }
    }

    #line {
        width: var(--width-line-1);
        height: 3px;
        font-size: 1.2em;
        margin-top: -30px;
        margin-bottom: 2em;
        background-color: v-bind('lineColorFirst');
    }

    #line::after {
        content: "";
        width: var(--width-line-2);
        height: 3px;
        position: absolute;
        background-color: v-bind('lineColorSecond')
    }

    input:focus~#line::after {
        animation: lineForwards 0.3s ease-out 0s 1 forwards;
    }

    .bottomLine::after {
        animation: lineBackwards 0.3s;

    }
    /* End */

    /* TABLET */
    @media screen and (max-width: 1250px) {
        * {
            --margin-label-1: -60px;

            --font-label-1: 1.8em;
            --font-label-2: 1.5em;
        }

        #field {
            height: 8em;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        label {
            font-size: var(--font-label-1);
        }

        .placeholderUp, input {
            font-size: 1.5em;
        }

        #line {
            height: 4px;
            font-size: 1.5em;
        }

         #line::after {
            height: 4px;
         }
    }
    /* END */

    /* PHONE */
    @media screen and (max-width: 450px) {
        * {
            --margin-label-1: -50px;

            --width-line-1: 95vw;
        }

        #field {
            width: 95vw;
            height: 7em;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        input {
            font-size: 1.3em;
        }

        input, #line {
            width: 95vw;
        }
    }
    /* END */
</style>