<template>
  <f7-page>
    <f7-navbar back-link="Ekran główny">
      <f7-nav-title>Obraz linii</f7-nav-title>
      <f7-nav-right><span class="login">{{ username }}</span></f7-nav-right>
    </f7-navbar>
    Obraz linii
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      username: ''
    }
  },
  mounted() {
    this.username = this.$f7.data.user;
  }
}
</script>
