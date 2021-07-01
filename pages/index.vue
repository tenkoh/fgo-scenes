<template>
  <v-row class="mt-3" justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-container>
        <v-row>
          <v-spacer></v-spacer>
          <h1 class="headline mb-3">
            そういうところだぞ村正ぁーーーー！ジェネレータ
          </h1>
          <v-spacer></v-spacer>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="12" md="6">
            <v-img :src="original" alt="オリジナル村正ぁ"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-form>
              <v-container>
                <v-row dense>
                  <v-text-field
                    v-model="action"
                    label="いまぐらい○○させろよぅ、"
                    required
                  ></v-text-field>
                </v-row>
                <v-row dense>
                  <v-text-field
                    v-model="target"
                    label="そういうところだぞ○○ーーーー！"
                    required
                  ></v-text-field>
                </v-row>
                <v-row dense>
                  <v-col cols="12">
                    <v-card flat>
                      <v-card-actions>
                        <v-row justify="center">
                          <v-btn
                            class="ml-2 mr-2"
                            color="indigo"
                            dark
                            @click="generate_img"
                            >Generate</v-btn
                          >
                          <v-btn class="ml-2 mr-2" @click="clear_img"
                            >clear</v-btn
                          >
                        </v-row>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>
        <v-row v-show="generated" ref="output-area">
          <v-col cols="12">
            <v-card flat>
              <v-card-title class="text-center text-h4">受け取れ村正ぁ！</v-card-title>
              <!-- <v-img :src="original"></v-img> -->
              <TextImage></TextImage>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
const defaultAction = '幸福に'
const defaultTarget = '村正ぁ'
export default {
  data() {
    return {
      action: defaultAction,
      target: defaultTarget,
      original: this.$basePath() + 'original.png',
      generated: false,
    }
  },
  methods: {
    generate_img() {
      this.generated = true
      // scroll after dom had refreshed
      this.$nextTick(this.scrollToBottom)
    },
    clear_img() {
      this.action = defaultAction
      this.target = defaultTarget
      this.generated = false
      this.$nextTick(()=>{
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      })
    },
    scrollToBottom() {
      const element = document.documentElement
      const bottom = element.scrollHeight - element.clientHeight
      window.scroll({
        top: bottom,
        left: 0,
        behavior: 'smooth'
      })
    },
  },
}
</script>
