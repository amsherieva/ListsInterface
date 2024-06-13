<template>
    <div class="multiple-competitions-controls">
        <div class="row container-fluid mx-auto">
            <div class="col-lg-7 col p-0 mx-auto">
                <div class="row justify-content-center">
<!--                    <div v-if="selectedCompetitions">-->
<!--                        <MultipleSelectedCompetitionsDisplay/>-->
<!--                    </div>-->
                    <div class="col-lg-4 col-md-5 col-6">
                        <button class="btn-b" data-bs-toggle="modal" data-bs-target="#publishListsModal">Опубликовать
                            списки
                        </button>
                        <ConfirmationPopup :id="'publishListsModal'" @positiveButtonClicked="publishCompetitions(false)">
                            <template v-slot:title>
                                Внимание!
                            </template>
                            <template v-slot:body>
                                Вы уверены, что хотите опубликовать все выбранные Вами списки?
                            </template>
                        </ConfirmationPopup>
                    </div>
                    <div class="col-lg-4 col-md-5 col-6">
                        <button class="btn-b" data-bs-toggle="modal" data-bs-target="#removeListsFromPublishModal">Снять
                            с публикации
                        </button>
                        <ConfirmationPopup :id="'removeListsFromPublishModal'" @positiveButtonClicked="publishCompetitions(true)">
                            <template v-slot:title>
                                Внимание!
                            </template>
                            <template v-slot:body>
                                Вы уверены, что хотите снять с публикации все выбранные Вами списки?
                            </template>
                        </ConfirmationPopup>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-5 col-6">
                        <button class="btn-b" data-bs-toggle="modal" data-bs-target="#unfreezeListsModal">Разморозить
                            списки
                        </button>
                        <ConfirmationPopup :id="'unfreezeListsModal'" @positiveButtonClicked="freezeCompetitions(false)">
                            <template v-slot:title>
                                Внимание!
                            </template>
                            <template v-slot:body>
                                Вы уверены, что хотите разморозить все выбранные Вами списки?
                            </template>
                        </ConfirmationPopup>
                    </div>
                    <div class="col-lg-4 col-md-5 col-6">
                        <button class="btn-b" data-bs-toggle="modal" data-bs-target="#freezeListsModal">Заморозить
                            списки
                        </button>
                        <ConfirmationPopup :id="'freezeListsModal'" @positiveButtonClicked="freezeCompetitions(true)">
                            <template v-slot:title>
                                Внимание!
                            </template>
                            <template v-slot:body>
                                Вы уверены, что хотите заморозить все выбранные Вами списки?
                            </template>
                        </ConfirmationPopup>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-10">
                        <button class="btn-b btn-block" data-bs-toggle="modal" data-bs-target="#updateListsModal">
                            Обновить сейчас
                        </button>
                        <ConfirmationPopup :id="'updateListsModal'" @positiveButtonClicked="updateCompetitions">
                            <template v-slot:title>
                                Внимание!
                            </template>
                            <template v-slot:body>
                                Вы уверены, что хотите обновить все выбранные Вами списки? Обновление списков займет около 7 секунд.
                            </template>
                        </ConfirmationPopup>
                    </div>
                </div>

<!--                <hr style="color: #0152A3; border-width:2px;">-->
<!--                <div class="row mt-4">-->
<!--                    <div class="col-xl-6 col-lg-8 col-md-8 mt-1">-->
<!--                        <p>Последнее время обновления для всех выбранных списков: <u>не&nbsp;установлено</u></p>-->
<!--                    </div>-->
<!--                    <div class="col-xl-4 col-lg-4 col-md-4 justify-content-center">-->
<!--                        <button class="btn-b"><i-->
<!--                            class="bi bi-pencil-square">&nbsp;</i>Редактировать-->
<!--                        </button>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <hr>-->

<!--                <div class="row mt-3">-->
<!--                    <div class="col-xl-6 col-lg-8 col-md-8 mt-1">-->
<!--                        <p>Период автообновления для всех выбранных списков: <u>не&nbsp;установлено</u></p>-->
<!--                    </div>-->
<!--                    <div class="col-xl-4 col-lg-4 col-md-4 justify-content-center">-->
<!--                        <button class="btn-b"><i class="bi bi-pencil-square">&nbsp;</i>Редактировать</button>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <p class="mt-4">-->
<!--                    <button class="btn-b btn-block">Сохранить внесенные изменения</button>-->
<!--                </p>-->
            </div>
        </div>

    </div>
</template>

<script>

import ConfirmationPopup from "@/components/UI/ConfirmationPopup.vue";
import MultipleSelectedCompetitionsDisplay from "@/components/MultipleSelectedCompetitionsDisplay.vue";
import axiosInstance from "@/axiosConfig";

export default {
    name: "MultipleCompetitionsControls",
    components: {ConfirmationPopup, MultipleSelectedCompetitionsDisplay},

    props: {
        competitions: {
            required: true,
        }
    },

    data() {
        return {
            selectedCompetitions: null
        }
    },

    mounted() {
        this.selectedCompetitions = this.competitions;
    },

    methods: {
        async publishCompetitions(status) {
            try {
                const arr = this.collectIDs();
                const response = await axiosInstance.patch("/api/junk/lists", {
                    lists: arr,
                    hidden: status
                });
                console.log("publishCompetition response", response);
                for (const competitionGroup of Object.values(this.selectedCompetitions)) {
                    if (competitionGroup.size > 0) {
                        competitionGroup.forEach((competition) => {
                            competition.hidden = response.data.changes.hidden;
                        })
                    }
                }
                this.$emit('selectedCompetitionsUpdated', this.selectedCompetitions);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },

        collectIDs() {
            let uuidArray = [];
            for (const competitionGroup of Object.values(this.competitions)) {
                if (competitionGroup.size > 0) {
                    competitionGroup.forEach((competition) => {
                        uuidArray.push(competition.uuid);
                    })
                }
            }

            return uuidArray;
        },

        async freezeCompetitions(status) {
            try {
                const arr = this.collectIDs();
                const response = await axiosInstance.patch("/api/junk/lists", {
                    lists: arr,
                    locked: status
                });
                console.log("freezeCompetitions response", response);
                for (const competitionGroup of Object.values(this.selectedCompetitions)) {
                    if (competitionGroup.size > 0) {
                        competitionGroup.forEach((competition) => {
                            competition.locked = response.data.changes.locked;
                        })
                    }
                }
                this.$emit('selectedCompetitionsUpdated', this.selectedCompetitions);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },

        async updateCompetitions() {
            try {
                const arr = this.collectIDs();
                const response = await axiosInstance.post("/api/junk/lists/generate", {
                    lists: arr
                });
                console.log("updateCompetitions response", response);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },
    },
}
</script>

<style scoped>
.direction-info__name {
    font-family: Roboto-Medium;
    font-size: calc(1rem + 0.2vw);
}

.btn-b {
    display: inline-block;
    width: 100%;
    padding: 5px 15px;
    background-color: #f9f9f9;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 4px;
    transition: ease 0.1s;
    outline: none;
    font-family: 'Roboto-Medium';
    font-size: 16px;
    border: 2px #0152A3 solid;
    color: #0152A3;
    margin-bottom: 15px;


}

.btn-b:hover,
.btn-b:focus,
.btn-b:active {
    color: #0152A3;
    background-color: #eee;

    transition: ease 0.1s;
    outline: none;

}

/* .btn-b:active {
    background-color: #f9f9f9;
} */
</style>