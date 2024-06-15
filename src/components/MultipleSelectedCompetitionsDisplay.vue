<template>
    <div class="MultipleSelectedCompetitionsDisplay mb-4">
        <CheckableAccordion edu-level="displaySelected">
            <template v-slot:accordeonBody>
                <MyAccordionItem edu-level="displaySelected">
                    <template v-slot:buttonContent>
                        <p class="accordionName ps-3">Выбранные списки</p>
<!--                        <button type="button" class="btn-close justify-content-center align-content-center" aria-label="Close" @click="deleteListsFromSelected"></button>-->
                    </template>
                    <template v-slot:bodyContent>
                        <div v-for="competition in competitions">
                            {{competition.uuid}}
                        </div>
                    </template>
                </MyAccordionItem>
            </template>
        </CheckableAccordion>
    </div>
</template>

<script>
import CheckableAccordion from "@/components/UI/CheckableAccordion.vue";
import MyAccordionItem from "@/components/UI/MyAccordionItem.vue";

export default {
    name: "MultipleSelectedCompetitions",
    components: {CheckableAccordion, MyAccordionItem},

    props: {
        competitions: {
            required: true,
        },
        namingMap: {
            required: true
        }
    },

    data() {
        return {
            selectedCompetitions: null,
            // campaignType: {
            //     type: String,
            // },
            // listType: {
            //     type: String,
            // },
            // finSource: {
            //     type: String,
            // }
        }
    },

    computed() {

    },

    updated() {
        // for (const [key, elem] of Object.entries(this.competition)) {
        //     if (elem.size > 0) {
        //         let nameSplit = key.split(/(?=[A-Z])/);
        //         this.campaignType = this.namingMap.get(nameSplit[0]);
        //         this.listType = this.namingMap.get(nameSplit[1]);
        //         this.finSource = this.namingMap.get(nameSplit[2]);
        //     }
        // }
    },

    methods: {
        deleteListsFromSelected() {
            this.$emit("deleteListsFromSelected");
        }
    }
}
</script>

<style scoped>
.direction-info__name {
    font-family: Roboto-Medium;
    color: #404040;
    margin: 0;
    font-size: calc(1rem + 0.3vw);
}

.accordionName {
    font-family: Roboto-Medium;
    color: #404040;
    margin: 0;
    font-size: calc(1rem + 0.2vw);
}
</style>