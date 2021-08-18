<template>
     <div id="tab">
            <div>
                <div style="background:#1E1E1E; border-top:2px solid red;">
                   시작하기
                </div>
            </div>
        </div>
         <div style="padding-top:2rem; padding-left:1rem;">
             <div class="title">{{name}}</div>
             <div class="introduce">{{introduce}}</div>
             <button @click="onEmit('project')" class="project_button">Project</button>
            
             <button  @click="onEmit('about')" class="about_button">About</button>
         </div>
</template>

<script>
import baseData from '@/data/base.json'
export default {
  name: 'MainWindow',
  data(){
        return{
            name:baseData.title,
            introduce:baseData.profile.introduce
        }
    },
    methods:{
      onEmit(value){
          this.$emit('setWindow',value)
      }
  }
}
</script>

<style scoped>
    .project_button{
        width: 10rem;
        height: 3rem;
        font-size: 2rem;
        border: none;
        background: #fa5f5f;
        color: #fff;
        margin-right: 0.5rem;
    }
    .about_button{
        width: 10rem;
        height: 3rem;
        font-size: 2rem;
        border: 3px solid #fa5f5f;
        margin-top: 1rem;
        background: none;
        color: #fff;
        margin-left: 0.5rem;
    }
    .title{
        color: white;
        font-size: 3rem;
    }
    .introduce{
        color: white;
        font-size: 1.2rem;
        margin-top: 1rem;
    }
</style>
