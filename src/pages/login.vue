<template>
    <f7-page login-screen @page:beforein="beforein">
      <f7-navbar title="Logowanie"></f7-navbar>
      <f7-list form>
        <f7-list-item>
          <f7-label>Nr personalny</f7-label>
          <f7-input :value="loginCredentials.username"
                    @input="loginCredentials.username = $event.target.value"
                    name="username"
                    placeholder="Nr personalny"
                    type="text"
                    required validate
                    clear-button></f7-input>
        </f7-list-item>
        <f7-list-item>
          <f7-label>Hasło</f7-label>
          <f7-input :value="loginCredentials.password"
                    @input="loginCredentials.password = $event.target.value"
                    name="password"
                    type="password"
                    placeholder="Hasło"
                    required validate
                    clear-button></f7-input>
        </f7-list-item>
      </f7-list>
      <transition name="bounce">
      <f7-list v-show="wrongCredentials">
        <f7-list-item>
          <f7-block inset class="block-error text-center">
            <p><f7-icon f7="lock"></f7-icon> Błędny nr personalny lub hasło</p>
          </f7-block>
        </f7-list-item>
      </f7-list>
      </transition>
      <f7-list>
        <f7-list-button title="Zaloguj" @click="login()"></f7-list-button>
      </f7-list>
    </f7-page>
</template>

<script>
export default {
  data() {
    return {
      loginCredentials: {
        username: "",
        password: ""
      },
      wrongCredentials: false
    };
  },

  methods: {
    beforein() {
      this.loginCredentials.username = '';
      this.loginCredentials.password = '';
    },
    login() {
      const preloader = this.$f7.dialog.preloader('Logowanie');
      setTimeout(() => {
        preloader.close();
        if (
          this.loginCredentials.username === "123" &&
          this.loginCredentials.password === "test"
        ) {
          this.$f7.data.user = 'Jan Kowalski';
          this.wrongCredentials = false;
          this.$f7Router.navigate("/home/");
        }
        else {
          this.wrongCredentials = true;
        }
      }, 1000);
    }
  }
};
</script>
