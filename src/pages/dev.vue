<template>
  <div class="dev-page">
    <Title>测试页面</Title>

    <a-card title="导航" style="width: 300px">
      <NuxtLink to="/">BASE</NuxtLink>
    </a-card>

    <a-card title="Antd组件示例" style="width: 300px">
      <a-button type="primary">Primary Button</a-button>
      <br />
      <br />
      <a-image
        :width="200"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    </a-card>

    <a-card title="tsx组件支持" style="width: 300px">
      <HelloWorld name="World" />
    </a-card>

    <a-card title="svg使用" style="width: 300px">
      <SvgIcon name="en" />
      <SvgIcon name="apollo" />
    </a-card>

    <!-- <Banner /> -->

    <a-card title="静态图片" style="width: 300px">
      <!-- <img alt="background banner" :src="'../assets/imgs/temp.jpg'" /> -->
      <img alt="background banner" class="cusimg" :src="'/imgs/test.png'" />
    </a-card>

    <a-card title="渐进式图片" style="width: 300px">
      <AsImage
        class="cusimg"
        :src="'/imgs/test.png'"
        :lazy="true"
        :progressive="false"
        :responsive="false"
      >
        <template #loading>
          <div class="placeholder"></div>
        </template>
      </AsImage>

      <br />
      <br />

      <AsImage
        class="cusimg"
        :src="tempImg"
        :lazy="true"
        :progressive="false"
        :responsive="false"
      >
        <template #loading>
          <div class="placeholder"></div>
        </template>
      </AsImage>
    </a-card>

    <a-card title="切换语言" style="width: 300px">
      <h1>{{ $t('dev.page.message') }}</h1>
      <button @click="onChangeLanguage">中/英</button>
    </a-card>

    <a-card title="列表展示" style="width: 300px">
      <ContentList v-slot="{ list }">
        <div
          v-for="(item, index) in list"
          v-bind:key="index"
          style="border-bottom: 1px solid #ccc"
        >
          <div>{{ item.title }}</div>
          <div>{{ item.description }}</div>
          <div>
            <NuxtLink :to="item._path">{{ item._path }}</NuxtLink>
          </div>
        </div>
      </ContentList>
    </a-card>

    <a-card title="store" style="width: 300px">
      <p>
        N: {{ counter.n }}
        <br />
      </p>
      <button @click="counter.increment()">+1 number click</button>
    </a-card>

    <a-card title="触发error" style="width: 300px">
      <button @click="triggerError">trigger error</button>
    </a-card>

    <a-card title="数据表格" style="width: 300px">
      <n-table :single-line="false">
        <thead>
          <tr>
            <th>Title</th>
            <th>UpdatedAt</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data?.list" v-bind:key="index">
            <td>{{ item.title }}</td>
            <td>{{ item.updatedAt }}</td>
          </tr>
        </tbody>
      </n-table>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import tempImg from '~/assets/imgs/temp.jpg'
import { useCounter } from '~/store/counter'
// import { isDark, toggleDark } from '../composables/dark';
import { titleTransform } from '~/utils/title'

import envConfig from '../utils/env'
const counter = useCounter()
// console.log(useLang)
// const t = useLang();
// console.log(t)
/* console.log(envConfig); */

// console.log(isDark.value);
// !isDark.value && toggleDark();

// const route = useRoute();
// console.log(route);

// api
// const { data, pending, error, refresh } = await useAsyncData("users", () =>
//   $fetch("/api/user")
// );
// const { data, pending, error, refresh } = await useAsyncData("mountains", () =>
//   // $fetch("https://api.nuxtjs.dev/mountains")
//   $fetch("/api/user/index.get")
// );

const { data, pending, error, refresh } = await useFetch('/api/user')

// const config = useRuntimeConfig();
// console.log(config);
// const { $hello } = useNuxtApp();
// console.log($hello());

// const message = useMessage();
// console.log(message.value)

const triggerError = () => {
  throwError('dev error')
}

definePageMeta({
  middleware: ['default'],
})
useHead({
  title: titleTransform('测试页面'),
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'content content content' },
    { name: '"keywords', content: 'Nuxt3,SSR,Typescript,Vue' },
  ],
  bodyAttrs: {
    class: 'test',
  },
})

const localeSetting = useState<string>('locale.setting')
const onChangeLanguage = () => {
  localeSetting.value = localeSetting.value == 'en' ? 'zh-CN' : 'en'
}
</script>

<style lang="scss" scoped>
.cusimg {
  width: 200px;
  position: relative;
}
.placeholder {
  width: 198px;
  height: 298px;
  position: relative;
  border: 1px solid #ccc;
  /* background-color:rgba(106, 189, 255); */
  background-image: url('~/assets/imgs/temp.placeholder.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(10px);
  clip-path: inset(0);
}
</style>
