
import { createRouter, createWebHistory } from "vue-router";
import HomeApp from './components/HomeApp.vue' 
import MyRecipe from './components/MyRecipe.vue'
import RecipeForm from './components/RecipeForm.vue'

const routes = [
  
     {path:'/', component:HomeApp},
    {path:'/recipe/:slug', name:'recipe', component:MyRecipe},
    {path:'/recipeform', name:'recipeform', component:RecipeForm}
  ];

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router