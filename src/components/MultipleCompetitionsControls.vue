<template>
    <div class="multiple-competitions-controls">

        <div class="row container-fluid mx-auto">
            <div class="col-lg-7 col p-0 mx-auto">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-5 col-6">
                        <button class="btn-b">Опубликовать списки</button>
                    </div>
                    <div class="col-lg-4 col-md-5 col-6">
                        <a href="" class="btn-b" role="button">Снять с публикации</a>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-5 col-6">
                        <button class="btn-b">Разморозить списки</button>
                    </div>
                    <div class="col-lg-4 col-md-5 col-6">
                        <a href="" class="btn-b" role="button">Заморозить списки</a>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-10">
                        <a href="" class="btn-b btn-block" role="button">Обновить сейчас</a>
                    </div>
                </div>
                <hr style="color: #0152A3; border-width:2px;">

                <div class="row mt-4">
                    <div class="col-xl-6 col-lg-9 col-md-8 mt-1">
                        <p>Последнее время обновления для всех выбранных списков: <u>не&nbsp;установлено</u></p>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-4 justify-content-center">
                        <a href="" class="btn-b" role="button"><i
                            class="bi bi-pencil-square">&nbsp;</i>Редактировать</a>
                    </div>
                </div>
                <hr>

                <div class="row mt-3">
                    <div class="col-xl-6 col-lg-9 col-md-8 mt-1">
                        <p>Период автообновления для всех выбранных списков: <u>не&nbsp;установлено</u></p>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-4 justify-content-center">
                        <a href="" class="btn-b" role="button"><i
                            class="bi bi-pencil-square">&nbsp;</i>Редактировать</a>
                    </div>
                </div>


                <p class="mt-4"><a href="" class="btn-b btn-block"
                                   role="button">Сохранить внесенные изменения</a></p>


                <!-- </div> -->
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "MultipleCompetitionsControls",
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