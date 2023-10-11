<template>
    <div class="container mt-3">
      <div class="row text-center">
        <div class="col">
            <p class="mytext">Recipes</p>
            <router-link to="/RecipeForm" class="btn btn-success">Add new recipe</router-link>
        </div>
      </div>
    </div>
    <div class="container mt-5 ">
      <div class="row  row-cols-md-3 row-cols-sm-3 gap-3 justify-content-center">
        <div class="col  food"  v-for = "recipe in recipes" :key="recipe.slug">
         <p class="mytext">{{ recipe.title }}</p>
         <p class="desc">{{ recipe.desc}}</p>
         <router-link :to="`/recipe/${recipe.slug}`" class="btn btn-outline-success" >ShowRecipe</router-link>
        </div>
      </div>
    </div>
    
          <!-- <recipe-form  v-if="isVisible" :recipe="recipe" @cancel="hiddenForm"></recipe-form> -->

</template>

<script>

import { computed } from 'vue'
import { useStore } from 'vuex'


export default{
  setup(){
    const store = useStore()
    const recipes = computed(()=>store.getters.allrecipes)
    return{recipes}
  }
}

</script>
<style>
.mytext{
   font-size:40px;
   color:white
}
.food{
  background-color:'#060663';
  color:rgb(179, 171, 171);
  width:50px;
  height:200px;
  border: 3px solid #202089;
  border-radius: 5px;
  background-color:#060663; ; 
}
.desc{
  font-size: 20px;
}
.recipefood{
  margin:0 auto
}</style>