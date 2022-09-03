<template>
    <nav>
        <div class="nav-links">
            <h1>William ali</h1>
            <h4>Om mig</h4>
            <h4>Projekt</h4>
            <h4>Kontakt</h4>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarDesktop'
}
</script>

<style scoped>
nav
{
    width: 100%;
    background: #0F0F32;
    height: 112px;
}
nav h1 {
    position: absolute;
    left:0;
    margin:0px 50px;
}
.nav-links {
    display: flex;
    height: inherit;
    justify-content: right;
    align-items: center;
    margin:0px 300px;
    gap: 200px;
}
</style>