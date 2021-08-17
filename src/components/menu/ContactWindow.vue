<template>
     <div id="tab">
            <div>
                <div style="background:#1E1E1E; border-top:2px solid red;">
                   contact.json
                </div>
            </div>
        </div>
       
         <div style="padding-top:2rem; padding-left:1rem; text-align:left;">
              <div class="line_number">
                  <p v-for="(a,i) in (contactData.length+2)" :key="i">
                      {{i+1}}
                  </p>
         </div>
         <span class="brace">{</span>
            <div id="contact_list" v-for="(a,i) in contactData" :key="i">
                <span id="key">{{a.label}}</span>
                <span style="color:white;"> : </span>
                <a id="value" :href="a.url"> {{a.value}},</a>
                </div>
                 <span class="brace">}</span>
        </div>
</template>

<script>
import baseData from '@/data/base.json'
export default {
  name: 'ContactWindow',
  data(){
        return{
            contactData:baseData.profile.contact
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
</style>
