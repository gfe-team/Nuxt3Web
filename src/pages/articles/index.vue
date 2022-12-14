<template>
  <div>
    <ContentList v-slot="{ list }">
      <!-- {{ list.length }} -->
      <div v-for="item in list">
        <div>{{ item.title }}</div>
        <div>{{ item.description }}</div>
        <div>
          <NuxtLink :to="item._path">{{ item._path }}</NuxtLink>
        </div>
      </div>
    </ContentList>
  </div>
</template>
