<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <div class="card-header">
        <div class="card-title">
          <div class="row">
            <div class="col-md-6">
              Users Lists
            </div>
            <div class="col-md-6">
              <NuxtLink class="btn btn-primary float-end" to="/users/create">Create</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Username</td>
                <td>Email</td>
                <td>
                  <NuxtLink class="btn btn-warning me-2 text-white">Edit</NuxtLink>
                  <button type="button" class="btn btn-danger">Delete</button>
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

</script>

<style lang="scss" scoped>

</style>