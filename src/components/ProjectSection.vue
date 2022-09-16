<template>
    <div class="headline">
        <h2>Mina projekt</h2>
    </div>
    <div class="container">
        <div @click="SetElementVisible(project.id)" class="project-card" v-for="project in projects" :key="project.id">
            <h2>{{ project.title }}</h2>
            <img class="main-image" :src="project.img">
            <section class="aling-text-section">
                <a @click="linkedPressed()" :href="project.githubLink" target="blank" alt="link to github">Github link:
                    klicka här</a>
                <a @click="linkedPressed()" :href="project.liveLink" target="blank" alt="link to live site">Live site:
                    klicka här</a>
            </section>
            <h5>Använda Tekniker</h5>
            <div class="sub-container">
                <div v-for="(icon, index) in project.icons" :key="index">
                    <img class="icon-scale" :src="icon.icon">
                </div>
            </div>
        </div>

        <!-- single project elements -->
        <transition name="close">
            <div v-if="projectClicked" class="project-container">
                <transition name="fade">
                    <div v-if="projectLoaded">
                        <button ref="btn" @click="SetElementVisible" class="project-btn">X</button>
                        <button v-if="!endOfProjectList && !isMobileView" class="right-button" @click="NextProject()">
                            <arrow />
                        </button>
                        <button v-if="!startOfProjectList && !isMobileView" class="left-button"
                            @click="PriveousProject()">
                            <arrow />
                        </button>


                        <section class="project-single-container"
                            v-for="project in projects.slice(indexSlice, indexSlice + 1)" :key="project.id">
                            <div class="heading-img-container">
                                <div class="image-container">
                                    <h2>{{ project.title }}</h2>
                                    <img class="project-image" :src="project.img">
                                </div>
                            </div>
                            <div class="aling-items">
                                <div class="description-container">
                                    <h4>Beskrivning</h4>
                                    <p>{{ project.description }}</p>
                                </div>

                                <div class="dif-container">
                                    <h4>Svårigheter</h4>
                                    <p>Svårt</p>
                                </div>

                                <div class="project-links">
                                    <h4>Länkar</h4>
                                    <div class="links-container">
                                        <a :href="project.githubLink" target="blank" alt="link to github">Github link:
                                            klicka här</a>
                                        <a :href="project.liveLink" target="blank" alt="link to live site">Live site:
                                            klicka här</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </transition>
            </div>
        </transition>

    </div>

</template>

