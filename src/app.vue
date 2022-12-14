<template>
  <a-config-provider :locale="zhCN">
    <Html :lang="locale">
      <Body>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </Body>
    </Html>
  </a-config-provider>
</template>

<script lang="ts" setup>
import 'virtual:svg-icons-register'

import zhCN from 'ant-design-vue/es/locale/zh_CN'

import { AppSetup } from '~/utils/app'
const { LanguageManager } = AppSetup()
LanguageManager()
const locale = useState<string>('locale.setting')
</script>
