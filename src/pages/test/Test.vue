<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { $api } from '@/api';
let userList = ref([] as any);
console.log(userList);

const getUserList = async () => {
  const res = await $api.getUserList();
  userList.value = res.data;
};

onMounted(async () => {
  await getUserList();
});
</script>

<template>
  <van-button type="primary" class="button mt-10 ml-10">test</van-button>
  <p class="test ml-10">test</p>
  <div>{{ userList }}</div>
</template>

<style lang="less" scoped>
.test {
  color: @primary;
}
</style>
