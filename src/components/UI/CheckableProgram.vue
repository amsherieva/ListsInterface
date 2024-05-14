<template>
    <div class="checkableProgram form-check">
        <input class="form-check-input m-1"
               type="checkbox"
               :id="'checkable-' + itemName"
               @click.stop="temp">
        <label
            class="form-check-label direction-info__name direction-info__body"
            :for="'checkable-' + itemName"
            style="display:block;">&nbsp;<slot></slot>
        </label>
    </div>
</template>

<!--TODO: make default font smaller (same as here: https://abit.etu.ru/ru/postupayushhim/old/test-akkordeona)-->

<script>
export default {
    name: 'CheckableProgram',
    props: {
        itemName: {
            type: String,
            required: true
        }
    },

    methods: {
        temp(event) {
            console.log(event);
        }
    }
}
</script>

<style scoped>
.checkableProgram {
    margin-left: 0px;
    padding-left: 0px;
}

.direction-info__name {
    font-family: Roboto-Medium;
    color: #404040;
    margin: 0px;
    font-size: calc(1rem + 0.3vw);
}

.direction-info__body {
    font-size: calc(1rem + 0.2vw);
}
</style>