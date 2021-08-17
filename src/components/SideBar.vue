<template>
    <div id='sideBar'>
        <div @click="onEmit('project')" :class="[window=='project' ? 'activity' : '']">
         <font-awesome-icon :icon="['far', 'copy']" />
         </div>
         <div @click="onEmit('contact')" :class="[window=='contact' ? 'activity' : '']">
             <font-awesome-icon :icon="['far', 'envelope']" />
             </div>
         <div @click="onEmit('activity')" :class="[window=='activity' ? 'activity' : '']">
             <font-awesome-icon :icon="['far', 'calendar']" />
             </div>
         <div @click="onEmit('about')" :class="[window=='about' ? 'activity' : '']">
             <font-awesome-icon :icon="['far', 'user-circle']" />
         </div>
         <div>
         </div>
    </div>
</template>

<script>
export default {
  name: 'SideBar',
  data(){
  },
  props:{
      window:String
  },
  methods:{
      onEmit(value){
          this.$emit('setWindow',value)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #sideBar{
        height:100vh;
        width:2.5rem;
        background:#333333;
        float: left;
        color: gray;
        font-size: 1.5rem;
    }
    #sideBar > div{
        margin-top:1rem;
    }
    .activity{
        color: white;
    }
</style>
