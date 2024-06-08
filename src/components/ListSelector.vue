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
                                                                             @change="OnBigCheckboxClick"
                                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Бюджет</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <div>
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in BakApplicantsBudget"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked">
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
                                                                             @change="OnBigCheckboxClick"
                                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Контракт</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <div>
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in BakApplicantsContract"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked">
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
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in BakContestBudget"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked">
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
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in BakContestContract"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked"
                                                                                    @onAccordionButtonClicked="OnAccordionButtonClicked">
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
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in BakEnrolledBudget"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked">
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
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in BakEnrolledContract"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked">
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
                                                    <CheckableAccordion edu-level="Mag" list-type="Applicants"
                                                                        budget-or-contract="BudgetAndContract">
                                                        <template v-slot:accordeonBody>

                                                            <!-- Budget -->
                                                            <MyAccordionItem edu-level="Mag" list-type="Applicants"
                                                                             budget-or-contract="Budget"
                                                                             checkbox-name="MagApplicantsBudget"
                                                                             v-model="checkableGroups['MagApplicantsBudget']"
                                                                             @change="OnBigCheckboxClick"
                                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Бюджет</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <div>
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in MagApplicantsBudget"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked">
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
                                                            <MyAccordionItem edu-level="Mag" list-type="Applicants"
                                                                             budget-or-contract="Contract"
                                                                             checkbox-name="MagApplicantsContract"
                                                                             v-model="checkableGroups['MagApplicantsContract']"
                                                                             @change="OnBigCheckboxClick"
                                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Контракт</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <div>
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in MagApplicantsContract"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked">
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
                                            <MyAccordionItem edu-level="Mag" list-type="Contest">
                                                <template v-slot:buttonContent>
                                                    <p class="direction-info__name direction-info__body ps-3"
                                                       style="display:block;">Конкурсные
                                                        списки</p>
                                                </template>
                                                <template v-slot:bodyContent>

                                                    <CheckableAccordion edu-level="Mag" list-type="Contest"
                                                                        budget-or-contract="BudgetAndContract">
                                                        <template v-slot:accordeonBody>

                                                            <!-- Budget -->
                                                            <MyAccordionItem edu-level="Mag" list-type="Contest"
                                                                             budget-or-contract="Budget"
                                                                             checkbox-name="MagContestBudget"
                                                                             v-model="checkableGroups['MagContestBudget']"
                                                                             @change="OnBigCheckboxClick"
                                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Бюджет</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <div>
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in MagContestBudget"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked">
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
                                                            <MyAccordionItem edu-level="Mag" list-type="Contest"
                                                                             budget-or-contract="Contract"
                                                                             checkbox-name="MagContestContract"
                                                                             v-model="checkableGroups['MagContestContract']"
                                                                             @change="OnBigCheckboxClick"
                                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Контракт</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <div>
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in MagContestContract"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked">
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
                                            <!--Enrolled list-->
                                            <MyAccordionItem edu-level="Mag" list-type="Enrolled">
                                                <template v-slot:buttonContent>
                                                    <p class="direction-info__name direction-info__body ps-3"
                                                       style="display:block;">Списки
                                                        зачисленных</p>
                                                </template>
                                                <template v-slot:bodyContent>

                                                    <CheckableAccordion edu-level="Mag" list-type="Enrolled"
                                                                        budget-or-contract="BudgetAndContract">
                                                        <template v-slot:accordeonBody>

                                                            <!-- Budget -->
                                                            <MyAccordionItem edu-level="Mag" list-type="Enrolled"
                                                                             budget-or-contract="Budget"
                                                                             checkbox-name="MagEnrolledBudget"
                                                                             v-model="checkableGroups['MagEnrolledBudget']"
                                                                             @change="OnBigCheckboxClick"
                                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Бюджет</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <div>
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in MagEnrolledBudget"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked">
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
                                                            <MyAccordionItem edu-level="Mag" list-type="Enrolled"
                                                                             budget-or-contract="Contract"
                                                                             checkbox-name="MagEnrolledContract"
                                                                             v-model="checkableGroups['MagEnrolledContract']"
                                                                             @change="OnBigCheckboxClick"
                                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Контракт</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <div>
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in MagEnrolledContract"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked">
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

                                                    <CheckableAccordion edu-level="Asp" list-type="Contest"
                                                                        budget-or-contract="BudgetAndContract">
                                                        <template v-slot:accordeonBody>

                                                            <!-- Budget -->
                                                            <MyAccordionItem edu-level="Asp" list-type="Contest"
                                                                             budget-or-contract="Budget"
                                                                             checkbox-name="AspContestBudget"
                                                                             v-model="checkableGroups['AspContestBudget']"
                                                                             @change="OnBigCheckboxClick"
                                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Бюджет</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <div>
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in AspContestBudget"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked">
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
                                                            <MyAccordionItem edu-level="Asp" list-type="Contest"
                                                                             budget-or-contract="Contract"
                                                                             checkbox-name="AspContestContract"
                                                                             v-model="checkableGroups['AspContestContract']"
                                                                             @change="OnBigCheckboxClick"
                                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Контракт</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <div>
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in AspContestContract"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked">
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
                                            <!--Enrolled list-->
                                            <MyAccordionItem edu-level="Asp" list-type="Enrolled">
                                                <template v-slot:buttonContent>
                                                    <p class="direction-info__name direction-info__body ps-3"
                                                       style="display:block;">Списки
                                                        зачисленных</p>
                                                </template>
                                                <template v-slot:bodyContent>

                                                    <CheckableAccordion edu-level="Asp" list-type="Enrolled"
                                                                        budget-or-contract="BudgetAndContract">
                                                        <template v-slot:accordeonBody>

                                                            <!-- Budget -->
                                                            <MyAccordionItem edu-level="Asp" list-type="Enrolled"
                                                                             budget-or-contract="Budget"
                                                                             checkbox-name="AspEnrolledBudget"
                                                                             v-model="checkableGroups['AspEnrolledBudget']"
                                                                             @change="OnBigCheckboxClick"
                                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Бюджет</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <div>
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in AspEnrolledBudget"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked">
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
                                                            <MyAccordionItem edu-level="Asp" list-type="Enrolled"
                                                                             budget-or-contract="Contract"
                                                                             checkbox-name="AspEnrolledContract"
                                                                             v-model="checkableGroups['AspEnrolledContract']"
                                                                             @change="OnBigCheckboxClick"
                                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                                <template v-slot:buttonContent>
                                                                    <label
                                                                        class="direction-info__name direction-info__body flex-fill">Контракт</label>
                                                                </template>
                                                                <template v-slot:bodyContent>
                                                                    <div>
                                                                        <template v-if="listsReceived">
                                                                            <div class="programs"
                                                                                 v-for="competition in AspEnrolledContract"
                                                                                 :key="competition.displayId">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.displayId"
                                                                                    :is-selected="competition.Selected"
                                                                                    class="flex-fill"
                                                                                    @onCheckboxClicked="checkableProgramClicked">
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
    name: 'ListSelector',
    computed: {
        checkableProgram() {
            return checkableProgram
        },

        // Bak
        BakApplicantsBudget() {
            return this.getCurrentCompetitions('BakApplicantsBudget')
        },

        BakApplicantsContract() {
            return this.getCurrentCompetitions('BakApplicantsContract')
        },

        BakContestBudget() {
            return this.getCurrentCompetitions('BakContestBudget')
        },

        BakContestContract() {
            return this.getCurrentCompetitions('BakContestContract')
        },

        BakEnrolledBudget() {
            return this.getCurrentCompetitions('BakEnrolledBudget')
        },

        BakEnrolledContract() {
            return this.getCurrentCompetitions('BakEnrolledContract')
        },


        // Mag
        MagApplicantsBudget() {
            return this.getCurrentCompetitions('MagApplicantsBudget')
        },

        MagApplicantsContract() {
            return this.getCurrentCompetitions('MagApplicantsContract')
        },

        MagContestBudget() {
            return this.getCurrentCompetitions('MagContestBudget')
        },

        MagContestContract() {
            return this.getCurrentCompetitions('MagContestContract')
        },

        MagEnrolledBudget() {
            return this.getCurrentCompetitions('MagEnrolledBudget')
        },

        MagEnrolledContract() {
            return this.getCurrentCompetitions('MagEnrolledContract')
        },


        // Asp
        AspContestBudget() {
            return this.getCurrentCompetitions('AspContestBudget')
        },

        AspContestContract() {
            return this.getCurrentCompetitions('AspContestContract')
        },

        AspEnrolledBudget() {
            return this.getCurrentCompetitions('AspEnrolledBudget')
        },

        AspEnrolledContract() {
            return this.getCurrentCompetitions('AspEnrolledContract')
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

            // API data
            dictionaries: {},   // Really need it??
            competitionsMap: {},
        };
    },

    async mounted() {
        await this.getCompetitions();
        let tempMap = new Map();
        tempMap.set("Bak", 1);
        tempMap.set("Mag", 2);
        tempMap.set("Asp", 3);

        tempMap.set("Applicants", 1);
        tempMap.set("Contest", 2);
        tempMap.set("Enrolled", 5);

        tempMap.set("Budget", 1);
        tempMap.set("Contract", 2);

        this.callEnum = tempMap;
    },

    methods: {
        async getCompetitions() {
            // Get Bak competitions
            // Budget

            let campaign = '1';
            //await this.readCompetitionGroupsDictionary();

            // Bak
            //await this.formDataArray(1, 1, 'BakApplicants');
            //await this.formDataArray(1, 2, 'BakContest');
            //await this.formDataArray(1, 5, 'BakEnrolled');

            // Mag
            //await this.formDataArray(2, 1, 'MagApplicants');
            //await this.formDataArray(2, 2, 'MagContest');
            //await this.formDataArray(2, 5, 'MagEnrolled');

            // Asp
            //await this.formDataArray(3, 2, 'AspContest');
            //await this.formDataArray(3, 5, 'AspEnrolled');

            this.listsReceived = true;
            //console.log("CheckableGroups: ", this.checkableGroups);
        },

        async formDataArray_Old(campaign, typeList, groupCommonName) {
            let competitions = await getListCompetitions(campaign, typeList);

            let tempArray = [];

            for (let i = 0; i < competitions.competition_groups.length; i++) {
                competitions.competition_groups[i].Selected = false;
                competitions.competition_groups[i].id = groupCommonName + i;
                tempArray[i] = competitions.competition_groups[i];
            }
            this.dataArrays[groupCommonName] = tempArray;
            // Check all the groupCommonName accordion as the unchecked
            this.checkableGroups[groupCommonName] = false;
        },

        async formDataArray(campaignType, commonListType, groupCommonName) {
            function dataArraysCompareFn(a, b) {
                const stringNumberFirst = a[1].direction_code.replace(/\./g, "");
                const numberFirst = Number(stringNumberFirst);
                const stringNumberSecond = b[1].direction_code.replace(/\./g, "");
                const numberSecond = Number(stringNumberSecond);

                return numberFirst - numberSecond;
            }

            const competitions = await this.getListOfLists(campaignType, commonListType);
            let fullCompetitionsMap = this.buildFullCompetitionsMap(competitions);

            // Sort the map
            const entries = Array.from(fullCompetitionsMap.entries());
            const sortedEntries = entries.sort(dataArraysCompareFn);
            fullCompetitionsMap = new Map(sortedEntries);


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
            let saveSource = new Map();

            try {
                const response = await axiosInstance.get("/api/lists/" + campaignType + "/" + commonListType);
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
                    break;
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

        checkableProgramClicked(checkableProgramName) {
            //console.log("checkableProgramClicked initiated by: ", checkableProgramName);

            let parentCheckboxName = checkableProgramName.replace(/[0-9]/g, '');
            let programIndex = checkableProgramName.replace(/\D/g, '');

            this.dataArrays[parentCheckboxName][programIndex].Selected = !this.dataArrays[parentCheckboxName][programIndex].Selected;

            let selectedStatus = this.checkCompetitionsSelectStatus(this.dataArrays[parentCheckboxName]);

            if (!this.dataArrays[parentCheckboxName][programIndex].Selected && this.checkableGroups[parentCheckboxName]) {
                this.checkableGroups[parentCheckboxName] = false;
                const checkbox = document.getElementById(parentCheckboxName);
                checkbox.checked = false;
            } else if (this.dataArrays[parentCheckboxName][programIndex].Selected) {
                if (selectedStatus === 3) {
                    // All selected
                    this.checkableGroups[parentCheckboxName] = true;
                    const checkbox = document.getElementById(parentCheckboxName);
                    checkbox.checked = true;
                }
            }
            let tempSelectedCompetitions = this.dataArrays[parentCheckboxName].filter(competition => competition.Selected);

            this.$emit('onCompetitionListsStateUpdate', selectedStatus, tempSelectedCompetitions, parentCheckboxName);
        },

        OnBigCheckboxClick(event) {
            const bigCheckboxName = String(event.target.getAttribute('id'));
            if (!bigCheckboxName.includes('checkable-')) {
                //console.log("Big checkbox clicked: ", event)
                this.checkableGroups[bigCheckboxName] = !this.checkableGroups[bigCheckboxName];
                const checkbox = document.getElementById(bigCheckboxName);
                checkbox.checked = this.checkableGroups[bigCheckboxName];

                let count = 0;
                for (const element in this.dataArrays[bigCheckboxName]) {
                    count++;
                    if (this.dataArrays[bigCheckboxName][element].Selected !== this.checkableGroups[bigCheckboxName]) {
                        let checkbox = document.getElementById('checkable-' + this.dataArrays[bigCheckboxName][element].displayId);
                        checkbox.click();
                    }
                }
            }

        },

        OnAccordionButtonClicked(event, eduLevel, listType, budgetOrContract) {
            console.log("OnAccordionButtonClicked: ", eduLevel, listType, budgetOrContract);
            //console.log("Map at: ", eduLevel + listType + budgetOrContract);
            if (!this.callEnum.get(eduLevel + listType + budgetOrContract)) {
                //console.log(eduLevel + listType + budgetOrContract);
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