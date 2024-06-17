<template>
    <div class="SingleCompetitionControls">
        <div class="row container-fluid mx-auto">
            <div v-if="selectedCompetition" class="col-lg-7 col p-0 mx-auto">
                <SelectedCompetitionDisplay :campaign-type :list-type :fin-source
                                            :list-code="selectedCompetition.direction_code"
                                            :list-name='selectedCompetition.competition_group + (selectedCompetition.edu_form ? ( " (" + selectedCompetition.edu_form.toLowerCase() + ")") : "")'
                                            @deleteListFromSelected="deleteListFromSelected"/>
                <!-- publish status alert -->
                <div v-if="selectedCompetition.hidden"
                     class="justify-content-center alert alert-danger d-flex direction-info__name" role="alert"><i
                    class="bi bi-exclamation-circle-fill">&nbsp;</i>Список снят с публикации
                </div>
                <div v-if="!selectedCompetition.hidden"
                     class="justify-content-center alert alert-success d-flex direction-info__name" role="alert"><i
                    class="bi bi-check-circle-fill">&nbsp;</i>Список опубликован
                </div>

                <div class="row justify-content-center">
                    <!-- если список снят с публикации-->
                    <div v-if="selectedCompetition.hidden" class="col-lg-4 col-md-5 col-6">
                        <button class="btn-b" data-bs-toggle="modal" data-bs-target="#publishListModal">Опубликовать
                            список
                        </button>
                        <ConfirmationPopup :id="'publishListModal'"
                                           @positiveButtonClicked="publishCompetition(false)">
                            <template v-slot:title>
                                Внимание!
                            </template>
                            <template v-slot:body>
                                Вы уверены, что хотите опубликовать выбранный Вами список?
                            </template>
                        </ConfirmationPopup>
                    </div>
                    <!-- если список опубликован-->
                    <div v-if="!selectedCompetition.hidden" class="col-lg-4 col-md-5 col-6">
                        <button class="btn-b" data-bs-toggle="modal" data-bs-target="#hideListModal">Снять с
                            публикации
                        </button>
                        <ConfirmationPopup :id="'hideListModal'" @positiveButtonClicked="publishCompetition(true)">
                            <template v-slot:title>
                                Внимание!
                            </template>
                            <template v-slot:body>
                                Вы уверены, что хотите снять с публикации выбранный Вами список?
                            </template>
                        </ConfirmationPopup>
                    </div>

                    <!-- если список разморожен-->
                    <div v-if="!selectedCompetition.locked" class="col-lg-4 col-md-5 col-6">
                        <button class="btn-b" data-bs-toggle="modal" data-bs-target="#freezeListModal">Заморозить
                            список
                        </button>
                        <ConfirmationPopup :id="'freezeListModal'" @positiveButtonClicked="freezeCompetition(true)">
                            <template v-slot:title>
                                Внимание!
                            </template>
                            <template v-slot:body>
                                Вы уверены, что хотите заморозить выбранный Вами список?
                            </template>
                        </ConfirmationPopup>
                    </div>
                    <!-- если список заморожен-->
                    <div v-if="selectedCompetition.locked" class="col-lg-4 col-md-5 col-6">
                        <button class="btn-b" data-bs-toggle="modal" data-bs-target="#unfreezeListModal">Разморозить
                            список
                        </button>
                        <ConfirmationPopup :id="'unfreezeListModal'"
                                           @positiveButtonClicked="freezeCompetition(false)">
                            <template v-slot:title>
                                Внимание!
                            </template>
                            <template v-slot:body>
                                Вы уверены, что хотите разморозить выбранный Вами список?
                            </template>
                        </ConfirmationPopup>
                    </div>
                </div>

                <div v-if="!selectedCompetition.locked && selectedCompetition.update_interval === 0"
                     class="justify-content-center alert alert-danger d-flex direction-info__name" role="alert"><i
                    class="bi bi-exclamation-circle-fill">&nbsp;</i>Период автообновления 0 минут. Список не обновляется
                </div>
                <div v-else-if="selectedCompetition.locked"
                     class="justify-content-center alert alert-danger d-flex direction-info__name" role="alert"><i
                    class="bi bi-exclamation-circle-fill">&nbsp;</i>Список заморожен
                </div>
                <div v-else-if="!selectedCompetition.locked"
                     class="justify-content-center alert alert-success d-flex direction-info__name" role="alert"><i
                    class="bi bi-check-circle-fill">&nbsp;</i>Следующее обновление списка:&nbsp;<u>{{
                        nextUpdateTime
                    }}</u>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-10">
                        <button class="btn-b btn-block" data-bs-toggle="modal" data-bs-target="#updateListModal">
                            Обновить сейчас
                        </button>
                        <ConfirmationPopup :id="'updateListModal'"
                                           @positiveButtonClicked="updateCompetition()">
                            <template v-slot:title>
                                Внимание!
                            </template>
                            <template v-slot:body>
                                Вы уверены, что хотите обновить выбранный Вами список? Обновление списка займет около 7
                                секунд.
                            </template>
                        </ConfirmationPopup>
                    </div>
                </div>


                <hr>
                <div class="row mt-4">
                    <div class="col-xl-6 col-lg-8 col-md-8 mt-1">
                        <p>Последнее время обновления списка:&nbsp;<u>{{ lastUpdateTime }}</u></p>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 justify-content-center">
                        <button class="btn-b" data-bs-toggle="modal" data-bs-target="#modifyLastUpdateTime"><i
                            class="bi bi-pencil-square">&nbsp;</i>Редактировать
                        </button>
                        <ConfirmationPopup :id="'modifyLastUpdateTime'" @positiveButtonClicked="modifyLastUpdateTime">
                            <template v-slot:title>
                                Время обновления списка
                            </template>
                            <template v-slot:body>
                                <p>Укажите новое отображаемое время обновления списка:</p>
                                <!--                                <input type="datetime-local" class="form-control" v-model="enteredLastUpdateTime" @keyup.enter="modifyLastUpdateTime">-->
                                <input type="datetime-local" class="form-control" v-model="enteredLastUpdateTime">
                            </template>
                        </ConfirmationPopup>
                    </div>
                </div>
                <hr>
                <div class="row mt-3">
                    <div class="col-xl-6 col-lg-8 col-md-8 mt-1">
                        <p>Период автообновления списка:&nbsp;<u>{{ updateInterval }}</u></p>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 justify-content-center">
                        <button class="btn-b" data-bs-toggle="modal" data-bs-target="#modifyUpdateInterval"><i
                            class="bi bi-pencil-square">&nbsp;</i>Редактировать
                        </button>
                        <ConfirmationPopup :id="'modifyUpdateInterval'" @positiveButtonClicked="modifyUpdateInterval">
                            <template v-slot:title>
                                Новый период автообновления
                            </template>
                            <template v-slot:body>
                                <p>Укажите время в минутах:</p>
                                <!--                                <input type="text" @keydown="isNumber">-->
                                <input type="number" class="form-control" v-model="enteredUpdateInterval">
                            </template>
                        </ConfirmationPopup>
                    </div>
                </div>
                <hr>
                <div class="row mt-3">
                    <div class="col-xl-6 col-lg-8 col-md-8 mt-1">
                        <p>Текущая ревизия: <u>{{ currentRevisionDatetime }}</u> ({{ numberOfApplications }}) </p>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 justify-content-center">
                        <button class="btn-b" data-bs-toggle="modal" data-bs-target="#modifyCurrentRevisionDatetime">
                            <i class="bi bi-pencil-square">&nbsp;</i>Редактировать
                        </button>
                        <ConfirmationPopup :id="'modifyCurrentRevisionDatetime'"
                                           @positiveButtonClicked="modifyCurrentRevisionDatetime">
                            <template v-slot:title>
                                Внимание!
                            </template>
                            <template v-slot:body>
                                <div v-if="revisionNamesList.size > 0">
                                    <select class="form-select" v-model="enteredRevisionDatetime">
                                        <option v-for="revisionName in revisionNamesList.entries()" :value="revisionName[0]">{{ revisionName[1].displayName }}</option>
                                    </select>
                                </div>
                                <div v-else>
                                    <p>Ревизий не обнаружено</p>
                                </div>
                            </template>
                        </ConfirmationPopup>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axiosInstance from "@/axiosConfig";
