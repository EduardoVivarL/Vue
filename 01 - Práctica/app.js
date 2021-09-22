const charJson=[]

const app = Vue.createApp({
   
    data(){
        return{
        charJson,
          inputText: ""
        }
    },
    methods:{
        updateJson({key}){
           
               
            //    if (this.vowelValidation(key)){
            //        color="#"+Math.floor(Math.random()*16777215).toString(16);

            //    }
       
               this.charJson.push({caracter:key, isVowel:this.vowelValidation(key)});           
        },
        vowelValidation(char){
            let result=false;
            if(char == "A" || char == "E" || char == "I" || char == "O" || char == "U" 
            || char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
                result = true;
            }
            return result;
        }
    }
      
})

app.mount('#myApp')