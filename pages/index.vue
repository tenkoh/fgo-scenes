<template>
  <v-row class="mt-3" justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1 class="headline">そういうところだぞ村正ぁーーー！ジェネレータ</h1>
      <v-form>
        <v-container>
          <v-row dense>
            <v-text-field
              v-model="action"
              label="いまぐらい○○させろ"
              required
            ></v-text-field>
          </v-row>
          <v-row dense>
            <v-text-field
              v-model="target"
              label="そういうところだぞ○○ーーー！"
              required
            ></v-text-field>
          </v-row>
        </v-container>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      action: '',
      target: '',
    }
  },
}
</script>
