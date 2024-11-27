<script setup>
const props = defineProps({
  tableData: Array,
  tableHeaders: Array,
});
</script>

<template>
  <div class="table-category">
    <p>Products</p>
    <span class="display-amount">10 of 10</span>
  </div>
  <table>
    <thead>
      <tr>
        <th v-for="category in props.tableHeaders" :key="category" class="table-header">{{ category }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in tableData" :key="row.id">
        <td v-for="key in Object.keys(tableData[0])" :key="key" :data-type="key">{{ row[key] }}</td>
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

  p {
    font-family: $primary-font;
    font-weight: $font-weight-bold;
    font-size: $font-size-lg;
    line-height: $line-height-sm;
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
    font-size: $font-size-sm;
    line-height: $line-height-sm;
    color: $primary-text-color;
    padding: 18px 16px;
    border-bottom: 1px solid $light-purple;

    &:first-child {
      text-align: left;
    }

    &:last-child {
      border-left: 2px solid $light-purple;
    }
  }

  td {
    font-family: $primary-font;
    font-weight: $font-weight-normal;
    font-size: $font-size-sm;
    line-height: $line-height-sm;
    color: $primary-text-color;
    padding: 18px 16px;
    text-align: center;
    border-bottom: 1px solid $light-purple;

    &:first-child {
      text-align: left;
    }

    &[data-type="Product"] {
      text-align: left;
    }

    &:last-child {
      text-align: right;
      border-left: 2px solid $light-purple;
    }
  }

  tr:last-child td {
    border-bottom: none;
  }
}
</style>
