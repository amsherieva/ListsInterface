<template>
    <div class="footer d-flex align-items-end">
        <div class="col-lg-7 p-0 mx-auto">
            <div class="p-2">
                <div class="row d-flex justify-content-center ms-1">
<!--                    <div class="col-sm-4 d-flex flex-column align-items-center">-->
                    <div class="col-sm-4">
                        <h2>Бакалавриат</h2>
                        <p><a href="https://abit.etu.ru/ru/postupayushhim/bakalavriat-i-specialitet/spiski-podavshih-zayavlenie/?competitions=1-1" target="_blank">Списки подавших заявление</a></p>
                        <p><a href="https://abit.etu.ru/ru/postupayushhim/bakalavriat-i-specialitet/konkursnye-spiski/?competitions=1-2" target="_blank">Конкурсные списки</a></p>
                        <p class="mb-3"><a href="https://abit.etu.ru/ru/postupayushhim/bakalavriat-i-specialitet/spiski-zachislennyh/?competitions=1-5" target="_blank">Списки зачисленных</a></p>
                    </div>
                    <div class="col-sm-4">
                        <h2>Магистратура</h2>
                        <p><a href="https://abit.etu.ru/ru/postupayushhim/magistratura/spiski-podavshih-zayavlenie/?competitions=2-1" target="_blank">Списки подавших заявление</a></p>
                        <p><a href="https://abit.etu.ru/ru/postupayushhim/magistratura/konkursnye-spiski/?competitions=2-2" target="_blank">Конкурсные списки</a></p>
                        <p class="mb-3"><a href="https://abit.etu.ru/ru/postupayushhim/magistratura/spiski-zachislennyh/?competitions=2-5" target="_blank">Списки зачисленных</a></p>
                    </div>
                    <div class="col-sm-4">
                        <h2>Аспирантура</h2>
                        <p><a href="https://abit.etu.ru/ru/postupayushhim/aspirantura/spiski-podavshih-zayavlenie/?competitions=3-2" target="_blank">Конкурсные списки</a></p>
                        <p class="mb-2"><a href="https://abit.etu.ru/ru/postupayushhim/aspirantura/spiski-zachislennyh/?competitions=3-5" target="_blank">Списки зачисленных</a></p>
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
    margin-bottom: 0px;
}

h2 {
    font-family: Roboto-Medium;
    color: white;
    font-size: calc(1.0rem + 0.6vw);
    margin-bottom: 10px;
    margin-top: 5px;

}

p {
    font-family: Roboto-Regular;
    color: white;
    font-size: calc(0.8rem + 0.3vw);
    margin-bottom: 5px;
}

a:link
{
    color: #eee;
    text-decoration: none;
}

a:visited
{
    color: #eee;
    text-decoration: none;
}

a:hover
{
    color:#FFFFFF;
    text-decoration: underline;
}
</style>