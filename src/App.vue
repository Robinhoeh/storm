<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import StormNav from './components/NavBar/StormNav.vue';
import StormTable from './components/Tables/StormTable.vue';

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
      ID: item.id,
      Status: item.quantity > 50 ? "In Stock" : "Out of Stock",
      Quantity: item.quantity,
      Product: {
        prod: item.product,
        serial: item.serial,
      },
      Prices: item.total
    };
  });
});

const mobileData = computed(() => {
  return tableData.map((item) => {
    return {
      Product: {
        prod: item.product,
        serial: item.serial,
        quantity: item.quantity
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
    <StormNav />
    <StormTable :table-data="formattedData" :mobile-data="mobileData" :table-headers="formattedHeaders" />
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
}
</style>
