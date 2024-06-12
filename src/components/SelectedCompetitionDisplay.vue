<template>
    <h2 class="d-flex">Выбранный список:</h2>
    <p style="margin-bottom: 5px;">{{campaignType}} <i class="bi bi-chevron-right"></i> {{listType}} <i class="bi bi-chevron-right"></i> {{finSource}} <i class="bi bi-chevron-right"></i></p>
    <div class="row" style="margin-bottom: 15px;">
        <div class="col-sm-11 col-10">
            <p>{{listCode}} {{listName}}</p>
        </div>
        <div class="col-sm-1 col-2">
            <button type="button" class="btn-close justify-content-center align-content-center" aria-label="Close" @click="deleteListsFromSelected"></button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SelectedCompetitionDisplay",

    props: {
        campaignType: {
            required: true,
        },
        listType: {
            required: true,
        },
        finSource: {
            required: true,
        },
        listCode: {
            type: String,
            required: true,
        },
        listName: {
            type: String,
            required: true,
        }
    },

    methods: {
        deleteListsFromSelected() {
            this.$emit("deleteListsFromSelected");
        },
    }
}
</script>

<style scoped>
h2 {
    font-family: Roboto-Medium;
    font-size: calc(1.2rem + 0.1vw);
    margin-bottom: 15px;
}
p {
    font-family: Roboto-Regular;
    font-size: calc(1rem + 0.1vw);

}

</style>