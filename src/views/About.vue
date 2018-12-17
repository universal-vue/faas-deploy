<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div>{{ foo }}</div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    return {
      foo: "bar"
    };
  }
};
</script>
