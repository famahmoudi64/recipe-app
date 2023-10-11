
 <template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <div class="card">
          <h1 class="display-4">{{ recipe.title }}</h1>
          <p class="lead">{{ recipe.desc }}</p>
          <hr/>
          <div>
            <h3 class="mb-3">Ingredients</h3>
            <ul class="list-group">
              <li v-for="ingredient in recipe.ingredients" :key="ingredient" class="list-group-item">{{ ingredient }}</li>
            </ul>
          </div>
          <div>
            <h3 class="mt-4 mb-3">Methods</h3>
            <ol class="list-group">
              <li v-for="method in recipe.methods" :key="method" class="list-group-item">{{ method }}</li>
            </ol>
          </div>
          <div class="text-center">
          <router-link to="/" class="btn btn-outline-success btn-lg mt-3">Back</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    recipe() {
      return this.$store.state.recipes.find((recipe) => recipe.slug === this.$route.params.slug);
    },
  },
}
</script>

<style scoped>
.container {
  padding-top: 20px;
  padding-bottom: 20px;
}
.card {
  margin: 0 auto; /* Center the card horizontally */
  max-width: 400px; /* Set a maximum width for the card */
  padding: 20px;
  background-color:#060663;
  color:white;
}

@media (max-width: 767.98px) {
  .container {
    padding-right: 15px;
    padding-left: 15px;
  }
} 
</style>


