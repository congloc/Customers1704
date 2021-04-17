<template>
  <div class="login">
    <form id="app" @submit="changeForm">
      <p>
        <input ref="first_name" v-model="list.todo" placeholder="vui log nhap" />
      </p>
    </form>
    <ul>
      <li v-for="(item, index) in items" :key="item.message">
        <input type="checkbox" id="checkbox" v-model="checked" name="product" @click="totalIt()" />
        <input :value="item.todo" />
        <button type="button" @click="clickDelete(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      items: [
        {
          todo: "",
        },
      ],
      list: {
        todo: null,
      },
    };
  },

  methods: {
    changeForm: function (e) {
      if (this.list.todo) {
        // JSON.stringify() là một hàm kinh điển trong Javascript để chuyển một Object sang JSON
        // JSON.stringify() sử dụng chung với hàm JSON.parse(),
        // đây là cách ta sao chép một Object mà không ảnh hưởng đến Object cũ
        this.items.push(JSON.parse(JSON.stringify(this.list)));
        this.list.todo = "";
      } else {
        this.list.todo = "";
      }

      // khong cho goi Form khi Submit
      e.preventDefault();
    },

    clickDelete: function (index) {
      this.items.splice(index, 1);
    },
    totalIt: function () {
  var input = document.getElementsByName("product");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementsByName("total")[0].value = "$" + total.toFixed(2);
}
  },
};
</script>
<style>
.login {
  max-width: 980px;
  margin: 0 auto;
  background: rgb(228, 225, 225);
}
li {
  list-style: none;
  border: none;
}
input {
  border: none;
 
  height: 30px;
  font-size: 20px;
  text-align: center;

}
</style>
