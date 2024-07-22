<template>
    <div class="multiple-competitions-controls">
        <div class="row container-fluid mx-auto">
            <div class="col-lg-7 col p-0 mx-auto">
                <div class="row justify-content-center">
                    <p class="actions-header">Действия</p>
                    <div class="alert alert-primary d-flex after-actions-alert" role="alert"><i
                        class="bi bi-exclamation-triangle-fill">&nbsp;&nbsp;&nbsp;</i>Для появления расширенных опций выберите одно направление</div>
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

                <ToastNotification :id="'multipleSelectedCompetitionToast'" :successNotification>
                    <template v-slot:toastBody>
                        {{ toastText }}
                    </template>
                </ToastNotification>

                <hr>
                <div class="row mt-3">
                    <div class="col-xl-6 col-lg-8 col-md-8 mt-1">
                        <p>Период автообновления для всех выбранных списков: <u v-if="commonUpdateInterval === -1"></u><u v-else>{{updateIntervalText}}</u></p>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 justify-content-center">
                        <button class="btn-b" data-bs-toggle="modal" data-bs-target="#modifyCommonUpdateInterval"><i class="bi bi-pencil-square">&nbsp;</i>Редактировать</button>
                        <ConfirmationPopup :id="'modifyCommonUpdateInterval'" @positiveButtonClicked="modifyUpdateInterval">
                            <template v-slot:title>
                                Новый период автообновления
                            </template>
                            <template v-slot:body>
                                <p>Укажите время в минутах:</p>
                                <input type="number" class="form-control" v-model="enteredUpdateInterval">
                            </template>
                        </ConfirmationPopup>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import ConfirmationPopup from "@/components/UI/ConfirmationPopup.vue";
import MultipleSelectedCompetitionsDisplay from "@/components/MultipleSelectedCompetitionsDisplay.vue";
import axiosInstance from "@/axiosConfig";
import ToastNotification from "@/components/UI/ToastNotification.vue";
import { Toast } from "bootstrap/dist/js/bootstrap.bundle.js";

export default {
    name: "MultipleCompetitionsControls",
    components: {ToastNotification, ConfirmationPopup, MultipleSelectedCompetitionsDisplay},

    props: {
        competitions: {
            required: true,
        },
        namingMap: {
            required: true,
        }
    },

    data() {
        return {
            selectedCompetitions: null,

            successNotification: true,
            toastText: "",
            commonUpdateInterval: -1,
            enteredUpdateInterval: "",
        }
    },

    computed: {
        updateIntervalText() {
            let text = String(this.commonUpdateInterval) + " ";
            if (this.commonUpdateInterval >= 11 && this.commonUpdateInterval <= 19) text += "минут";

            else if (this.commonUpdateInterval % 10 >= 5
                && this.commonUpdateInterval % 10 <= 9
                || this.commonUpdateInterval % 10 == 0) text += "минут";

            else if (this.commonUpdateInterval % 10 == 1) text += "минута";

            else if (this.commonUpdateInterval % 10 >= 2 && this.commonUpdateInterval % 10 <= 4) text += "минуты";
            return text;
        }
    },

    mounted() {
        this.selectedCompetitions = this.competitions;
    },

    methods: {
        showNotification(successNotification) {
            // Call for toast notification
            if (successNotification) this.toastText = "Операция выполнена успешно";
            else this.toastText = "Что-то пошло не так!";
            this.successNotification = successNotification;
            const toast = document.getElementById('multipleSelectedCompetitionToast');
            const liveToast = new Toast(toast);
            liveToast.show()
        },

        async publishCompetitions(status) {
            try {
                const arr = this.collectIDs();
                const response = await axiosInstance.patch("/api/junk/lists", {
                    lists: arr,
                    hidden: status
                });
                // // console.log("publishCompetition response", response);
                for (const competitionGroup of Object.values(this.selectedCompetitions)) {
                    if (competitionGroup.size > 0) {
                        competitionGroup.forEach((competition) => {
                            competition.hidden = response.data.changes.hidden;
                        })
                    }
                }
                this.showNotification(true);
                this.$emit('selectedCompetitionsUpdated', this.selectedCompetitions);
            } catch (error) {
                this.showNotification(false);
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
                // // console.log("freezeCompetitions response", response);
                for (const competitionGroup of Object.values(this.selectedCompetitions)) {
                    if (competitionGroup.size > 0) {
                        competitionGroup.forEach((competition) => {
                            competition.locked = response.data.changes.locked;
                        })
                    }
                }
                this.showNotification(true);
                this.$emit('selectedCompetitionsUpdated', this.selectedCompetitions);
            } catch (error) {
                this.showNotification(false);
                console.error('Ошибка при получении данных:', error);
            }
        },

        async updateCompetitions() {
            try {
                const arr = this.collectIDs();
                const response = await axiosInstance.post("/api/junk/lists/generate", {
                    lists: arr
                });
                // // console.log("updateCompetitions response", response);
                this.showNotification(true);
            } catch (error) {
                this.showNotification(false);
                console.error('Ошибка при получении данных:', error);
            }
        },

        async modifyUpdateInterval() {
            try {
                const arr = this.collectIDs();
                const response = await axiosInstance.patch("/api/junk/lists", {
                    lists: arr,
                    update_interval: this.enteredUpdateInterval
                });
                // // console.log("modifyUpdateInterval response", response);
                for (const competitionGroup of Object.values(this.selectedCompetitions)) {
                    if (competitionGroup.size > 0) {
                        competitionGroup.forEach((competition) => {
                            competition.update_interval = response.data.changes.update_interval;
                        })
                    }
                }
                this.commonUpdateInterval = response.data.changes.update_interval;
                this.showNotification(true);
                this.$emit('selectedCompetitionsUpdated', this.selectedCompetitions);
                this.enteredUpdateInterval = "";
            } catch (error) {
                this.showNotification(false);
                console.error('Ошибка при получении данных:', error);
            }
        },
    },
}
</script>

<style scoped>
.actions-header {
    font-family: Roboto-Medium;
    font-size: calc(1.5rem + 0.3vw);
}

.after-actions-alert {
    font-family: Roboto-Medium;
    color: #404040;
    font-size: calc(1rem + 0.1vw);
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

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}

p {
    font-family: Roboto-Regular;
}
</style>