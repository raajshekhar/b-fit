<template>
  <div id="fh5co-wrapper">
    <div id="fh5co-page">
      <div id="fh5co-header">
        <header id="fh5co-header-section">
          <div class="container">
            <div class="nav-header">
              <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
              <h1 id="fh5co-logo"><a to="/" href="#">B-<span>FIT</span></a></h1>
              <!-- START #fh5co-menu-wrap -->
              <nav id="fh5co-menu-wrap" role="navigation">
                <ul class="sf-menu" id="fh5co-primary-menu">
                  <li class="active">
                    <a to="/" href="#">Accueil</a>
                  </li>
                  <li>
                    <a  href="/suivi" class="fh5co-sub-ddown">Mon suivi</a>
                    <ul class="fh5co-sub-menu">
                      <li><a href="/suivi/dashboard">Tableau de bord</a></li>
                      <li><a href="/suivi/planning">Planning</a></li>
                      <li>
                        <a href="/suivi/performance" class="fh5co-sub-ddown">Performance</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Actualité</a>
                  </li>
                  <li><a href="#">À propos</a></li>
                  <li><a href="#">Contact</a></li>
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
                  <span><a class="btn btn-primary" href="/suivi">Commencez votre aventure</a></span>
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
                <h2>Organiser vos sessions</h2>
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
                      <img src="../fitness/images/fit-dumbell.svg" alt="Cycling">
                      <small>06AM-7AM</small>
                      <h3>Renforcement</h3>
                      <span>John Doe</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-yoga.svg" alt="">
                      <small>06AM-7AM</small>
                      <h3>Yoga</h3>
                      <span>James Rémy</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-cycling.svg" alt="">
                      <small>06AM-7AM</small>
                      <h3>Cyclisme</h3>
                      <span>Rita Doe</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-boxing.svg" alt="Cycling">
                      <small>06AM-7AM</small>
                      <h3>Boxing</h3>
                      <span>John Dose</span>
                    </div>
                  </div>
                </div>
                <!-- END sched-content -->

                <div class="schedule-content" data-day="monday">
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-yoga.svg" alt="">
                      <small>06AM-7AM</small>
                      <h3>Yoga</h3>
                      <span>James Smith</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Cycling">
                      <small>06AM-7AM</small>
                      <h3>Body Building</h3>
                      <span>John Doe</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-boxing.svg" alt="Cycling">
                      <small>06AM-7AM</small>
                      <h3>Boxing</h3>
                      <span>John Dose</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-cycling.svg" alt="">
                      <small>06AM-7AM</small>
                      <h3>Cyclisme</h3>
                      <span>Rita Doe</span>
                    </div>
                  </div>

                </div>
                <!-- END sched-content -->

                <div class="schedule-content" data-day="tuesday">
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Cycling">
                      <small>06AM-7AM</small>
                      <h3>Body Building</h3>
                      <span>John Doe</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-yoga.svg" alt="">
                      <small>06AM-7AM</small>
                      <h3>Yoga</h3>
                      <span>James Smith</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-cycling.svg" alt="">
                      <small>06AM-7AM</small>
                      <h3>Cycling Program</h3>
                      <span>Rita Doe</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-boxing.svg" alt="Cycling">
                      <small>06AM-7AM</small>
                      <h3>Boxing Fitness</h3>
                      <span>John Dose</span>
                    </div>
                  </div>
                </div>
                <!-- END sched-content -->

                <div class="schedule-content" data-day="wednesday">
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-yoga.svg" alt="">
                      <small>06AM-7AM</small>
                      <h3>Yoga Programs</h3>
                      <span>James Smith</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Cycling">
                      <small>06AM-7AM</small>
                      <h3>Body Building</h3>
                      <span>John Doe</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-boxing.svg" alt="Cycling">
                      <small>06AM-7AM</small>
                      <h3>Boxing Fitness</h3>
                      <span>John Dose</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-cycling.svg" alt="">
                      <small>06AM-7AM</small>
                      <h3>Cycling Program</h3>
                      <span>Rita Doe</span>
                    </div>
                  </div>
                </div>
                <!-- END sched-content -->

                <div class="schedule-content" data-day="thursday">
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Cycling">
                      <small>06AM-7AM</small>
                      <h3>Body Building</h3>
                      <span>John Doe</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-yoga.svg" alt="">
                      <small>06AM-7AM</small>
                      <h3>Yoga Programs</h3>
                      <span>James Smith</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-cycling.svg" alt="">
                      <small>06AM-7AM</small>
                      <h3>Cycling Program</h3>
                      <span>Rita Doe</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-boxing.svg" alt="Cycling">
                      <small>06AM-7AM</small>
                      <h3>Boxing Fitness</h3>
                      <span>John Dose</span>
                    </div>
                  </div>
                </div>
                <!-- END sched-content -->

                <div class="schedule-content" data-day="friday">
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-yoga.svg" alt="">
                      <small>06AM-7AM</small>
                      <h3>Yoga Programs</h3>
                      <span>James Smith</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Cycling">
                      <small>06AM-7AM</small>
                      <h3>Body Building</h3>
                      <span>John Doe</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-boxing.svg" alt="Cycling">
                      <small>06AM-7AM</small>
                      <h3>Boxing Fitness</h3>
                      <span>John Dose</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-cycling.svg" alt="">
                      <small>06AM-7AM</small>
                      <h3>Cycling Program</h3>
                      <span>Rita Doe</span>
                    </div>
                  </div>
                </div>
                <!-- END sched-content -->

                <div class="schedule-content" data-day="saturday">
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-dumbell.svg" alt="Cycling">
                      <small>06AM-7AM</small>
                      <h3>Body Building</h3>
                      <span>John Doe</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-yoga.svg" alt="">
                      <small>06AM-7AM</small>
                      <h3>Yoga Programs</h3>
                      <span>James Smith</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-cycling.svg" alt="">
                      <small>06AM-7AM</small>
                      <h3>Cycling Program</h3>
                      <span>Rita Doe</span>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="program program-schedule">
                      <img src="../fitness/images/fit-boxing.svg" alt="Cycling">
                      <small>06AM-7AM</small>
                      <h3>Boxing Fitness</h3>
                      <span>John Dose</span>
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
                <h2>Les options de suivis</h2>
                <p>Le programme que vous voulez suivre, le suivi que  <b>vous méritez</b>.</p>
              </div>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-4 col-sm-6">
              <div class="program animate-box">
                <img src="../fitness/images/fit-dumbell.svg" alt="Cycling">
                <h3>Body Combat</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                <span><a href="#" class="btn btn-default">Join Now</a></span>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="program animate-box">
                <img src="../fitness/images/fit-yoga.svg" alt="">
                <h3>Yoga Programs</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                <span><a href="#" class="btn btn-default">Join Now</a></span>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="program animate-box">
                <img src="../fitness/images/fit-cycling.svg" alt="">
                <h3>Cycling Program</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                <span><a href="#" class="btn btn-default">Join Now</a></span>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="program animate-box">
                <img src="../fitness/images/fit-boxing.svg" alt="Cycling">
                <h3>Boxing Fitness</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                <span><a href="#" class="btn btn-default">Join Now</a></span>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="program animate-box">
                <img src="../fitness/images/fit-swimming.svg" alt="">
                <h3>Swimming Program</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                <span><a href="#" class="btn btn-default">Join Now</a></span>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="program animate-box">
                <img src="../fitness/images/fit-massage.svg" alt="">
                <h3>Massage</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                <span><a href="#" class="btn btn-default">Join Now</a></span>
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
                <h2>Meet Our Trainers</h2>
                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-4 col-sm-6">
              <div class="team-section-grid animate-box" style="background-image: url(../fitness/images/trainer-1.jpg);">
                <div class="overlay-section">
                  <div class="desc">
                    <h3>John Doe</h3>
                    <span>Body Trainer</span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
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
                    <h3>James Smith</h3>
                    <span>Swimming Trainer</span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
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
                    <h3>John Doe</h3>
                    <span>Chief Executive Officer</span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
                    <h3>John Doe</h3>
                    <span>Chief Executive Officer</span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
                    <h3>John Doe</h3>
                    <span>Chief Executive Officer</span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
                    <h3>John Doe</h3>
                    <span>Chief Executive Officer</span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
                  <h1>Fitness Classes this summer</h1>
                  <p>Pay now and get 25% Discount</p>
                  <a href="#" class="btn btn-primary">Become A Member</a>
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
                <h2>Pricing Plan</h2>
                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="pricing">
              <div class="col-md-3 animate-box">
                <div class="price-box animate-box">
                  <h2 class="pricing-plan">Starter</h2>
                  <div class="price"><sup class="currency">$</sup>9<small>/month</small></div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  <ul class="classes">
                    <li>15 Cardio Classes</li>
                    <li class="color">10 Swimming Lesson</li>
                    <li>10 Yoga Classes</li>
                    <li class="color">20 Aerobics</li>
                    <li>10 Zumba Classes</li>
                    <li class="color">5 Massage</li>
                    <li>10 Body Building</li>
                  </ul>
                  <a href="#" class="btn btn-default">Select Plan</a>
                </div>
              </div>

              <div class="col-md-3 animate-box">
                <div class="price-box animate-box">
                  <h2 class="pricing-plan">Basic</h2>
                  <div class="price"><sup class="currency">$</sup>27<small>/month</small></div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  <ul class="classes">
                    <li>15 Cardio Classes</li>
                    <li class="color">10 Swimming Lesson</li>
                    <li>10 Yoga Classes</li>
                    <li class="color">20 Aerobics</li>
                    <li>10 Zumba Classes</li>
                    <li class="color">5 Massage</li>
                    <li>10 Body Building</li>
                  </ul>
                  <a href="#" class="btn btn-default">Select Plan</a>
                </div>
              </div>

              <div class="col-md-3 animate-box">
                <div class="price-box animate-box popular">
                  <h2 class="pricing-plan pricing-plan-offer">Pro <span>Best Offer</span></h2>
                  <div class="price"><sup class="currency">$</sup>74<small>/month</small></div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  <ul class="classes">
                    <li>15 Cardio Classes</li>
                    <li class="color">10 Swimming Lesson</li>
                    <li>10 Yoga Classes</li>
                    <li class="color">20 Aerobics</li>
                    <li>10 Zumba Classes</li>
                    <li class="color">5 Massage</li>
                    <li>10 Body Building</li>
                  </ul>
                  <a href="#" class="btn btn-select-plan btn-sm">Select Plan</a>
                </div>
              </div>

              <div class="col-md-3 animate-box">
                <div class="price-box animate-box">
                  <h2 class="pricing-plan">Unlimited</h2>
                  <div class="price"><sup class="currency">$</sup>140<small>/month</small></div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  <ul class="classes">
                    <li>15 Cardio Classes</li>
                    <li class="color">10 Swimming Lesson</li>
                    <li>10 Yoga Classes</li>
                    <li class="color">20 Aerobics</li>
                    <li>10 Zumba Classes</li>
                    <li class="color">5 Massage</li>
                    <li>10 Body Building</li>
                  </ul>
                  <a href="#" class="btn btn-default">Select Plan</a>
                </div>
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
                  <h2>Recent from Blog</h2>
                </div>
              </div>
              <div class="col-md-12 col-md-offset-0">
                <div class="fh5co-blog animate-box">
                  <div class="inner-post">
                    <a href="#"><img class="img-responsive" src="../fitness/images/blog-1.jpg" alt=""></a>
                  </div>
                  <div class="desc">
                    <h3><a href="#">Starting new session of body building this summer</a></h3>
                    <span class="posted_by">Posted by: Admin</span>
                    <span class="comment"><a href="">21<i class="icon-bubble22"></i></a></span>
                    <p>Far far away, behind the word mountains</p>
                    <a href="#" class="btn btn-default">Read More</a>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-md-offset-0">
                <div class="fh5co-blog animate-box">
                  <div class="inner-post">
                    <a href="#"><img class="img-responsive" src="../fitness/images/blog-1.jpg" alt=""></a>
                  </div>
                  <div class="desc">
                    <h3><a href="#">Starting new session of body building this summer</a></h3>
                    <span class="posted_by">Posted by: Admin</span>
                    <span class="comment"><a href="">21<i class="icon-bubble22"></i></a></span>
                    <p>Far far away, behind the word mountains</p>
                    <a href="#" class="btn btn-default">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="col-md-12">
                <div class="heading-section animate-box">
                  <h2>Upcoming Events</h2>
                </div>
              </div>
              <div class="col-md-12 col-md-offset-0">
                <div class="fh5co-blog animate-box">
                  <div class="meta-date text-center">
                    <p><span class="date">14</span><span>June</span><span>2016</span></p>
                  </div>
                  <div class="desc desc2">
                    <h3><a href="#">Starting new session of body building this summer</a></h3>
                    <span class="posted_by">Posted by: Admin</span>
                    <span class="comment"><a href="">21<i class="icon-bubble22"></i></a></span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <a href="#" class="btn btn-default">Read More</a>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-md-offset-0">
                <div class="fh5co-blog animate-box">
                  <div class="meta-date text-center">
                    <p><span class="date">13</span><span>June</span><span>2016</span></p>
                  </div>
                  <div class="desc desc2">
                    <h3><a href="#">Starting new session of body building this summer</a></h3>
                    <span class="posted_by">Posted by: Admin</span>
                    <span class="comment"><a href="">21<i class="icon-bubble22"></i></a></span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <a href="#" class="btn btn-default">Read More</a>
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
                <h3 class="section-title">About Us</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
              </div>

              <div class="col-md-4 animate-box">
                <h3 class="section-title">Our Address</h3>
                <ul class="contact-info">
                  <li><i class="icon-map-marker"></i>198 West 21th Street, Suite 721 New York NY 10016</li>
                  <li><i class="icon-phone"></i>+ 1235 2355 98</li>
                  <li><i class="icon-envelope"></i><a href="#">info@yoursite.com</a></li>
                  <li><i class="icon-globe2"></i><a href="#">www.yoursite.com</a></li>
                </ul>
              </div>
              <div class="col-md-4 animate-box">
                <h3 class="section-title">Drop us a line</h3>
                <form class="contact-form">
                  <div class="form-group">
                    <label for="name" class="sr-only">Name</label>
                    <input type="name" class="form-control" id="name" placeholder="Name">
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
                    <input type="submit" id="btn-submit" class="btn btn-send-message btn-md" value="Send Message">
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
import '../fitness/js/bootstrap.min.js'
export default {
  name: 'LayoutHome',
  data () {
    return {
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
  }
}
</script>

<style>
  @import '../fitness/css/animate.css';
  @import '../fitness/css/icomoon.css';
  @import '../fitness/css/bootstrap.css';
  @import '../fitness/css/superfish.css';
  @import '../fitness/css/style.css';
</style>
