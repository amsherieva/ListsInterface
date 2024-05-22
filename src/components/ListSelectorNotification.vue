<template>
    <div class="list-selector-notification">
        <div class="row container-fluid mx-auto">
            <div class="col-lg-7 col p-0 mx-auto">
                <!-- <div class="p-2 px-md-3 d-flex justify-content-center align-items-center"> -->
                <div class="alert alert-primary d-flex direction-info__name" role="alert"><i
                    class="bi bi-exclamation-triangle-fill">&nbsp;</i>Выберите список</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListSelectorNotification",
}
</script>

<style scoped>
.direction-info__name {
    font-family: Roboto-Medium;
    color: #404040;
    margin: 0;
    font-size: calc(1rem + 0.3vw);
}
</style>