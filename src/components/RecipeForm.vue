<template>
    <div class="container mt-3">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-10 col-lg-8">
     <form @submit.prevent class="p-3">
            <p class="mytext">Add new recipe</p>
             <div class="form-group row mt-2">
               <label class="form-label" for="inputfield" :style="{fontSize:'25px'}">Title</label>
               <div class="col-sm-12">
                <input class="form-control" id="inputfield"  placeholder="My latest recipe" v-model="recipe.title">
               </div>
             </div>
             <div class="form-group row mt-2">
               <label class="form-label" for="descfield" :style="{fontSize:'25px'}">Description</label>
               <div class="col-sm-12">
                <textarea class="form-control" id="descfield" placeholder="My description" v-model="recipe.desc"></textarea>
               </div>
             </div>
             <div class="form-group row mt-2">
               <label class="form-label" for="ingredientfield" :style="{fontSize:'25px'}">ingredients</label>
               <div>
               <input  class="form-control" v-model="recipe.ingredients[0]">
               <p></p>
              </div>
               <div class="col-sm-12" v-for="(ingre,index) in recipe.ingredients.slice(1)" :key="index">
                <input class="form-control" id="ingredientfield" v-model="recipe.ingredients[index+1]">
                <p></p>
               </div>
             </div>
             <button class="btn btn-success mt-3" @click="addIngredient">Add ingredient</button>
             <div class="form-group row mt-2">
               <label class="form-label" for="Methodfield" :style= "{fontSize:'25px'}">Method</label>
               <div>
               <textarea id="method" class="form-control" v-model="recipe.methods[0]"></textarea>
               <p></p> 
               </div>
               <div class="col-sm-12" v-for="(step, index) in recipe.methods.slice(1)" :key="index">
                 <textarea class="form-control" id="Methodfield" @dblclick="removetext(index+1)" v-model="recipe.methods[index+1]"></textarea>
                 <p></p> 
               </div>
             </div>
             <div>
              <button class="btn btn-success mt-2" @click="addMethod">Add step</button>
             </div>
             <div class="mt-3">
              <button class="btn btn-success" @click="addNewRecipe(recipe)">Add NewRecipe</button>
             </div>
          </form>
          </div>
          </div>
          </div>
</template>

<script>
import {reactive} from 'vue'
import { useStore } from 'vuex';
import {useRouter} from 'vue-router'

export default{
setup(){
    const store = useStore()
    const router = useRouter()
    const recipe = reactive({
             title:'',
             desc:'',
             ingredients:[],
             methods:[]
    })
     function addMethod(){
      recipe.methods.push('')
     }
     function updateMethod(index, value) {
     recipe.methods[index+1] = value;
     }
     function addIngredient(){
      recipe.ingredients.push("")
     }
     function removetext(index){
     recipe.methods.splice(index,1)
     }
      function addNewRecipe(recipe){
       recipe.slug = recipe.title.toLowerCase().replace(/\s/g, '-')
       if(!recipe.slug){
        alert("you have to enter title")
        return
       }
      store.commit('addNewRecipe',{...recipe})

      recipe.title = '';
      recipe.desc = '';
      recipe.ingredients = [];
      recipe.methods = [];
      router.push('/')
    }
           return {recipe, addMethod, updateMethod, addIngredient, removetext,addNewRecipe}
     }
    }

</script>
<style>
form{
  background-color:#060663;
  border:5px solid rgb(21, 21, 113);
 border-radius: 15px;
}
label{
  color:white;
  font-size:15px
}
</style>