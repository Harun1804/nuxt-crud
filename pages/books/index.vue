<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <div class="card-header">
        <div class="card-title">
          <div class="row">
            <div class="col-md-6">
              Books List
            </div>
            <div class="col-md-6">
              <NuxtLink class="btn btn-primary float-end" to="/books/create">Create</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Year</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(book, index) in books" :key="index">
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
                <td>{{ book.category }}</td>
                <td>{{ book.year }}</td>
                <td>
                  <NuxtLink class="btn btn-warning me-2 text-white" :to="`books/${book.id}`">Edit</NuxtLink>
                  <button type="button" class="btn btn-danger" @click="deleteBook($event, book.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: books } = await useFetch('http://localhost:3001/books')

async function deleteBook(event, id) {
  if (confirm('Are You Sure Want To Delete This ?')) {
    await useFetch(`http://127.0.0.1:3001/books/${id}/delete`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })

    location.reload()
  }
}
</script>

<style lang="scss" scoped>

</style>