<template>
  <q-page>
    <!-- section 1-->
    <div class="row flex-center q-pa-md">
      <div class="text-h4 text-bold q-pl-md q-pr-md q-pt-md text-primary">
        To Do List
      </div>
    </div>
    <hr
      class="color-primary bg-primary"
      style="height: 1.5px; max-width: 100px"
    />
    <div class="row flex-center q-pl-xl q-pr-xl">
      <div class="col-12 col-md">
        <!-- responsive column col-12 col-md -->
        <div class="q-pa-md">
          <q-card class="my-card">
            <q-card-section>
              <div class="row justify-center">
                <div class="col-12">
                  <q-input v-model="todoTask" label="Input Task">
                    <template v-slot:after>
                      <q-btn round dense flat icon="send" @click="addItem" />
                    </template>
                  </q-input>
                </div>
              </div>
            </q-card-section>

            <q-card-section v-if="todoList.length > 0">
              <div
                class="row justify-center"
                v-for="(item, index) in todoList"
                :key="index"
              >
                <div class="col-8 q-py-md">
                  <!-- padding q-py-md -->
                  {{ item.value }}
                </div>
                <div class="col-auto q-py-md">
                  <q-btn
                    round
                    dense
                    flat
                    icon="done"
                    @click="removeItem(index)"
                  ></q-btn>
                </div>
              </div>
            </q-card-section>

            <q-card-section v-else>
              <div class="row justify-center">
                <div class="align-center">
                  <q-icon></q-icon>
                  <p>The list is empty</p>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div
      class="row q-pt-xl q-pl-xl q-pr-xl"
      style="font-family: Source Sans Pro, sans-serif"
    >
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
import { defineComponent } from "vue";
export default defineComponent({
  name: "todoList",
  data() {
    return {
      todoTask: "",
      todoList: [],
    };
  },

  methods: {
    addItem() {
      this.todoList.push({ value: this.todoTask });
    },
    removeItem(index) {
      this.todoList.splice(index, 1);
    },
  },
});
</script>

<style lang="scss"></style>
