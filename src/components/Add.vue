<template>
  <div>
    <form>
      <div class="form-group">
        <div class="row">
          <div class="col-md-6">
            <label for="date1" class="control-label">日期</label>
            <input type="date" class="form-control" id="date1" placeholder="日期"
                   v-model="date">
          </div>
          <div class="col-md-6">
            <label for="date2" class="control-label">时间</label>
            <input type="number" class="form-control" id="date2" placeholder="时间"
                   v-model.number="time">
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-md-12">
            <textarea class="form-control" placeholder="内容" v-model="comment"></textarea>
          </div>
        </div>

      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-md-12">
            <button type="button" class="btn btn-success" @click="addPlan">添加计划</button>
            <button type="button" class="btn btn-default" @click="cancel">取消</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped>

</style>

<script>
  import * as Types from '@/store/types';
  import {mapActions} from 'vuex';

  export default {
    data() {
      return {
        date: '',
        time: '',
        comment: ''
      }
    },
    components: {},
    methods: {
      ...mapActions([Types.ADD_PLAIN, Types.ADD_TOTALTIME]),
      addPlan() {
        this[Types.ADD_PLAIN]({
          date: this.date,
          time: this.time,
          comment: this.comment
        });
        //增加总时间
        this[Types.ADD_TOTALTIME](this.time);
      },
      cancel() {
        // this.$router.go(-1);
        this.$router.push('/time');
      }
    }
  }
</script>
