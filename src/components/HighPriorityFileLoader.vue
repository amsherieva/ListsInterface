<template>
    <div class="row container-fluid mx-auto mt-3 mb-4">
        <div class="col-lg-7 p-0 mx-auto">
            <h3>Высший приоритет</h3>
            <div class="row">
                <div class="col-md-6">
                    <select class="form-select form-select-lg mt-3 mb-4" aria-label="Default select example">
                        <option selected>Выберите тип списка</option>
                        <option value="1">Список подавших заявление</option>
                        <option value="2">Конкурсный список</option>
                        <option value="3">Внутренний конкурсный список</option>
                    </select>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-sm-4 col-6">
                    <p>ВП министерский</p>
                </div>
                <div class="col-sm-4 col-6">
                    <button class="btn-b" data-bs-toggle="modal" data-bs-target="#modifyCommonUpdateInterval"><i class="bi bi-upload">&nbsp;</i>Загрузить</button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 col-6">
                    <p>ВП по оригиналам</p>
                </div>
                <div class="col-sm-4 col-6">
                    <button class="btn-b" data-bs-toggle="modal" data-bs-target="#modifyCommonUpdateInterval"><i class="bi bi-upload">&nbsp;</i>Загрузить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HighPriorityFileLoader",
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
    padding: 5px 25px;
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