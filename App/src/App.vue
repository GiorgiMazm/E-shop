<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import ProductItem from "./components/ProductItem.vue";
</script>

<template>
  <div>
    <AppHeader />
    <section class="bg-gray-500 text-gray-200">
      <div class="container mx-auto">
        <h1 class="text-4xl text-center pt-5">Our product</h1>
        <div class="flex flex-wrap justify-around mt-5">
          <ProductItem
            item-name="Macbook"
            price="2000"
            img-link="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202303230456"
          />
          <ProductItem
            item-name="Macbook pro"
            price="3000"
            img-link="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_EMEA_LANG_DE?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359389"
          />
          <ProductItem
            item-name="Macbook air"
            price="1500"
            img-link="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-macbook-air-gold-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145607000"
          />
        </div>
      </div>
    </section>
  </div>
</template>
