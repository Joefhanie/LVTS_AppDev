<template>
  <q-page padding>
    <q-list>
      <q-item v-for="user in users" :key="user.id">
        <q-item-section>
          <q-item-label>{{ user.id }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])

const fetchUsers = async () => {
  try {
    const response = await axios.get('lvts.up.railway.app/users')
    users.value = response.data

    console.log(response.value)
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}

onMounted(fetchUsers)
</script>
