<template>
    <div class="container">
        <div @click="setElemetVisable(project.id)" class="project-card" v-for="project in projects" :key="project.id">
            <h2>{{ project.title }}</h2>
            <img class="main-image" :src="project.img">
            <section class="aling-text-section">
                <p>Github link: {{ project.githubLink }}</p>
                <p>Live site link: {{ project.liveLink }}</p>
            </section>
            <h5>Använda Tekniker</h5>
            <div class="sub-container">
                <div v-for="(icon, index) in project.icons" :key="index">
                    <img class="icon-scale" :src="icon.icon">
                </div>
            </div>
        </div>

        <transition name="close">
            <div v-if="projectClicked" class="project-container">
                <transition name="fade">
                    <div v-if="projectLoaded">
                        <button ref="btn" @click="setElemetVisable" class="project-btn">X</button>
                        <section class="project-single-container"
                            v-for="project in projects.slice(indexSlice,indexSlice + 1)" :key="project.id">
                            <h1>{{project.title}}</h1>
                            <img class="main-image" :src="project.img">
                            <p>{{project.description}}</p>
                        </section>
                    </div>
                </transition>
            </div>
        </transition>
    </div>

</template>

<script>

export default {
    name: 'ProjectSection',
    data() {
        return {
            interval: null,
            projectClicked: false,
            projectLoaded:false,
            indexSlice:0,
            projects: [
                {
                    id: 0,
                    title: 'Väder applikation',
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
                    title: 'Väder applikation',
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
                    title: 'Väder applikation',
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
        setElemetVisable(id) {
            if(!this.projectClicked) {
                this.projectClicked = true;
                this.indexSlice = id;

                this.interval = setInterval(() => {
                    this.projectLoaded = true;
                    if(this.projectLoaded) {
                        clearInterval(this.interval);
                    }
                }, 800);
                
            }else {
                this.projectLoaded = false;
                this.interval = setInterval(() => {
                    this.projectClicked = false;
                    if(!this.projectClicked) {
                        clearInterval(this.interval)
                    }
                }, 300);
            }      
        }
    }
}
</script>

<style scoped>
a
{
    text-decoration: none;
    color: white;
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
    transition: 0.3s ease;
}

.project-card:hover
{
    outline: 1px solid lightcoral;
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
    text-align: left;
    margin-left: 50px;
}

.icon-scale
{
    width: 44px;
    height: 44px;
}

.project-container
{
    position: absolute;
    top: 160%;
    left: 50px;
    width: 90%;
    height: 800px;
    background: linear-gradient(180.06deg, #181872 52.13%, #05051F 99.95%);
}

.project-btn
{
    float:right;
    padding-right:30px;
    padding-top:20px;
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

.project-single-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.close-enter-active,
.close-leave-active
{
    transition: width 1s ease-in-out;
}

.close-enter-from,
.close-leave-to
{
    width: 0%;
}


.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>