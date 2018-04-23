<template>
  <f7-page>
     <f7-navbar back-link="Ekran główny">
      <f7-nav-title>Komunikaty od pracowników</f7-nav-title>
      <f7-nav-right><span class="login">{{ username }}</span></f7-nav-right>
    </f7-navbar>
    <f7-card>
      <f7-card-content>
        AF 460 - brak części, uszczelka głowicy
      </f7-card-content>
    </f7-card>
    <f7-card>
      <f7-card-content>
        AF 370 - problemy jakościowe
      </f7-card-content>
    </f7-card>
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
