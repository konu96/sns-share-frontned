<template>
  <div class="wrap">
    <div class="button is-primary" ref="capture">
      OGP イメージを作成する
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {
    const element = this.$refs.capture as HTMLElement;
    const self = this;

    this.$nextTick(() => {
      if (process.server) {
        return;
      }

      const h2c = require('html2canvas');
      element.addEventListener('click', () => {
        self.$store.dispatch('setLoading', true);
        window.scrollTo(0, 0);
        h2c(document.querySelector('#js_capture_ref'), {
          backgroundColor: '#fff'
        }).then((canvas: any) => {
          canvas.toBlob((blob: any) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = function() {
              const dataURI = this.result;
              console.log("dataURI");
              console.log(dataURI);
              self.handleClick(dataURI);
            }
          })
        })
      })
    });
  },
  methods: {
    handleClick(dataURI: FileReader["result"]) {
      this.$emit('click', dataURI);
    }
  }
})
</script>

<style scoped>
.wrap {
  text-align: center;
}
</style>