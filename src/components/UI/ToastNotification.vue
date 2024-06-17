<template>
    <div class="toast-container position-fixed p-3 top-0 start-50 translate-middle-x">
        <div :id class="toast align-items-center border-0" :class="backgroundStyle" role="alert" aria-live="assertive"
             aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body" style="font-family: Roboto-Medium">
                    <i class="bi bi-bell-fill">&nbsp;</i><slot name="toastBody"></slot>
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"
                        aria-label="Close"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToastNotification',

    props: {
        id: String,
        successNotification: Boolean,
    },

    computed: {
        backgroundStyle() {
            if (this.successNotification) {
                return 'bg-success-subtle';
            } else {
                return 'bg-danger-subtle';
            }
        },
    },
}
</script>

<style scoped>

</style>