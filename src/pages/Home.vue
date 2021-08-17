<template>
    <SideBar @setWindow="setWindow" :window="Window"/>
    <div class='explore'>
        <div id='title'>EXPLORE</div>
        <div id="project_title" @click="greet('all')"><font-awesome-icon :icon="['fa', 'chevron-down']"/>PROJECT</div>
        <div class="project_tags">
        <li v-for="(a,i) in tags.language" :key="i"  @click="greet(a.id)">
            <img :src="require(`@/assets/${a.icon}`)" id="project_icon"/>
           {{a.label}}.{{a.extension}}
            </li>
            </div>
    </div>
    <div id='view'>
        <div v-if="Window==='project'">
        <div id="tab" style="white-space: nowrap;">
           <div v-for="(a,i) in tags.language" :key="i">
<div style="background:#1E1E1E; border-top:2px solid red;" v-if="a.id == thisTag">
{{a.label}}.{{a.extension}}
</div>
<div v-if="a.id !== thisTag" style="border-top:2px solid #252526;"  @click="greet(a.id)">
{{a.label}}.{{a.extension}}
</div>
</div>
        </div>
    
      <div style="padding-top:2rem; padding-left:1rem;">
        <ProjectItem :thisTag="thisTag"/> 
        </div>
        </div>
            <ContactWindow v-if="Window==='contact'"/>
            <AboutWindow v-if="Window==='about'"/>
        
    </div>
    <div id="footer"></div>
</template>
<script>
import projectData from '../data/project.json'
import baseData from '../data/base.json'
import SideBar from '../components/SideBar'
import ProjectItem from '../components/ProjectItem'
import ContactWindow from '../components/menu/ContactWindow'
import AboutWindow from '../components/menu/AboutWindow'
export default {
    components: {
    SideBar,
    ProjectItem,
    ContactWindow,
    AboutWindow
    },
    name: "HomeComponent",
    data(){
        return{
            category:'all',
            tags:projectData.tags,
            projectContent: projectData.content,
            thisTag:'all',
            Window:'home',
            contactData:baseData.profile.contact
        }
    },
    methods:{
        greet(tag) {
        this.thisTag = tag
        this.Window = 'project'
    },
    setWindow(value){
        this.Window = value;
    }
    }
}

</script>
<style>
    body{
        padding: 0;
        margin: 0;
    }
    .explore{
        height:100vh;
        width:10rem;
        background:#252526 ;
        float: left;
        text-align:left;
    }
     #view{
        height:100vh;
        overflow: scroll;
        width:calc(100vw - 12.5rem);
        background:#1E1E1E ;
        float: left;
    }
    #tab{
        width: 100%;
        height: 1.8rem;
        background:#252526;
        overflow: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        text-align: left;
    }
    #tab::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
   }
    #footer{
        position: fixed;
        width: 100vw;
        height:1rem;
        bottom: 0;
        background: #007ACC;
    }
    .explore > #title{
        color:white;
        margin-top: 1rem;
        margin-left: 0.8rem;
    }
    .explore > #project_title{
        color:white;
        margin-top: 0.7rem;
        margin-left: 0.8rem;
    }
    li{
        list-style: none;
    }
    .project_tags{
        margin-left: 1.4rem;
        color: white;
        margin-top:0.5rem;
        line-height:1.5rem;
    }
    #project_icon{
        margin-right: 0.3rem;
        width:1rem;
    }
    p{
        margin: 0rem;
    }
    #tab > div {
        color: gray;
        min-width:8rem;
        display: inline-block;
    }
    #tab > div >div{
        height:1.8rem;
        text-align: center;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
</style>