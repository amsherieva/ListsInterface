<template>
    <div class="checkableProgram form-check">
        <input class="form-check-input m-1"
               type="checkbox"
               :id="'checkable-' + itemName"
               v-model="isProgramSelected"
               @change="OnCheckboxClick">
        <label
            class="form-check-label flex-wrap direction-info direction-info__name"
            :for="'checkable-' + itemName"
            style="display:block;">&nbsp;<span class="direction-info direction-info__code">
            <slot name="Code"></slot>
        </span>&nbsp;
            <span class="direction-info">
                <slot name="Name"></slot>
            </span>
            <a :id="itemName + '_tooltip'" data-bs-toggle="tooltip" data-bs-placement="top" v-bind="tooltipText" data-bs-html="true">
                <i style="color: grey" class="bi bi-question-circle-fill ms-1"></i>
            </a>
        </label>
    </div>
</template>

<script>
import {ref, watch} from "vue";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

export default {
    name: 'CheckableProgram',
    props: {
        itemName: {
            type: String,
            required: true
        },
        isSelected: {
            type: Boolean,
            required: true
        },
        belongsTo: {
            type: String,
            required: true
        },
        lastUpdateTime: {
            required: true,
        },
        updateInterval: {
            required: true,
        }
    },
    setup(props) {
        const isProgramSelected = ref(props.isSelected);

        watch(props, (newValue) => {
            if (props.itemName && newValue.isSelected !== undefined) {
                //console.log('Props updated:', newValue.isSelected);
                isProgramSelected.value = newValue.isSelected;
            }
        });

        return {
            isProgramSelected,
        }
    },

    mounted() {
        const tooltipElement = document.getElementById(this.itemName + '_tooltip')
        this.tooltip = new bootstrap.Tooltip(tooltipElement);
    },

    data() {
        return {
            isProgramSelected: this.isSelected,
            tooltip: {
                type: Object,
            }
        }
    },

    computed: {
        UpdateTimeText() {
            const dateStr = this.lastUpdateTime;
            const date = new Date(new Date(dateStr).getTime());
            return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + " " + ("0" + date.getDate()).slice(-2) + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();
        },

        UpdateIntervalText() {
            const interval = this.updateInterval;
            let text = String(interval) + " ";
            if (interval >= 11 && interval <= 19) text += "минут";

            else if (interval % 10 >= 5
                && interval % 10 <= 9
                || interval % 10 == 0) text += "минут";

            else if (interval % 10 == 1) text += "минута";

            else if (interval % 10 >= 2 && interval % 10 <= 4) text += "минуты";
            return text;
        },

        tooltipText() {
            return {
                'data-bs-title':"Период автообновления: <br>" + this.UpdateIntervalText + ";<br> Последнее обновление: " + this.UpdateTimeText
            }
        }
    },

    methods: {
        OnCheckboxClick() {
            this.isProgramSelected = !this.isProgramSelected;
            this.$emit('onCheckboxClicked', this.itemName, this.belongsTo)
        }
    },
}
</script>

<style scoped>
.checkableProgram {
    margin-left: 0px;
    padding-left: 0px;
}

.direction-info {
    font-family: Roboto-Medium;
    font-size: 16px;
    margin: 0;
}

.direction-info__code {
    color: #0152a3;
}

.direction-info__name2 {
    margin: 0px;
    font-size: calc(1rem + 0.3vw);
}

.direction-info__body {
    font-size: calc(1rem + 0.2vw);
}

.tooltip-inner {
    white-space:pre-wrap;
}
</style>