<template>
  <div class="home-container">
    <div class="home-content">
      <h1 class="title">Welcome to Our Home Page</h1>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      preload: window.localStorage.getItem("preload") !== "false",
      degrade: window.localStorage.getItem("degrade") === "true" || !window.Proxy || !window.CustomElementRegistry,
      disable: !window.Proxy || !window.CustomElementRegistry,
    };
  },
  watch: {
    preload(val) {
      window.localStorage.setItem("preload", val);
      setTimeout(() => window.location.reload(), 1000);
    },
    degrade(val) {
      window.localStorage.setItem("degrade", val);
      setTimeout(() => window.location.reload(), 1000);
    },
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8; /* A soft blue background */
  color: #1a202c; /* Text color */
}

.home-content {
  text-align: center;
  max-width: 800px; /* Maximum width of the content */
}

.title {
  font-size: 3rem; /* Large title font size */
  color: #4b7bec; /* A nice blue color for the title */
  margin-bottom: 0.5rem;
}

.description {
  font-size: 1rem; /* Regular font size for the description */
  color: #374151; /* A slightly darker text color */
  margin-bottom: 2rem;
}
</style>
