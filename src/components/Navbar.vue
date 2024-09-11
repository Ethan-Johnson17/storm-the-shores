<template>
  <nav class="navbar navbar-expand-lg w-100 bg-transparent px-3 position-absolute">
     <router-link class="navbar-brand d-flex justify-content-between" :to="{ name: 'Home' }">
      <div class="d-flex align-items-center">
      </div>
      <div>
        <h1 class="headerText mb-0">STORM THE SHORES</h1>
        <h1 class="headerText2 mb-0 text-center">FORTIFY THE LINES. TURN THE TIDE.</h1>
      </div>
    </router-link>
    <!--<button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button> -->
    <div class="cutout border-bottom border-white"></div>
    <div class="navComponent d-flex justify-content-center m-0 row rounded w-100">
      <div class="collapse navbar-collapse w-100 col-12 d-flex justify-content-center" id="navbarText">
        <ul class="navbar-nav">
          <li class="homeIcon">
            <router-link
              :to="{ name: 'Home' }"
              class="btn text-white lighten-30 text-uppercase"
            >
            <h6 class="nav-label homeLabel">Home</h6>  
            <i class="mdi mdi-home fs-4"></i>
            </router-link>
          </li>
          <li class="blogIcon">
            <router-link
              :to="{ name: 'Blog' }"
              class="btn text-white lighten-30 text-uppercase"
            >
            <h6 class="nav-label blogLabel">Blog</h6>  
            <i class="mdi mdi-pencil fs-4"></i>
            </router-link>
          </li>
          <li class="shopIcon">
            <router-link
              :to="{ name: 'Shop' }"
              class="btn text-white lighten-30 text-uppercase"
            >
            <h6 class="nav-label shopLabel">Shop</h6>  
            <i class="mdi mdi-cart fs-4"></i>
            </router-link>
          </li>
          <!-- <li>
            <router-link
              :to="{ name: 'Membership' }"
              class="btn text-white lighten-30 text-uppercase"
            >
              Membership
            </router-link>
          </li> -->
          <li class="contactIcon">
            <router-link
              :to="{ name: 'Contact' }"
              class="btn text-white lighten-30 text-uppercase"
            >
            <h6 class="nav-label contactLabel">Contact</h6>  
            <i class="mdi mdi-phone fs-4"></i>
            </router-link>
          </li>
          <li class="aboutIcon">
            <router-link
              :to="{ name: 'About' }"
              class="btn text-white lighten-30 text-uppercase"
            >
            <h6 class="nav-label aboutLabel">About</h6>  
            <i class="mdi mdi-account-question-outline fs-4"></i>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-12 rounded-circle d-flex justify-content-center logoContainer">
        <router-link
              :to="{ name: 'Home' }"
              class="btn text-white lighten-30 text-uppercase"
            >
        <img alt="logo" class="border-top border-light rounded-circle logo" src="../assets/img/stsNoBGNoText.png"  />
        </router-link>
      </div>
      <!-- <div class="col-2 navBG">
      </div>
      <div class="half-circle"></div> -->
      <!-- LOGIN COMPONENT HERE -->
        <Login />
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.navbar-brand {
  position: absolute;
  z-index: 10000;
}
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  /* border-bottom: 2px solid var(--bs-light);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0; */
}
li {
  text-shadow: 2px 2px 2px black;
}

nav {
  height: 10rem;
}

.navbar-nav {
  transform: translateY(-0.25rem);
}
.homeIcon {
  transform: translateY(4rem) translateX(0.5rem);
}
.aboutIcon {
  transform: translateY(4rem) translateX(-0.5rem);
}
.blogIcon {
  transform: translateY(1.25rem) translateX(-0.5rem);
}
.contactIcon {
  transform: translateY(1.25rem) translateX(0.5rem);
}
.homeLabel {
  transform: translateY(-1rem) translateX(-3rem);
}
.aboutLabel {
  transform: translateY(-1rem) translateX(2rem);
}
.blogLabel {
  transform: translateY(-1rem) translateX(-2rem);
}
.contactLabel {
  transform: translateY(-1rem) translateX(1.5rem);
}
.shopLabel {
  transform: translateY(-1.25rem) translateX(-0.25rem);
}

.logo {
  /* position: absolute;
  left: 46%;
  top: 58%; */
  height: 8rem;
  /* transform: translateX(-7.8rem) translateY(2.75rem); */
}

.navComponent {
  transform: translateY(27%);
}

.nav-label {
  position: absolute;
  transition: 500ms;
  font-size: small;
}

.nav-label:hover {
  
}

.cutout {
  top: 0;
  left: 0;
  position: absolute;
  /* TODO Need a border for the semi-circle */
  height: 100%;
  width: 100%;
  --mask: radial-gradient(circle farthest-side at center bottom, transparent 65px, #182435ff 65px 100%) 50% 50%/100% 100% no-repeat;
  -webkit-mask: var(--mask);
          mask: var(--mask);
  background: #182435ff;
}
</style>
