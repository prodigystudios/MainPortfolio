<template>
    <div class="container">
        <h2>Mina kunskaper</h2>
        <div class="main-container">
            <transition name="slide-left">
                <div v-if="isViewing || isMobileView" class="sub-container">

                    <h2>Språk</h2>
                    <div class="aling-items">
                        <img src="../assets/ikoner/icons8-html-5-32.png" width="44px" height="44px" alt="html icon">
                        <p>Html</p>
                    </div>

                    <div class="aling-items">
                        <img src="../assets/ikoner/icons8-css3-32.png" width="44px" height="44px" alt="css icon">
                        <p>Css</p>
                    </div>

                    <div class="aling-items">
                        <img src="../assets/ikoner/icons8-javascript-32.png" width="44px" height="44px" alt="js icon">
                        <p>Js</p>
                    </div>

                    <div class="aling-items">
                        <img src="../assets/ikoner/icons8-c-sharp-logo-32.png" width="44px" height="44px"
                            alt="c-sharp icon">
                        <p>C#</p>
                    </div>
                </div>
            </transition>
            <transition name="slide-up">
                <div v-if="isViewing || isMobileView" class="sub-container">
                    <h2>Frameworks</h2>

                    <div class="aling-items">
                        <img src="../assets/ikoner/icons8-.net-framework-32.png" width="44px" height="44px"
                            alt="net framework icon">
                        <p>ASP.NET</p>
                    </div>

                    <div class="aling-items">
                        <img src="../assets/ikoner/icons8-.net-framework-32.png" width="44px" height="44px"
                            alt="net framework entity framwork icon">
                        <p>Entity Framework</p>
                    </div>

                    <div class="aling-items">
                        <img src="../assets/logo.png" width="44px" height="44px" alt="vue js icon">
                        <p>Vue Js</p>
                    </div>
                </div>
            </transition>
            <transition name="slide-right">
                <div v-if="isViewing || isMobileView" class="sub-container">

                    <h2>Databaser</h2>
                    <div class="aling-items">
                        <img src="../assets/ikoner/icons8-sql-32.png" width="44px" height="44px" alt="sql icon">
                        <p>SQL</p>
                    </div>

                    <div class="aling-items">
                        <img src="../assets/ikoner/icons8-mongodb-32.png" width="44px" height="44px"
                            alt="mongo db icon">
                        <p>Mongo DB</p>
                    </div>

                    <div class="aling-items">
                        <img src="../assets/ikoner/icons8-firebase-32.png" width="44px" height="44px"
                            alt="mongo db icon">
                        <p>Firebase</p>
                    </div>
                </div>
            </transition>
        </div>
    </div>

</template>

<script>
export default {
    name: 'KnowledgeSection',
    props: ['isViewing', 'isMobileView'],
}


</script>

<style scoped>
.container
{
    width: 100%;
    height: 800px;
    background: linear-gradient(45deg, #0c224467, #06375356, #0c465c63, #0f8f7131);
    padding-top: 135px;
}

img
{
    width: 44px;
    height: 44px;
}

.container h2
{
    padding-top: 50px;
    text-align: center;
    font-size: 30px;
}

.main-container
{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0px 150px;
    gap: 50vh;
    row-gap: 15px;
}

.sub-container
{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    row-gap: 30px;
    margin-bottom: 40px;
}

.sub-container h2
{
    text-decoration: underline;
    font-size: 30px;
    line-height: 100px;
}

.sub-container p
{
    font-size: 20px;
    margin: 0;
}

.aling-items
{
    display: flex;
    gap: 5px;
    align-items: center;
}

.slide-left-enter-active,
.slide-left-leave-active
{
    transition: all 1.5s ease;
}

.slide-left-enter-from,
.slide-left-leave-to
{
    transform: translateX(-100%);
    opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active
{
    transition: all 1.5s ease;
}

.slide-right-enter-from,
.slide-right-leave-to
{
    transform: translateX(100%);
    opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active
{
    transition: all 1s ease;
}

.slide-up-enter-from,
.slide-up-leave-to
{
    transform: translateY(100%);
    opacity: 0;
}

@media screen and (max-width: 768px)
{
    .container
    {
        margin-bottom: 5px;
        height: 100%;
        padding-top: 0px;
    }
}

@media screen and (min-width: 769px) and (max-width: 1440px)
{
    .container
    {
        margin-bottom: 5px;
        height: 100%;
        padding-top: 0px;
    }

    .main-container
    {
        gap: 40vh;
    }
}
</style>


