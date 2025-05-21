<script setup lang="ts">
import Header from '../components/Header.vue';

</script>

<template>
    <main class="flex flex-col items-center justify-center gap-1 w-full mb-12 h-full">
        <Header/>
        <div class="flex flex-col items-center justify-center w-full px-3 h-full">
            <slot/>
        </div>
    </main>
</template>
