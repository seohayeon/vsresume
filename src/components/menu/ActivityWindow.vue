<template>
     <div id="tab">
            <div>
                <div style="background:#1E1E1E; border-top:2px solid red;">
                   activity.css
                </div>
            </div>
        </div>
       
         <div style="padding-top:2rem; padding-left:1rem; text-align:left;">
              <div class="line_number">
                  <p v-for="(a,i) in (activity_tag.length + 10)" :key="i">
                      {{i+1}}
                  </p>
         </div>
            <div id="contact_list" v-for="(a,i) in activity_tag" :key="i">
                <span id="class">.{{a.label}}</span>
                <span class="brace"> {</span>
                   <div id="value" v-for="(a,i) in activity_content.filter(pj => pj.tag.includes(a.id))" :key="i">
                       &nbsp;&nbsp;<span id="key">{{a.title}}</span> : <span id="value">{{a.from}} ;</span>
                   </div>
                <div class="brace">}</div>
                </div>
        </div>
</template>

<script>
import activity from '@/data/activity.json'
export default {
  name: 'ContactWindow',
  data(){
        return{
            activity_tag:activity.tags.type,
            activity_content:activity.content
        }
    }
}
</script>

<style scoped>
    #key{
        color: #A3E9FF;
        font-size: 1.3rem;
    }
    #value{
        color: #ce9075;
        font-size: 1.3rem;
    }
    .line_number{
        background: none;
        width: 2rem;
        height: 100%;
        float: left;
        margin-right: 1rem;
        color: gray;
        font-size: 1.3rem;
        line-height: 1.55rem;
    }
    .brace{
        color: white;
        font-size: 1.2rem;
    }
    #class{
        color: #f5b905;
        font-size: 1.3rem;
    }
</style>