import ConfirmationPopup from "@/components/UI/ConfirmationPopup.vue";
import SelectedCompetitionDisplay from "@/components/SelectedCompetitionDisplay.vue";

export default {
    name: 'SingleCompetitionControls',
    components: {ConfirmationPopup, SelectedCompetitionDisplay},

    props: {
        competition: {
            required: true,
        },
        namingMap: {
            required: true
        }
    },

    data() {
        return {
            selectedCompetition: null,
            campaignType: {
                type: String,
            },
            listType: {
                type: String,
            },
            finSource: {
                type: String,
            },

            enteredUpdateInterval: "",
            enteredLastUpdateTime: "",
            enteredRevisionDatetime: "",

            revisionNamesList: {},
        }
    },

    computed: {
        nextUpdateTime() {
            const dateStr = this.selectedCompetition.generated_at;
            //console.log(dateStr);
            const date = new Date(new Date(dateStr).getTime() + this.selectedCompetition.update_interval * 60000);
            return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
        },

        lastUpdateTime() {
            const dateStr = this.selectedCompetition.active_revision_generated_at;
            //console.log(dateStr);
            const date = new Date(new Date(dateStr).getTime());
            return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + " " + ("0" + date.getDate()).slice(-2) + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();
        },

        updateInterval() {
            let text = String(this.selectedCompetition.update_interval) + " ";
            if (this.selectedCompetition.update_interval >= 11 && this.selectedCompetition.update_interval <= 19) text += "минут";

            else if (this.selectedCompetition.update_interval % 10 >= 5
                && this.selectedCompetition.update_interval % 10 <= 9
                || this.selectedCompetition.update_interval % 10 == 0) text += "минут";

            else if (this.selectedCompetition.update_interval % 10 == 1) text += "минута";

            else if (this.selectedCompetition.update_interval % 10 >= 2 && this.selectedCompetition.update_interval % 10 <= 4) text += "минуты";
            return text;
        },

        currentRevisionDatetime() {
            const dateStr = this.selectedCompetition.active_revision_generated_at;
            //console.log(dateStr);
            const date = new Date(dateStr);
            return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + " " + ("0" + date.getDate()).slice(-2) + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();
        },

        numberOfApplications() {
            let text = String(this.selectedCompetition.active_revision_rows) + " ";
            if (this.selectedCompetition.active_revision_rows >= 11 && this.selectedCompetition.active_revision_rows <= 19) text += "заявлений";

            else if (this.selectedCompetition.active_revision_rows % 10 >= 5
                && this.selectedCompetition.active_revision_rows % 10 <= 9
                || this.selectedCompetition.active_revision_rows % 10 == 0) text += "заявлений";

            else if (this.selectedCompetition.active_revision_rows % 10 == 1) text += "заявление";

            else if (this.selectedCompetition.active_revision_rows % 10 >= 2 && this.selectedCompetition.active_revision_rows % 10 <= 4) text += "заявления";
            return text;
        },
    },

    mounted() {
        for (const elem of Object.values(this.competition)) {
            if (elem.size > 0) {
                //this.selectedCompetition = Object.fromEntries(elem.entries());
                elem.forEach((element) => {
                    this.selectedCompetition = element
                })
                //console.log(this.selectedCompetition);
            }
        }
    },

    updated() {
        for (const [key, elem] of Object.entries(this.competition)) {
            if (elem.size > 0) {
                let nameSplit = key.split(/(?=[A-Z])/);
                this.campaignType = this.namingMap.get(nameSplit[0]);
                this.listType = this.namingMap.get(nameSplit[1]);
                this.finSource = this.namingMap.get(nameSplit[2]);
                this.revisionNamesList = this.getRevisionNamesList();
            }
        }
    },

    methods: {
        buildTimeString(time) {
            const date = new Date(new Date(time).getTime());
            return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + " " + ("0" + date.getDate()).slice(-2) + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();
        },

        writeApplicationsSuffix(applicationRows) {
            let text = "";
            if (applicationRows >= 11 && applicationRows <= 19) text += "заявлений";

            else if (applicationRows % 10 >= 5 && applicationRows % 10 <= 9 || applicationRows % 10 == 0) text += "заявлений";

            else if (applicationRows % 10 == 1) text += "заявление";

            else if (applicationRows % 10 >= 2 && applicationRows % 10 <= 4) text += "заявления";
            return text;
        },

        async publishCompetition(status) {
            try {
                const response = await axiosInstance.patch("/api/junk/lists", {
                    lists: [this.selectedCompetition.uuid],
                    hidden: status
                });
                console.log("publishCompetition response", response);
                this.selectedCompetition.hidden = response.data.changes.hidden;
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },

        async freezeCompetition(status) {
            try {
                const response = await axiosInstance.patch("/api/junk/lists", {
                    lists: [this.selectedCompetition.uuid],
                    locked: status
                });
                console.log("freezeCompetition response", response);
                this.selectedCompetition.locked = response.data.changes.locked;
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },

        async updateCompetition() {
            try {
                const response = await axiosInstance.post("/api/junk/lists/generate", {
                    lists: [this.selectedCompetition.uuid]
                });
                console.log("updateCompetition response", response);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },

        deleteListFromSelected() {
            this.$emit("deleteListsFromSelected");
        },

        async modifyLastUpdateTime() {
            const updateTime = new Date(this.enteredLastUpdateTime).toISOString();
            console.log("modifyLastUpdateTime: ", updateTime);
            try {
                const response = await axiosInstance.patch("/api/junk/revisions", {
                    revisions: [this.selectedCompetition.active_revision_id],
                    generated_at: updateTime
                });
                console.log("modifyLastUpdateTime response", response);
                this.selectedCompetition.active_revision_generated_at = response.data.generated_at;
                this.enteredLastUpdateTime = "";
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },

        async modifyUpdateInterval() {
            //console.log("modifyUpdateInterval: ", this.enteredUpdateInterval);
            try {
                const response = await axiosInstance.patch("/api/junk/lists", {
                    lists: [this.selectedCompetition.uuid],
                    update_interval: this.enteredUpdateInterval
                });
                console.log("modifyUpdateInterval response", response);
                this.selectedCompetition.update_interval = response.data.changes.update_interval;
                this.enteredUpdateInterval = "";
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },

        async getRevisionNamesList() {
            try {
                const response = await axiosInstance.get("/api/junk/lists/" + this.selectedCompetition.uuid + "/revisions");
                //revisionNames = new Map(Object.entries(response.data.data));
                this.revisionNamesList = new Map();
                Object.values(response.data.data).forEach((elem) => {
                    elem.displayName = this.buildTimeString(elem.generated_at) + " (" + elem.rows_total + " " + this.writeApplicationsSuffix(elem.rows_total) + ")";
                    this.revisionNamesList.set(elem.uuid, elem);
                    if (elem.active) this.enteredRevisionDatetime = elem.uuid;
                });
                //console.log("revisionNames: ", [...this.revisionNamesList.entries()])
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        },

        async modifyCurrentRevisionDatetime() {
            try {
                const response = await axiosInstance.patch("/api/junk/lists", {
                    lists: [this.selectedCompetition.uuid],
                    active_revision_id: this.enteredRevisionDatetime
                });
                console.log("modifyCurrentRevisionDatetime response", response);
                if (response.data.changes.active_revision_id) {
                    this.selectedCompetition.active_revision_id = response.data.changes.active_revision_id;
                    this.selectedCompetition.active_revision_generated_at = this.revisionNamesList.get(this.enteredRevisionDatetime).generated_at;
                    this.selectedCompetition.locked = response.data.changes.locked;
                }
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

p {
    font-family: Roboto-Regular;
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
</style>