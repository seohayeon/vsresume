<template>
    <div id="tab">
            <div>
                <div style="background:#1E1E1E; border-top:2px solid red;">
                   Extension: {{profileData.name}}
                </div>
            </div>
        </div>
       
         <div style="padding-top:2rem; text-align:left;">
             <div class="profileImage">
            <img :src="require(`@/assets/${profileData.photo}`)" id="avatar"/></div>
            <div class="content">
              <div class="name">{{profileData.name}}</div>  
            <div class="introduce">{{profileData.introduce}}</div>
            <div class="install">Install</div>
            </div>
            <div class="detail_tab">
                <li>Skill</li>
            </div>
            <div class="detail_container">
                <div class="title">
                {{profileData.name}} - Skill
                </div>
                <div class="skill_list">
                 <li v-for="(a,i) in profileData.skill" :key="i">
                <img :src="require(`@/assets/${a.icon}`)" id="skill_icon"/>
            </li>
            </div>
            </div>
        </div>
</template>

<script>
import baseData from '@/data/base.json'

export default {
  components: {
  },
  name: 'AboutWindow',
  data(){
        return{
            profileData:baseData.profile
        }
    }
}
</script>

<style scoped>
    .profileImage{
        float: left;
        margin-right: 1rem;
        padding-left: 2rem;
    }
    #avatar{
        width: 10rem;
    }
    .content > .name{
        color: white;
        padding-left: 1rem;
        font-size: 1.8rem;
        font-weight: 500;
    }
    .content > .introduce{
        color: #e2e2e2;
        margin-top: 0.8rem;
    }
    .content > .install{
        color: white;
        background: #327E36;
        display: inline-block;
        padding: 0.1rem 0.4rem 0.1rem 0.4rem;
        margin-top: 1rem;
    }
    .detail_tab{
        clear: both;
        width: calc(100% - 2rem);
        height: auto;
        padding-top: 1.5rem;
        color: white;
        padding-left: 2rem;
        padding-bottom: 0.5rem;
        border-bottom: 1.5px solid gray;
    }
    .detail_container .title{
        text-align: center;
        color: #e2e2e2;
        margin-top: 2rem;
        font-size: 2rem;
        border-bottom: 1.5px solid gray;
        margin-left: 2rem;
        margin-right: 2rem;
        padding-bottom:0.5rem;
    }
    #skill_icon{
        width: 3rem;
    }
    .detail_container li{
        float: left;
        margin-left: 0.5rem;
    }
    .skill_list{
        margin-top: 1rem;
        margin-left: 1rem;
    }
</style>
