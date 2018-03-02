<template>
  <div>
    <router-link to="/time/time-add" class="btn btn-primary">创建</router-link>
    <hr>
    <router-view></router-view>
    <ul class="list-group" v-for="one in lists">

      <li class="list-group-item" >
        <div class="row">
          <div class="col-md-2">
            <img :src="one.avator" alt="" class="img-circle img-responsive">
          </div>
          <div class="col-md-3">
            <div>
              <i class="glyphicon glyphicon-time"></i>{{one.time}}小时
            </div>
            <div class="text-info">
              <i class="glyphicon glyphicon-calendar"></i>{{one.date}}

            </div>
          </div>
          <div class="col-md-5">
            <div>{{one.comment}}</div>
          </div>
          <div class="col-md-2">
            <button class="btn btn-danger" @click="remove(one)">&times;</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import * as Types from "@/store/types";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({ lists: "lists" })
  },
  components: {},
  methods: {
    ...mapActions([Types.REMOVE_PLAN, Types.REMOVE_TOTALTIME]),
    remove(obj) {
      this[Types.REMOVE_PLAN](obj);
      this[Types.REMOVE_TOTALTIME](obj.time);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  line-height: 35px;
}
</style>
