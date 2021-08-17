<template>
      <div v-if="thisTag == 'all'">
          <div id="project_list" v-for="(a,i) in projectContent" :key="i">
        <img :src="a.image"/>
        <p class="title">{{a.name}}</p>
        <p class="desc">{{a.description}}</p>
        <p><a :href="a.github">GitHub ></a>
        <a :href="a.deploy"  v-if="a.deploy">Deploy ></a>
        </p>
        </div></div>
        
           <div v-if="thisTag !== 'all'">
        <div id="project_list" v-for="(a,i) in projectContent.filter(pj => pj.tag.includes(thisTag))" :key="i">
        <img :src="a.image"/>
        <p class="title">{{a.name}}</p>
        <p class="desc">{{a.description}}</p>
        <p><a :href="a.github">GitHub ></a>
        <a :href="a.deploy"  v-if="a.deploy">Deploy ></a>
        </p>
        </div>
        </div>
</template>

<script>
import projectData from '../data/project.json'
export default {
  name: 'ProjectItem',
  props: {
    thisTag: String
  },
  data(){
        return{
            projectContent: projectData.content
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #project_list{
        width:calc(50% - 2rem);
        background:black;
        float:left;
        margin-right:1rem;
        margin-left:1rem;
        margin-bottom:2rem;
        border-radius: 1rem;
        position: relative;
        padding-bottom: 5rem;
        text-align: left;
    }
   #project_list > img{
        width: 100%;
        object-fit: cover;
        height:10rem;
        border-radius: 1rem;
    }
    #project_list > .title{
        color: white;
        font-size: 1.5rem;
        margin-left:0.5rem;
        margin-top: 0.5rem;
    }
    #project_list > .desc{
        color: #e2e2e2;
        font-size: 0.9rem;
        margin-left:0.5rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
     #project_list > p > a{
        color: #ffffff;
        margin-left: 0.5rem;
        text-decoration: none;
    }
    p{
        margin: 0rem;
    }
    
</style>
