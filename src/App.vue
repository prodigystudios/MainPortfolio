<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Outfit");
@import url("https://fonts.googleapis.com/css?family=Kodchasan");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

html
{
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

#app
{
  font-family: Outfit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

body
{
  background:
    linear-gradient(180.06deg, #0A0A32 52.13%, #05051F 99.95%),
    linear-gradient(180deg, #05051F 0%, rgba(14, 14, 100, 0.1) 33.48%);
}

h1
{
  font-family: Kodchasan;
}

p
{
  font-family: Outfit;
}

@media screen and (max-width:768px)
{
  html
  {
    scroll-snap-type: none;
    scroll-behavior: smooth;
  }
}
</style>

