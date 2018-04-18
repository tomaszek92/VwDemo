<template>
  <f7-page>
    <f7-navbar back-link="Ekran główny">
      <f7-nav-title>Takt</f7-nav-title>
      <f7-nav-right><span class="login">{{ username }}</span></f7-nav-right>
    </f7-navbar>
    <f7-list>
      <template v-for="item in items">
        <f7-list-item v-bind:link="link(item.id)" v-bind:title="item.name" v-bind:key="item.id"></f7-list-item>
      </template>
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      items: [
        { name: 'AF 900', id: 'af900' },
        { name: 'AF 960', id: 'af960' }
      ]
    }
  },
  methods: {
    link(id) {
      return `/tact/${id}`;
    }
  },
  mounted() {
    this.username = this.$f7.data.user;
  }
}
</script>
