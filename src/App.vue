<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import StormNav from './components/NavBar/StormNav.vue';
import StormTable from './components/Tables/StormTable.vue';
import StormModal from './components/Storm/StormModal.vue';
import IconClose from './components/icons/IconClose.vue';

const tableData = [
  {
    "product": "Macbook Pro 16 inch (2020 ) For Sale",
    "serial": "BA9212320",
    "id": 1374,
    "quantity": 122,
    "total": 854.08,
    "image":
      "https://superapple.cz/wp-content/uploads/2019/11/Apple_16-inch-MacBook-Pro_111319-800x445.jpg"
  },
  {
    "product": "Gaming Chair, local pickup only",
    "serial": "XP8619376",
    "id": 3933,
    "quantity": 245,
    "total": 943.65
  },
  {
    "product": "Macbook Air 13 inch(2020 ) For Sale",
    "serial": "KH9212924",
    "id": 9374,
    "quantity": 134,
    "total": 779.58,
    "image":
      "https://images.iphonemod.net/wp-content/uploads/2020/03/apple-released-new-macbook- air - 13 - inch - 2020 - 2 - 1024x828.png"
  },
  {
    "product": "Heimer Miller Sofa (Mint Condition)",
    "serial": "SD9212969",
    "id": 5560,
    "quantity": 26,
    "total": 275.43,
    "image": "https://www.pngall.com/wp-content/uploads/4/Sofa-PNG.png"
  },
  {
    "product": "iPad Pro 2017 Model",
    "serial": "012921097",
    "id": 6065,
    "quantity": 76,
    "total": 475.22,
    "image":
      "https://brain-images-ssl.cdn.dixons.com/6/3/10165836/l_10165836_002.jpg"
  },
  {
    "product": "Gopro hero 7 (with receipt)",
    "serial": "GM6812978",
    "id": 4349,
    "quantity": 47,
    "total": 219.78,
    "image":
      "https://gadgetsin.com/uploads/2018/10/gopro_hero7_black_waterproof_4k_action_camera_1.jpg"
  },
  {
    "product": "Dell Computer Monitor",
    "serial": "HQ0192837",
    "id": 9359,
    "quantity": 54,
    "total": 105.55,
    "image": "https://www.techpowerup.com/img/08-09-27/320-7339.jpg"
  },
  {
    "product": "AirPods Pro",
    "serial": "LK89471045",
    "id": 8829,
    "quantity": 132,
    "total": 928.41,
    "image":
      "https://scoprilamela.it/wp-content/uploads/2020/09/airpods-pro.jpg"
  },
  {
    "product": "Playstation 4 Limited Edition",
    "serial": "TU23182451",
    "id": 5045,
    "quantity": 15,
    "total": 473.85
  },
  {
    "product": "DJI Mavic Pro 2",
    "serial": "JD45712035",
    "id": 3536,
    "quantity": 39,
    "total": 576.28,
    "image":
      "https://images.wired.it/wp-content/uploads/2016/09/28193850/1475077129_Dji-Mavic - Pro -.jpg"
  }
];

const formattedData = computed(() => {
  return tableData.map((item) => {
    return {
      id: item.id,
      status: item.quantity,
      quantity: item.quantity,
      product: {
        prod: item.product,
        serial: item.serial,
        image: item.image
      },
      Prices: item.total
    };
  });
});

const mobileData = computed(() => {
  return tableData.map((item) => {
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
  console.log("Closing modal");
  displayModal.value = false;
};

const selectedRow = ref(null);

const handleDisplayModal = (row) => {
  console.log(row);
  selectedRow.value = row;
  displayModal.value = true
};

const searchTerm = ref('')

const filteredData = computed(() => {
  const data = windowWidth.value < 992 ? mobileData.value : formattedData.value
  return data.filter((item) => {
    return item.product.prod.toLowerCase().includes(searchTerm.value.toLowerCase())
  })
})



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
    <StormNav v-model="searchTerm" />
    <h1>{{ searchTerm }}</h1>
    <StormTable @row-clicked="handleDisplayModal" :table-data="filteredData" :mobile-data="filteredData" :table-headers="formattedHeaders" />
  </div>

</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  // margin: $layout-padding-mobile;
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
