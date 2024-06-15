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
                        <!--                        <div v-for="competitionGroup in competitions">-->
                        <!--                            <div v-for="competition in competitionGroup.values()">-->
                        <!--                                <span class="listName listCode">-->
                        <!--                                    {{ competition.direction_code }}-->
                        <!--                                </span>&nbsp;-->
                        <!--                                <span class="listName">{{-->
                        <!--                                        competition.competition_group + (competition.edu_form ? (" (" + competition.edu_form.toLowerCase() + ")") : "")-->
                        <!--                                    }}-->
                        <!--                                </span>-->
                        <!--                            </div>-->
                        <!--                        </div>-->


                        <div v-for="campaignGroupedCompetitions in selectedCompetitionGroups">
                            {{ campaignGroupedCompetitions }}
                            <!--                                <div v-for="listType in listTypes">-->
                            <!--                                    <div v-for="listTypeGroupedCompetitions in campaignGroupedCompetitions.filter((elem) => elem.listType === listType)">-->
                            <!--                                        {{campaignType}}, {{listType}} : {{listTypeGroupedCompetitions}}-->
                            <!--                                    </div>-->
                            <!--                                </div>-->
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
    name: "MultipleSelectedCompetitionsDisplay",
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

    computed: {
        // selectedCompetitionGroups() {
        //     // Map of names and their respective tabs from left border
        //     let arr = new Map();
        //
        //     for (const [key, elem] of Object.entries(this.competition)) {
        //         if (elem.size > 0) {
        //             let nameSplit = key.split(/(?=[A-Z])/);
        //             // let currentCampaignType = this.namingMap.get(nameSplit[0]);
        //             let currentCampaignType = nameSplit[0];
        //             let currentListType = nameSplit[1];
        //             let currentFinSource = nameSplit[2];
        //
        //             for (const [keyInner, elemInner] of Object.entries(this.competition)) {
        //                 if (elemInner.size > 0 && keyInner.includes(currentCampaignType) && keyInner !== key) {
        //                     // There is same campaign type
        //                     arr.set(currentCampaignType, 0);
        //                 }
        //             }
        //         }
        //     }
        // }

        campaignTypes() {
            return [...this.namingMap.keys()].slice(0, 3);
        },

        listTypes() {
            return [...this.namingMap.keys()].slice(3, 8);
        },

        finSources() {
            return [...this.namingMap.keys()].slice(8);
        },

        drawTree() {
            for (const [key, elem] of Object.entries(this.competitions)) {
                if (elem.size > 0) {
                    let nameSplit = key.split(/(?=[A-Z])/);
                    names.push({campaignType: nameSplit[0], listType: nameSplit[1], finSource: nameSplit[2]});
                }
            }
        },

        selectedCompetitionGroups() {
            let names = [];

            for (const [key, elem] of Object.entries(this.competitions)) {
                if (elem.size > 0) {
                    let nameSplit = key.split(/(?=[A-Z])/);
                    names.push({campaignType: nameSplit[0], listType: nameSplit[1], finSource: nameSplit[2]});
                }
            }

            return names;
        }
    },

    mounted() {
        console.log("Competitions in MultipleSelectedCompetitionsDisplay", Object.entries(this.competitions));
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
.listName {
    font-family: Roboto-Medium;
    font-size: calc(1rem + 0.1vw);
    margin: 0;
}

.listCode {
    color: #0152a3;
}

.accordionName {
    font-family: Roboto-Medium;
    color: #404040;
    margin: 0;
    font-size: calc(1rem + 0.2vw);
}
</style>