<template>
    <div class="container">
        <div class="project-card">
            <h2>Väder applikation</h2>
            <img class="main-image" src="../assets/Projectbilder/Home.png">
            <section class="aling-text-section">
                <p>Github link: https://github.com/prodigystudios/weatherapp</p>
                <p>Live site link:https://prodigystudios.github.io/weatherapp/#/</p>
            </section>
            <h5>Used tech</h5>
            <div class="sub-container">
                <img src="../assets/ikoner/icons8-html-5-32.png" width="44px" height="44px">
                <img src="../assets/ikoner/icons8-css3-32.png" width="44px" height="44px">
                <img src="../assets/ikoner/icons8-javascript-32.png" width="44px" height="44px">
            </div>
        </div>
        <div class="project-card">
            <h2>Väder applikation</h2>
            <img class="main-image" src="../assets/Projectbilder/Home.png">
            <section class="aling-text-section">
                <p>Github link: https://github.com/prodigystudios/weatherapp</p>
                <p>Live site link:https://prodigystudios.github.io/weatherapp/#/</p>
            </section>
            <h5>Used tech</h5>
            <div class="sub-container">
                <img src="../assets/ikoner/icons8-html-5-32.png" width="44px" height="44px">
                <img src="../assets/ikoner/icons8-css3-32.png" width="44px" height="44px">
                <img src="../assets/ikoner/icons8-javascript-32.png" width="44px" height="44px">
            </div>
        </div>
        <div class="project-card">
            <h2>Väder applikation</h2>
            <img class="main-image" src="../assets/Projectbilder/Home.png">
            <section class="aling-text-section">
                <p>Github link: https://github.com/prodigystudios/weatherapp</p>
                <p>Live site link:https://prodigystudios.github.io/weatherapp/#/</p>
            </section>
            <h5>Used tech</h5>
            <div class="sub-container">
                <img src="../assets/ikoner/icons8-html-5-32.png" width="44px" height="44px">
                <img src="../assets/ikoner/icons8-css3-32.png" width="44px" height="44px">
                <img src="../assets/ikoner/icons8-javascript-32.png" width="44px" height="44px">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectSection'
}
</script>

<style scoped>
.container
{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    margin-top: 180px;
    margin-bottom: 100px;
}

.project-card
{
    width: 500px;
    height: 620px;
    background: #0A0A32;
    box-shadow: 7px 12px 22px 4px rgba(0, 0, 0, 0.6);
    border-radius: 20px;
    text-align: center;
}
.project-card h5 {
    font-size: 22px;
}

.main-image
{
    width: 400px;
    height: 300px;
    border: solid 1.50px black;
    border-radius: 25px;
}

.sub-container
{
    display: flex;
    gap: 30px;
    justify-content: center;
}
.aling-text-section {
    text-align: left;
    margin-left: 50px;
}
</style>