<template>
  <div>
    <ContentDoc>
      <template #default="{ doc }">
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </template>

      <template #empty>
        <h1>Post in empty</h1>
      </template>

      <template #not-found>
        <h1>404</h1>
      </template>
    </ContentDoc>
  </div>
</template>
