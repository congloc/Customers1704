<template>
  <!-- <ul>
    <li v-for="customerGroup in customerGroups.data" :key="customerGroup.id">
      {{ customerGroup.name }}
    </li>
  </ul> -->
  <div class="container">
    <h2>CUSTOMER GROUPS</h2>
    <table border="1" v-if="customerGroups != null">
      <tr>
        <td>ID</td>
        <td>NAME</td>
        <td>Created_at</td>
        <td>Updated_at</td>
      </tr>
      <tr v-for="customerGroup in customerGroups.data" :key="customerGroup.id">
        <td>
          {{ customerGroup.id }}
        </td>
        <td>
          {{ customerGroup.name }}
        </td>
        <td>
          {{ customerGroup.created_at }}
        </td>
        <td>
          {{ customerGroup.updated_at }}
        </td>
      </tr>
    </table>
    <div v-else>
        <p>kiem tra lai</p>
    </div>
    
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      customerGroups : []
    };
  },
   created() {
    axios.get('http://192.168.1.100:8000/api/customer-groups')
    .then(response => {
      this.customerGroups = response.data
      
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
};
</script>
<style>
.container {
  max-width: 960px;
  margin: 0 auto;
}
table {
  border: 1px solid;
}

td{
  width: 150px;
}
</style>

