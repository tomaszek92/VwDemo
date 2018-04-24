<template>
  <f7-page>
     <f7-navbar back-link="Ekran główny">
      <f7-nav-title>Komunikaty od pracowników</f7-nav-title>
      <f7-nav-right><span class="login">{{ username }}</span></f7-nav-right>
    </f7-navbar>
    <f7-list media-list>
      <template v-for="message in employeesMesseges">
        <f7-list-item v-bind:key="message.id"
                      v-bind:title="message.title"
                      v-bind:subtitle="message.content"
                      v-bind:text="message.dateTime"
                      swipeout
                      @swipeout:deleted="onSwipeoutDeleted(message.id)">
          <f7-swipeout-actions>
            <f7-swipeout-button delete>Usuń</f7-swipeout-button>
          </f7-swipeout-actions>
        </f7-list-item>
      </template>
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      employeesMesseges: []
    }
  },
  methods: {
    onSwipeoutDeleted(id) {
      this.employeesMesseges = this.employeesMesseges.filter(msg => msg.id !== id);
      this.$f7.data.employeesMesseges = this.employeesMesseges;
    }
  },
  mounted() {
    this.username = this.$f7.data.user;
    this.employeesMesseges = this.$f7.data.employeesMesseges;
  }
}
</script>
