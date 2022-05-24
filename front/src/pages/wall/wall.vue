<script>
import Cardgm from "../../components/ui/card/Cardgm.vue"
import postgm from "./postgm.vue"
import Navbar from "../../components/layout/navbar.vue"
import modifier from "../../components/modifier.vue"
import partager from "../../components/partager.vue"
import supprimer from "../../components/supprimer.vue"



export default {
    name: "wall",
    components: {
    Cardgm,
    postgm,
    Navbar
    
}
}
</script>
<template>


<Navbar></Navbar>
<div class="form-floating container-md">
  <postgm></postgm>
  
</div>
<hr class="dropdown-divider mt-5" />
  <Cardgm></Cardgm>

</template>  





        

<style>
body{
background-color: rgb(228, 228, 222);
height: 100%;
align-items: center;
padding-bottom: 40px;
background-color: E7D3C1;
}

    

.btn-style {
  background-color: #D1515A;
  border-color: #D1515A;
  margin-left: 2px;
  margin-right: 2px;
  
  
}

    


 
  

  .headeur-style {
    background-color: #091F43;
  }

  

    
  

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }

  .form-signin .checkbox {
    font-weight: 400;
  }

  .form-signin .form-floating:focus-within {
    z-index: 2;
  }



  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }

  }

  .b-example-divider {
    height: 3rem;
    background-color: rgba(180, 54, 54, 0.803);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
  }

  .form-control-dark {
    color: #fff;
    background-color: var(--bs-dark);
    border-color: var(--bs-gray);
  }

  .form-control-dark:focus {
    color: #fff;
    background-color: var(--bs-dark);
    border-color: #fff;
    box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
  }

  .bi {
    vertical-align: -.125em;
    fill: currentColor;
  }

  .text-small {
    font-size: 85%;
  }

  .dropdown-toggle {
    outline: 0;
  }

  .b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
  }

  .form-control-dark {
    color: #fff;
    background-color: var(--bs-dark);
    border-color: var(--bs-gray);
  }

  .form-control-dark:focus {
    color: #fff;
    background-color: var(--bs-dark);
    border-color: #fff;
    box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
  }

  .bi {
    vertical-align: -.125em;
    fill: currentColor;
  }

  .text-small {
    font-size: 85%;
  }

  .dropdown-toggle {
    outline: 0;
  }
</style>