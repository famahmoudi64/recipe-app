import {createStore} from 'vuex'

const store = createStore({

    state:{ 
        recipes:[
            {
                slug : 'ghorme-sabzi',
                title:'Ghorme sabzi',
                desc:'its persian food and very delicious',
                ingredients: ['oil','meat','onion','vegtables'],  
                methods: [
                          ' the first step you have to use onion',
                          'the second step you have to cook vegetables',
                          'the second step you have to add meat'
                         ]
            },

            {  
                slug:'fesenjon',
                title:'Fesenjon',
                desc:'its persian food and very delicious',
                ingredients:['oil','chiken','onion','walnut'],
                methods: [
               ' the first step you have to use onion',
               'the second step you have to cook walnut',
               'the second step you have to add meat'
                 ]
            },
         ] 
    },
    mutations:{
        addNewRecipe(state,recipe){
         state.recipes.push(recipe)
        }
    },
        getters:{
            allrecipes(state){
             return   state.recipes
            }
        }
})
export default store