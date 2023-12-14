<template>
  <q-page class="flex flex-center">
    <q-card class="my-card" style="width: 600px">
      <q-card-section>
        <div class="text-h4">
          To Do List
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row justify-center">
          <div class="col 12">
            <q-input v-model="todoTask" label="Input Task">
                <template v-slot:after>
                  <q-btn round dense flat icon="send" @click="addItem" />
                </template>
              </q-input>
            </div>
          </div>
      </q-card-section>

      <q-card-section v-if="todoList.length > 0">
        <div class="row justify-center" v-for="(item, index) in todoList" :key="index">
          <div class="col-8 q-py-md"><!-- padding q-py-md -->
            {{ item.value }}
          </div>
          <div class="col-auto q-py-md">
            <q-btn round dense flat icon="done" @click="removeItem(index)"></q-btn>
          </div>
        </div>
      </q-card-section>

      <q-card-section v-else>
        <div class=" row justify-center">
          <div class="col-12">
              <p>The list is empty</p>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name:'todoList',
  data() {
    return {
      todoTask:'',
      todoList:[]
    }
  },

  methods:{
    addItem(){
        this.todoList.push({value:this.todoTask});
    },
    removeItem(index){
      this.todoList.splice(index,1);
    }
  }
})
</script>
