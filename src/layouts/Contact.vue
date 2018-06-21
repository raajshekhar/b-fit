<template>
  <div id="fh5co-wrapper">
    <div id="fh5co-page">
      <div id="fh5co-header">
        <header id="fh5co-header-section">
          <div class="container">
            <div class="nav-header">
              <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
              <h1 id="fh5co-logo"><router-link :to="{ name: 'home' }">B-<span>FIT</span></router-link></h1>
              <!-- START #fh5co-menu-wrap -->
              <nav id="fh5co-menu-wrap" role="navigation">
                <ul class="sf-menu" id="fh5co-primary-menu">
                  <li class="active">
                    <router-link :to="{ name: 'home' }">Accueil</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'dashboard' }">Mon suivi</router-link>
                    <ul class="fh5co-sub-menu">
                      <li><router-link :to="{ name: 'dashboard' }">Tableau de bord</router-link></li>
                      <li><router-link :to="{ name: 'planning' }">Planning</router-link></li>
                      <li>
                        <router-link :to="{ name: 'performance' }" class="fh5co-sub-ddown">Performance</router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link :to="{ name: 'hot' }">Actualité</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'about' }">A propos</router-link>
                  </li>
                  <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
                  <li v-if="!userIsAuthenticated"><router-link @click="navigate" :to="{ name: 'signup' }">Sign Up</router-link></li>
                  <li v-if="!userIsAuthenticated"><router-link @click="navigate" :to="{ name: 'signin' }">Sign In</router-link></li>
                  <li v-if="userIsAuthenticated"><router-link @click="navigate" :to="{ name: 'profile' }">{{ user.name }}</router-link></li>
                  <li v-if="userIsAuthenticated"><a href="#" @click="onLogout">Logout</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <!-- end:fh5co-header -->
      <div class="fh5co-parallax" style="background-image: url(images/home-image-3.jpg);" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center fh5co-table">
              <div class="fh5co-intro fh5co-table-cell animate-box">
                <h1 class="text-center">Contactez-nous</h1>
                <p>Notre communauté, notre fierté !</p>
              </div>
            </div>
          </div>
        </div>
      </div><!-- end: fh5co-parallax -->
      <!-- end:fh5co-hero -->
      <div id="fh5co-contact">
        <div class="container">
          <form action="#">
            <div class="row">
              <div class="col-md-6 animate-box">
                <h3 class="section-title">Informations pratiques</h3>
                <p>B-fit est l'application de suivi de performances sportives qui révolutionne vos entraînements. À l'origine du projet : BERRIES, une start-up créée en 2018 spécialisée dans le développement d'applications web et mobiles.</p>
                <ul class="contact-info">
                  <li><i class="icon-location-pin"></i>Lyon</li>
                  <li><i class="icon-phone2"></i>04 12 34 56 78</li>
                  <li><i class="icon-mail"></i><a href="mailto:" title="contact@b-fit.com" target="_blank">contact@b-fit.com</a></li>
                  <li><i class="icon-globe2"></i><a href="#">www.b-fit.com</a></li>
                </ul>
              </div>
              <div class="col-md-6 animate-box">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Nom">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Email">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea name="" class="form-control" id="" cols="30" rows="7" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input type="submit" value="Soumettre" class="btn btn-primary">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer>
        <div id="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-4 animate-box">
                <h3 class="section-title">À propos</h3>
                <p>B-fit est l'application de suivi de performances sportives qui révolutionne vos entraînements.
                  À l'origine du projet : BERRIES, une start-up créée en 2018 spécialisée dans le développement d'applications web et mobiles.</p>
              </div>

              <div class="col-md-4 animate-box">
                <h3 class="section-title">Informations pratiques</h3>
                <ul class="contact-info">
                  <li><i class="icon-map-marker"></i>Lyon</li>
                  <li><i class="icon-phone"></i>04 12 34 56 78</li>
                  <li><i class="icon-envelope"></i><a href="mailto:" title="contact@b-fit.com" target="_blank">contact@b-fit.com</a></li>
                  <li><i class="icon-globe2"></i><a href="#">www.b-fit.com</a></li>
                </ul>
              </div>
              <div class="col-md-4 animate-box">
                <h3 class="section-title">Contact</h3>
                <form class="contact-form">
                  <div class="form-group">
                    <label for="name" class="sr-only">Nom</label>
                    <input type="name" class="form-control" id="name" placeholder="Nom">
                  </div>
                  <div class="form-group">
                    <label for="email" class="sr-only">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email">
                  </div>
                  <div class="form-group">
                    <label for="message" class="sr-only">Message</label>
                    <textarea class="form-control" id="message" rows="7" placeholder="Message"></textarea>
                  </div>
                  <div class="form-group">
                    <input type="submit" id="btn-submit" class="btn btn-send-message btn-md" value="Soumettre">
                  </div>
                </form>
              </div>
            </div>
            <div class="row copy-right">
              <div class="col-md-6 col-md-offset-3 text-center">
                <p class="fh5co-social-icons">
                  <a href="#"><i class="icon-twitter2"></i></a>
                  <a href="#"><i class="icon-facebook2"></i></a>
                  <a href="#"><i class="icon-instagram"></i></a>
                  <a href="#"><i class="icon-dribbble2"></i></a>
                  <a href="#"><i class="icon-youtube"></i></a>
                </p>
                <p>Copyright 2016 Free Html5 <a href="#">Fitness</a>. All Rights Reserved. <br>Made with <i class="icon-heart3"></i> by <a href="http://freehtml5.co/" target="_blank">Freehtml5.co</a> / Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <!-- END fh5co-page -->

  </div>
