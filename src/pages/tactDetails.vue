<template>
  <f7-page>
    <f7-navbar back-link="Takt">
      <f7-nav-title>{{ pageTitle }}</f7-nav-title>
      <f7-nav-right><span class="login">{{ username }}</span></f7-nav-right>
    </f7-navbar>
    <f7-row no-gap class="average-results">
      <f7-col>
        <f7-card>
          <f7-card-header class="display-flex justify-content-center">Ø 10 motorów</f7-card-header>
          <f7-card-content class="text-align-center">
            <span class="average-result average-result-bad">28.1s</span>
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col>
        <f7-card>
          <f7-card-header class="display-flex justify-content-center">Ø 20 motorów</f7-card-header>
          <f7-card-content class="text-align-center">
            <span class="average-result average-result-medium">27.7s</span>
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col>
        <f7-card>
          <f7-card-header class="display-flex justify-content-center">Ø 50 motorów</f7-card-header>
          <f7-card-content class="text-align-center">
            <span class="average-result average-result-ok">24.7s</span>
          </f7-card-content>
        </f7-card>
      </f7-col>
    </f7-row>
    <f7-card>
      <f7-card-header class="display-flex justify-content-center"><span>ZP4 Montage Taktzeiten <small>(Aktueller Stand)</small></span></f7-card-header>
      <f7-card-content>
        <img src="static/images/tact_chart.PNG" style="width: 100%;"/>
      </f7-card-content>
    </f7-card>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      pageTitle: ''
    };
  },
  mounted() {
    this.username = this.$f7.data.user;
    this.pageTitle = transformIdToPageTitle(this.$f7route.params['id']);
  }
};

function transformIdToPageTitle(id) {
  const pageTitle = `${id.substring(0, 2)} ${id.substring(2)}`;
  return pageTitle.toUpperCase();
}
</script>
<style>
.average-results .card-header {
  font-size: 12px !important;
  padding: 5px;
}

.average-result {
  font-size: 22px !important;
}

.average-result.average-result-bad {
  color: red;
}

.average-result.average-result-medium {
  color: orange;
}

.average-result.average-result-ok {
  color: green;
}
</style>
