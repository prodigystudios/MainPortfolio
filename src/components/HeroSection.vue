<template>
    <div ref="heroRef" class="hero-container">
        <transition name="leftSlide">
            <h1 v-if="showHeader">Blivande Front-End utvecklare med stort intresse för back-end utveckling
                <p>Hej och välkomna till min portfolio. <br />
                    Mitt namn är William Ali 29 årig utvecklare från sverige.<br />
                    Har jobbat inom byggbranchen i över 10 och är nu på min resa att byta karriär till utvecklare!<br />
                    Har länge haft intresse för att skapa saker och skapade egen musik under hela min uppväxt<br />
                    Hade alltid velat skapa mitt eget spel så där började jag, och det ledde mig senare in på att jag ville testa<br />
                    på webbutveckling och fastnat för det helt. Både för front- end och back-end utveckling.</p>
            </h1>
        </transition>
        <transition name="rightSlide">
            <img v-if="showImg" class="img" src="../assets/Portrait/Självporträttlol.jpg">
        </transition>
    </div>
    <transition name="fadeOut">
        <div v-if="showIntro && !isMobileView" class="intro-container">
            <div class="typing">
                <div class="typing-effect">
                    Hej mitt namn är William Ali. Välkommna till min portfolio!
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'heroSection',
    props: ['isMobileView'],

    data() {
        return {
            showIntro: true,
            showImg: false,
            showHeader: false,
        }
    },
    created() {
        this.AnimationDuration();
    },

    methods: {
        AnimationDuration() {
            
            if (!this.isMobileView )
                setTimeout(() => {
                    this.showIntro = false;
                    setTimeout(() => { 
                        this.showImg = true;
                        this.showHeader = true;
                    },500)
                }, 3000);
            else {
                this.showImg = true;
                this.showHeader = true;
                this.showIntro = false;
                
            }
        }
    }
}
</script>
<style scoped>


.typing
{
    position: absolute;
    top:400px;
    display: flex;
    width: 100%;
    height: 7vh;
    justify-content: center;
}

.typing-effect
{
    width: 41ch;
    animation: typing 2.5s steps(41), effect .5s;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: Kodchasan;
    font-weight: 900;
    font-size: 3em;
}

.hero-container
{
    display: flex;
    height:800px;
    margin-left: 50px;
    margin-bottom: 240px;
    gap: 200px;
}

.hero-container h1
{
    margin-top: 250px;
    font-size: 55px;
    width: 50%;
}

.hero-container p
{
    margin-top: 50px;
    font-size: 20px;
    font-weight: 400;
    line-height: 35px;
}

.img
{
    margin-top: 250px;
    width: 484px;
    height: 451px;
    border-radius: 300px;
    object-fit: cover;
}


/* animation*/
@keyframes typing
{
    from
    {
        width: 0;
    }
}

@keyframes effect
{
    50%
    {
        border-color: transparent;
    }
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

.fadeOut-enter-active,
.fadeOut-leave-active
{
    transition: opacity 0.3s ease-out;
}

.fadeOut-enter-from,
.fadeOut-leave-to
{
    opacity: 0;
}

@media screen and (max-width: 425px)
{

    .hero-container
    {
        display: flex;
        height:1000px;
        align-items: center;
        flex-direction: column-reverse;
        margin-left: 0;
        margin-top: 80px;
        margin-bottom: 50px;
        gap: 50px;
    }

    .hero-container h1
    {
        margin-top:20px;
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
        margin-bottom: 50px;
        width: 300px;
        height: 300px;
        border-radius: 300px;
        object-fit: cover;
    }
}
</style>