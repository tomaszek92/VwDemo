<template>
  <f7-page>
    <f7-navbar back-link="Ekran główny">
      <f7-nav-title>PCB</f7-nav-title>
      <f7-nav-right><span class="login">{{ username }}</span></f7-nav-right>
    </f7-navbar>
    <f7-list contacts-list id="stations-list">
      <template v-for="group in grouppedStations">
        <f7-list-group v-bind:key="group.title">
          <f7-list-item v-bind:title="group.title" group-title></f7-list-item>
          <template v-for="station in group.stations">
            <f7-list-item v-bind:link="link(station.id)" v-bind:title="station.name" v-bind:key="station.id"></f7-list-item>
          </template>
        </f7-list-group>
      </template>
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      grouppedStations: []
    }
  },
  methods: {
    link(id) {
      return `/station/${id}`;
    }
  },
  mounted() {
    this.username = this.$f7.data.user;
    let stations = [];
    for (let i = 900; i < 1000; i = i + 10) {
      stations.push({ name: `AF ${i}`, id: `af${i}` });
    }
    this.grouppedStations.push({
       title: 'AF 900',
       stations
    });

    stations = [];
    for (let i = 1000; i <= 1100; i = i + 100) {
      stations.push({ name: `AF ${i}`, id: `af${i}` });
    }
    this.grouppedStations.push({
       title: 'AF 1000',
       stations
    });
  }
}
</script>
<style>
.contacts-list {
  margin: 35px 0 !important;
}
.contacts-list .list-group-title {
  padding: 10px 15px !important;
  height: auto !important;
}
</style>

