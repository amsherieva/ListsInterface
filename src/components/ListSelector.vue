<template>
    <div class="temp-list-selector">
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
                                                                    <!--Test programs-->
                                                                    <div>
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="(competition, index) in dataArrays"
                                                                                 :key="competition.id">
                                                                                <CheckableProgram
                                                                                    :item-name="index.toString()"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClick="checkableProgramClicked">
                                                                                    <template v-slot:Code>
                                                                                        {{ competition.code }}
                                                                                    </template>
                                                                                    <template v-slot:Name>
                                                                                        {{ competition.name }}
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
                                                                             checkbox-name="BakApplicantsContract">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Контракт</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    abiba
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

export default {
    name: 'ListSelector',
    computed: {
        checkableProgram() {
            return checkableProgram
        }
    },
    components: {MyAccordionItem, CheckableProgram, CheckableAccordion},

    data() {
        return {
            listsReceived: false,
            dataArrays: {},
            dataArraysSize: 0,
            checkableGroups: {},
            checkInProgress: false,
        };
    },

    async mounted() {
        await this.getCompetitions();
        //console.log(this.dataArrays);
    },

    methods: {
        async getCompetitions() {
            // Get Bak competitions
            const campaign = '1';
            const typeList = '1';
            const competitions = await getListCompetitions(campaign, typeList);
            for (let i = 0; i < competitions.competition_groups.length; i++) {
                competitions.competition_groups[i].Selected = false;
                this.dataArrays['BakApplicantsBudget' + i] = competitions.competition_groups[i];
                this.dataArraysSize++;
                //console.log(this.dataArrays['BakApplicantsBudget' + i]);
            }
            // Check all of the BakApplicantsBudget accordion as the unchecked
            this.checkableGroups['BakApplicantsBudget'] = false;

            // Get Mag competitions, add them to dataArrays

            // Get Asp competitions, add them to dataArrays

            this.listsReceived = true;
        },

        checkCompetitionsSelectStatus() {
            let allSelected = false;
            let anySelected = false;
            let counter = 0;

            for (const element in this.dataArrays) {
                if (this.dataArrays[element].Selected && !anySelected) {
                    anySelected = true;
                } else if (!this.dataArrays[element].Selected) {
                    break;
                }
                counter++;
            }

            //console.log("Counter: " + counter);
            //console.log("competitionsArray length: " + this.dataArraysSize);
            if (counter === this.dataArraysSize) {
                allSelected = true;
            }

            //console.log("AllSelected ", allSelected);
            //console.log("AnySelected ", anySelected);

            if (allSelected) {
                return 2;
            } else if (anySelected) {
                return 1;
            } else return 0;
        },

        checkableProgramClicked(isSelected, checkableProgramName) {
            console.log("checkableProgramClicked initiated by: ", checkableProgramName);
            let checkbox;

            let parentCheckboxName = checkableProgramName.replace(/[0-9]/g, '');

            this.dataArrays[checkableProgramName].Selected = isSelected;

            let selectedStatus = this.checkCompetitionsSelectStatus(this.dataArrays);
            checkbox = document.getElementById(parentCheckboxName);
            console.log(selectedStatus, checkbox);

            if (!this.checkInProgress) {
                if (selectedStatus === 0) {
                    this.checkableGroups[parentCheckboxName] = false;
                    checkbox.checked = false;
                } else if (selectedStatus === 1) {
                    this.checkableGroups[parentCheckboxName] = false;
                    checkbox.checked = false;
                    checkbox.intermediate = true;
                } else if (selectedStatus === 2) {
                    this.checkableGroups[parentCheckboxName] = true;
                    checkbox.checked = true;
                }
            }
        },

        OnCheckboxClick(event) {
            let checkboxName = event.target.getAttribute('id');
            if (!checkboxName.includes('checkable-')) {
                console.log("checkableGroups1:",checkboxName);
                this.checkableGroups[checkboxName] = !this.checkableGroups[checkboxName];
                console.log("checkableGroups2:",this.checkableGroups[checkboxName]);

                let count = 0;
                this.checkInProgress = true;
                for (const element in this.dataArrays) {
                    count++;
                    console.log("Element: ", this.dataArrays[element].Selected);
                    console.log("this.checkableGroups[checkboxName]: ", this.checkableGroups[checkboxName]);
                    if (element.includes(checkboxName) && this.checkableGroups[checkboxName] !== this.dataArrays[element].Selected) {
                        //this.dataArrays[element].Selected = !this.dataArrays[element].Selected;
                        if (count === this.dataArraysSize) {
                            this.checkInProgress = false;
                        }
                        let checkbox = document.getElementById('checkable-' + element);
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