<script>
import Arrow from './Arrow.vue';
export default {
    components: { Arrow },
    name: 'ProjectSection',
    props: ['isMobileView'],

    data() {
        return {
            //bools
            projectClicked: false,
            projectLoaded: false,
            startOfProjectList: false,
            endOfProjectList: false,
            isLinkedPressed: false,
            //interval
            interval: null,

            //where to slice array
            indexSlice: 0,

            projects: [
                {
                    id: 0,
                    title: 'Väder applikation0',
                    description: 'En väder applikation som använder gps lokalisering för att visa väder information för staden du är i, Du kan även fylla i en stad du väljer själv och få tillbaka väder information för dagen och dom 7 kommande dagarna',
                    img: require('@/assets/Projectbilder/Home.png'),
                    githubLink: 'https://github.com/prodigystudios/weatherapp',
                    liveLink: 'https://prodigystudios.github.io/weatherapp/#/',
                    icons: [
                        {
                            icon: require('@/assets/ikoner/icons8-html-5-32.png'),
                        },
                        {
                            icon: require('@/assets/ikoner/icons8-css3-32.png')
                        },
                        {
                            icon: require('@/assets/ikoner/icons8-javascript-32.png')
                        },
                    ]
                },
                {
                    id: 1,
                    title: 'Väder applikation1',
                    img: require('@/assets/Projectbilder/Home.png'),
                    githubLink: 'https://github.com/prodigystudios/weatherapp',
                    liveLink: 'https://prodigystudios.github.io/weatherapp/#/',
                    icons: [
                        {
                            icon: require('@/assets/ikoner/icons8-html-5-32.png'),
                        },
                        {
                            icon: require('@/assets/ikoner/icons8-css3-32.png')
                        },
                        {
                            icon: require('@/assets/ikoner/icons8-javascript-32.png')
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'Väder applikation2',
                    img: require('@/assets/Projectbilder/Home.png'),
                    githubLink: 'https://github.com/prodigystudios/weatherapp',
                    liveLink: 'https://prodigystudios.github.io/weatherapp/#/',
                    icons: [
                        {
                            icon: require('@/assets/ikoner/icons8-html-5-32.png'),
                        },
                        {
                            icon: require('@/assets/ikoner/icons8-css3-32.png')
                        },
                        {
                            icon: require('@/assets/ikoner/icons8-javascript-32.png')
                        },
                    ]
                },
            ]
        }
    },

    methods: {
        linkedPressed() {
            this.isLinkedPressed = true;
            this.interval = setInterval(() => {
                this.isLinkedPressed = false;
                if (!this.isLinkedPressed) {
                    clearInterval(this.interval);
                }
            }, 100)

            setTimeout(() => {
                
            }, 100);
        },
        SetElementVisible(id) {
            if (!this.isLinkedPressed) {
                if (!this.projectClicked) {
                    this.indexSlice = id;
                    this.projectClicked = true;
                    this.TransitionLoad(800);
                    if (id == 0) {
                        this.startOfProjectList = true;
                    }
                    if (id > 0 && id != this.lengthOfProject) {
                        this.startOfProjectList = false;
                    }
                    if (id == this.lengthOfProject) {
                        this.endOfProjectList = true;
                    }
                }
                else {
                    this.projectLoaded = false;               
                    this.TransitionEnd(300);
                }
            }
        },

        //transition with timer to handle animations loading
        TransitionLoad(timer) {

            this.interval = setInterval(() => {
                this.projectLoaded = true;
                document.body.style.overflowY = 'hidden';
                if (this.projectLoaded) {

                    clearInterval(this.interval);
                }
            }, timer);
        },

        TransitionEnd(timer) {

            this.interval = setInterval(() => {
                this.projectClicked = false;    
                if (!this.projectClicked) {
                    clearInterval(this.interval)
                    document.body.style.overflowY = 'scroll';   
                } 
            }, timer);
        },
        //buttons checks for next or last project
        NextProject() {

            if (this.indexSlice < this.lengthOfProject) {
                this.projectLoaded = false;
                this.TransitionLoad(500);
                this.indexSlice++;
                this.startOfProjectList = false;
                if (this.indexSlice == this.lengthOfProject) {
                    this.endOfProjectList = true;
                }
            }
        },
        PriveousProject() {
            if (this.indexSlice > 0) {
                this.projectLoaded = false;
                this.TransitionLoad(500);
                this.indexSlice--;
                this.endOfProjectList = false;
                if (this.indexSlice == 0) {
                    this.startOfProjectList = true;
                }
            }
        },
    },
    computed: {
        lengthOfProject() {
            return this.projects.length - 1;
        }
    },
}
</script>

<style scoped>
a
{
    text-decoration: none;
    color: white;
}

.headline
{
    padding-top: 55px;
}

.headline h2
{
    text-align: center;
    font-size: 30px;
}

.container
{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
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
    transition: 0.3s ease;
}

.project-card:hover
{
    outline: 1px solid lightcoral;
    cursor: pointer;
}

.project-card h5
{
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

.aling-text-section
{
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    text-align: left;
    margin-left: 50px;
    margin-top: 10px;
    width: fit-content;
}

.aling-text-section a:hover
{
    text-decoration: underline;
    letter-spacing: 0.5px;
}

.icon-scale
{
    width: 44px;
    height: 44px;
}

.project-container
{
    position: fixed;
    text-align: center;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background: #09092f;
    box-shadow: 1px 1px 40px 20px black;
}

.project-btn
{
    position: fixed;
    top: 45px;
    right: 25px;
    padding-right: 30px;
    padding-top: 20px;
    font-weight: 900;
    background: none;
    border: none;
    font-size: 35px;
    color: white;
}

.project-btn:hover
{
    cursor: pointer;
}

.right-button,
.left-button
{
    position: absolute;
    scale: 0.7;
    bottom: 0;
    right: 0;
    margin: 30px;
    transform: rotate(90deg);
    width: 100px;
    height: 100px;
    background: white;
    border-radius: 200px;
    transition: 0.2s ease;
}

.left-button
{
    transform: rotate(270deg);
    left: 0;
}

.right-button:hover,
.left-button:hover
{
    background-color: rgba(109, 107, 243, 0.767);
    cursor: pointer;
}

.project-single-container
{
    display: flex;
    flex-direction: column;
    text-align: center;
}

.project-image
{
    width: 1300px;
    height: 550px;
    border-radius: 50px;
    object-fit: cover;
}

.aling-items
{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.heading-img-container
{
    margin: 20px 0px;
}

.description-container
{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dif-container
{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.links-container
{
    display: flex;
    gap: 10px;
    margin-bottom: 100px;
}

.links-container a:hover
{
    text-decoration: underline;
}

.close-enter-active,
.close-leave-active
{
    transition: width 1s ease-in-out,
        opacity 1s ease;
}

.close-enter-from,
.close-leave-to
{
    width: 0%;
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active
{
    transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to
{
    opacity: 0;
}


@media screen and (max-width: 768px)
{
    .container
    {
        margin-bottom: 5px;
        margin-top: 50px;
    }

    .project-container
    {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background: #09092f;
        box-shadow: 1px 1px 40px 20px black;
        overflow-y: scroll;
    }

    .project-single-container
    {
        display: flex;
        overflow: scroll;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .project-single-container h4
    {
        letter-spacing: 3px;
    }

    .project-single-container p
    {
        width: 80%;
    }

    .image-container
    {
        margin: 0px 10px;
    }

    .project-image
    {
        width: 100%;
        height: 600px;
        border-radius: 50px;
    }

    .aling-text-section
    {
        text-align: center;
        margin: 0;
        margin-top: 10px;
        width: 100%;
        font-size: 18px;
    }

    .description-container
    {
        width: 80%;
    }

    .links-container
    {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
    }

    .project-btn
    {
        position: static;
        float: right;
        padding-right: 30px;
        padding-top: 20px;
        font-weight: 900;
        background: none;
        border: none;
        font-size: 35px;
        color: white;
    }
}

@media screen and (min-width: 769px) and (max-width: 1440px)
{

    .container
    {
        gap: 20px;
        padding-top: 100px;

    }

    .project-card
    {
        width: 420px;
        height: 620px;
        background: #0A0A32;
        box-shadow: 7px 12px 22px 4px rgba(0, 0, 0, 0.6);
        border-radius: 20px;
        text-align: center;
        transition: 0.3s ease;
    }

    .project-container
    {
        top: 218%;
    }

    .project-btn
    {
        position: fixed;
        top: 12px;
        right: 20px;
        padding-right: 30px;
        padding-top: 20px;
    }
}
</style>