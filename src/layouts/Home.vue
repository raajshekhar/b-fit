<template>
  <div id="fh5co-wrapper ">
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
      <div class="fh5co-hero">
        <div class="fh5co-overlay"></div>
        <div class="fh5co-cover" data-stellar-background-ratio="0.5" style="background-image: url(./assets/mec2.jpg);">
          <div class="desc animate-box">
            <div class="container">
              <div class="row">
                <div class="col-md-7">
                  <h2>Préparez vous pour le meilleur entraînement<br>de<b> Votre vie !</b></h2>
                  <p><span>Le suivi sportif <i class="icon-heart3"></i> sur le bout de vos doigts</span></p>
                  <span><router-link :to="{ name: 'dashboard' }" class="btn btn-primary">Commencez votre aventure</router-link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end:fh5co-hero -->
      <div id="fh5co-schedule-section" class="fh5co-lightgray-section">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div class="heading-section text-center animate-box">
                <h2>Organisez vos sessions</h2>
                <p>Décidez de ce que vous allez faire et suivez votre progression très précisement.</p>
              </div>
            </div>
          </div>
          <div class="row animate-box">
            <div class="col-md-10 col-md-offset-1 text-center">
              <ul class="schedule">
                <li><a href="#" class="active" data-sched="sunday">Dimanche</a></li>
                <li><a href="#" data-sched="monday">Lundi</a></li>
                <li><a href="#" data-sched="tuesday">Mardi</a></li>
                <li><a href="#" data-sched="wednesday">Mercredi</a></li>
                <li><a href="#" data-sched="thursday">Jeudi</a></li>
                <li><a href="#" data-sched="wednesday">Vendredi</a></li>
                <li><a href="#" data-sched="saturday">Samedi</a></li>
              </ul>
            </div>
            <div class="col-md-12 row text-center">

              <div class="col-md-12 schedule-container">

                <div class="schedule-content active" data-day="sunday">
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="abdo">
                      <small>17h-19h</small>
                      <h3>Abdominaux</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Biceps et triceps</h3>
                      <span>Thomas Ehya</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>16h-19h</small>
                      <h3>Dos et épaule</h3>
                      <span>Bénédict Bianchini</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>09h-10h</small>
                      <h3>Jambes</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                </div>
                <!-- END sched-content -->

                <div class="schedule-content" data-day="monday">
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>8h-11h</small>
                      <h3>Pectorauts triceps</h3>
                      <span>Thomas Ehya</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Trapèzes et biceps </h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>10h-12h</small>
                      <h3>Fessier</h3>
                      <span>Benedict Bianchini</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Quadriceps et ischio-jambier</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>

                </div>
                <!-- END sched-content -->

                <div class="schedule-content" data-day="tuesday">
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Full-body</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Half-body</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Repos</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Cuisse-fessier</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                </div>
                <!-- END sched-content -->

                <div class="schedule-content" data-day="wednesday">
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Endurence</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Abdominaux</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Split</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Epaule</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                </div>
                <!-- END sched-content -->

                <div class="schedule-content" data-day="thursday">
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Bras / Sprint</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Jambes et Abdos</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Repos</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Biceps/Triceps </h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                </div>
                <!-- END sched-content -->

                <div class="schedule-content" data-day="friday">
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Epaule et Jambes</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Musculation</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Abdominaux</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Jambes</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                </div>
                <!-- END sched-content -->

                <div class="schedule-content" data-day="saturday">
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Full-body</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Sprint</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Half-body</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Musculation">
                      <small>17h-19h</small>
                      <h3>Pectoraux</h3>
                      <span>Rémy Jérôme</span>
                    </div>
                  </div>
                </div>
                <!-- END sched-content -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fh5co-parallax" style="background-image: url(./assets/girl1.jpg );" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center fh5co-table">
              <div class="fh5co-intro fh5co-table-cell animate-box">
                <h1 class="text-center">Lancez-vous. Be Fit !</h1>
              </div>
            </div>
          </div>
        </div>
      </div><!-- end: fh5co-parallax -->
      <div id="fh5co-programs-section">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div class="heading-section text-center animate-box">
                <h2>Nos futurs ajouts</h2>
                <p>Le programme que vous voulez suivre, le suivi que <b>vous méritez</b>.</p>
              </div>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-4 col-sm-6">
              <div class="program animate-box">
                <img src="../fitness/images/fit-dumbell.svg" alt="Cycling">
                <h3>Combat</h3>
                <p>Discipline intensive qui s'inspire de mouvements d'arts martiaux de haut niveau comme le karaté, la boxe et le taekwendo.</p>
                <span><a href="#" class="btn btn-default">Découvrir B-fit</a></span>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="program animate-box">
                <img src="../fitness/images/fit-yoga.svg" alt="">
                <h3>Yoga</h3>
                <p>Raffermir votre silhouette, gagner en souplesse et lâcher-prise, le yoga est parfait pour maintenir une pratique physique régulière.</p>
                <span><a href="#" class="btn btn-default">Découvrir B-fit</a></span>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="program animate-box">
                <img src="../fitness/images/fit-cycling.svg" alt="">
                <h3>Cyclisme</h3>
                <p>Si vous voulez améliorer votre endurance et vous défouler, programmez votre prochaine séance de Cycling dès maintenant.</p>
                <span><a href="#" class="btn btn-default">Découvrir B-fit</a></span>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="program animate-box">
                <img src="../fitness/images/fit-boxing.svg" alt="Cycling">
                <h3>Boxe</h3>
                <p>Activité de remise en forme qui combine training et apprentissage de mouvements de self-défense. Une alliance parfaite !</p>
                <span><a href="#" class="btn btn-default">Découvrir B-fit</a></span>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="program animate-box">
                <img src="../fitness/images/fit-swimming.svg" alt="">
                <h3>Natation</h3>
                <p>Sport complet qui sollicite l'ensemble des muscles du corps, qui développe l'endurance, le souffle et qui apaise.</p>
                <span><a href="#" class="btn btn-default">Découvrir B-fit</a></span>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="program animate-box">
                <img src="../fitness/images/fit-massage.svg" alt="">
                <h3>Massage</h3>
                <p>Programmez votre prochaine séance de massage ou votre rendez-vous chez le kinésithérapeute ? Avec B-fit, c'est possible.</p>
                <span><a href="#" class="btn btn-default">Découvrir B-fitw</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="fh5co-team-section" class="fh5co-lightgray-section">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div class="heading-section text-center animate-box">
                <h2>Notre équipe</h2>
                <p>B-fit a été conçu par des sportifs, pour des sportifs.</p>
              </div>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-4 col-sm-6">
              <div class="team-section-grid animate-box" style="background-image: url(../fitness/images/trainer-1.jpg);">
                <div class="overlay-section">
                  <div class="desc">
                    <h3>Benedict Bianchini</h3>
                    <span>Chef de projets et Commerciale</span>
                    <p></p>
                    <p class="fh5co-social-icons">
                      <a href="#"><i class="icon-twitter-with-circle"></i></a>
                      <a href="#"><i class="icon-facebook-with-circle"></i></a>
                      <a href="#"><i class="icon-instagram-with-circle"></i></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="team-section-grid animate-box" style="background-image: url(../fitness/images/trainer-2.jpg);">
                <div class="overlay-section">
                  <div class="desc">
                    <h3>Thomas Ehya</h3>
                    <span>Développeur Front-end et Graphiste</span>
                    <p></p>
                    <p class="fh5co-social-icons">
                      <a href="#"><i class="icon-twitter-with-circle"></i></a>
                      <a href="#"><i class="icon-facebook-with-circle"></i></a>
                      <a href="#"><i class="icon-instagram-with-circle"></i></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="team-section-grid animate-box" style="background-image: url(../fitness/images/trainer-3.jpg);">
                <div class="overlay-section">
                  <div class="desc">
                    <h3>Rémy Jérôme</h3>
                    <span>Développeur Back-end</span>
                    <p></p>
                    <p class="fh5co-social-icons">
                      <a href="#"><i class="icon-twitter-with-circle"></i></a>
                      <a href="#"><i class="icon-facebook-with-circle"></i></a>
                      <a href="#"><i class="icon-instagram-with-circle"></i></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="team-section-grid animate-box" style="background-image: url(../fitness/images/trainer-4.jpg);">
                <div class="overlay-section">
                  <div class="desc">
                    <h3>Élodie Ribeiro</h3>
                    <span>Intégratrice et Graphiste</span>
                    <p></p>
                    <p class="fh5co-social-icons">
                      <a href="#"><i class="icon-twitter-with-circle"></i></a>
                      <a href="#"><i class="icon-facebook-with-circle"></i></a>
                      <a href="#"><i class="icon-instagram-with-circle"></i></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="team-section-grid animate-box" style="background-image: url(../fitness/images/trainer-5.jpg);">
                <div class="overlay-section">
                  <div class="desc">
                    <h3>Claire Venditelli</h3>
                    <span>Responsable Communication et Marketing</span>
                    <p></p>
                    <p class="fh5co-social-icons">
                      <a href="#"><i class="icon-twitter-with-circle"></i></a>
                      <a href="#"><i class="icon-facebook-with-circle"></i></a>
                      <a href="#"><i class="icon-instagram-with-circle"></i></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="team-section-grid animate-box" style="background-image: url(../fitness/images/trainer-6.jpg);">
                <div class="overlay-section">
                  <div class="desc">
                    <h3>B-fit User</h3>
                    <span>L'équipe et vous</span>
                    <p style="font-size:12px">En tant qu'utilisateur B-fit, vous faites parti de notre team : vous avez des suggestions, des envies ? Contactez-nous</p>
                    <p class="fh5co-social-icons">
                      <a href="#"><i class="icon-twitter-with-circle"></i></a>
                      <a href="#"><i class="icon-facebook-with-circle"></i></a>
                      <a href="#"><i class="icon-instagram-with-circle"></i></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fh5co-parallax" style="background-image: url(../fitness/images/home-image-2.jpg);" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 fh5co-table">
              <div class="fh5co-intro fh5co-table-cell box-area">
                <div class="animate-box">
                  <h1>Des offres exclusives pour les abonnés </h1>
                  <p>Plus de contenu pour rester boosté !</p>
                  <a href="#" class="btn btn-primary">Devenir membre</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!-- end: fh5co-parallax -->
      <div id="fh5co-pricing-section" class="fh5co-pricing fh5co-lightgray-section">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div class="heading-section text-center animate-box">
                <h2>Tarif</h2>
                <p>Un accès privilégié à notre communauté partout dans le monde</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="pricing">
              <div class="col-md-3 animate-box">
              </div>

              <div class="col-md-3 animate-box">
                <div class="price-box animate-box">
                  <h2 class="pricing-plan">Gratuit</h2>
                  <div class="price"><sup class="currency">€</sup>0<small>/mois</small></div>
                  <p>Accès à la fonction de prise de note et suivi de B-Fit</p>
                  <ul class="classes">
                    <li>Prise de notes illimitée</li>
                    <li class="color">Création illimitée de programme</li>
                    <li>Suivi des exercices par muscle</li>
                    <li class="color">Notifications</li>
                  </ul>
                  <a href="#" class="btn btn-default">S'inscrire</a>
                </div>
              </div>

              <div class="col-md-3 animate-box">
                <div class="price-box animate-box popular">
                  <h2 class="pricing-plan pricing-plan-offer">Pro <span>Recommandé</span></h2>
                  <div class="price"><sup class="currency">€</sup>9,99<small>/mois</small></div>
                  <p>Accédez à la base de données et aux conseils de nos professionnels</p>
                  <p style="font-size: 12px;"> <em>Tous les avantages de Gratuit +</em></p>
                  <ul class="classes">
                    <li>Accès aux articles</li>
                    <li class="color">Suivi personnalisé de la progression </li>
                    <li>Partage d'excercice et de conseils</li>
                    <li class="color">Planning d'excercices</li>
                    <li>Ciblage de muscle</li>
                  </ul>
                  <a href="#" class="btn btn-select-plan btn-sm">Choisir ce plan</a>
                </div>
              </div>

              <div class="col-md-3 animate-box">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fh5co-blog-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="col-md-12">
                <div class="heading-section animate-box">
                  <h2>Articles du Blog</h2>
                </div>
              </div>
              <div class="col-md-12 col-md-offset-0">
                <div class="fh5co-blog animate-box">
                  <div class="inner-post">
                    <a href="#"><img class="img-responsive" src="../fitness/images/blog-1.jpg" alt=""></a>
                  </div>
                  <div class="desc">
              <!--     <h3><a href="#">Définir ses objectifs sportifs avec B-fit</a></h3> -->
                    <span class="posted_by">Posted by: Claire</span>
                    <!--   <span class="comment"><a href="">21<i class="icon-bubble22"></i></a></span> -->
                     <p>Avec B-fit, programmez vos séances d'entraînement, fixez vos...</p>
                     <a href="#" class="btn btn-default">Lire la suite</a>
                   </div>
                 </div>
               </div>
               <div class="col-md-12 col-md-offset-0">
                 <div class="fh5co-blog animate-box">
                   <div class="inner-post">
                     <a href="#"><img class="img-responsive" src="../fitness/images/blog-1.jpg" alt=""></a>
                   </div>
                   <div class="desc">
                     <h3><a href="#">Présentation de l'application B-fit</a></h3>
                     <span class="posted_by">Posted by: Claire</span>
                     <!-- <span class="comment"><a href="">21<i class="icon-bubble22"></i></a></span> -->
                   <p>B-fit est une application de suivi de vos performances sportives...</p>
                   <a href="#" class="btn btn-default">Lire la suite</a>
                 </div>
               </div>
             </div>
           </div>
           <div class="col-md-6">
             <div class="col-md-12">
               <div class="heading-section animate-box">
                <!-- <h2>Évènements à venir</h2> -->
               </div>
             </div>
             <div class="col-md-12 col-md-offset-0">
               <div class="fh5co-blog animate-box">
                 <div class="inner-post">
                   <a href="#"><img class="img-responsive" src="../fitness/images/blog-1.jpg" alt=""></a>
                 </div>
                 <div class="desc">
                   <!--     <h3><a href="#">Définir ses objectifs sportifs avec B-fit</a></h3> -->
                   <span class="posted_by">Posted by: Claire</span>
                   <!--   <span class="comment"><a href="">21<i class="icon-bubble22"></i></a></span> -->
                   <p>Avec B-fit, programmez vos séances d'entraînement, fixez vos...</p>
                   <a href="#" class="btn btn-default">Lire la suite</a>
                 </div>
               </div>
             </div>
             <div class="col-md-12 col-md-offset-0">
               <div class="fh5co-blog animate-box">
                 <div class="inner-post">
                   <a href="#"><img class="img-responsive" src="../fitness/images/blog-1.jpg" alt=""></a>
                 </div>
                 <div class="desc">
                   <!--     <h3><a href="#">Définir ses objectifs sportifs avec B-fit</a></h3> -->
                   <span class="posted_by">Posted by: Claire</span>
                   <!--   <span class="comment"><a href="">21<i class="icon-bubble22"></i></a></span> -->
                   <p>Avec B-fit, programmez vos séances d'entraînement, fixez vos...</p>
                   <a href="#" class="btn btn-default">Lire la suite</a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <!-- fh5co-blog-section -->
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
  <!-- END fh5co-wrapper -->
</template>

<script>
import '../fitness/js/jquery.min.js'
import 'jquery'
import 'bootstrap'
import bootstrap from 'bootstrap/dist/css/bootstrap2.css'
export default {
  name: 'LayoutHome',
  data () {
    return {
      loading: false
    }
  },
  mounted: function () {
    this.$store.dispatch('getAllPost')
    console.log(this.getAllPost)
    this.loading = true
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
