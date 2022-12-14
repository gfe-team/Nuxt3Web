<template>
  <div class="default-layout">
    <Header />
    <div class="main">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style>
.default-layout {
  width: 100%;
  margin: 0;
}
.main {
  min-width: 1200px;
  min-height: 80vh;
  padding: 34px 0px;
  margin: 0 auto;
}
</style>
