<template>
<div class="menu-container">
    <div v-for="m in menyobj" :key="m.dag">
    <h1>{{m.dag}}</h1>
    <h2>{{m.namn}}</h2>
    <p>{{m.beskrivning}}</p>
</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            menyobj:
            [
                {
                dag: "måndag",
                namn: "Ostburgare",
                beskrivning: "Kött, cheddarost, husets majjo, salladsblad & silverlök."
                },
                {
                    dag: "tisdag",
                    namn: "Orginalburgare",
                    beskrivning: "Kött, cheddarost, originaldressing, sallad, silverlök & bifftomat."
                }, 
                {
                    dag: "onsdag",
                    namn: "dirtyplate",                    
                    beskrivning: "Fries, tärnat kött, bacon, chipotlemajjo, färsk chili, hackad salladslök, saltad crème fraîche & cheddarost."
                },
                {
                    dag: "torsdag",
                    namn: "Kycklingburgare",
                    beskrivning: "Friterad kycklinglårfilé, rödkål marinerad i syltad ingefära, rädisor, husets majjo, sesam-sambalsås & salladsblad."

                },
                {
                    dag: "fredag",
                    namn: "Halloumiburgare",
                    beskrivning: "Friterad Halloumi, rödlök, avokado, grillad paprika, chipotlemajjo & salladsblad."
                }
            ]
        }
    }
}
</script>
<style>
.menu-container {
    margin-bottom: 200px;   
}
</style>