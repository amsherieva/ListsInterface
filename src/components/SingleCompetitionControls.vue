<template>
    <div class="SingleCompetitionControls">
        <div class="row container-fluid mx-auto">
            <div v-if="selectedCompetition" class="col-lg-7 col p-0 mx-auto">
                <SelectedCompetitionDisplay :campaign-type :list-type :fin-source
                                            :list-code="selectedCompetition.direction_code"
                                            :list-name='selectedCompetition.competition_group + (selectedCompetition.edu_form ? ( " (" + selectedCompetition.edu_form.toLowerCase() + ")") : "")'
                                            @deleteListsFromSelected="deleteListsFromSelected"/>
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

                <div v-if="selectedCompetition.locked"
                     class="justify-content-center alert alert-danger d-flex direction-info__name" role="alert"><i
                    class="bi bi-exclamation-circle-fill">&nbsp;</i>Список заморожен
                </div>
                <div v-if="!selectedCompetition.locked"
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
                                Вы уверены, что хотите обновить выбранный Вами список? Обновление списка займет около 7 секунд.
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
            }
        }
    },

    computed: {
        nextUpdateTime() {
            const dateStr = this.selectedCompetition.generated_at;
            //console.log(dateStr);
            const date = new Date(new Date(dateStr).getTime() + this.selectedCompetition.update_interval * 60000);
            return ("0" + date.getHours()).slice(-2) + ":" + date.getMinutes();
        }
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
            }
        }
    },

    methods: {
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

        deleteListsFromSelected() {
            this.$emit("deleteListsFromSelected");
        }
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
</style>