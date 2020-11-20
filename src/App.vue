<template>
  <div class="App">
    <the-header />
    <header class="bg-white App-header">
      <img src="@public/logo.svg" class="App-logo" alt="logo" />
      <p>
        Edit
        <code class="m-6">src/App.vue</code> and save to reload.
      </p>
      <a
        class="App-link"
        href="https://vuejs.org"
        target="_blank"
        rel="noopener noreferrer"
        >{{ message }}</a
      >
    </header>
  </div>
</template>

<script>
import TheHeader from '@app/components/TheHeader'

export default {
  components: {
    TheHeader,
  },

  data() {
    return {
      message: 'Learn Vue',
    }
  },
}
</script>

<style>
.App {
  text-align: center;
}
.App-header {
  background-color: #eee;
  color: #32485f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}
.App-link {
  color: #00c185;
}
.App-logo {
  height: 40vmin;
  pointer-events: none;
  margin-bottom: 1rem;
  animation: App-logo-spin infinite 1.6s ease-in-out alternate;
}
@keyframes App-logo-spin {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
}
</style>
