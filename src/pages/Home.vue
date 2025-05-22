<script setup lang="ts">
import AppLayout from '../layout/AppLayout.vue';
import { Trophy } from 'lucide-vue-next';
import { ref, computed } from 'vue';

// Definindo a lista de competidores sem a propriedade position
const competitors = ref([
    { name: 'Álvaro Santos', victories: 0, defeats: 0 },
    { name: 'Mateus Rabelo', victories: 0, defeats: 0 },
    { name: 'Pedrão Delas', victories: 0, defeats: 0 },
    { name: 'Caio Reviews', victories: 0, defeats: 0 },
    { name: 'Don. Julia', victories: 0, defeats: 0 },
    { name: 'MooLitle', victories: 0, defeats: 0 },
    { name: 'Elen Aquino', victories: 0, defeats: 0 },
    { name: 'Alanis', victories: 0, defeats: 0 },
    { name: 'Arthur Games', victories: 0, defeats: 0 },
    { name: 'Rafael Vale J', victories: 0, defeats: 0 },
    { name: 'Paulo Amores', victories: 0, defeats: 0 },
    { name: 'Carlos .40', victories: 0, defeats: 0 },
    { name: 'Alvilania', victories: 0, defeats: 0 },
]);

// Computed property para ordenar competidores por vitórias
const sortedCompetitors = computed(() => {
    return competitors.value.sort((a, b) => b.victories - a.victories);
});
</script>

<template>
    <AppLayout>
        <section class="flex flex-col items-center justify-center gap-2 w-full">

            <div class="p-4 flex rounded-md flex-col items-start justify-center w-full">
                <span class="flex flex-row items-center justify-center gap-2">
                    <h1 class="text-white text-2xl md:text-3xl text-left w-full font-bold">Rank</h1>
                    <Trophy class="text-white text-2xl md:text-3xl text-left w-full font-bold" />
                </span>
            </div>

            <!-- Lista de competidores -->
            <div class="w-full bg-[#222222]/80 p-4 rounded-md">
                <div class="list-disc list-inside flex flex-col gap-3">
                    <div class="competitors-list" v-for="(competitor, index) in sortedCompetitors" :key="competitor.name">
                        <h1 class="font-bold text-[14px]">{{ competitor.name }}</h1>

                        <div class="flex flex-row font-bold text-[#EA7E19] items-center justify-start text-left w-fit gap-2">
                            <h1 class="font-bold flex flex-row items-center">{{ index + 1 || 'Sem rank' }} <span class="text-sm">#</span></h1>
                            <p>🏆</p>
                            
                            <span class="flex flex-row items-center text-sm text-black font-bold rounded-md px-2 py-1 bg-gradient-to-r from-[#b6fd43] to-[#affb29] justify-center gap-2">
                                <h1>{{ competitor.victories || '00' }}</h1>
                            </span>

                            <span class="flex flex-row text-white text-sm font-bold rounded-md px-2 py-1 bg-gradient-to-r from-[#c7155c] to-[#fd4c8f] justify-center gap-2">
                                <h1>{{ competitor.defeats || '00' }}</h1>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
    </AppLayout>
</template>