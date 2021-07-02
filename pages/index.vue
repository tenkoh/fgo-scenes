<template>
  <v-row class="mt-3" justify="center" align="center">
    <v-col cols="12" sm="8">
      <v-overlay :value="processing">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
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
            <v-img
              :lazy-src="original"
              :src="original"
              alt="オリジナル村正ぁ"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-form>
              <v-container>
                <v-row>
                  <v-text-field
                    v-model="claim"
                    :rules="[rules.required]"
                    label="○○○○○よぅ、"
                    clearable
                    counter
                    maxlength="20"
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="who"
                    :rules="[rules.required]"
                    label="そういうところだぞ○○ーーーー！"
                    clearable
                    counter
                    maxlength="10"
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-card flat>
                      <v-card-actions>
                        <v-row justify="center">
                          <v-btn
                            class="ml-2 mr-2"
                            :color="(disableGenerate ? 'grey' : 'indigo')"
                            dark
                            @click="process"
                            >Generate</v-btn
                          >
                          <v-btn class="ml-2 mr-2" @click="reset_img"
                            >reset</v-btn
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
        <v-row>
          <v-col cols="12">
            <LazyTextImage v-show="completed" :encoded="idata"></LazyTextImage>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
const defaultClaim = '今ぐらい幸福にさせろ'
const defaultWho = '村正ぁ'
const apiUrl = 'https://2beswjj1xl.execute-api.ap-northeast-1.amazonaws.com/Prod/muramasala'
export default {
  data() {
    return {
      claim: defaultClaim,
      who: defaultWho,
      original: this.$basePath() + 'original.png',
      idata: '',
      completed: false,
      processing: false,
      rules: {
        required: (value) => !!value || '必ず入力して下さい',
      },
    }
  },
  computed: {
    disableGenerate() {
      const invalidClaim = this.claim === null || this.claim === ''
      const invalidWho = this.who === null || this.who === ''
      const invalidInputs = invalidClaim || invalidWho
      return invalidInputs || this.processing
    },
  },
  methods: {
    async process() {
      if(this.disableGenerate){
        window.alert('入力に不足があります')
        return
      }

      this.processing = true
      const img = await this.get_img_base64()
      this.processing = false
      if (img !== '') {
        this.completed = true
        // scroll after dom had refreshed
        this.$nextTick(this.scrollToBottom)
      }
    },
    async get_img_base64() {
      try {
        const resp = await fetch(apiUrl, {
          method: 'POST',
          body: JSON.stringify({
            claim: this.claim,
            who: this.who,
          }),
          headers: { 'Content-Type': 'application/json' },
        })
        const json = await resp.json()
        const img = json.image
        this.idata = img
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
        this.idata = ''
      }
    },
    reset_img() {
      this.claim = defaultClaim
      this.who = defaultWho
      this.idata = ''
      this.completed = false
      this.$nextTick(() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      })
    },
    scrollToBottom() {
      const element = document.documentElement
      const bottom = element.scrollHeight - element.clientHeight
      window.scroll({
        top: bottom,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>
