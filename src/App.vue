<script setup>
import { computed, onMounted, ref } from 'vue';
import { useWidth } from './composables/storm/useWidth.js';
import StormNav from './components/NavBar/StormNav.vue';
import StormTable from './components/Tables/StormTable.vue';
import StormModal from './components/Storm/StormModal.vue';
import IconClose from './components/icons/IconClose.vue';

const { windowWidth } = useWidth()

const availableItems = computed(() => tableData.value.length);

const tableData = ref([]);

const displayedData = ref([]);

const formattedData = computed(() => {
  return displayedData.value.map((item) => {
    return {
      id: item.id,
      status: item.quantity,
      quantity: item.quantity,
      product: {
        prod: item.product,
        serial: item.serial,
        image: item.image
      },
      price: item.total
    };
  });
});

const mobileData = computed(() => {
  return displayedData.value.map((item) => {
    return {
      product: {
        prod: item.product,
        serial: item.serial,
        quantity: item.quantity,
        id: item.id,
        image: item.image
      }
    };
  });
});

const tableHeaders = [
  "ID",
  "Status",
  "Quantity",
  "Product Name",
  "Prices"
];

const formattedHeaders = computed(() => {
  if (windowWidth.value < 992) {
    return tableHeaders.filter((header) => header === "Product Name");
  } else {
    return tableHeaders;
  }
});

const mockFeatures = [
  "16 inch Retina Display",
  "Touch Bar and Touch ID",
  "2.6GHz 6-core 9th-generation Intel Core i7 processor",
  "512GB SSD storage",
];

const mockFeatureDescription = "The new MacBook Pro features a stunning 16-inch Retina display — the largest Retina display ever in a Mac notebook. It produces 500 nits of brightness for spectacular highlights and bright whites, The new MacBook Pro features a stunning 16-inch Retina display — the largest Retina display ever in a Mac notebook. It produces 500 nits of brightness for spectacular highlights and bright whites"

const displayModal = ref(false);
const handleCloseModal = () => {
  displayModal.value = false;
};

const selectedRow = ref(null);
const handleDisplayModal = (row) => {
  selectedRow.value = row;
  displayModal.value = true
};


const searchTerm = ref()
const handleFormSubmit = () => {
  displayedData.value = tableData.value.filter((item) => {
    return item.product.toLowerCase().includes(searchTerm.value.toLowerCase())
  })
}

const clearData = () => {
  displayedData.value = [...tableData.value]
}

const displayMobileMenu = ref(false)
const closeMenu = () => {
  displayMobileMenu.value = false
}

const handleHeaderClick = (header) => {
  if (header === 'Quantity') {
    const isAscending = displayedData.value[0].quantity < displayedData.value[displayedData.value.length - 1].quantity;
    displayedData.value = [...displayedData.value].sort((a, b) => isAscending ? b.quantity - a.quantity : a.quantity - b.quantity);
  }

  if (header === 'Product Name') {
    const isAscending = displayedData.value[0].product < displayedData.value[displayedData.value.length - 1].product;
    displayedData.value = [...displayedData.value].sort((a, b) => isAscending ?
      b.product.toLowerCase().localeCompare(a.product.toLowerCase()) :
      a.product.toLowerCase().localeCompare(b.product.toLowerCase()));
  }

  if (header === 'Prices') {
    const isAscending = displayedData.value[0].total < displayedData.value[displayedData.value.length - 1].total;
    displayedData.value = [...displayedData.value].sort((a, b) => isAscending ? b.total - a.total : a.total - b.total);
  }
}

onMounted(async () => {
  const response = await fetch('/db/mockData.json');
  tableData.value = await response.json();
  displayedData.value = [...tableData.value];
})
</script>

<template>
  <div class="wrapper">
    <StormModal :display-modal="displayModal" @close-modal="handleCloseModal">
      <template #title>
        <div class="modal-title">
          <h3>{{ selectedRow.product?.prod }}</h3>
          <IconClose @click="handleCloseModal" />
        </div>
      </template>
      <template #body>
        <div class="modal-data">
          <img v-if="selectedRow.product?.image" :src='selectedRow.product.image' :alt='selectedRow.product?.prod'>
          <p v-else class="no-image">No Image</p>
          <div class="modal-data-text">
            <p>Key Features</p>
            <ul>
              <li v-for="feature in mockFeatures" :key="feature">
                {{ feature }}
              </li>
            </ul>
            <p>{{ mockFeatureDescription }}</p>
          </div>
        </div>
      </template>
    </StormModal>
    <StormNav v-model="searchTerm" @submit="handleFormSubmit" @clear-data="clearData" @close-menu="closeMenu" />
    <StormTable @row-clicked="handleDisplayModal" @sort-list="handleHeaderClick" :table-data="windowWidth < 992 ? mobileData : formattedData" :table-headers="formattedHeaders" :table-items="availableItems" />
  </div>

</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: auto;
  margin: 40px 25px 0 25px;

  @media screen and (min-width: 992px) {
    margin: 80px 128px 0px 80px;
  }

  .modal-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: $secondary-font;
    font-weight: $font-weight-bold;
    font-size: $font-size-xl;
    line-height: $line-height-lg;
    margin: 0;
    margin-bottom: 16px;

    @media screen and (min-width: 992px) {
      margin: 0;

      h3 {
        margin: 0;
      }
    }

    svg {
      cursor: pointer;
    }
  }

  .modal-data {
    .no-image {
      background: $light-purple;
      width: 50%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media screen and (min-width: 992px) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;

    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-bottom: 35px;

      @media screen and (min-width: 992px) {
        width: 50%;
        margin-bottom: 0;
        align-self: flex-start;
        transform: translateY(60px);
      }
    }

    .modal-data-text {
      @media screen and (min-width: 992px) {
        width: 50%;
      }

      p {
        font-family: $primary-font;
        font-weight: $font-weight-normal;
        font-size: $font-size-lg;
        line-height: $line-height-sm;
        margin-bottom: 16px;
        line-height: 34px;

        @media screen {
          font-size: $font-size-sm;
          line-height: $line-height-lg;
        }
      }

      ul {
        margin: 0;
        padding: 0;

        li {
          font-family: $primary-font;
          font-weight: $font-weight-normal;
          font-size: $font-size-sm;
          line-height: $line-height-sm;
          margin-bottom: 10px;
          margin-left: 12px;
        }
      }
    }
  }
}
</style>
