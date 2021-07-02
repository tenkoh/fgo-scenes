<template>
  <v-card flat>
    <v-card-title class="text-center text-h4">受け取れ村正ぁ！</v-card-title>
    <div>
      <img :src="imgSrc" width="100%" />
    </div>
  </v-card>
</template>

<script>
const prefix = 'data:image/png;base64, '
export default {
  props: {
    encoded: {
      type: String,
      default: '',
    },
  },
  computed: {
    imgSrc() {
      return prefix + this.encoded
    },
  },
}
</script>
