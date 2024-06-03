<template>
    <div class="list-selector">
        <div class="row container-fluid mx-auto mt-4 mb-4">
            <div class="col-lg-7 col p-0 mx-auto">
                <div class="d-flex justify-content-evenly">
                    <!-- Bak, Mag & Asp accordion -->
                    <CheckableAccordion edu-level="BakMagAsp">
                        <template v-slot:accordeonBody>

                            <!--Bak-->
                            <MyAccordionItem edu-level="Bak">
                                <template v-slot:buttonContent>
                                    <p class="direction-info__name ps-3" style="display:block;"><b><span
                                        style="color: #0152a3;">Б</span></b>акалавриат</p>
                                </template>
                                <template v-slot:bodyContent>
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
                                                                             @change="OnCheckboxClick">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Бюджет</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <div>
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in BakBudget"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClick="checkableProgramClicked">
                                                                                    <template v-slot:Code>
                                                                                        {{ competition.direction_code }}
                                                                                    </template>
                                                                                    <template v-slot:Name>
                                                                                        {{ competition.fdv }}
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
                                                                             @change="OnCheckboxClick">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Контракт</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <div>
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in BakContract"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClick="checkableProgramClicked">
                                                                                    <template v-slot:Code>
                                                                                        {{ competition.direction_code }}
                                                                                    </template>
                                                                                    <template v-slot:Name>
                                                                                        {{ competition.fdv }}
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
                                                    Bak2 Body
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
                                                    Bak3 Body
                                                </template>
                                            </MyAccordionItem>
                                        </template>
                                    </CheckableAccordion>
                                </template>
                            </MyAccordionItem>

                            <!--Mag-->
                            <MyAccordionItem edu-level="Mag">
                                <template v-slot:buttonContent>
                                    <p class="direction-info__name ps-3" style="display:block;"><b><span
                                        style="color: #fd4239;">М</span></b>агистратура</p>
                                </template>
                                <template v-slot:bodyContent>
                                    <CheckableAccordion edu-level="Mag" list-type="Applicants">
                                        <template v-slot:accordeonBody>
                                            <!--List of Applicants-->
                                            <MyAccordionItem edu-level="Mag" list-type="Applicants">
                                                <template v-slot:buttonContent>
                                                    <p class="direction-info__name direction-info__body ps-3"
                                                       style="display:block;">Списки
                                                        подавших заявление</p>
                                                </template>
                                                <template v-slot:bodyContent>
                                                    Mag1 Body
                                                </template>
                                            </MyAccordionItem>
                                            <!--Contest list-->
                                            <MyAccordionItem edu-level="Mag" list-type="Contest">
                                                <template v-slot:buttonContent>
                                                    <p class="direction-info__name direction-info__body ps-3"
                                                       style="display:block;">Конкурсные
                                                        списки</p>
                                                </template>
                                                <template v-slot:bodyContent>
                                                    Mag2 Body
                                                </template>
                                            </MyAccordionItem>
                                            <!--Enrolled list-->
                                            <MyAccordionItem edu-level="Mag" list-type="Enrolled">
                                                <template v-slot:buttonContent>
                                                    <p class="direction-info__name direction-info__body ps-3"
                                                       style="display:block;">Списки
                                                        зачисленных</p>
                                                </template>
                                                <template v-slot:bodyContent>
                                                    Mag3 Body
                                                </template>
                                            </MyAccordionItem>
                                        </template>
                                    </CheckableAccordion>
                                </template>
                            </MyAccordionItem>

                            <!--Asp-->
                            <MyAccordionItem edu-level="Asp">
                                <template v-slot:buttonContent>
                                    <p class="direction-info__name ps-3" style="display:block;"><b><span
                                        style="color: #FF992C;">А</span></b>спирантура</p>
                                </template>
                                <template v-slot:bodyContent>
                                    <CheckableAccordion edu-level="Asp" list-type="Applicants">
                                        <template v-slot:accordeonBody>
                                            <!--Contest list-->
                                            <MyAccordionItem edu-level="Asp" list-type="Contest">
                                                <template v-slot:buttonContent>
                                                    <p class="direction-info__name direction-info__body ps-3"
                                                       style="display:block;">Конкурсные
                                                        списки</p>
                                                </template>
                                                <template v-slot:bodyContent>
                                                    Asp2 Body
                                                </template>
                                            </MyAccordionItem>
                                            <!--Enrolled list-->
                                            <MyAccordionItem edu-level="Asp" list-type="Enrolled">
                                                <template v-slot:buttonContent>
                                                    <p class="direction-info__name direction-info__body ps-3"
                                                       style="display:block;">Списки
                                                        зачисленных</p>
                                                </template>
                                                <template v-slot:bodyContent>
                                                    Asp3 Body
                                                </template>
                                            </MyAccordionItem>
                                        </template>
                                    </CheckableAccordion>
                                </template>
                            </MyAccordionItem>

                        </template>
                    </CheckableAccordion>

                </div>
            </div>
        </div>

        <!-- Test area for competition list getter (from link) -->
        <!--        <div>
                    <template v-if="listsReceived">
                        <h2>Сохраненные соревнования:</h2>
                        <ul>
                            <li v-for="(competition, index) in dataArrays" :key="competition.id">
                                {{ competition.code }} {{ competition.name }}; faculty_id: {{ competition.faculty_id }};
                                SELECTED: {{ competition.Selected }}
                            </li>
                        </ul>
                    </template>
                    <p v-else>Загрузка списков...</p>
                </div>-->

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
    name: 'ListSelector',
    computed: {
        checkableProgram() {
            return checkableProgram
        },

        BakBudget() {
            return this.getCurrentCompetitions('BakApplicantsBudget')
        },

        BakContract() {
            return this.getCurrentCompetitions('BakApplicantsContract')
        }
    },
    components: {MyAccordionItem, CheckableProgram, CheckableAccordion},

    data() {
        return {
            listsReceived: false,
            dataArrays: {},
            checkableGroups: {},
            checkInProgress: false,
            competitionsSelectedStatus: {},

            // API data
            dictionaries: {},   // Really need it??
            competitionsMap: {},
        };
    },

    async mounted() {
        await this.getCompetitions();
    },

    methods: {
        async getCompetitions() {
            // Get Bak competitions
            // Budget
            let campaign = '1';
            let typeList = '1';
            await this.readCompetitionGroupsDictionary();
            //await this.formDataArray(campaign, typeList, 'BakApplicantsBudget');
            // const tempStorage = await this.getListOfLists(campaign, typeList);
            // console.log("tempStorage: ", tempStorage);
            // this.buildFullCompetitionsMap(tempStorage);
            await this.formDataArray_New(campaign, typeList, 'BakApplicants');

            // Contract
            //typeList = '5';
            //await this.formDataArray(campaign, typeList, 'BakApplicantsContract');

            // Get Mag competitions, add them to dataArrays

            // Get Asp competitions, add them to dataArrays

            this.listsReceived = true;
            console.log("CheckableGroups: ", this.checkableGroups);
        },

        async formDataArray(campaign, typeList, groupCommonName) {
            let competitions = await getListCompetitions(campaign, typeList);

            let tempArray = [];

            for (let i = 0; i < competitions.competition_groups.length; i++) {
                competitions.competition_groups[i].Selected = false;
                competitions.competition_groups[i].id = groupCommonName + i;
                tempArray[i] = competitions.competition_groups[i];
            }
            this.dataArrays[groupCommonName] = tempArray;
            //console.log(this.dataArrays);
            // Check all the groupCommonName accordion as the unchecked
            this.checkableGroups[groupCommonName] = false;

            console.log("Filled data array with ", this.dataArrays);
        },

        async formDataArray_New(campaignType, commonListType, groupCommonName) {
            const competitions = await this.getListOfLists(campaignType, commonListType);
            console.log("tempStorage: ", competitions);
            const fullCompetitionsMap = this.buildFullCompetitionsMap(competitions);


            let tempArrayBudget = [];
            let tempArrayContract = [];
            fullCompetitionsMap.forEach((value, key) => {
                value.Selected = false;
                value.displayId = groupCommonName;
                if (value.common_fin_source_id === 1) {
                    // Budget
                    value.displayId += "Budget" + tempArrayBudget.length;
                    tempArrayBudget[tempArrayBudget.length++] = value;
                } else {
                    // Contract
                    value.displayId += "Contract" + tempArrayContract.length;
                    tempArrayContract[tempArrayContract.length++] = value;
                }
            });
            //console.log("Test tempArrayBudget: ", tempArrayBudget);
            //console.log("Test tempArrayContract: ", tempArrayContract);

            this.dataArrays[groupCommonName + "Budget"] = tempArrayBudget;
            this.dataArrays[groupCommonName + "Contract"] = tempArrayContract;
            // Check all the groupCommonName accordion as the unchecked
            this.checkableGroups[groupCommonName + "Budget"] = false;
            this.checkableGroups[groupCommonName + "Contract"] = false;
        },

        async getDictionaries() {
            try {
                const response = await axiosInstance.get("/api/dictionaries");
                this.dictionaries = new Map(Object.entries(response.data));
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },

        async readCompetitionGroupsDictionary() {
            try {
                const response = await axiosInstance.get("/api/dictionaries/dict_competition_groups");
                this.competitionsMap = new Map(response.data.items.map(item => [item.id, item]));
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },

        async getListOfLists(campaignType, commonListType) {
            console.log("Giga massiv: ", this.dataArrays);
            let saveSource = new Map();

            try {
                const response = await axiosInstance.get("/api/lists/" + campaignType + "/" + commonListType);
                console.log("List of lists response: ", response.data);
                saveSource = new Map(response.data.data.map(item => [item.uuid, item]));
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }

            return saveSource;
        },

        buildFullCompetitionsMap(listOfLists) {
            const combinedMap = new Map();

            listOfLists.forEach((valueFirst, key) => {
                const valueSecond = this.competitionsMap.get(valueFirst.competition_group_id);
                if (valueSecond) {
                    const {id, ...rest} = valueSecond;
                    const combinedValue = {...rest, ...valueFirst};
                    combinedMap.set(key, combinedValue);
                }
            });

            console.log("Combined map: ", combinedMap);
            return combinedMap;
        },

        getCurrentCompetitions(groupCommonName) {
            return this.dataArrays[groupCommonName];
        },

        checkCompetitionsSelectStatus(competitionBlock) {
            let allSelected = false;
            let anySelected = false;
            let oneSelected = false;
            let counter = 0;

            for (const element in competitionBlock) {
                if (competitionBlock[element].Selected && !oneSelected) {
                    oneSelected = true;
                } else if (competitionBlock[element].Selected && !anySelected && oneSelected) {
                    anySelected = true;
                } else if (!competitionBlock[element].Selected) {
                    continue;
                }
                counter++;
            }

            if (counter === competitionBlock.length) {
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

        checkableProgramClicked(isSelected, checkableProgramName) {
            console.log("checkableProgramClicked initiated by: ", checkableProgramName);
            let checkbox;

            let parentCheckboxName = checkableProgramName.replace(/[0-9]/g, '');
            let programIndex = checkableProgramName.replace(/\D/g, '');

            this.dataArrays[parentCheckboxName][programIndex].Selected = isSelected;


            let selectedStatus = this.checkCompetitionsSelectStatus(this.dataArrays[parentCheckboxName]);
            console.log("selectedStatus", selectedStatus)
            checkbox = document.getElementById(parentCheckboxName);

            // Form array of selected competitions
            let tempSelectedCompetitions = []
            tempSelectedCompetitions = this.dataArrays[parentCheckboxName].filter(competition => competition.Selected);

            this.competitionsSelectedStatus[parentCheckboxName] = selectedStatus;
            if (selectedStatus === 0) {
                //this.checkableGroups[parentCheckboxName] = false;
                checkbox.checked = false;
                checkbox.intermediate = false;
            } else if (selectedStatus === 2 || selectedStatus === 1) {
                //this.checkableGroups[parentCheckboxName] = false;
                checkbox.checked = false;
                checkbox.intermediate = true;
            } else if (selectedStatus === 3) {
                //this.checkableGroups[parentCheckboxName] = true;
                checkbox.checked = true;
                checkbox.intermediate = false;
            }

            this.$emit('onCompetitionListsStateUpdate', selectedStatus, tempSelectedCompetitions, parentCheckboxName);
        },

        OnCheckboxClick(event) {
            const checkboxName = String(event.target.getAttribute('id'));
            if (!checkboxName.includes('checkable-')) {
                console.log("Big checkbox clicked: ", checkboxName)
                //const previousCheckboxState = this.checkableGroups[checkboxName];
                const bigCheckbox = document.getElementById(checkboxName);
                //if (!bigCheckbox.intermediate) {
                    this.checkableGroups[checkboxName] = !this.checkableGroups[checkboxName];
                //}

                let count = 0;
                for (const element in this.dataArrays[checkboxName]) {
                    count++;
                    if (this.checkableGroups[checkboxName] !== this.dataArrays[checkboxName][element].Selected) {
                        let checkbox = document.getElementById('checkable-' + this.dataArrays[checkboxName][element].displayId);
                        checkbox.click();
                    }
                }
            }

        },
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