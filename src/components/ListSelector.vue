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
                                                                             checkbox-name="123123132132">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Бюджет</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <CheckableProgram :item-name="'testing1'"
                                                                                      class="flex-fill">Программа 1
                                                                    </CheckableProgram>
                                                                    <CheckableProgram :item-name="'testing2'"
                                                                                      class="flex-fill">Программа 2
                                                                    </CheckableProgram>
                                                                </template>
                                                            </MyAccordionItem>

                                                            <!-- Contract -->
                                                            <MyAccordionItem edu-level="Bak" list-type="Applicants"
                                                                             budget-or-contract="Contract"
                                                                             checkbox-name="23123132132">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Контракт</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <CheckableProgram :item-name="'testing3'"
                                                                                      class="flex-fill">Программа 1
                                                                    </CheckableProgram>
                                                                    <CheckableProgram :item-name="'testing4'"
                                                                                      class="flex-fill">Программа 2
                                                                    </CheckableProgram>
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
<!--        <div>-->
<!--            <h2>Сохраненные соревнования:</h2>-->
<!--            <ul>-->
<!--                <li v-for="competition in competitions" :key="competition.id">-->
<!--                    {{ competition.name }}-->
<!--                </li>-->
<!--            </ul>-->
<!--        </div>-->

    </div>
</template>

<script>
import CheckableAccordion from "@/components/UI/CheckableAccordion.vue";
import CheckableProgram from "@/components/UI/CheckableProgram.vue";
import MyAccordionItem from "@/components/UI/MyAccordionItem.vue";
import {getListCompetitions} from "@/components/ListLoader";

export default {
    name: 'ListSelector',
    components: {MyAccordionItem, CheckableProgram, CheckableAccordion},

    data() {
        return {
            competitions: null,
        };
    },

    mounted() {
        this.getCompetitions();
    },

    methods: {
        async getCompetitions() {
            const campaign = '1';
            const typeList = '1';
            const competitions = await getListCompetitions(campaign, typeList);
            console.log(competitions);
            this.competitions = competitions;
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