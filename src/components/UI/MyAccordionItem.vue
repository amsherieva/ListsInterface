<template>
    <div class="accordion-item">
        <h2 class="accordion-header" style="display: flex; align-items: center;"
            :id="'panelsListSelector-heading' + eduLevel + listType + budgetOrContract">

            <template v-if="checkboxName">
                <input class="form-check-input m-2"
                       type="checkbox"
                       :id="checkboxName">
            </template>

            <button class="accordion-button collapsed ps-1"
                    type="button" data-bs-toggle="collapse"
                    :id="'panelsListSelector-button' + eduLevel + listType + budgetOrContract"
                    :data-bs-target="'#panelsListSelector-collapse' + eduLevel + listType + budgetOrContract"
                    aria-expanded="false"
                    :aria-controls="'panelsListSelector-collapse' + eduLevel + listType + budgetOrContract"
                    @click="OnButtonClicked">
                <slot name="buttonContent"></slot>
            </button>
<!--            <button type="button" class="btn-close justify-content-center align-content-center p-0 pe-4" aria-label="Close" style="width: 1rem; height: 1rem;" ></button>-->
        </h2>
        <div :id="'panelsListSelector-collapse' + eduLevel + listType + budgetOrContract"
             class="accordion-collapse collapse"
             :aria-labelledby="'panelsListSelector-heading' + eduLevel + listType + budgetOrContract">
            <div class="accordion-body">
                <slot name="bodyContent"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyAccordionItem",

    props: {
        checkboxName: {
            type: String,
        },
        eduLevel: {
            type: String,
            required: true
        },
        listType: {
            type: String
        },
        budgetOrContract: {
            type: String
        }
    },

    methods: {
        OnButtonClicked(event) {
            this.$emit("onAccordionButtonClicked", event, this.eduLevel, this.listType, this.budgetOrContract);
        }
    }
}
</script>

<style scoped>
.accordion-button button:active,
.accordion-button button:focus,
.accordion-button button:hover,
.accordion-button:active,
.accordion-button:focus,
.accordion-button:hover {
    background-color: #e8eff7;
    box-shadow: 0 0 0 4px #c2d6e8;
    color: #0152a3;
}

.form-check-input {
    padding: 1rem;
}
</style>