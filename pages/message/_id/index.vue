<template>
  <section class="section no-top-pad">
    <div class="columns is-centered is-mobile">
      <div class="column is-half-desktop is-full-mobile is-full-tablet">
        <h2 class="subtitle"> {{ ogpData.message }}</h2>
        <img :src="ogpData.url" :alt="ogpData.message" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head() {
    return {
      title: 'OGP メッセージサービス',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'OGP メッセージサービスの説明が入ります'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'OGP メッセージのタイトル'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'OGP メッセージサービスの説明が入ります'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: '',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          // computed より head が先に呼ばれるので、Error が出る
          content: this.$store.getters['ogpData'].url
          // content: this.ogpData.url
        }
      ]
    };
  },
  computed: {
    ogpData(): { message: string, url: string } {
      return this.$store.getters['ogpData'];
    }
  },
  async fetch({ store, route}) {
    const uuid = route.params.id;
    await store.dispatch('getOGP', uuid);

    return;
  }
});
</script>

<style scoped>

</style>