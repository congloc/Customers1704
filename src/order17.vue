<template>

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


</template>
<script>
import axios from "axios";
export default {
  data(){
    return{
      customerGroups : [],
      name :'',
    }
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/customer-groups?limit=:limit")
      .then((response) => {
        console.log(response)
        this.customerGroups = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  
}
</script>