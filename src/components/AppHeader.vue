<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="navbar">

       <b-navbar-nav>
          <b-nav-item @click="goToHome">
              <i class="material-icons">
                keyboard_arrow_left
                </i>
          </b-nav-item>
        
        </b-navbar-nav>
      <b-navbar-brand class="btn btn-link" @click="goToHome"> Back to school </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav >
          
          
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content" >
                <em>
                  <i class="material-icons">
                  account_circle
                  </i>
                </em>
            </template>
            <b-dropdown-item href="#/">Salir</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "app-header",
  data: function() {
    return {
      curBank: {},
      uploading: false,
      change: {
        password: "",
        verifyPassword: "",
        newPassword: "",
      }
    };
  },
  methods: {
    logout: function() {
      this.$router.replace("/");
    },

    changePass() {



      if (!this.change.password) {
        return this.$notify.error("Contraseña obligatoria");
      }

      if (!this.change.newPassword) {
        return this.$notify.error("Nueva contraseña obligatoria");
      }

      if (!this.change.verifyPassword) {
        return this.$notify.error("Verificar contraseña obligatoria");
      }



      this.$store.dispatch(CHANGE_PASSWORD, this.change)
      .then(result => {
        this.change = {};
        this.$refs.changePassword.hide();
        this.$snotify.success(result.message);
      })
      .catch(error => {
          this.$snotify.error(error.message);
      });
    },
    goToHome() {
      if (this.user && this.user.token) {
        return this.$router.replace({ name: "dashboard" });
      }

      this.$router.replace({ name: "login" });
    }

  },
  mounted() {
  },

  computed: {
    ...mapGetters(["user"])
  }
};
</script>


<style lang="scss">
.navbar{
  background:#1CB0F6;

  .material-icons{

    font-weight: bold;
    font-size: 50px;
    

  }

}

  .btn-play{
    background:#8EE000;
    color: white;
    margin-top: 10px;
    margin-right: 10px;
    border-radius:300px !important;
    font-weight: bold;


  }

</style>
