<!--
 *
 * Created by Ryder Smith on 11/20/2019.
 *
 * Copyright (c) 2019, Knowledge Based Systems, Incorporated,
 * College Station, Texas USA.  All rights reserved.
 *
-->
<template>
  <div class="container mx-auto min-h-screen text-sm p-4 shadow-md bg-gray-100">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
  computed: {
  },
}
</script>

<style>
body {
  @apply bg-gray-300;
}
</style>
