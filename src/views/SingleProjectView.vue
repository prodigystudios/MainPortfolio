<template>
    <div ref="top" class="wrapper">
        <h1>Project namn</h1>
        <img src="../assets/Projectbilder/Home.png">
        <h2>Beskrivning</h2>
        <p>Information om projektet kommer här!</p>
        <button><router-link to="/">Tillbaka</router-link></button>
    </div>
</template>

<script>
export default {
    mounted () {
        window.scrollTo(0, 0);
    },  
}
</script>

<style scoped>
    .wrapper {
        text-align: center;
    }
img
{
    width: 1700px;
    height: 700px;
    border-radius: 60px;
    object-fit: fill;  
}
</style>