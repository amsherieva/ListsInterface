<template>
    <div class="accordion flex-fill"
         :id="'accordionPanelsListSelector' + eduLevel + listType + budgetOrContract">
        <slot name="accordeonBody"></slot>
    </div>
</template>

<script>
import MyAccordionItem from "@/components/UI/MyAccordionItem.vue";

export default {
    name: "CheckableAccordion",
    components: {MyAccordionItem},

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
}
</script>

<style scoped>
.accordion {
    --bs-accordion-btn-bg: white;
    --bs-accordion-active-bg: white;
}
</style>