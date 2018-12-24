<template>
  <div id="mine" @click="changeParentField">{{mine}}</div>
</template>

<script>
export default {
  name: "Mine",
  props: {
    mine: {
      type: String,
      required: true,
      validator: function(value) {
        return value != "";
      }
    }
  },
  methods: {
    //方法
    changeParentField: function() {
      var users;
      users = this.$http
        .get("http://jsonplaceholder.typicode.com/users")
        .then(data => {
          console.log(data);
          return data.json();
        })
        .then(data => {
          console.log(data);
          if (data) {
            for (var i = 0; i < data.length; i++) {
              if (data[i].name) {
                this.$emit("parentFieldChange", data[i].name);
              }
            }
          }
          return data;
        });
    }
  },
  computed: {
    //计算属性
  }
};
</script>

<style>
</style>