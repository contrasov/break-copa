<script setup lang="ts">
import AppLayout from '../layout/AppLayout.vue';
import { Trophy } from 'lucide-vue-next';
import { ref, computed } from 'vue';

const competitors = ref([
    { name: 'Álvaro', victories: 0, defeats: 1, drinks: 1 },
    { name: 'Mateus', victories: 2, defeats: 0, drinks: 6 },
    { name: 'Caio', victories: 2, defeats: 1, drinks: 3 },
    { name: 'Julia', victories: 0, defeats: 1, drinks: 1 },
    { name: 'Murilo', victories: 0, defeats: 1, drinks: 1 },
    { name: 'Alanis', victories: 0, defeats: 1, drinks: 1 },
    { name: 'Arthur', victories: 1, defeats: 1, drinks: 2 },
    { name: 'Paulo', victories: 4, defeats: 0, drinks: 6 },
    { name: 'Carlos', victories: 1, defeats: 1, drinks: 2 },
    { name: 'Alvilania', victories: 0, defeats: 1, drinks: 1 },
    { name: 'Gabi', victories: 0, defeats: 1, drinks: 1 },
]);

const sortedCompetitors = computed(() => {
    return competitors.value.sort((a, b) => b.victories - a.victories);
});
</script>

<template>
    <AppLayout>
        <section class="flex flex-col items-start justify-center gap-3 w-full">

            <div class="flex rounded-md flex-col gap-2 items-start justify-center w-full">
                <span class="flex flex-row items-center justify-center gap-2">
                    <h1 class="text-white text-2xl text-left w-full font-bold">Rank</h1>
                    <Trophy class="text-white text-2xl md:text-3xl text-left w-full font-bold" />
                </span>
            </div>

            <div class="date">
                <h1>22/05/2025</h1>
            </div>

            <!-- Lista de competidores -->
            <div class="w-full bg-[#0f0f0f] border border-[#303030] p-4 rounded-md">
                <div class="list-disc list-inside flex flex-col">
                    <div class="competitors-list" v-for="(competitor, index) in sortedCompetitors" :key="competitor.name" :class="index == 0 ? 'text text-amber-300' : '*:'" >
                        <div class="flex flex-row gap-2 items-center" >
                            <span class="flex flex-row gap-1 items-center">
                                <h1 class="text-xl pr-3 font-bold flex flex-row items-center">{{ index + 1 }} </h1>
                            </span>
                            
                            <h1 class="font-bold text-[14px]">{{ competitor.name }}</h1>
                        </div>

                        <div class="flex flex-row font-bold text-white items-center justify-start text-left w-fill">
                            
                            <span class="victory">
                                <h1>{{ competitor.victories || '0' }}</h1>
                            </span>

                            <div class="defeat">
                                <h1>{{ competitor.defeats || '0' }}</h1>
                            </div>

                            <span class="drinks">
                                <h1>{{ competitor.drinks || '0' }}</h1>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            
            <p class="w-full justify-center flex text-sm text-gray-500">Tarobinha Ltda.</p>
        
        </section>
    </AppLayout>
</template>