<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <div class="card-header">
        <div class="card-title">
          Edit Book
          <NuxtLink class="btn btn-danger float-end" to="/books">Back</NuxtLink>
        </div>
      </div>
      <div class="card-body">
        <div v-if="isLoading">
          <Loading :title="isLoadingTitle"/>
        </div>
        <div v-else>
          <form @submit.prevent="updateBook">
            <div class="mb-3">
              <label for="title" class="form-label">Title</label>
              <input type="text" class="form-control" id="title" v-model="book.title">
            </div>
            <div class="mb-3">
              <label for="author" class="form-label">Author</label>
              <input type="author" class="form-control" id="author" v-model="book.author">
            </div>
            <div class="mb-3">
              <label for="category" class="form-label">Category</label>
              <input type="text" class="form-control" id="category" v-model="book.category">
            </div>
            <div class="mb-3">
              <label for="year" class="form-label">Year</label>
              <input type="number" class="form-control" id="year" v-model="book.year">
            </div>
            <button type="submit" class="btn btn-primary float-end">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, onMounted } from 'vue'

  const { id } = useRoute().params
  const book = reactive({
    title: '',
    author: '',
    category: '',
    year: ''
  })

  const isLoading = ref(false)
  const isLoadingTitle = ref('Loading')

  onMounted(async () => {
    const { data: oldBook } = await useFetch(`http://127.0.0.1:3001/books/${id}`)
  
    book.title = oldBook.value.title
    book.author = oldBook.value.author
    book.category = oldBook.value.category
    book.year = oldBook.value.year
  })

  async function updateBook() {
    isLoading.value = true
    isLoadingTitle.value = 'Saving...'

    await useFetch(`http://127.0.0.1:3001/books/${id}/update`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    })

    isLoading.value = false
    isLoadingTitle.value = 'Loading'

    await navigateTo('/books')
  }
</script>

<style scoped>

</style>