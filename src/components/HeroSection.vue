<template>
    <div class="hero-container">
        <h1>Blivande front-end utvecklare med stort intresse för back-end utveckling
            <p>Hej och välkomna till min portfolio. <br/>
            Mitt namn är William Ali 29 årig utvecklare från sverige.<br/>
            Har jobbat inom byggbranchen i över 10 och är nu på min resa att byta karriär till utvecklare!<br/>
            Har länge haft intresse för att skapa saker.<br/>
            Började min resa för att jag ville skapa spel och det ledde mig senare in på att jag ville testa på<br/>
            webbutveckling och fastnat för det helt. Både för front- end och back-end utveckling.</p>
        </h1>
        <img class="img" src="../assets/Portrait/Självporträttlol.jpg">
    </div>
</template>
<script>
export default {
    name: 'heroSection'
}
</script>
<style scoped>
.hero-container
{
    display:flex;
    margin-top:150px;
    margin-left:50px;
    margin-bottom: 100px;
    gap:200px;
}
.hero-container h1 {
    font-size: 55px;
    width: 50%;
}
.hero-container p {
    margin-top: 50px;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
}
.img
{
    margin-top: 80px;
    width: 484px;
    height: 451px;
    border-radius: 300px;
    object-fit: cover;
}
</style>