<template>
    <div class="list-selector">
        <div class="row container-fluid mx-auto mt-4 mb-4">
            <div class="col-lg-7 p-0 mx-auto">
                <div class="d-flex justify-content-evenly">
                    <CheckableAccordion edu-level="Bak" list-type="Applicants">
                        <template v-slot:accordeonBody>
                            <!--List of Applicants-->
                            <MyAccordionItem edu-level="Bak" list-type="Applicants">
                                <template v-slot:buttonContent>
                                    <p class="direction-info__name direction-info__body ps-3"
                                       style="display:block;">Списки
                                        подавших заявление</p>
                                </template>
                                <template v-slot:bodyContent>
                                    <CheckableAccordion edu-level="Bak" list-type="Applicants"
                                                        budget-or-contract="BudgetAndContract">
                                        <template v-slot:accordeonBody>

                                            <!-- Budget -->
                                            <MyAccordionItem edu-level="Bak" list-type="Applicants"
                                                             budget-or-contract="Budget"
                                                             checkbox-name="BakApplicantsBudget"
                                                             v-model="checkableGroups['BakApplicantsBudget']"
                                                             @change="OnBigCheckboxClick"
                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                <template v-slot:buttonContent>
                                                    <label
                                                        class="direction-info__name direction-info__body flex-fill">Бюджет</label>
                                                </template>
                                                <template v-slot:bodyContent>
                                                    <div>
                                                        <template v-if="BakApplicantsBudget">
                                                            <div class="programs"
                                                                 v-for="competition in BakApplicantsBudget.values()">
                                                                <CheckableProgram
                                                                    :item-name="competition.uuid"
                                                                    :is-selected="competition.Selected"
                                                                    :belongs-to="'BakApplicantsBudget'"
                                                                    :update-interval="competition.update_interval"
                                                                    :last-update-time="competition.generated_at"
                                                                    class="flex-fill"
                                                                    @onCheckboxClicked="checkableProgramClicked">
                                                                    <template v-slot:Code>
                                                                        {{ competition.direction_code }}
                                                                    </template>
                                                                    <template v-slot:Name>
                                                                        {{
                                                                            competition.competition_group + (competition.edu_form ? (" (" + competition.edu_form.toLowerCase() + ")") : "")
                                                                        }}
                                                                    </template>
                                                                </CheckableProgram>
                                                            </div>
                                                        </template>
                                                        <p v-else>Загрузка списков...</p>
                                                    </div>
                                                </template>
                                            </MyAccordionItem>

                                            <!-- Contract -->
                                            <MyAccordionItem edu-level="Bak" list-type="Applicants"
                                                             budget-or-contract="Contract"
                                                             checkbox-name="BakApplicantsContract"
                                                             v-model="checkableGroups['BakApplicantsContract']"
                                                             @change="OnBigCheckboxClick"
                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                <template v-slot:buttonContent>
                                                    <label
                                                        class="direction-info__name direction-info__body flex-fill">Контракт</label>
                                                </template>
                                                <template v-slot:bodyContent>
                                                    <div>
                                                        <template v-if="BakApplicantsContract">
                                                            <div class="programs"
                                                                 v-for="competition in BakApplicantsContract.values()">
                                                                <CheckableProgram
                                                                    :item-name="competition.uuid"
                                                                    :is-selected="competition.Selected"
                                                                    :belongs-to="'BakApplicantsContract'"
                                                                    class="flex-fill"
                                                                    @onCheckboxClicked="checkableProgramClicked">
                                                                    <template v-slot:Code>
                                                                        {{ competition.direction_code }}
                                                                    </template>
                                                                    <template v-slot:Name>
                                                                        {{
                                                                            competition.competition_group + (competition.edu_form ? (" (" + competition.edu_form.toLowerCase() + ")") : "")
                                                                        }}
                                                                    </template>
                                                                </CheckableProgram>
                                                            </div>
                                                        </template>
                                                        <p v-else>Загрузка списков...</p>
                                                    </div>
                                                </template>
                                            </MyAccordionItem>

                                        </template>
                                    </CheckableAccordion>
                                </template>
                            </MyAccordionItem>
                            <!--Contest list-->
                            <MyAccordionItem edu-level="Bak" list-type="Contest">
                                <template v-slot:buttonContent>
                                    <p class="direction-info__name direction-info__body ps-3"
                                       style="display:block;">Конкурсные
                                        списки</p>
                                </template>
                                <template v-slot:bodyContent>

                                    <CheckableAccordion edu-level="Bak" list-type="Contest"
                                                        budget-or-contract="BudgetAndContract">
                                        <template v-slot:accordeonBody>

                                            <!-- Budget -->
                                            <MyAccordionItem edu-level="Bak" list-type="Contest"
                                                             budget-or-contract="Budget"
                                                             checkbox-name="BakContestBudget"
                                                             v-model="checkableGroups['BakContestBudget']"
                                                             @change="OnBigCheckboxClick"
                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                <template v-slot:buttonContent>
                                                    <label
                                                        class="direction-info__name direction-info__body flex-fill">Бюджет</label>
                                                </template>
                                                <template v-slot:bodyContent>
                                                    <div>
                                                        <template v-if="BakContestBudget">
                                                            <div class="programs"
                                                                 v-for="competition in BakContestBudget.values()">
                                                                <CheckableProgram
                                                                    :item-name="competition.uuid"
                                                                    :is-selected="competition.Selected"
                                                                    :belongs-to="'BakContestBudget'"
                                                                    class="flex-fill"
                                                                    @onCheckboxClicked="checkableProgramClicked">
                                                                    <template v-slot:Code>
                                                                        {{ competition.direction_code }}
                                                                    </template>
                                                                    <template v-slot:Name>
                                                                        {{
                                                                            competition.competition_group + (competition.edu_form ? (" (" + competition.edu_form.toLowerCase() + ")") : "")
                                                                        }}
                                                                    </template>
                                                                </CheckableProgram>
                                                            </div>
                                                        </template>
                                                        <p v-else>Загрузка списков...</p>
                                                    </div>
                                                </template>
                                            </MyAccordionItem>

                                            <!-- Contract -->
                                            <MyAccordionItem edu-level="Bak" list-type="Contest"
                                                             budget-or-contract="Contract"
                                                             checkbox-name="BakContestContract"
                                                             v-model="checkableGroups['BakContestContract']"
                                                             @change="OnBigCheckboxClick"
                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                <template v-slot:buttonContent>
                                                    <label
                                                        class="direction-info__name direction-info__body flex-fill">Контракт</label>
                                                </template>
                                                <template v-slot:bodyContent>
                                                    <div>
                                                        <template v-if="BakContestContract">
                                                            <div class="programs"
                                                                 v-for="competition in BakContestContract.values()">
                                                                <CheckableProgram
                                                                    :item-name="competition.uuid"
                                                                    :is-selected="competition.Selected"
                                                                    :belongs-to="'BakContestContract'"
                                                                    class="flex-fill"
                                                                    @onCheckboxClicked="checkableProgramClicked">
                                                                    <template v-slot:Code>
                                                                        {{ competition.direction_code }}
                                                                    </template>
                                                                    <template v-slot:Name>
                                                                        {{
                                                                            competition.competition_group + (competition.edu_form ? (" (" + competition.edu_form.toLowerCase() + ")") : "")
                                                                        }}
                                                                    </template>
                                                                </CheckableProgram>
                                                            </div>
                                                        </template>
                                                        <p v-else>Загрузка списков...</p>
                                                    </div>
                                                </template>
                                            </MyAccordionItem>

                                        </template>
                                    </CheckableAccordion>

                                </template>
                            </MyAccordionItem>
                            <!--Enrolled list-->
                            <MyAccordionItem edu-level="Bak" list-type="Enrolled">
                                <template v-slot:buttonContent>
                                    <p class="direction-info__name direction-info__body ps-3"
                                       style="display:block;">Списки
                                        зачисленных</p>
                                </template>
                                <template v-slot:bodyContent>

                                    <CheckableAccordion edu-level="Bak" list-type="Enrolled"
                                                        budget-or-contract="BudgetAndContract">
                                        <template v-slot:accordeonBody>

                                            <!-- Budget -->
                                            <MyAccordionItem edu-level="Bak" list-type="Enrolled"
                                                             budget-or-contract="Budget"
                                                             checkbox-name="BakEnrolledBudget"
                                                             v-model="checkableGroups['BakEnrolledBudget']"
                                                             @change="OnBigCheckboxClick"
                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                <template v-slot:buttonContent>
                                                    <label
                                                        class="direction-info__name direction-info__body flex-fill">Бюджет</label>
                                                </template>
                                                <template v-slot:bodyContent>
                                                    <div>
                                                        <template v-if="BakEnrolledBudget">
                                                            <div class="programs"
                                                                 v-for="competition in BakEnrolledBudget.values()">
                                                                <CheckableProgram
                                                                    :item-name="competition.uuid"
                                                                    :is-selected="competition.Selected"
                                                                    :belongs-to="'BakEnrolledBudget'"
                                                                    class="flex-fill"
                                                                    @onCheckboxClicked="checkableProgramClicked">
                                                                    <template v-slot:Code>
                                                                        {{ competition.direction_code }}
                                                                    </template>
                                                                    <template v-slot:Name>
                                                                        {{
                                                                            competition.competition_group + (competition.edu_form ? (" (" + competition.edu_form.toLowerCase() + ")") : "")
                                                                        }}
                                                                    </template>
                                                                </CheckableProgram>
                                                            </div>
                                                        </template>
                                                        <p v-else>Загрузка списков...</p>
                                                    </div>
                                                </template>
                                            </MyAccordionItem>

                                            <!-- Contract -->
                                            <MyAccordionItem edu-level="Bak" list-type="Enrolled"
                                                             budget-or-contract="Contract"
                                                             checkbox-name="BakEnrolledContract"
                                                             v-model="checkableGroups['BakEnrolledContract']"
                                                             @change="OnBigCheckboxClick"
                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                <template v-slot:buttonContent>
                                                    <label
                                                        class="direction-info__name direction-info__body flex-fill">Контракт</label>
                                                </template>
                                                <template v-slot:bodyContent>
                                                    <div>
                                                        <template v-if="BakEnrolledContract">
                                                            <div class="programs"
                                                                 v-for="competition in BakEnrolledContract.values()">
                                                                <CheckableProgram
                                                                    :item-name="competition.uuid"
                                                                    :is-selected="competition.Selected"
                                                                    :belongs-to="'BakEnrolledContract'"
                                                                    class="flex-fill"
                                                                    @onCheckboxClicked="checkableProgramClicked">
                                                                    <template v-slot:Code>
                                                                        {{ competition.direction_code }}
                                                                    </template>
                                                                    <template v-slot:Name>
                                                                        {{
                                                                            competition.competition_group + (competition.edu_form ? (" (" + competition.edu_form.toLowerCase() + ")") : "")
                                                                        }}
                                                                    </template>
                                                                </CheckableProgram>
                                                            </div>
                                                        </template>
                                                        <p v-else>Загрузка списков...</p>
                                                    </div>
                                                </template>
                                            </MyAccordionItem>

                                        </template>
                                    </CheckableAccordion>

                                </template>
                            </MyAccordionItem>

                            <!--Applicants list (Detailed quota)-->
                            <MyAccordionItem edu-level="Bak" list-type="ApplicantsQuota"
                                             budget-or-contract="Target"
                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                <template v-slot:buttonContent>
                                    <p class="direction-info__name direction-info__body ps-3"
                                       style="display:block;">Списки
                                        подавших заявление (ДЦК)</p>
                                </template>
                                <template v-slot:bodyContent>

                                    <CheckableAccordion edu-level="Bak" list-type="ApplicantsQuota"
                                                        budget-or-contract="Target">
                                        <template v-slot:accordeonBody>
                                            <template v-if="BakApplicantsQuotaTarget">
                                                <template v-if="BakApplicantsQuotaTarget.size > 0">
                                                    <div class="programs"
                                                         v-for="competition in BakApplicantsQuotaTarget.values()">
                                                        <CheckableProgram
                                                            :item-name="competition.uuid"
                                                            :is-selected="competition.Selected"
                                                            :belongs-to="'BakApplicantsQuotaTarget'"
                                                            class="flex-fill"
                                                            @onCheckboxClicked="checkableProgramClicked">
                                                            <template v-slot:Code>
                                                                {{ competition.direction_code }}
                                                            </template>
                                                            <template v-slot:Name>
                                                                {{
                                                                    competition.competition_group + (competition.edu_form ? (" (" + competition.edu_form.toLowerCase() + ")") : "")
                                                                }}
                                                            </template>
                                                        </CheckableProgram>
                                                    </div>
                                                </template>
                                                <p v-else
                                                   style="font-family: Roboto-Regular,serif; margin-bottom: 5px;">
                                                    Списки не найдены.</p>
                                            </template>
                                            <p v-else>Загрузка списков...</p>

                                        </template>
                                    </CheckableAccordion>

                                </template>
                            </MyAccordionItem>

                            <!--Contest list (Detailed quota)-->
                            <MyAccordionItem edu-level="Bak" list-type="ContestQuota"
                                             budget-or-contract="Target"
                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                <template v-slot:buttonContent>
                                    <p class="direction-info__name direction-info__body ps-3"
                                       style="display:block;">Конкурсные списки (ДЦК)</p>
                                </template>
                                <template v-slot:bodyContent>

                                    <CheckableAccordion edu-level="Bak" list-type="ContestQuota"
                                                        budget-or-contract="Target">
                                        <template v-slot:accordeonBody>
                                            <template v-if="BakContestQuotaTarget">
                                                <template v-if="BakContestQuotaTarget.size > 0">
                                                    <div class="programs"
                                                         v-for="competition in BakContestQuotaTarget.values()">
                                                        <CheckableProgram
                                                            :item-name="competition.uuid"
                                                            :is-selected="competition.Selected"
                                                            :belongs-to="'BakContestQuotaTarget'"
                                                            class="flex-fill"
                                                            @onCheckboxClicked="checkableProgramClicked">
                                                            <template v-slot:Code>
                                                                {{ competition.direction_code }}
                                                            </template>
                                                            <template v-slot:Name>
                                                                {{
                                                                    competition.competition_group + (competition.edu_form ? (" (" + competition.edu_form.toLowerCase() + ")") : "")
                                                                }}
                                                            </template>
                                                        </CheckableProgram>
                                                    </div>
                                                </template>
                                                <p v-else
                                                   style="font-family: Roboto-Regular,serif; margin-bottom: 5px;">
                                                    Списки не найдены.</p>
                                            </template>
                                            <p v-else>Загрузка списков...</p>

                                        </template>
                                    </CheckableAccordion>

                                </template>
                            </MyAccordionItem>

                        </template>
                    </CheckableAccordion>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CheckableAccordion from "@/components/UI/CheckableAccordion.vue";
