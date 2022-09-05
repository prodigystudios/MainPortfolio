<template>
    <div class="right-arrow"></div>
    <div class="left-arrow"></div>   
</template>

<script>
export default {
    name:'Arrow',
}
</script>
<style scoped>
.left-arrow
{
  position: relative;
  left: 25px;
  bottom: 31px;
  width: 10px;
  height: 50px;
  background-color: #101036;
  transform: rotate(230deg);
}

.right-arrow
{
  position: relative;
  left: 55px;
  top: 20px;
  width: 10px;
  height: 50px;
  background-color: #101036;
  transform: rotate(135deg);
}
</style>