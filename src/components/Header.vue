<template>
  <div id="h-menu">
    <ul class="menu-top">
      <li>
        <a href="#" class="menu-button">
          <span class="menu-label"><NuxtLink to="/">Home</NuxtLink></span>
        </a>
      </li>

      <li>
        <a href="#" class="menu-button">
          <span class="menu-label"><NuxtLink to="/dev">Dev</NuxtLink></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style language="scss">
.menu-top {
  list-style: none;
}
.menu-top li {
  display: inline-block;
  padding: 2px 4px;
}
</style>
