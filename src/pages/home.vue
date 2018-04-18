<template>
  <f7-page>
    <f7-navbar back-link="Logowanie">
      <f7-nav-title>ZP4</f7-nav-title>
      <f7-nav-right><span class="login">{{ username }}</span></f7-nav-right>
    </f7-navbar>
    <f7-card>
      <f7-card-header class="display-flex justify-content-center">ZP 132</f7-card-header>
      <f7-card-content>
        <f7-row no-gap>
          <f7-col class="text-align-center">
            <f7-label class="counter-label">Akt. Sorte</f7-label>
            <span class="counter-result">3305</span>
          </f7-col>
          <f7-col class="text-align-center">
            <f7-label class="counter-label">Stückzahl</f7-label>
            <span class="counter-result">3</span>
          </f7-col>
        </f7-row>
        <f7-row no-gap style="margin-top: 10px;">
          <f7-col class="text-align-center">
            <f7-label class="counter-label">Nächte Sorte</f7-label>
            <span class="counter-result">3271</span>
          </f7-col>
          <f7-col class="text-align-center">
            <f7-label class="counter-label">Stückzahl</f7-label>
            <span class="counter-result">24</span>
          </f7-col>
        </f7-row>
      </f7-card-content>
    </f7-card>
    <f7-list>
      <f7-list-item link="/tact/" title="Takt">
        <div slot="after"><f7-icon f7="bolt_fill" class="color-red"></f7-icon></div>
      </f7-list-item>
      <f7-list-item link="/lineImage/" title="Obraz linii">
      </f7-list-item>
      <f7-list-item link="/readingFromCamera/" title="Odczyt z kamery">
      </f7-list-item>
      <f7-list-item link="/stationExclude/" title="Wykluczenia stacji">
        <div slot="after"><f7-icon f7="bolt_fill" class="color-yellow"></f7-icon></div>
      </f7-list-item>
      <f7-list-item link="/pcb/" title="PCB">
      </f7-list-item>
      <f7-list-item link="/employeesMesseges/" title="Komunikaty od pracowników">
      </f7-list-item>
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
<style>
.counter-label {
  margin-bottom: 3px;
}
.counter-result {
  color: green;
  font-size: 17px;
}
</style>

