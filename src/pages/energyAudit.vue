<template>
  <q-page class="bg-deep-purple-1">
    <!-- 3rd SECTION-->
    <footerDefault></footerDefault>
    <div class="row flex-center">
      <div class="text-h4 text-bold q-pl-md q-pr-md q-pt-md text-primary">
        Energy Audit
      </div>
    </div>
    <hr class="color-primary bg-primary" style="height: 1.5px; max-width: 150px" />
    <div class="row">
      <div class="col-12 col-md">
        <!-- responsive column col-12 col-md -->
        <div class="q-pa-md">
          <q-card class="my-card">
            <div class="row flex-center">
              <div class="col-12 col-md-6 q-pa-md q-mt-md q-mb-md">
                <q-carousel
                  v-model="slide"
                  transition-prev="scale"
                  transition-next="scale"
                  swipeable
                  animated
                  control-type="regular"
                  control-color="primary"
                  infinite
                  navigation
                  padding
                  arrows
                  height="350px"
                  class="text-white rounded-borders"
                >
                  <q-carousel-slide name="slide1" class="column no-wrap flex-center">
                    <q-img
                      src="https://www.mycesgroup.com/wp-content/uploads/2018/10/h.jasin_.jpg"
                      width="450px"
                      height="400px"
                    />
                  </q-carousel-slide>
                  <q-carousel-slide name="slide2" class="column no-wrap flex-center">
                    <q-img
                      src="https://www.mycesgroup.com/wp-content/uploads/2018/10/kypj.jpg"
                      width="450px"
                      height="400px"
                    />
                  </q-carousel-slide>
                  <q-carousel-slide name="layers" class="column no-wrap flex-center">
                    <q-img
                      src="https://www.mycesgroup.com/wp-content/uploads/2018/01/sime-darby-1.jpg"
                      width="450px"
                      height="400px"
                    />
                  </q-carousel-slide>
                  <q-carousel-slide name="map" class="column no-wrap flex-center">
                    <q-img src="../assets/banana.png" width="450px" height="400px" />
                  </q-carousel-slide>
                </q-carousel>
              </div>
              <div class="col-6 col-md-6">
                <div class="text-subtitle1 q-pa-md q-mb-xl text-black">
                  MyCES Sdn Bhd undertake commercial energy audits on all types of
                  companies, ranging from small businesses to international companies
                  looking to minimise energy waste and spot new opportunities for business
                  energy improvement. By following a detailed process of energy cost and
                  efficiency analysis, system reviews, in-depth feasibility studies and
                  professional project management we can provide our clients with bespoke
                  reports highlighting saving on energy, money and carbon emissions. Our
                  energy experts offer a variety of green energy assessments. We would be
                  delighted to discuss these with you further when you book your
                  commercial and industry energy audit with us today.
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>

    <!-- return top btn-->
    <Transition name="scroll-top">
      <q-page-sticky v-show="showScrollTop" position="bottom-right" :offset="[12, 15]">
        <q-btn
          round
          fab
          class="rotate-270"
          icon="arrow_forward"
          color="primary"
          text-color="white"
          @click="scrollToTop()"
        />
      </q-page-sticky>
    </Transition>

    <!-- footer -->
    <div class="row" style="font-family: Source Sans Pro, sans-serif">
      <div class="col-12 col-md">
        <div class="text-h5 text-bold q-pl-md q-pr-md">Find Us:</div>
        <div class="text-h6 text-bold q-pl-md q-pr-xl">HQ Address</div>
        <div class="text-p q-pl-md q-pr-md">
          RK 27-B Jalan Villa 3 Taman Anggerik Villa 43500 Semenyih Selangor Darul Ehsan
        </div>
        <div class="text-h6 text-bold q-pl-md q-pr-xl q-pt-md">Branch Address</div>
        <div class="text-p q-pl-md q-pr-md">
          Bangunan Center of Excellence Kolej Kemahiran Tinggi MARA Ledang Serom 4 & 5,
          jalan Sg. Mati Bukit Gambir 84410 Ledang, Johor
        </div>
        <div class="text-h6 text-bold q-pl-md q-pr-xl q-pt-md">Telephone Number</div>
        <div class="text-p q-pl-md q-pr-md">603 - 8725 5811</div>
        <div class="text-h6 text-bold q-pl-md q-pr-xl q-pt-md">Email</div>
        <div class="text-p q-pl-md q-pr-md q-pb-md">Info@mycesgroup.com</div>
      </div>

      <div class="col-8 col-md">
        <div class="text-h5 text-bold q-pl-md q-pr-md">Certified By:</div>
        <div class="text-p q-pa-sm">
          <q-img
            src="https://www.mycesgroup.com/wp-content/uploads/2017/03/esco-2-e1490936351540.png"
            width="280px"
          />
        </div>
        <div class="text-p q-pa-sm">
          <q-img
            src="https://www.mycesgroup.com/wp-content/uploads/2017/03/mof1-2-e1490936363632.jpg"
            width="180px"
          />
        </div>
      </div>
      <div class="col-8 col-md">
        <div class="text-p q-pa-sm q-pt-md">
          <q-img
            src="https://www.mycesgroup.com/wp-content/uploads/2017/10/myhijau_plain.jpg"
            width="180px"
          />
        </div>
        <div class="text-p q-pb-xl q-pt-sm">
          <q-img
            src="https://www.mycesgroup.com/wp-content/uploads/2019/05/cidb.png"
            width="180px"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useQuasar } from "quasar";
import footerDefault from "../components/footerDefault.vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const email = ref(null);
    const text = ref(null);
    const accept = ref(false);
    const showScrollTop = ref(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      showScrollTop.value = scrollTop > documentHeight - windowHeight * 2.83;
    };

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });

    const onSubmit = () => {
      if (accept.value !== true) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    };

    const onReset = () => {
      name.value = null;
      age.value = null;
      email.value = null;
      text.value = null;
      accept.value = false;
    };

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });

    return {
      slide: ref("style"),
      dialog: ref(false),
      showScrollTop,
      scrollToTop,
      name,
      age,
      email,
      text,
      accept,
      onSubmit,
      onReset,
    };
  },
  components: { footerDefault },
};
</script>

<style lang="scss">
.custom-size {
  font-size: 24px;
}
.custom-caption {
  text-align: center;
  padding: 12px;
  color: grey-4;
  background: rgba(0, 0, 0, 0.5);
}
.custom-btn {
  background-color: #3986ea;
  color: white;
  transition: color 0.3s; /* Transition for smooth color change */
}

/* Changing color and etc on hover */
.custom-btn:hover {
  color: white;
  background-color: #7fb5fb;
  transition: 0.3s;
  transform: scale(1.1);
}
.form-btn {
  transition: color 0.3s; /* Transition for smooth color change */
}

/* Changing color and etc on hover */
.form-btn:hover {
  transition: 0.3s;
  transform: scale(1.1);
}
img:hover {
  transition: 0.3s;
  transform: scale(1.1);
}
.hover-animate:hover {
  transition: 0.3s;
  transform: scale(1.1);
}
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0px);
}
.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: 2s ease;
  opacity: 1;
}

.scroll-top-enter-from,
.scroll-top-leave-to {
  transition: 1s ease;
  opacity: 0;
}
</style>
