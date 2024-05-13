<template>
    <div class="accordion flex-fill"
         :id="'accordionPanelsListSelector' + eduLevel + listType + budgetOrContract">
        <div class="accordion-item">
            <h2 class="accordion-header" style="display: flex; align-items: center;"
                :id="'panelsListSelector-heading' + eduLevel + listType + budgetOrContract">

                <input v-if="checkboxName" class="form-check-input m-2"
                       type="checkbox"
                       :id="'checked-' + checkboxName"
                       @click.stop>

                <button class="accordion-button collapsed ps-1"
                        type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#panelsListSelector-collapse' + eduLevel + listType + budgetOrContract"
                        aria-expanded="false"
                        :aria-controls="'panelsListSelector-collapse' + eduLevel + listType + budgetOrContract"
                        @click="buttonClickHandler">
                    <slot name="buttonContent"></slot>
                </button>
            </h2>
            <div v-if="isButtonClicked" :id="'panelsListSelector-collapse' + eduLevel + listType + budgetOrContract"
                 class="accordion-collapse collapse"
                 :aria-labelledby="'panelsListSelector-heading' + eduLevel + listType + budgetOrContract"
                 :data-bs-parent="'#accordionPanelsListSelector' + eduLevel + listType + budgetOrContract">
                <div class="accordion-body">
                    <slot name="bodyContent"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {computed} from "vue";

export default {
    name: "CheckableAccordeon",

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
        },
    },

    data() {
        return {
            isButtonClicked: false
        }
    },

    methods: {
        buttonClickHandler(event) {
            console.log(event.srcElement);
            if (event.srcElement.type === 'button' || event.srcElement.type === 'label') {
                this.isButtonClicked = !this.isButtonClicked;
            }
        }
    }
}
</script>

<style scoped>
.form-check-input {
    padding: 1rem;
}
</style>