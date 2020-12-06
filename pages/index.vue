<template>
  <section class="section no-top-pad">
    <div id="js_capture_ref" class="ogp-message">
      <span class="your-message"></span>
      <span v-if="message">
        {{ message }}
      </span>
      <span v-else class="no-input">
        入力エリアにメッセージを入れてください
      </span>
    </div>

    <div class="columns is-centered is-mobile">
      <div class="colum is-half-desktop is-full-mobile is-full-tablet">
        <form>
          <div class="field">
            <label class="label">あなたのメッセージ</label>
            <div class="control">
              <input class="input" name="message" v-model="message" placeholder="メッセージを入力してください" />
            </div>
          </div>
          <div class="field">
            <div class="control">

            </div>
          </div>
        </form>
      </div>
    </div>
  </section>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      message: '',
    };
  },
  methods: {
    generateOGP() {

    }
  }
})
</script>

<style scoped>
.your-message {
  display: block;
  font-size: 14px;
}

.no-input {
  color: #ccc;
}

.ogp-message {
  padding: 20px 0;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  border: 10px solid #55c500;
  margin-bottom: 30px;
}
</style>
