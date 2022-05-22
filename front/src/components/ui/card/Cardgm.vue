<script>
import comment from "./comment.vue"
import avatarProfil from "../avatarProfil.vue"
export default {
    name: "Cardgm",
    components:{
      comment,
      avatarProfil
    }
}
</script>
<template>
<div class="card mb-3 m-auto d-flex container">
  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-circle mb-3 avatar-style"
      alt="Avatar" />
    
  <h5 class="mb-2"><strong>John Doe</strong></h5>
  <div class="card-body container">
    
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">18:30</small></p>
    <div class="mb-2 mt-3">
    <button class="btn-style">Partager</button>
    <button class="btn-style">Modifier</button>
    <button class="btn-style">Supprimer</button>
    </div>
    
    <comment></comment>
    

    <div class="d-flex gap-1">
     <avatarProfil></avatarProfil>
     <input type="text" class="form-control" placeholder="commenter" >
     <button type="button" class="btn btn-danger  ms-auto">poster</button>
    </div>
  </div>
</div>
</template>
<style>
.avatar-style{
  width: 65px;
  margin-top: 10px;
}

</style>