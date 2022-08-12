<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="actionIncrement">Increment</button>
    <button @click="descrementfdsfdsf">Decrement</button>
    <button @click="incementByValue({ value: 5 })">Increment by value</button>
    <p>Get counter: {{ getCounter }}</p>
    <p>Total items: {{ totalItems }}</p>
    <button @click="incrementAuth">Increment Auth</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  mounted() {
    // console.log(this.$store.state.counter);
    // this.$store.state.items.length
    // this.$store.getter.
  },

  methods: {
    ...mapMutations({
      incrementAuth: "auth/increment",
      descrementfdsfdsf: "descrement",
      increment: "increment",
      incementByValue: "incementByValue",
    }),
    ...mapActions(["actionIncrement"]),
  },

  computed: {
    ...mapState({
      // arrow functions can make the code very succinct!
      counter: (state) => state.counter,
    }),

    ...mapGetters(["getCounter", "totalItems"]),
  },
};
</script>
