<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import IconArrowDown from '../icons/IconArrowDown.vue';

const props = defineProps({
    tableData: Array,
    mobileData: Array,
    tableHeaders: Array,
});


const windowWidth = ref(window.innerWidth)

const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', updateWindowWidth)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateWindowWidth)
})
</script>

<template>
    <div class="table-category">
        <p>Products</p>
        <span class="display-amount">10 of 10 results</span>
    </div>
    <table>
        <thead>
            <tr>
                <th v-for="category in props.tableHeaders" :key="category" :data-type="category" class="table-header">
                    {{ category }}
                    <slot name="icon" v-if="category === 'Prices'">
                        <IconArrowDown />
                    </slot>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in windowWidth >= 992 ? tableData : mobileData" :key="row.id">
                <td v-for="key in Object.keys(windowWidth >= 992 ? tableData[0] : mobileData[0])" :key="key" :data-type="key" :class="{ 'product': windowWidth < 992 && key === 'Product' }">
                    <template v-if="key === 'Product'">
                        <p class="product-data">{{ row[key].prod }}</p>
                        <span class="product-meta-data">{{ row[key].serial }} </span>
                        <span class="product-meta-data">{{ windowWidth >= 992 ? row[key].quantity : ' - Qty: ' + row[key].quantity }}</span>
                    </template>
                    <template v-else>
                        {{ row[key] }}
                    </template>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped lang="scss">
.table-category {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 0 0 19px 0;

    @media screen and (min-width: 992px) {
        margin-bottom: 6px;
    }

    p {
        font-family: $primary-font;
        font-weight: $font-weight-bold;
        font-size: $font-size-lg;
        line-height: $line-height-sm;
        margin: 0;
        margin-right: 10px;
    }

    .display-amount {
        font-family: $primary-font;
        font-weight: $font-weight-normal;
        font-size: $font-size-sm;
        line-height: $line-height-sm;
        color: $secondary-text-color;
    }
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid $light-purple;
    border-radius: 8px;
    width: 100%;
    border-collapse: separate;



    th {
        font-family: $primary-font;
        font-weight: $font-weight-bold;
        font-size: $font-size-lg;
        line-height: $line-height-sm;
        color: $primary-text-color;
        padding: 18px 16px;
        border-bottom: 1px solid $light-purple;

        &[data-type="Prices"] {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &:first-child {
            text-align: center;

            @media screen and (min-width: 992px) {
                text-align: left;
            }
        }

        &:last-child {
            border-left: 0px solid $light-purple;

            @media screen and (min-width: 992px) {
                border-left: 2px solid $light-purple;

            }
        }
    }

    td {
        font-family: $primary-font;
        font-weight: $font-weight-normal;
        font-size: $font-size-md;
        line-height: $line-height-sm;
        color: $primary-text-color;
        padding: 8px 18px 8px 16px;
        text-align: center;
        border-bottom: 1px solid $light-purple;
        border-left: 0px solid $light-purple;

        &:first-child {
            text-align: left;
        }

        &[data-type="Product"] {
            text-align: left;
        }

        &:last-child {
            text-align: left;
            border-left: 0px solid $light-purple;

            @media screen and (min-width: 992px) {
                text-align: right;
                border-left: 2px solid $light-purple;

            }
        }

        .product-data {
            margin: 0;
            font-size: $font-size-md;
            line-height: $line-height-sm;
            color: $primary-text-color;
        }

        .product-meta-data {
            font-size: $font-size-sm;
            line-height: $line-height-sm;
            color: $secondary-text-color;
        }
    }

    tr:last-child td {
        border-bottom: none;
    }
}
</style>
