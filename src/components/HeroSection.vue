<template>
    <div class="hero-container">
        <transition name="leftSlide">
            <h1 v-if="showHeader">Blivande front-end utvecklare med stort intresse för back-end utveckling
                <p>Hej och välkomna till min portfolio. <br />
                    Mitt namn är William Ali 29 årig utvecklare från sverige.<br />
                    Har jobbat inom byggbranchen i över 10 och är nu på min resa att byta karriär till utvecklare!<br />
                    Har länge haft intresse för att skapa saker.<br />
                    Började min resa för att jag ville skapa spel och det ledde mig senare in på att jag ville testa
                    på<br />
                    webbutveckling och fastnat för det helt. Både för front- end och back-end utveckling.</p>
            </h1>
        </transition>
        <transition name="rightSlide">
            <img v-if="showImg" class="img" src="../assets/Portrait/Självporträttlol.jpg">
        </transition>
    </div>
</template>
<script>
export default {
    name: 'heroSection',
    mounted() {
        this.showImg = true;
        this.showHeader = true;
    },
    data() {
        return {
            showImg: false,
            showHeader: false,
        }
    }
}
</script>
<style scoped>
.hero-container
{
    display: flex;
    margin-top: 150px;
    margin-left: 50px;
    margin-bottom: 240px;
    gap: 200px;
}

.hero-container h1
{
    font-size: 55px;
    width: 50%;
}

.hero-container p
{
    margin-top: 50px;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
}

.img
{
    margin-top: 80px;
    width: 484px;
    height: 451px;
    border-radius: 300px;
    object-fit: cover;
}


.rightSlide-enter-active,
.rightSlide-leave-active
{
    transition: all 1s ease;
}

.rightSlide-enter-from,
.rightSlide-leave-to
{
    transform: translateX(100%);
    opacity: 0;
}

.leftSlide-enter-active,
.leftSlide-leave-active
{
    transition: all 1s ease;
}

.leftSlide-enter-from,
.leftSlide-leave-to
{
    transform: translateX(-100%);
    opacity: 0;
}


@media screen and (max-width: 425px)
{

    .hero-container
    {
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
        margin-left: 0;
        margin-top:80px;
        margin-bottom: 50px;
        gap: 50px;
    }

    .hero-container h1
    {
        font-size: 28px;
        width: 100%;
        text-align: center;
    }

    .hero-container p
    {
        margin-top: 50px;
        font-size: 15px;
        font-weight: 300;
        line-height: 30px;
        text-align: center;
    }

    .img
    {
        margin-top: 80px;
        width: 300px;
        height: 300px;
        border-radius: 300px;
        object-fit: cover;
    }
}
</style>