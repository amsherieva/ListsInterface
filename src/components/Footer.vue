<template>
    <div class="footer d-flex align-items-end">
        <div class="col-lg-7 col p-0 mx-auto">
            <div class="p-2">
                <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-sm-4">
                        <h2>Бакалавриат</h2>
                        <p><a href="https://abit.etu.ru/ru/postupayushhim/bakalavriat-i-specialitet/spiski-podavshih-zayavlenie/?competitions=1-1" target="_blank">Списки подавших заявление</a></p>
                        <p><a href="https://abit.etu.ru/ru/postupayushhim/bakalavriat-i-specialitet/konkursnye-spiski/?competitions=1-2" target="_blank">Конкурсный список</a></p>
                        <p><a href="https://abit.etu.ru/ru/postupayushhim/bakalavriat-i-specialitet/spiski-zachislennyh/?competitions=1-5" target="_blank">Список зачисленных</a></p>
                    </div>
                    <div class="col-sm-4">
                        <h2>Магистратура</h2>
                        <p><a href="" target="_blank">Списки подавших заявление</a></p>
                        <p><a href="" target="_blank">Конкурсный список</a></p>
                        <p><a href="" target="_blank">Список зачисленных</a></p>
                    </div>
                    <div class="col-sm-4">
                        <h2>Аспирантура</h2>
                        <p><a href="" target="_blank">Списки подавших заявление</a></p>
                        <p><a href="" target="_blank">Конкурсный список</a></p>
                        <p><a href="" target="_blank">Список зачисленных</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>

.footer {
    background-color: #02346f;
}

h2 {
    font-family: Roboto-Medium;
    color: white;
    font-size: calc(0.6rem + 0.8vw);
}

p {
    font-family: Roboto-Regular;
    color: white;
}
</style>