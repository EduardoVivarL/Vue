const charJson=[]
const charArray=[]
const jsonRandomColors=[]

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
        },
        randomColors(){
            let baseColor='#000000'
            this.charArray=this.inputText.split("");
            this.jsonRandomColors=[];
            for(i=0;i<this.charArray.length;i++){
                this.jsonRandomColors.push({char:this.charArray[i], 
                                            color:this.vowelValidation(this.charArray[i]) ?  this.getRandomColor():baseColor} )
            }
           
           console.log( this.charArray, this.jsonRandomColors);

        },
        getRandomColor(){
            return "#"+Math.floor(Math.random()*16777215).toString(16);
        }
    }
      
})

app.mount('#myApp')