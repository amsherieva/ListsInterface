<template>
    <div class="row container-fluid mx-auto mt-4 mb-4">
        <div class="col-lg-7 col p-0 mx-auto">
            <div class="d-flex justify-content-evenly">
                <div class="accordion flex-fill" id="accordionPanelsListSelector">
                    <!-- Bak -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsListSelector-headingBak">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsListSelector-collapseBak" aria-expanded="false"
                                aria-controls="panelsListSelector-collapseBak">
                                <p class="direction-info__name" style="display:block;"><b><span
                                            style="color: #0152a3;">Б</span></b>акалавриат</p>
                            </button>
                        </h2>
                        <div id="panelsListSelector-collapseBak" class="accordion-collapse collapse"
                            aria-labelledby="panelsListSelector-headingBak">
                            <div class="accordion-body">
                                <!-- List of applicants -->
                                <div class="d-flex justify-content-evenly">
                                    <div class="accordion flex-fill" id="accordionPanelsListSelector_bak">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsListSelector-headingBak_applicants">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsListSelector-collapseBak_applicants"
                                                    aria-expanded="false"
                                                    aria-controls="panelsListSelector-collapseBak_applicants">
                                                    <p class="direction-info__name direction-info__body"
                                                        style="display:block;">Списки
                                                        подавших заявление</p>
                                                </button>
                                            </h2>
                                            <div id="panelsListSelector-collapseBak_applicants"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="panelsListSelector-headingBak_applicants">
                                                <div class="accordion-body">
                                                    <!-- Free -->
                                                    <div class="form-check">


                                                        <div class="accordion flex-fill"
                                                            id="accordionPanelsListSelector_bak_budget">
                                                            <div class="accordion-item">
                                                                <h2 class="accordion-header"
                                                                    id="panelsListSelector-headingBak_contest_budget">
                                                                    <button class="accordion-button collapsed"
                                                                        type="button" data-bs-toggle="collapse"
                                                                        data-bs-target="#panelsListSelector-collapseBak_contest_budget"
                                                                        aria-expanded="false"
                                                                        aria-controls="panelsListSelector-collapseBak_contest_budget">
                                                                        <input class="form-check-input m-1"
                                                                            type="checkbox" v-model="bakBudget"
                                                                            id="flexCheckBudget" @click.stop>
                                                                        <label
                                                                            class="form-check-label direction-info__name direction-info__body"
                                                                            for="flexCheckBudget"
                                                                            style="display:block;">&nbsp;Бюджет
                                                                        </label>
                                                                    </button>
                                                                </h2>
                                                                <div id="panelsListSelector-collapseBak_contest_budget"
                                                                    class="accordion-collapse collapse"
                                                                    aria-labelledby="panelsListSelector-headingBak_contest_budget">
                                                                    <div class="accordion-body">
                                                                        Мудоебство
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <!-- Paid -->
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox"
                                                            v-model="bakContract" id="flexCheckContract">
                                                        <label
                                                            class="form-check-label direction-info__name direction-info__body"
                                                            for="flexCheckContract" style="display:block;">Контракт
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Contest list -->
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsListSelector-headingBak_contest">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsListSelector-collapseBak_contest"
                                                    aria-expanded="false"
                                                    aria-controls="panelsListSelector-collapseBak_contest">
                                                    <p class="direction-info__name direction-info__body"
                                                        style="display:block;">Конкурсные
                                                        списки</p>
                                                </button>
                                            </h2>
                                            <div id="panelsListSelector-collapseBak_contest"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="panelsListSelector-headingBak_contest">
                                                <div class="accordion-body">
                                                    Мудоебство
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Enrolled list -->
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsListSelector-headingBak_enrolled">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsListSelector-collapseBak_enrolled"
                                                    aria-expanded="false"
                                                    aria-controls="panelsListSelector-collapseBak_enrolled">
                                                    <p class="direction-info__name direction-info__body"
                                                        style="display:block;">Списки
                                                        зачисленных</p>
                                                </button>
                                            </h2>
                                            <div id="panelsListSelector-collapseBak_enrolled"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="panelsListSelector-headingBak_enrolled">
                                                <div class="accordion-body">
                                                    Автоматом проебал
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Mag -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsListSelector-headingMag">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsListSelector-collapseMag" aria-expanded="false"
                                aria-controls="panelsListSelector-collapseMag">
                                <p class="direction-info__name" style="display:block;"><b><span
                                            style="color: #fd4239;">М</span></b>агистратура</p>
                            </button>
                        </h2>
                        <div id="panelsListSelector-collapseMag" class="accordion-collapse collapse"
                            aria-labelledby="panelsListSelector-headingMag">
                            <div class="accordion-body">
                                <!-- List of applicants -->
                                <div class="d-flex justify-content-evenly">
                                    <div class="accordion flex-fill" id="accordionPanelsListSelector_mag">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsListSelector-headingMag_applicants">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsListSelector-collapseMag_applicants"
                                                    aria-expanded="false"
                                                    aria-controls="panelsListSelector-collapseMag_applicants">
                                                    <p class="direction-info__name direction-info__body"
                                                        style="display:block;">Списки
                                                        подавших заявление</p>
                                                </button>
                                            </h2>
                                            <div id="panelsListSelector-collapseMag_applicants"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="panelsListSelector-headingMag_applicants">
                                                <div class="accordion-body">
                                                    Абоба 4
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Contest list -->
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsListSelector-headingMag_contest">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsListSelector-collapseMag_contest"
                                                    aria-expanded="false"
                                                    aria-controls="panelsListSelector-collapseMag_contest">
                                                    <p class="direction-info__name direction-info__body"
                                                        style="display:block;">Конкурсные
                                                        списки</p>
                                                </button>
                                            </h2>
                                            <div id="panelsListSelector-collapseMag_contest"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="panelsListSelector-headingMag_contest">
                                                <div class="accordion-body">
                                                    Абоба 5
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Enrolled list -->
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsListSelector-headingMag_enrolled">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsListSelector-collapseMag_enrolled"
                                                    aria-expanded="false"
                                                    aria-controls="panelsListSelector-collapseMag_enrolled">
                                                    <p class="direction-info__name direction-info__body"
                                                        style="display:block;">Списки
                                                        зачисленных</p>
                                                </button>
                                            </h2>
                                            <div id="panelsListSelector-collapseMag_enrolled"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="panelsListSelector-headingMag_enrolled">
                                                <div class="accordion-body">
                                                    Абоба 6
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Asp -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsListSelector-headingAsp">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsListSelector-collapseAsp" aria-expanded="false"
                                aria-controls="panelsListSelector-collapseAsp">
                                <p class="direction-info__name" style="display:block;"><b><span
                                            style="color: #FF992C;">А</span></b>спирантура</p>
                            </button>
                        </h2>
                        <div id="panelsListSelector-collapseAsp" class="accordion-collapse collapse"
                            aria-labelledby="panelsListSelector-headingAsp">
                            <div class="accordion-body">
                                <!-- List of applicants -->
                                <div class="d-flex justify-content-evenly">
                                    <div class="accordion flex-fill" id="accordionPanelsListSelector_asp">
                                        <!-- Contest list -->
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsListSelector-headingAsp_contest">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsListSelector-collapseAsp_contest"
                                                    aria-expanded="false"
                                                    aria-controls="panelsListSelector-collapseAsp_contest">
                                                    <p class="direction-info__name direction-info__body"
                                                        style="display:block;">Конкурсные
                                                        списки</p>
                                                </button>
                                            </h2>
                                            <div id="panelsListSelector-collapseAsp_contest"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="panelsListSelector-headingAsp_contest">
                                                <div class="accordion-body">
                                                    Абоба 7
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Enrolled list -->
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsListSelector-headingAsp_enrolled">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsListSelector-collapseAsp_enrolled"
                                                    aria-expanded="false"
                                                    aria-controls="panelsListSelector-collapseAsp_enrolled">
                                                    <p class="direction-info__name direction-info__body"
                                                        style="display:block;">Списки
                                                        зачисленных</p>
                                                </button>
                                            </h2>
                                            <div id="panelsListSelector-collapseAsp_enrolled"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="panelsListSelector-headingAsp_enrolled">
                                                <div class="accordion-body">
                                                    Абоба 8
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bakBudget: false,
            bakContract: false,
        }
    }
};
</script>

<style scoped>
.accordion {
    --bs-accordion-btn-bg: white;
    --bs-accordion-active-bg: white;
}

.accordion-button button:active,
.accordion-button button:focus,
.accordion-button button:hover,
.accordion-button:active,
.accordion-button:focus,
.accordion-button:hover {
    background-color: #e8eff7;
    box-shadow: 0 0 0 4px #c2d6e8;
    color: #0152a3;
}

.direction-info__name {
    font-family: Roboto-Medium;
    color: #404040;
    margin: 0px;
    font-size: calc(1rem + 0.3vw);
}

.direction-info__body {
    font-size: calc(1rem + 0.2vw);
}
</style>