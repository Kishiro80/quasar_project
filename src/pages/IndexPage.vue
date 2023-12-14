<template>
  <q-page class="bg-deep-purple-1">
    <div class="row bg-primary">
      <div class="col">
        <div
          style="max width:450px; text-align:center; margin-left:auto; margin-right:auto;"
        >
          <div
            class="text-h4 text-bold text-white q-mt-xl q-pt-xl q-pb-xl-lg"
            transition="scale"
          >
            Welcome to MyCES Manufacturing SDN BHD
          </div>
          <div class="text-h6 text-white q-pl-lg q-pr-lg q-pb-xs">
            Interested? Subscribe to our newsletter below:
          </div>
          <div class="q-pa-md hover-animate">
            <q-input
              type="email"
              placeholder="your email address"
              bg-color="white"
              color="green-7"
              filled
              class="q-pl-lg q-pr-lg q-pb-lg"
            >
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
              <template v-slot:append>
                <q-btn class="custom-btn" @click="dialog = true"
                  >Register Now!</q-btn
                >
                <q-dialog v-model="dialog">
                  <q-card>
                    <q-card-section>
                      <div class="text-p">
                        Are you sure to submit this email?
                      </div>
                    </q-card-section>
                    <q-card-section class="row items-center q-gutter-sm">
                      <q-btn
                        label="Yes"
                        color="primary"
                        text-color="white"
                        v-close-popup
                        @click="
                          $q.notify({
                            color: 'green-5',
                            message: 'You have successfully subscribed to our newsletter!',
                            icon: 'check',
                            timeout: 2500,
                            position: 'top',
                          })
                        "
                      />
                      <q-btn
                        v-close-popup
                        label="No,return back"
                        color="primary"
                        text-color="white"
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>
              </template>
            </q-input>
          </div>
        </div>
      </div>
      <q-img
        class="col gt-sm"
        src="../assets/section1.png"
        style="margin-left: auto; margin-right: auto"
        transition="jump-down"
      />
    </div>

    <!-- NEXT SECTION-->
    <div class="row flex-center">
      <div class="text-h4 text-bold q-px-md q-pt-md text-primary">
        Latest Invention
        <hr
          class="color-primary bg-primary"
          style="height: 1.5px; max-width: 150px"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md">
        <div class="q-pa-md">
          <q-card class="my-card hover-animate">
            <q-video
              src="https://www.mycesgroup.com/wp-content/uploads/2020/12/MyCES-E-MARS.mp4"
            />
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="col-12 col-md">
        <div class="q-pa-md">
          <q-card class="my-card hover-animate">
            <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="col-12 col-md">
        <div class="q-pa-md">
          <q-card class="my-card hover-animate">
            <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- 3rd SECTION-->
    <div class="row flex-center">
      <div class="text-h4 text-bold q-pl-md q-pr-md q-pt-md text-primary">
        Featured Language
      </div>
    </div>
    <hr
      class="color-primary bg-primary"
      style="height: 1.5px; max-width: 150px"
    />
    <div class="row">
      <div class="col-12 col-md">
        <!-- responsive column col-12 col-md -->
        <div class="q-pa-md">
          <q-card class="my-card">
            <div class="row">
              <div class="col-12 col-md-4 q-pa-sm">
                <q-img src="../assets/banana.png"></q-img>
              </div>
              <div class="col-12 col-md-8">
                <div class="text-h5 text-bold q-pl-md q-pt-xs">
                  Getting Started with Quasar and Vue Frameworks
                </div>
                <div class="text-h7 q-pa-md">
                  Testing new language to a landing page and make it responsive
                  to user's browser
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>

    <!-- 4rd SECTION-->
    <div class="row flex-center">
      <div class="text-h4 text-bold q-pl-md q-pr-md q-pt-md text-primary">
        Featured Clients
        <hr
          class="color-primary bg-primary"
          style="height: 1.5px; max-width: 150px"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md">
        <!-- responsive column col-12 col-md -->
        <div class="q-pa-md">
          <q-card class="my-card">
            <div class="row">
              <div class="col-6 col-md q-pa-sm">
                <q-img
                  class="q-mt-xl"
                  src="https://www.mycesgroup.com/wp-content/uploads/2018/04/umsc.png"
                ></q-img>
              </div>
              <div class="col-6 col-md q-pa-sm">
                <q-img
                  class="q-mt-xl"
                  src="https://www.mycesgroup.com/wp-content/uploads/2019/09/NIH.png"
                ></q-img>
              </div>
              <div class="col-6 col-md q-pa-sm">
                <q-img
                  src="https://www.mycesgroup.com/wp-content/uploads/2018/04/Pejabat-Daerah-dan-Tanah-Sabak-Bernam-e1524470032906.png"
                ></q-img>
              </div>
              <div class="col-6 col-md q-pa-sm">
                <q-img
                  src="https://www.mycesgroup.com/wp-content/uploads/2018/04/Pejabat-Daerah-dan-Tanah-Kuala-Selangor.jpg"
                ></q-img>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md q-pa-sm">
                <q-img
                  src="https://www.mycesgroup.com/wp-content/uploads/2018/04/Pejabat-Daerah-dan-Tanah-Banting.jpg"
                ></q-img>
              </div>
              <div class="col-6 col-md q-pa-sm">
                <q-img
                  src="https://www.mycesgroup.com/wp-content/uploads/2018/04/Pejabat-Daerah-dan-Tanah-Sepang.jpg"
                ></q-img>
              </div>
              <div class="col-6 col-md q-pa-sm">
                <q-img
                  class="q-mt-xl"
                  src="https://www.mycesgroup.com/wp-content/uploads/2018/04/petronas-research-1.png"
                ></q-img>
              </div>
              <div class="col-6 col-md q-pa-sm">
                <q-img
                  src="https://www.mycesgroup.com/wp-content/uploads/2018/04/Sime-Darby-Brunsfield-Tower.jpg"
                ></q-img>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>

    <!-- 5th section-->
    <div class="row flex-center">
      <div class="text-h4 text-bold q-pl-md q-pr-md q-pt-md text-primary">
        Gallery
        <hr
          class="color-primary bg-primary"
          style="height: 1.5px; max-width: 150px"
        />
      </div>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-type="regular"
          control-color="primary"
          navigation
          padding
          arrows
          height="500px"
          class="text-white shadow-10 rounded-borders"
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
    </div>

    <!-- return top btn-->
    <Transition name="scroll-top">
      <q-page-sticky
        v-show="showScrollTop"
        position="bottom-right"
        :offset="[12, 15]"
      >
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
          RK 27-B Jalan Villa 3 Taman Anggerik Villa 43500 Semenyih Selangor
          Darul Ehsan
        </div>
        <div class="text-h6 text-bold q-pl-md q-pr-xl q-pt-md">
          Branch Address
        </div>
        <div class="text-p q-pl-md q-pr-md">
          Bangunan Center of Excellence Kolej Kemahiran Tinggi MARA Ledang Serom
          4 & 5, jalan Sg. Mati Bukit Gambir 84410 Ledang, Johor
        </div>
        <div class="text-h6 text-bold q-pl-md q-pr-xl q-pt-md">
          Telephone Number
        </div>
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

export default {
  setup() {
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

    return {
      slide: ref("style"),
      dialog: ref(false),
      showScrollTop,
      scrollToTop,
    };
  },
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
