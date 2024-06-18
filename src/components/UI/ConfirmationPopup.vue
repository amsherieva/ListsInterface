<script setup>
import {toRefs} from "vue";

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    usePositiveResponseButton: {
        type: Boolean,
        default: true,
    },
    useNegativeResponseButton: {
        type: Boolean,
        default: false,
    },
    isNecessary: {
        type: Boolean,
        default: false,
    }
})

const { id } = toRefs(props);

function clickOnPositiveButton() {
    const positiveButton = document.getElementById(id.value + '_positiveButton');
    positiveButton.click();
}

defineExpose({
    id: String,
    usePositiveResponseButton: Boolean,
    useNegativeResponseButton: Boolean,
    isNecessary: Boolean,
    clickOnPositiveButton,
});
</script>

<template>
    <div class="confirmation-popup">
        <div class="modal fade" :id tabindex="-1" aria-hidden="true" :aria-labelledby="id + 'Label'"
             v-bind="isNecessary ? necessaryAttributes : {}">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" :id="id + 'Label'">
                            <slot name="title"></slot>
                        </h1>
                        <template v-if="!isNecessary">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </template>
                    </div>
                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>
                    <div class="modal-footer">
                        <template v-if="!isNecessary">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                        </template>
                        <template v-if="usePositiveResponseButton">
                            <button :id="id + '_positiveButton'" type="button" class="btn btn-primary"
                                    v-bind="isNecessary ? {} : dismissableButton"
                                    @click="positiveButtonClicked">Продолжить
                            </button>
                        </template>
                        <template v-if="useNegativeResponseButton">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                    @click="negativeButtonClicked">
                                <slot name="negativeButtonText">Удалить</slot>
                            </button>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ConfirmationPopup",

    // props: {
    //     // id: {
    //     //     type: String,
    //     //     required: true,
    //     // },
    //     usePositiveResponseButton: {
    //         type: Boolean,
    //         default: true,
    //     },
    //     useNegativeResponseButton: {
    //         type: Boolean,
    //         default: false,
    //     },
    //     isNecessary: {
    //         type: Boolean,
    //         default: false,
    //     }
    // },

    computed: {
        necessaryAttributes() {
            return {
                'data-bs-backdrop': 'static',
                'data-bs-keyboard': 'false',
            };
        },

        dismissableButton() {
            return {
                'data-bs-dismiss': "modal"
            }
        }
    },

    methods: {
        positiveButtonClicked(event) {
            this.$emit('positiveButtonClicked', event);
        },

        negativeButtonClicked(event) {
            this.$emit('negativeButtonClicked', event);
        },
    },
}
</script>

<style scoped>

</style>