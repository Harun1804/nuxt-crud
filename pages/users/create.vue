<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <div class="card-header">
        <div class="card-title">
          Create User
          <NuxtLink class="btn btn-danger float-end" to="/users">Back</NuxtLink>
        </div>
      </div>
      <div class="card-body">
        <div v-if="isLoading">
          <Loading :title="isLoadingTitle"/>
        </div>
        <div v-else>
          <form @submit.prevent="storeUser">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" v-model="user.name">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" v-model="user.email">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" v-model="user.password">
            </div>
            <button type="submit" class="btn btn-primary float-end">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const user = ref({
    name: '',
    email: '',
    password: ''
  })

  const isLoading = ref(false)
  const isLoadingTitle = ref('Loading...')

  const storeUser = () => {
    console.log('Storing user:', user.value);
  };
</script>

<style scoped>

</style>