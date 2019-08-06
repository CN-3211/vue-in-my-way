<template>
  <div>{{a}}</div>
</template>
<script>
export default {
  data() {
    return {
      a: 1
    };
  },
  methods: {
    setA() {
      this.a += 100;
    }
  }
}
</script>
