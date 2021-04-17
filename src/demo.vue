<template>
<div class="login">
  <p v-if="errors.length" class="mistake">   
    <ul>
      <b>input data</b>
      <li v-for="error in errors" :key="error.message">{{ error }}</li>
    </ul>
  </p>
  <form  
    id="app" 
    @submit="checkForm"
  >
    <p>
      <label>Name</label>
      <input id="name" ref="first_name" v-model="person.firstname" >    
    </p>
    <br>
    <p>
      <label>L-Name</label>
      <input id="lname" ref="last_name" v-model="person.lastname" >
    </p>
    <p>
      <input
        type="submit"
        value="Submit"
      >
    </p>

  </form>
    <ul>
      <li v-for="(item, index)  in items" :key="item.message">     
        <div :class="{red:item.isActive}">
          <input :value="item.firstname" :disabled="!item.isEditing" :class="{view: !item.isEditing}">
          <input :value="item.lastname" v-if="item.hide_lastname == 0 " :disabled="!item.isEditing" :class="{view: !item.isEditing}">
        </div>
        <button type="button" v-on:click="edit(index)">Edit</button>
        <button type="button" @click="clickDelete(index)">DELETE</button>
        <br>
        <button type="button"  v-on:click="onChange(index)">CHANGE NAME</button>
        <br>
        <button type="button" v-on:click="Change(index)">CHANGE COLOR</button>
        <br>
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
          firstname: 'example',
          lastname: 'example',
          hide_lastname: 0,
          isActive: false,
          isEditing: false,
        },
        {
          firstname: 'example',
          lastname: 'example',
          hide_lastname: 0,
          isActive: false,
          isEditing: false,
        }
        
      ],
      errors: [],
      name: null,
      lname: null,
      
      person: {
        firstname: null,
        lastname: null,
        hide_lastname: 0,
        isActive: false,
        isEditing: false,
      },
    };
  },

  methods: {
    checkForm: function (e) {
      this.errors = [];
      if (this.person.firstname ) {
        this.items.push(JSON.parse(JSON.stringify(this.person)));
        this.person.firstname = "";
        this.person.lastname = "";
      } else {
        this.errors.push("VUI LONG NHAP Name");
      }
      e.preventDefault();
    },

    clickDelete: function (index) {
      this.items.splice(index, 1);
    },

    onChange: function (index) {
      this.items[index].hide_lastname = !this.items[index].hide_lastname;
    },

    Change: function (index) {
      this.items[index].isActive = !this.items[index].isActive;
    },

    edit: function (index){  
       
      this.items[index].isEditing = !this.items[index].isEditing;
    }

  },
  
};
</script>
<style>
.login {
  max-width: 980px;
  margin: 0 auto;
}

li, form , .mistake {
  display: flex;
  justify-content: space-around;
  
}

.span, .red {
  background: red;
}

.mistake{
  color:red;
  align-items: center;
}

.view {
  border-color: transparent;
  background-color: initial;
  color: initial
}

</style>
