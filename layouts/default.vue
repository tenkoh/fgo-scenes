<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <v-spacer></v-spacer>
      <span>&copy; {{ new Date().getFullYear() }} Foxtail88</span>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>
