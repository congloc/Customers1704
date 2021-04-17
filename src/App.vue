<template>
  <div>
    <h2>CustomerLists by Orders</h2>
    <table border="1" v-if="customerGroups != null">
      <tr>
        <td>ID</td>
        <td>NAME</td>
        <td>email</td>
        <td>phone</td>
        <td>customer_group_id</td>
        <td>address_1</td>
        <td>province_id</td>
        <td>ward_id</td>
        <td>address_2</td>
        <td>facebook_link</td>
        <td>birthday</td>
        <td>customer_state_id</td>
        <td>user_id</td>
        <td>text</td>
        <td>price_policy_id</td>
        <td>tax</td>
        <td>payment_id</td>
        <td>after_sales_service_id</td>
        <td>Created_at</td>
        <td>Updated_at</td>
      </tr>
      <tr v-for="customerGroup in customerGroups.data" :key="customerGroup.id">
        <td>
          {{ customerGroup.id }}
        </td>
        <td>
          {{ customerGroup.full_name }}
        </td>
        <td>
          {{ customerGroup.email }}
        </td>
        <td>
          {{ customerGroup.phone }}
        </td>
        <td>
          {{ customerGroup.customer_group_id }}
        </td>
        <td>
          {{ customerGroup.address_1 }}
        </td>
        <td>
          {{ customerGroup.province_id }}
        </td>
        <td>
          {{ customerGroup.ward_id }}
        </td>
        <td>
          {{ customerGroup.address_2 }}
        </td>
        <td>
          {{ customerGroup.facebook_link }}
        </td>
        <td>
          {{ customerGroup.birthday }}
        </td>
        <td>
          {{ customerGroup.customer_state_id }}
        </td>
        <td>
          {{ customerGroup.user_id }}
        </td>
        <td>
          {{ customerGroup.text }}
        </td>
        <td>
          {{ customerGroup.price_policy_id }}
        </td>
        <td>
          {{ customerGroup.tax }}
        </td>
        <td>
          {{ customerGroup.payment_id }}
        </td>
        <td>
          {{ customerGroup.after_sales_service_id }}
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
import axios from "axios";
export default {
  props: {
    // tong so trang
    totalPages: {
      type: Number,
      required: true,
    },
    // so thu tu cua trang hien tai
    currentPage: {
      type: Number,
      required: true,
    },
    // so record trong 1 trang
    item: {
      type: Number,
      required: true,
    },
  },
  state: {
    currentPage: 1,
  },
  data() {
    return {
      customerGroups: [],
      full_name: "",
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/customers?limit=:limit")
      .then((response) => {
        console.log(response);
        this.customerGroups = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  // method: {
  //   pagination: {
  //     totalPages = this.customerGroups.count/this.item
  //     currentPage = count
  //   }
  // }
  methods: {},
};
</script>