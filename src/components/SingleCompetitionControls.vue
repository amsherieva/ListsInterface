<template>
    <div class="SingleCompetitionControls">
        <div class="row container-fluid mx-auto">
            <div v-if="selectedCompetition" class="col-lg-7 col p-0 mx-auto">
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
                        <button class="btn-b">Опубликовать список</button>
                    </div>
                    <!-- если список опубликован-->
                    <div v-if="!selectedCompetition.hidden" class="col-lg-4 col-md-5 col-6">
                        <button class="btn-b">Снять с публикации</button>
                    </div>

                    <!-- если список разморожен-->
                    <div v-if="!selectedCompetition.locked" class="col-lg-4 col-md-5 col-6">
                        <a href="" class="btn-b" role="button">Заморозить список</a>
                    </div>
                    <!-- если список заморожен-->
                    <div v-if="selectedCompetition.locked" class="col-lg-4 col-md-5 col-6">
                        <a href="" class="btn-b" role="button">Разморозить список</a>
                    </div>
                </div>

                <div v-if="selectedCompetition.locked"
                     class="justify-content-center alert alert-danger d-flex direction-info__name" role="alert"><i
                    class="bi bi-exclamation-circle-fill">&nbsp;</i>Список заморожен
                </div>
                <div v-if="!selectedCompetition.locked"
                     class="justify-content-center alert alert-success d-flex direction-info__name" role="alert"><i
                    class="bi bi-check-circle-fill">&nbsp;</i>Следующее обновление списка:&nbsp;<u>{{nextUpdateTime}}</u></div>
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-10">
                        <a href="" class="btn-b btn-block" role="button">Обновить сейчас</a>
                    </div>
                </div>

<!--                <hr>-->
<!--                <div class="row mt-4">-->
<!--                    <div class="col-xl-6 col-lg-8 col-md-8 mt-1">-->
<!--                        <p>Последнее время обновления списка:&nbsp;<u>14:54</u></p>-->
<!--                    </div>-->
<!--                    <div class="col-xl-4 col-lg-4 col-md-4 justify-content-center">-->
<!--                        <a href="" class="btn-b" role="button"><i-->
<!--                            class="bi bi-pencil-square">&nbsp;</i>Редактировать</a>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <hr>-->
<!--                <div class="row mt-3">-->
<!--                    <div class="col-xl-6 col-lg-8 col-md-8 mt-1">-->
<!--                        <p>Период автообновления списка:&nbsp;<u>120 минут</u></p>-->
<!--                    </div>-->
<!--                    <div class="col-xl-4 col-lg-4 col-md-4 justify-content-center">-->
<!--                        <a href="" class="btn-b" role="button"><i-->
<!--                            class="bi bi-pencil-square">&nbsp;</i>Редактировать</a>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <hr>-->
<!--                <div class="row mt-3">-->
<!--                    <div class="col-xl-6 col-lg-8 col-md-8 mt-1">-->
<!--                        <p>Текущая ревизия: <u>16:37 06.06.2024</u> (1654&nbsp;заявления)</p>-->
<!--                        &lt;!&ndash;здесь надо учитывать окончание у слова "заявления", 0 5 6 7 8 9 11-19 заявлений 1 заявление 2 3 4 заявления&ndash;&gt;-->
<!--                    </div>-->
<!--                    <div class="col-xl-4 col-lg-4 col-md-4 justify-content-center">-->
<!--                        <a href="" class="btn-b" role="button"><i-->
<!--                            class="bi bi-pencil-square">&nbsp;</i>Редактировать</a>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleCompetitionControls',

    props: {
        competition: {
            required: true,
        }
    },

    data() {
        return {
            selectedCompetition: null
        }
    },

    mounted() {
        for (const elem of Object.values(this.competition)) {
            if (elem.size > 0) {
                //this.selectedCompetition = Object.fromEntries(elem.entries());
                elem.forEach((element) => {
                    this.selectedCompetition = element
                })
                console.log(this.selectedCompetition);
            }
        }
    },

    computed: {
        getPath() {

        },

        nextUpdateTime() {
            const dateStr = this.selectedCompetition.generated_at;
            console.log(dateStr);
            const date = new Date(new Date(dateStr).getTime() + this.selectedCompetition.update_interval * 60000);
            return ("0" + date.getHours()).slice(-2) + ":" + date.getMinutes();
        }
    }
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