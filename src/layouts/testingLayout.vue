<template>
  <q-layout
    view="lHh lpr lFf"
    style="height: 700px"
    class="shadow-2 rounded-borders"
  >
  <q-header reveal style="background: transparent; position: relative;">
      <q-toolbar>
        <q-toolbar-title>
          <q-img
            src="../assets/logo2.png"
            alt="home"
            width="150px"
            height="50px"
          />
        </q-toolbar-title>
        <div>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
            class="lt-md"
          />
        </div>
        <!--
          <q-tabs v-model="tab" class="gt-sm"> ## show when windows are greater than=gt, small window=sm 
          <q-route-tab class="q-mr-sm" icon="home" to="/" replace label="Homepage"/>
          <q-route-tab class="q-mr-sm" icon="list" to="/todoList" replace label="to do list"/>
        </q-tabs>
        --->
        <div class="gt-sm">
          <q-img
            src="https://cdn.mos.cms.futurecdn.net/YxRYisJDPmj5yTaof6wPda.jpg"
            style="position: absolute; top: 100%; left: 50%; transform: translate(-50%, -50%); z-index: -1; height:150px;"
          ></q-img>
          <div class="q-gutter-y-md">
            
            <q-tabs v-model="tab" indicator-color="primary" class="text-black">
              <q-dropdown-btn name="test"></q-dropdown-btn>
              <q-route-tab name="home" icon="mail" to="/" label="home" />

              <q-route-tab
                name="todoList"
                icon="list"
                to="/todoList"
                label="To do list"
              />
              <q-route-tab
                name="aboutUs"
                icon="people"
                to="/aboutUs"
                label="about us"
              />
            </q-tabs>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered side="right">
      <q-list>
        <q-item-label header> </q-item-label>
        <q-item clickable v-close-popup to="/" class="text-primary">
          <div class="text-h6 bold q-pa-sm" bordered>
            <q-icon name="home" />
            Home
          </div>
        </q-item>

        <q-item clickable v-close-popup to="/todoList" class="text-primary">
          <div class="text-h6 bold q-pa-sm" bordered>
            <q-icon name="list" />
            To Do List
          </div>
        </q-item>

        <q-item clickable v-close-popup to="/aboutUs" class="text-primary">
          <div class="text-h6 bold q-pa-sm" bordered>
            <q-icon name="people" />
            About Us
          </div>
        </q-item>
      </q-list>
    </q-drawer>

    <Transition name="scroll-fade">
      <q-footer elevated v-show="showFooter">
        <q-toolbar
          ><!-- q space push content to the center of the website -->
          <q-space />
          &copy;MyCES Manufacturing SDN. BHD. 2023
          <q-space />
        </q-toolbar>
      </q-footer>
    </Transition>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view :key="$route.params.id" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

const linksList = [
  {
    title: "Home",
    caption: "Our Home Page",
    icon: "home",
    link: "#/",
  },
  {
    title: "To Do List",
    caption: "Your To Do List",
    icon: "note",
    link: "#/todoList",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);
    const showFooter = ref(true);

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Show footer when scrolled past a certain point, hide otherwise
      showFooter.value = scrollTop > 370; // Adjust the scroll position as needed
    };
    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });

    return {
      tab: ref("home"),

      //show footer
      showFooter,

      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      isHeaderHidden: false,
      lastScrollTop: 0,
      mounted() {
        window.addEventListener("scroll", this.handleScroll);
      },
      beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
      },
      methods: {
        handleScroll() {
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

          if (scrollTop > this.lastScrollTop) {
            this.isHeaderHidden = true;
          } else {
            this.isHeaderHidden = false;
          }

          this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        },
      },
    };
  },
});
</script>

<style>
.header {
  transition: top 0.3s ease-in-out;
}

.header-hidden {
  top: -100px; /* Change this value to hide the header completely */
}

.header-animation-enter-active,
.header-animation-leave-active {
  transition: all 2s ease;
  opacity: 1;
}
.header-animation-enter-from,
.header-animation-leave-to {
  transition: all 2s ease;
  opacity: 0;
}

.scroll-fade-enter-active,
.scroll-fade-leave-active {
  transition: 3.5s ease;
}

.scroll-fade-enter,
.scroll-fade-leave-to {
  transition: 3.5s ease;
  opacity: 0;
}
</style>
