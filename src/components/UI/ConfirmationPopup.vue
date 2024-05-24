<template>
    <div class="confirmation-popup">
        <div class="modal fade" :id tabindex="-1" aria-hidden="true" :aria-labelledby="id + 'Label'">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" :id="id + 'Label'">
                            <slot name="title"></slot>
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                        <template v-if="usePositiveResponseButton">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
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

    props: {
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
        }
    },

    methods: {
        positiveButtonClicked(event) {
            this.$emit('positiveButtonClicked', event);
        },

        negativeButtonClicked(event) {
            this.$emit('negativeButtonClicked', event);
        }
    }

    // TODO: create slot for positive response button action
}
</script>

<style scoped>

</style>