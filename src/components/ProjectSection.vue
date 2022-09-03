<template>
    <div class="container">
        <div class="project-card" v-for="project in projects" :key="project.id">
            <router-link :to="'/project/' + project.id">
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
        </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectSection',
    data() {
        return {
            projects: [
                {
                    id: 0,
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
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color:white;
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
.project-card:hover {
    outline:1px solid lightcoral;
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
.icon-scale {
    width: 44px;
    height: 44px;
}
</style>