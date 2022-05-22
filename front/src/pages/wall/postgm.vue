<script>
export default {
    name:"postgm"
}
</script>
<template>
    <div class="form-floating container-md mt-5">
     <textarea class="form-control" placeholder="Ecrivez quelque chose" id="floatingTextarea2" style="height: 100px"></textarea>
     <label for="floatingTextarea2">Ecrivez quelque chose</label>
     <button type="button" class="btn btn-danger mt-2">Poster</button>
    </div>
    
</template>
<style scoped>
input{
    display: none;
}
body{
    background-color: rgb(228, 228, 222);
}
.btn-style {
  background-color: #D1515A;
  border-color: #D1515A;
  margin-left: 2px;
  margin-right: 2px;
}
</style>