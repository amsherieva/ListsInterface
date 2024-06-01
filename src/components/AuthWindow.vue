<template>
    <div class="auth-window d-flex align-items-center justify-content-center" style="height:100%">
        <div class="container col-sm-11 col-md-6">
            <div class="card text-center">
                <h4 class="card-header">
                    Добро пожаловать!
                </h4>
                <div class="card-body">
                    <p class="card-title">Пожалуйста, введите токен:</p>
                    <input type="text" class="form-control" placeholder="Token" v-model="enteredToken">
                    <button class="btn btn-primary">Go somewhere</button>
                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthWindow',

    data() {
        return {
            enteredToken: "",
        }
    }
}
</script>

<style scoped>

</style>