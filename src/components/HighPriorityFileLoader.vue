<template>
    <div class="row container-fluid mx-auto mt-3 mb-4">
        <div class="col-lg-7 p-0 mx-auto">
            <h3 class="mb-3">Высший приоритет</h3>
            <p>Выберите тип списка:</p>
            <div class="row">
                <div class=" col-xl-6 col-lg-9 col-sm-8">
                    <select class="form-select form-select-lg mb-4" v-model="selectedCommonListType">
                        <template v-if="campaignType !== 3">
                            <option value=1>Список подавших заявление</option>
                        </template>
                        <option value=2>Конкурсный список</option>
                        <option value=3>Внутренний конкурсный список</option>
                    </select>
                </div>
            </div>
            <p>ВП министерский</p>
            <div class="row justify-content-center">
                <div class="col-lg-9 col-md-8 col-sm-8 mb-3">
                    <input class="form-control" type="file" accept="application/json" id="MinistryFormFile" @change="handleMinistryFileUpload">
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4">
                    <button class="btn-b" :disabled="!isMinistryButtonsActive" @click="uploadFile(true)"><i class="bi bi-upload">&nbsp;</i>Загрузить</button>
                </div>
            </div>
            <button class="btn-b btn-red mb-4" :disabled="!isDeleteButtonActive" @click="deleteRecommendation(true)"><i class="bi bi-trash3">&nbsp;</i>Удалить рекомендации</button>
            <p>ВП по оригиналам</p>
            <div class="row justify-content-center">
                <div class="col-lg-9 col-md-8 col-sm-8 mb-3">
                    <input class="form-control" type="file" accept="application/json" id="OriginalFormFile" @change="handleOriginalFileUpload">
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4">
                    <button class="btn-b" :disabled="!isOriginalButtonsActive" @click="uploadFile(false)"><i class="bi bi-upload">&nbsp;</i>Загрузить</button>
                </div>
            </div>
            <button class="btn-b btn-red" :disabled="!isDeleteButtonActive" @click="deleteRecommendation(false)"><i class="bi bi-trash3">&nbsp;</i>Удалить рекомендации</button>
        </div>
    </div>

    <ToastNotification :id="'highPriorityFileLoaderToast_' + campaignType" :successNotification>
        <template v-slot:toastBody>
            {{ toastText }}
        </template>
    </ToastNotification>
</template>

<script>
import axiosInstance from "@/axiosConfig";
import ToastNotification from "@/components/UI/ToastNotification.vue";
import { Toast } from "bootstrap/dist/js/bootstrap.bundle.js";

export default {
    name: "HighPriorityFileLoader",
    components: {ToastNotification},

    props: {
        campaignType: {
            type: Number,
            required: true,
        }
    },

    computed: {
        isMinistryButtonsActive() {
            return ((this.selectedCommonListType > 0) && (this.selectedMinistryFile));
        },

        isOriginalButtonsActive() {
            return ((this.selectedCommonListType > 0) && (this.selectedOriginalFile));
        },

        isDeleteButtonActive() {
            return (this.selectedCommonListType > 0);
        },
    },

    data() {
        return {
            toastText: "",
            successNotification: true,
            selectedCommonListType: -1,
            selectedMinistryFile: null,
            selectedOriginalFile: null,
        }
    },

    methods: {
        handleMinistryFileUpload(event) {
            this.selectedMinistryFile = event.target.files[0];
        },

        handleOriginalFileUpload(event) {
            this.selectedOriginalFile = event.target.files[0];
        },

        showNotification(successNotification) {
            // Call for toast notification
            if (successNotification) this.toastText = "Операция выполнена успешно";
            else this.toastText = "Что-то пошло не так!";
            this.successNotification = successNotification;
            const toast = document.getElementById("highPriorityFileLoaderToast_" + this.campaignType);
            const liveToast = new Toast(toast);
            liveToast.show()
        },

        async uploadFile(isMinistry) {
            if ((isMinistry && !this.selectedMinistryFile) || ((!isMinistry && !this.selectedOriginalFile))) {
                alert("Please select a file first!");
                return;
            }

            const address = "/api/recommendations/" + this.campaignType + "/" + this.selectedCommonListType + "/" + (isMinistry ? "ministry" : "original");
            //console.log("Address: ", address);

            try {
                const response = await axiosInstance.post(address, {
                    output: isMinistry ? this.selectedMinistryFile : this.selectedOriginalFile
                }, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                console.log('File uploaded successfully:', response.data);
                this.showNotification(true);
            } catch (error) {
                this.showNotification(false);
                console.error('Ошибка при получении данных:', error);
            }
        },

        async deleteRecommendation(isMinistry) {
            const address = "/api/recommendations/" + this.campaignType + "/" + this.selectedCommonListType + "/" + (isMinistry ? "ministry" : "original");

            try {
                const response = await axiosInstance.delete(address, {});
                console.log('File deleted successfully:', response.data);
                this.showNotification(true);
            } catch (error) {
                this.showNotification(false);
                console.error('Ошибка при получении данных:', error);
            }
        }
    }
}
</script>

<style scoped>
h3 {
    font-family: Roboto-Medium;
    font-size: calc(1.5rem + 0.3vw);
    color: #06326e;
}
p {
    font-family: Roboto-Regular;
    font-size: calc(1.0rem + 0.15vw);
}

.btn-b {
    display: inline-block;
    padding: 5px 10px;
    width: 100%;
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

.btn-red {
    border: 2px #dc3545 solid;
    color: #dc3545;
}
.btn-red:hover,
.btn-red:focus,
.btn-red:active {
    color: #dc3545;
    background-color: #eee;
    transition: ease 0.1s;
    outline: none;
}

.btn-b:disabled {
    color: #aeaeae;
    background-color: #ffffff;
    border: 2px #cccccc solid;
    cursor: default;
}
</style>