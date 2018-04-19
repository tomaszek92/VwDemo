<template>
  <f7-page>
    <f7-navbar back-link="PCB">
      <f7-nav-title>{{ pageTitle }}</f7-nav-title>
      <f7-nav-right><span class="login">{{ username }}</span></f7-nav-right>
    </f7-navbar>
    Station Details
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
