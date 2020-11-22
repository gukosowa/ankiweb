<template>
  <div>
    <header class="text-white fixed w-full top-0 h-16 z-10">
      <nav class="h-full flex container items-center">
        <h1 class="h-8 flex align-center">
          <span class="w-8 spinner">
            <img
              src="@app/assets/images/ankilogo.svg"
              class="h-full App-logo"
              alt="logo"
            />
          </span>
          <span class="text-2xl pl-2 font-bold">Anki</span>
        </h1>
        <ul class="hidden md:flex w-full justify-end">
          <li><a href="/" class="mx-3 py-3 px-5">Products</a></li>
          <li>
            <a href="/" class="mx-3 py-3 px-5">Documentation</a>
          </li>
          <li><a href="/" class="mx-3 py-3 px-5">Faq</a></li>
          <li><a href="/" class="mx-3 py-3 px-5">AnkiWeb</a></li>
        </ul>
      </nav>
    </header>
    <div
      class="fixed h-16 w-full top-0 z-1"
      style="background-color: #143642"
    ></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  backdrop-filter: blur(14px);
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

.spinner {
  animation: rotation 40s infinite linear;
}

.App-logo {
  pointer-events: none;
  margin-bottom: 1rem;
  animation: App-logo-spin infinite 1.6s ease-in-out alternate;
}

@keyframes App-logo-spin {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
