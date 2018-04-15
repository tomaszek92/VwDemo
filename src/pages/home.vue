<template>
  <f7-page>
    <f7-navbar back-link="Logowanie">
      <f7-nav-title>ZP4</f7-nav-title>
      <f7-nav-right><span class="login">login: {{ username }}</span></f7-nav-right>
    </f7-navbar>
    <f7-list>
      <f7-list-item link="/tact/" title="Takt">
        <div slot="after"><f7-icon f7="bolt" class="color-red"></f7-icon></div>
      </f7-list-item>
      <f7-list-item link="/lineImage/" title="Obraz linii">
      </f7-list-item>
      <f7-list-item link="/readingFromCamera/" title="Odczyt z kamery">
      </f7-list-item>
      <f7-list-item link="/stationExclude/" title="Wykluczenia stacji">
        <div slot="after"><f7-icon f7="bolt" class="color-yellow"></f7-icon></div>
      </f7-list-item>
      <f7-list-item link="/pcb/" title="PCB">
      </f7-list-item>
      <f7-list-item link="/employeesMesseges/" title="(Komunikaty od pracowników)">
      </f7-list-item>
    </f7-list>
    <f7-list>
      <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
    </f7-list>
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
