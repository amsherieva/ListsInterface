<template>
    <div class="checkableProgram form-check">
        <input class="form-check-input m-1"
               type="checkbox"
               :id="'checkable-' + itemName"
               v-model="isProgramSelected"
               @change="OnCheckboxClick">
        <label
            class="form-check-label flex-wrap direction-info direction-info__name"
            :for="'checkable-' + itemName"
            style="display:block;">&nbsp;<span class="direction-info direction-info__code">
            <slot name="Code"></slot>
        </span>&nbsp;
            <span class="direction-info">
                <slot name="Name"></slot>
            </span>
        </label>
    </div>
</template>

<script>
import {ref, watch} from "vue";

export default {
    name: 'CheckableProgram',
    props: {
        itemName: {
            type: String,
            required: true
        },
        isSelected: {
            type: Boolean,
            required: true
        }
    },
    setup(props) {
        const isProgramSelected = ref(props.isSelected);

        watch(props, (newValue) => {
            if (props.itemName && newValue.isSelected !== undefined) {
                console.log('Props updated:', newValue.isSelected);
                isProgramSelected.value = newValue.isSelected
            }
        });

        return {
            isProgramSelected,
        }
    },

    data() {
        return {
            isProgramSelected: this.isSelected,
        }
    },

    methods: {
        OnCheckboxClick() {
            this.isProgramSelected = !this.isProgramSelected;
            this.$emit('onCheckboxClick', this.isProgramSelected, this.itemName)
        }
    },
}
</script>

<style scoped>
.checkableProgram {
    margin-left: 0px;
    padding-left: 0px;
}

.direction-info {
    font-family: Roboto-Medium;
    font-size: 16px;
    margin: 0;
}

.direction-info__code {
    color: #0152a3;
}

.direction-info__name2 {
    margin: 0px;
    font-size: calc(1rem + 0.3vw);
}

.direction-info__body {
    font-size: calc(1rem + 0.2vw);
}
</style>