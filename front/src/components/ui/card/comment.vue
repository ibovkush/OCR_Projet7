<script>
import avatarProfil from "../avatarProfil.vue"
export default {
    name:"comment",
    components:{
      avatarProfil
    }
}
</script>
<template>
  <div class="d-flex gap-1">
     <avatarProfil />
    <div class="d-flex flex-column text_comment p-1">
     <p>Alex Frost</p>
     <p>Hello,frend</p>
    </div>
    
  </div>
</template>
<style scoped>
div img {
    height: 20px;
    width: 20px;
    border-radius: 50%;
}
.text_comment{
    background-color: rgb(241, 241, 241);
    border-radius: 5px;
    width: 100%;
}
.d-flex{
    margin-bottom: 0;
}
.card-body > .d-flex{
    margin-bottom: 15px;
}
.d-flex p:nth-child(1) {
 font-weight: bold;
}
</style>