import CheckableProgram from "@/components/UI/CheckableProgram.vue";
import MyAccordionItem from "@/components/UI/MyAccordionItem.vue";
import {getListCompetitions} from "@/components/ListLoader";
import checkableProgram from "@/components/UI/CheckableProgram.vue";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

import axiosInstance from "@/axiosConfig";

export default {
    name: 'BakCompetitionLists',

    props: {
        clearTrigger: {
            type: Boolean,
            required: true,
        }
    },

    watch: {
        clearTrigger: {
            handler(newVal, oldVal) {
                this.clearSelectedCompetitions();
            }
        }
    },

    computed: {
        checkableProgram() {
            return checkableProgram
        },

        BakApplicantsBudget() {
            return this.getCurrentCompetitions('BakApplicantsBudget');
        },

        BakApplicantsContract() {
            return this.getCurrentCompetitions('BakApplicantsContract');
        },

        BakContestBudget() {
            return this.getCurrentCompetitions('BakContestBudget');
        },

        BakContestContract() {
            return this.getCurrentCompetitions('BakContestContract');
        },

        BakEnrolledBudget() {
            return this.getCurrentCompetitions('BakEnrolledBudget');
        },

        BakEnrolledContract() {
            return this.getCurrentCompetitions('BakEnrolledContract');
        },

        BakApplicantsQuotaTarget() {
            return this.getCurrentCompetitions('BakApplicantsQuotaTarget');
        },

        BakContestQuotaTarget() {
            return this.getCurrentCompetitions('BakContestQuotaTarget');
        },
    },

    components: {MyAccordionItem, CheckableProgram, CheckableAccordion},

    data() {
        return {
            listsReceived: false,
            dataArrays: {},
            checkableGroups: {},
            checkInProgress: false,
            competitionsSelectedStatus: {},
            callEnum: {},
        };
    },

    async mounted() {
        let tempMap = new Map();
        tempMap.set("Bak", 1);

        tempMap.set("Applicants", 1);
        tempMap.set("Contest", 2);
        tempMap.set("ApplicantsQuota", 4);
        tempMap.set("Enrolled", 5);
        tempMap.set("ContestQuota", 6);

        tempMap.set("Budget", 1);
        tempMap.set("Contract", 2);
        tempMap.set("Target", 3);

        this.callEnum = tempMap;
    },

    methods: {
        async getListOfLists(campaignType, commonListType, commonFinSourceType) {
            let saveSource = new Map();

            try {
                const response = await axiosInstance.get("/api/junk/lists/" + campaignType + "/" + commonListType + "/" + commonFinSourceType);
                saveSource = new Map(response.data.data.map(item => [item.uuid, item]));
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }

            return saveSource;
        },

        getCurrentCompetitions(groupCommonName) {
            return this.dataArrays[groupCommonName];
        },

        checkCompetitionsSelectStatus(competitionBlock) {
            let allSelected = false;
            let anySelected = false;
            let oneSelected = false;
            let counter = 0;

            for (const element of competitionBlock) {
                if (element[1].Selected && !oneSelected) {
                    oneSelected = true;
                } else if (element[1].Selected && !anySelected && oneSelected) {
                    anySelected = true;
                } else if (!element[1].Selected) {
                    break;
                }
                counter++;
            }

            //console.log("Length: ", competitionBlock.size);
            if (counter === competitionBlock.size) {
                allSelected = true;
            }

            if (allSelected) {
                return 3;
            } else if (anySelected) {
                return 2;
            } else if (oneSelected) {
                return 1;
            } else return 0;
        },

        checkableProgramClicked(checkableProgramName, parent) {
            //console.log("checkableProgramClicked initiated by: ", checkableProgramName);

            this.dataArrays[parent].get(checkableProgramName).Selected = !this.dataArrays[parent].get(checkableProgramName).Selected;

            let selectedStatus = this.checkCompetitionsSelectStatus(this.dataArrays[parent]);

            if (!this.dataArrays[parent].get(checkableProgramName).Selected && this.checkableGroups[parent]) {
                this.checkableGroups[parent] = false;
                const checkbox = document.getElementById(parent);
                checkbox.checked = false;
            } else if (this.dataArrays[parent].get(checkableProgramName).Selected) {
                if (selectedStatus === 3) {
                    // All selected
                    this.checkableGroups[parent] = true;
                    const checkbox = document.getElementById(parent);
                    checkbox.checked = true;
                }
            }
            // let tempSelectedCompetitions = this.dataArrays[parentCheckboxName].filter(competition => competition.Selected);
            let tempSelectedCompetitions = new Map(
                [...this.dataArrays[parent]]
                    .filter(([key, competition]) => competition.Selected)
            );
            this.$emit('onCompetitionListsStateUpdate', selectedStatus, tempSelectedCompetitions, parent);
        },

        async OnBigCheckboxClick(event) {
            const bigCheckboxName = String(event.target.getAttribute('id'));
            if (!bigCheckboxName.includes('checkable-')) {
                //console.log("Big checkbox clicked: ", event)
                //console.log("Big checkbox name split: ", bigCheckboxName.split(/(?=[A-Z])/));
                await this.getListsIfAbsent(bigCheckboxName);
                this.checkableGroups[bigCheckboxName] = !this.checkableGroups[bigCheckboxName];
                const checkbox = document.getElementById(bigCheckboxName);
                checkbox.checked = this.checkableGroups[bigCheckboxName];

                //console.log("this.dataArrays[bigCheckboxName]: ", this.dataArrays[bigCheckboxName]);

                this.dataArrays[bigCheckboxName].forEach((value, key) => {
                    if (value.Selected !== this.checkableGroups[bigCheckboxName]) {
                        let checkbox = document.getElementById('checkable-' + value.uuid);
                        checkbox.click();
                    }
                });
            }

        },

        async getListsIfAbsent(bigCheckboxName) {
            if (!this.callEnum.get(bigCheckboxName)) {
                const tempArr = bigCheckboxName.split(/(?=[A-Z])/);
                const eduLevel = tempArr[0];
                const listType = tempArr[1];
                const budgetOrContract = tempArr[2];

                //console.log("Get list at: ", eduLevel + listType + budgetOrContract);
                const ans = await this.getListOfLists(this.callEnum.get(eduLevel), this.callEnum.get(listType), this.callEnum.get(budgetOrContract));
                let index = 0;
                ans.forEach((value, key) => {
                    value.Selected = false;
                    value.displayId = bigCheckboxName + index++;
                });

                this.dataArrays[bigCheckboxName] = ans;
                // Check all the groupCommonName accordion as the unchecked
                this.checkableGroups[bigCheckboxName] = false;

                this.callEnum.set(bigCheckboxName, 1);
            }
        },

        async OnAccordionButtonClicked(event, eduLevel, listType, budgetOrContract) {
            //console.log("OnAccordionButtonClicked: ", eduLevel, listType, budgetOrContract);
            const accordionCommonName = eduLevel + listType + budgetOrContract;
            //console.log("Map at: ", eduLevel + listType + budgetOrContract);
            if (!this.callEnum.get(accordionCommonName)) {
                //console.log("Get list at: ", eduLevel + listType + budgetOrContract);
                const ans = await this.getListOfLists(this.callEnum.get(eduLevel), this.callEnum.get(listType), this.callEnum.get(budgetOrContract));
                let index = 0;
                ans.forEach((value, key) => {
                    value.Selected = false;
                    value.displayId = accordionCommonName + index++;
                });

                this.dataArrays[accordionCommonName] = ans;
                // Check all the groupCommonName accordion as the unchecked
                this.checkableGroups[accordionCommonName] = false;

                this.callEnum.set(accordionCommonName, 1);
            }
        },

        clearSelectedCompetitions() {
            for (const [competitionName, elem] of Object.entries(this.dataArrays)) {
                if (elem.size > 0) {
                    elem.forEach((value, key) => {
                        if (value.Selected) {
                            let checkbox = document.getElementById('checkable-' + value.uuid);
                            checkbox.click();
                        }
                    })
                }
            }
        }
    },
}
</script>

<style scoped>
.direction-info__name {
    font-family: Roboto-Medium;
    color: #404040;
    margin: 0;
    font-size: calc(1rem + 0.3vw);
}

.direction-info__body {
    font-size: calc(1rem + 0.2vw);
}
</style>