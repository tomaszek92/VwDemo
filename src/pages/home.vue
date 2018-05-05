<template>
  <f7-page @page:beforein="beforein">
    <f7-navbar back-link="Logowanie">
      <f7-nav-title>ZP4</f7-nav-title>
      <f7-nav-right><span class="login">{{ username }}</span></f7-nav-right>
    </f7-navbar>
    <f7-card @click.native="loginToProductionPlanEditing" id="production-plan">
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
        <div v-if="employeesMesseges && employeesMesseges.length > 0" slot="after"><f7-badge color="blue">{{ employeesMesseges.length }}</f7-badge></div>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import employeesMesseges from '../employeesMesseges';

export default {
  data() {
    return {
      username: '',
      employeesMesseges: []
    }
  },
  methods: {
    beforein() {
      if (!this.$f7.data.employeesMesseges) {
        this.$f7.data.employeesMesseges = employeesMesseges;
      }
      this.employeesMesseges = this.$f7.data.employeesMesseges;
    },
    loginToProductionPlanEditing() {
      this.$f7.dialog.login(
        'Podaj nr personalny oraz hasło',
        'Logowanie do edycji planu produkcji',
        (username, password) => {
          if (username === '123' && password === 'test') {
            this.$f7Router.navigate("/productionPlanEditing/");
          }
          else {
            this.$f7.notification
              .create({
                icon: '<i class="icon f7-icons color-red">lock</i>',
                title: 'Błędny nr personalny lub hasło',
                closeTimeout: 1000 * 5,
                closeButton: true
              })
              .open();
          }
      });
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

