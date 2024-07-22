<template>
    <div class="row container-fluid mx-auto mt-sm-5 pt-lg-3 mt-4 mb-4">
        <div class="col-lg-4 col-md-7 p-0 mx-auto">
            <div class="d-flex justify-content-evenly">
                <button class="btn-b py-2" @click="goToBak"><b><span
                    style="color: #0152a3;">Б</span></b>акалавриат</button>
            </div>

            <div class="d-flex justify-content-evenly">
                <button class="btn-b py-2" @click="goToMag"><b><span
                    style="color: #fd4239;">М</span></b>агистратура</button>
            </div>

            <div class="d-flex justify-content-evenly">
                <button class="btn-b py-2" @click="goToAsp"><b><span
                    style="color: #FF992C;">А</span></b>спирантура</button>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: "LevelSelectorView",

    methods: {
        goToBak() {
            this.$router.push('/bak');
        },

        goToMag() {
            this.$router.push('/mag');
        },

        goToAsp() {
            this.$router.push('/asp');
        },
    }
}
</script>

<style>
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
    font-size: calc(1.0rem + 0.4vw);
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