</template>

<script>
import '../fitness/js/jquery.min.js'
import 'jquery'
import 'bootstrap'
import bootstrap from 'bootstrap/dist/css/bootstrap2.css'
export default {
  name: 'LayoutAbout',
  data () {
    return {
      loading: false
    }
  },
  created () {
    // modernizer
    let modernizer = document.createElement('script')
    modernizer.setAttribute('src', 'fitness/js/modernizr-2.6.2.min.js')
    document.head.appendChild(modernizer)

    let easing = document.createElement('script')
    easing.setAttribute('src', 'fitness/js/jquery.easing.1.3.js')
    document.head.appendChild(easing)
    // bootstrap
    // let bootstrap = document.createElement('script')
    // bootstrap.setAttribute('src', 'fitness/js/bootstrap.min.js')
    // document.head.appendChild(bootstrap)
    // waypoints
    let waypoints = document.createElement('script')
    waypoints.setAttribute('src', 'fitness/js/jquery.waypoints.min.js')
    document.head.appendChild(waypoints)
    // stellar
    let stellar = document.createElement('script')
    stellar.setAttribute('src', 'fitness/js/jquery.stellar.min.js')
    document.head.appendChild(stellar)
    // hoverIntent
    let hoverIntent = document.createElement('script')
    hoverIntent.setAttribute('src', 'fitness/js/hoverIntent.js')
    document.head.appendChild(hoverIntent)
    // superfish
    let superfish = document.createElement('script')
    superfish.setAttribute('src', 'fitness/js/superfish.js')
    document.head.appendChild(superfish)
    // main
    let main = document.createElement('script')
    main.setAttribute('src', 'fitness/js/main.js')
    document.head.appendChild(main)
  },
  computed: {
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    user () {
      return this.$store.getters.user
    },
    getLastPost: function () {
      return this.$store.getters.post
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
    navigate () {
      bootstrap.unuse()
    }
  }
}
</script>

<style scoped>
  @import '../fitness/css/animate.css';
  @import '../fitness/css/icomoon.css';
  @import '../fitness/css/superfish.css';
  @import '../fitness/css/style.css';
</style>
