<template>
    <div class="list-selector">
        <div class="row container-fluid mx-auto mt-4 mb-4">
            <div class="col-lg-7 p-0 mx-auto">
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
                                            <MyAccordionItem edu-level="Bak" list-type="Applicants_quota"
                                                             budget-or-contract="Target"
                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                <template v-slot:buttonContent>
                                                    <p class="direction-info__name direction-info__body ps-3"
                                                       style="display:block;">Списки
                                                        подавших заявление (ДЦК)</p>
                                                </template>
                                                <template v-slot:bodyContent>

                                                    <CheckableAccordion edu-level="Bak" list-type="Applicants_quota"
                                                                        budget-or-contract="Target">
                                                        <template v-slot:accordeonBody>
                                                            <template v-if="BakApplicants_quotaTarget">
                                                                <template v-if="BakApplicants_quotaTarget.size > 0">
                                                                    <div class="programs"
                                                                         v-for="competition in BakApplicants_quotaTarget.values()">
                                                                        <CheckableProgram
                                                                            :item-name="competition.uuid"
                                                                            :is-selected="competition.Selected"
                                                                            :belongs-to="'BakApplicants_quotaTarget'"
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
                                            <MyAccordionItem edu-level="Bak" list-type="Contest_quota"
                                                             budget-or-contract="Target"
                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                <template v-slot:buttonContent>
                                                    <p class="direction-info__name direction-info__body ps-3"
                                                       style="display:block;">Конкурсные списки (ДЦК)</p>
                                                </template>
                                                <template v-slot:bodyContent>

                                                    <CheckableAccordion edu-level="Bak" list-type="Contest_quota"
                                                                        budget-or-contract="Target">
                                                        <template v-slot:accordeonBody>
                                                            <template v-if="BakContest_quotaTarget">
                                                                <template v-if="BakContest_quotaTarget.size > 0">
                                                                    <div class="programs"
                                                                         v-for="competition in BakContest_quotaTarget.values()">
                                                                        <CheckableProgram
                                                                            :item-name="competition.uuid"
                                                                            :is-selected="competition.Selected"
                                                                            :belongs-to="'BakContest_quotaTarget'"
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
                                                                        <template v-if="MagApplicantsBudget">
                                                                            <div class="programs"
                                                                                 v-for="competition in MagApplicantsBudget.values()">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.uuid"
                                                                                    :is-selected="competition.Selected"
                                                                                    :belongs-to="'MagApplicantsBudget'"
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
                                                                        <template v-if="MagApplicantsContract">
                                                                            <div class="programs"
                                                                                 v-for="competition in MagApplicantsContract.values()">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.uuid"
                                                                                    :is-selected="competition.Selected"
                                                                                    :belongs-to="'MagApplicantsContract'"
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
                                                                        <template v-if="MagContestBudget">
                                                                            <div class="programs"
                                                                                 v-for="competition in MagContestBudget.values()">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.uuid"
                                                                                    :is-selected="competition.Selected"
                                                                                    :belongs-to="'MagContestBudget'"
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
                                                                        <template v-if="MagContestContract">
                                                                            <div class="programs"
                                                                                 v-for="competition in MagContestContract.values()">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.uuid"
                                                                                    :is-selected="competition.Selected"
                                                                                    :belongs-to="'MagContestContract'"
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
                                                                        <template v-if="MagEnrolledBudget">
                                                                            <div class="programs"
                                                                                 v-for="competition in MagEnrolledBudget.values()">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.uuid"
                                                                                    :is-selected="competition.Selected"
                                                                                    :belongs-to="'MagEnrolledBudget'"
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
                                                                        <template v-if="MagEnrolledContract">
                                                                            <div class="programs"
                                                                                 v-for="competition in MagEnrolledContract.values()">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.uuid"
                                                                                    :is-selected="competition.Selected"
                                                                                    :belongs-to="'MagEnrolledContract'"
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
                                            <MyAccordionItem edu-level="Mag" list-type="Applicants_quota"
                                                             budget-or-contract="Target"
                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                <template v-slot:buttonContent>
                                                    <p class="direction-info__name direction-info__body ps-3"
                                                       style="display:block;">Списки
                                                        подавших заявление (ДЦК)</p>
                                                </template>
                                                <template v-slot:bodyContent>

                                                    <CheckableAccordion edu-level="Mag" list-type="Applicants_quota"
                                                                        budget-or-contract="Target">
                                                        <template v-slot:accordeonBody>
                                                            <template v-if="MagApplicants_quotaTarget">
                                                                <template v-if="MagApplicants_quotaTarget.size > 0">
                                                                    <div class="programs"
                                                                         v-for="competition in MagApplicants_quotaTarget.values()">
                                                                        <CheckableProgram
                                                                            :item-name="competition.uuid"
                                                                            :is-selected="competition.Selected"
                                                                            :belongs-to="'MagApplicants_quotaTarget'"
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
                                            <MyAccordionItem edu-level="Mag" list-type="Contest_quota"
                                                             budget-or-contract="Target"
                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                <template v-slot:buttonContent>
                                                    <p class="direction-info__name direction-info__body ps-3"
                                                       style="display:block;">Конкурсные списки (ДЦК)</p>
                                                </template>
                                                <template v-slot:bodyContent>

                                                    <CheckableAccordion edu-level="Mag" list-type="Contest_quota"
                                                                        budget-or-contract="Target">
                                                        <template v-slot:accordeonBody>
                                                            <template v-if="MagContest_quotaTarget">
                                                                <template v-if="MagContest_quotaTarget.size > 0">
                                                                    <div class="programs"
                                                                         v-for="competition in MagContest_quotaTarget.values()">
                                                                        <CheckableProgram
                                                                            :item-name="competition.uuid"
                                                                            :is-selected="competition.Selected"
                                                                            :belongs-to="'MagContest_quotaTarget'"
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
                                                                        <template v-if="AspContestBudget">
                                                                            <div class="programs"
                                                                                 v-for="competition in AspContestBudget.values()">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.uuid"
                                                                                    :is-selected="competition.Selected"
                                                                                    :belongs-to="'AspContestBudget'"
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
                                                                        <template v-if="AspContestContract">
                                                                            <div class="programs"
                                                                                 v-for="competition in AspContestContract.values()">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.uuid"
                                                                                    :is-selected="competition.Selected"
                                                                                    :belongs-to="'AspContestContract'"
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
                                                                        <template v-if="AspEnrolledBudget">
                                                                            <div class="programs"
                                                                                 v-for="competition in AspEnrolledBudget.values()">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.uuid"
                                                                                    :is-selected="competition.Selected"
                                                                                    :belongs-to="'AspEnrolledBudget'"
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
                                                                        <template v-if="AspEnrolledContract">
                                                                            <div class="programs"
                                                                                 v-for="competition in AspEnrolledContract.values()">
                                                                                <CheckableProgram
                                                                                    :item-name="competition.uuid"
                                                                                    :is-selected="competition.Selected"
                                                                                    :belongs-to="'AspEnrolledContract'"
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
                                            <MyAccordionItem edu-level="Asp" list-type="Applicants_quota"
                                                             budget-or-contract="Target"
                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                <template v-slot:buttonContent>
                                                    <p class="direction-info__name direction-info__body ps-3"
                                                       style="display:block;">Списки
                                                        подавших заявление (ДЦК)</p>
                                                </template>
                                                <template v-slot:bodyContent>

                                                    <CheckableAccordion edu-level="Asp" list-type="Applicants_quota"
                                                                        budget-or-contract="Target">
                                                        <template v-slot:accordeonBody>
                                                            <template v-if="AspApplicants_quotaTarget">
                                                                <template v-if="AspApplicants_quotaTarget.size > 0">
                                                                    <div class="programs"
                                                                         v-for="competition in AspApplicants_quotaTarget.values()">
                                                                        <CheckableProgram
                                                                            :item-name="competition.uuid"
                                                                            :is-selected="competition.Selected"
                                                                            :belongs-to="'AspApplicants_quotaTarget'"
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
                                            <MyAccordionItem edu-level="Asp" list-type="Contest_quota"
                                                             budget-or-contract="Target"
                                                             @onAccordionButtonClicked="OnAccordionButtonClicked">
                                                <template v-slot:buttonContent>
                                                    <p class="direction-info__name direction-info__body ps-3"
                                                       style="display:block;">Конкурсные списки (ДЦК)</p>
                                                </template>
                                                <template v-slot:bodyContent>

                                                    <CheckableAccordion edu-level="Asp" list-type="Contest_quota"
                                                                        budget-or-contract="Target">
                                                        <template v-slot:accordeonBody>
                                                            <template v-if="AspContest_quotaTarget">
                                                                <template v-if="AspContest_quotaTarget.size > 0">
                                                                    <div class="programs"
                                                                         v-for="competition in AspContest_quotaTarget.values()">
                                                                        <CheckableProgram
                                                                            :item-name="competition.uuid"
                                                                            :is-selected="competition.Selected"
                                                                            :belongs-to="'AspContest_quotaTarget'"
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

        // Bak
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

        BakApplicants_quotaTarget() {
            return this.getCurrentCompetitions('BakApplicants_quotaTarget');
        },

        BakContest_quotaTarget() {
            return this.getCurrentCompetitions('BakContest_quotaTarget');
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

        MagApplicants_quotaTarget() {
            return this.getCurrentCompetitions('MagApplicants_quotaTarget');
        },

        MagContest_quotaTarget() {
            return this.getCurrentCompetitions('MagContest_quotaTarget');
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

        AspApplicants_quotaTarget() {
            return this.getCurrentCompetitions('AspApplicants_quotaTarget');
        },

        AspContest_quotaTarget() {
            return this.getCurrentCompetitions('AspContest_quotaTarget');
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
        tempMap.set("Applicants_quota", 4);
        tempMap.set("Enrolled", 5);
        tempMap.set("Contest_quota", 6);

        tempMap.set("Budget", 1);
        tempMap.set("Contract", 2);
        tempMap.set("Target", 3);

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

            const competitions = await this.getListOfLists_old(campaignType, commonListType);
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

        async getListOfLists_old(campaignType, commonListType) {
            let saveSource = new Map();

            try {
                const response = await axiosInstance.get("/api/lists/" + campaignType + "/" + commonListType);
                saveSource = new Map(response.data.data.map(item => [item.uuid, item]));
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }

            return saveSource;
        },

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