<script>
import Postgm from './wall/postgm.vue';
import Postgm1 from './wall/postgm.vue';
import Cardgm from '../components/ui/card/Cardgm.vue';
import Navbar from '../components/layout/navbar.vue';
    export default {
    name: "profil",
    components: { Postgm, Postgm1, Cardgm, Navbar },

data() {
          return {
            api: import.meta.env.VUE_APP_API,
            accedAccount: false,
            sessionUserId: 0,
            sessionUserRole: 0,
            userProfile: [],
          }
        },
         created(){
        
        // this.connectedUser()
    },
    beforeMount() {
        // l'utilisateur ou administrateur
        if (this.accedAccount === true) {
            const token = JSON.parse(localStorage.user).token; 
            let decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET"); 
            this.sessionUserId = decodedToken.userId; 
            this.sessionUserRole = decodedToken.isAdmin; 
            this.getUserProfile();
        }
    },
    //suppression de profil
    methods:{
        deleteUser(){
            if (confirm()){
                // l'ID verification
                const userId = this.sessionUserId;
                const token = JSON.parse(localStorage.user).token;

                fetch(`${this.api}/api/user/:id_user${userId}`,{Authorization: 'Bearer ' + token})
                method: `DELETE`
                .then(res => {
                    if (res.status === 200){
                        localStorage.removeItem('user');
                        alert(res.data.message);
                        this.$router.push('/')
                    }
                })    
                .catch(error => {
                    console.log(error.response.data.error);
                    alert(error.response.data.error);
                    location.reload()
                })
                
            }
        }
    }
        

}


</script>

<template>
    
    <navbar></navbar>
    <div class="container">
        <div class="main-body">

            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb" class="main-breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">Mon profile</li>
                </ol>
            </nav>
            <!-- /Breadcrumb -->

            <div class="row gutters-sm card d-flex  ">
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                                    class="rounded-circle" width="150">
                                <div class="mt-3">
                                    <h4>Kenneth Valdez</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-8">
                    <div class="card mb-3">
                        <div class="card-body ">
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">First Name</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    Kenneth
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Last Name</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    Valdez
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Email</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    Valdez@mail.fr
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-12">
                                    <a class="btn btn-style " target="__blank" width="30" href="/updateProfil">Update
                                        profil</a>
                                </div>
                                <div class="col-sm-12 mt-1">
                                    <a class="btn btn-style " target="__blank" href="">Delete profil</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <postgm></postgm>
                <div>
                <cardgm></cardgm>
                </div>
                
            </div>
        </div>
    </div>











</template>
<style>
    body {
        margin-top: 20px;
        color: #1a202c;
        text-align: left;
        background-color: #e2e8f0;
    }

    .btn-style {
        background-color: #D1515A;
        border-color: #D1515A;
        margin-left: 2px;
        margin-right: 2px;
    }

    .main-body {
        padding: 15px;
    }

    .card {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
    }

    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;

    }

    .card-body {
        flex: 1 1 auto;
        min-height: 1px;
        padding: 1rem;
    }

    .gutters-sm {
        margin-right: -8px;
        margin-left: -8px;
    }

    .gutters-sm>.col,
    .gutters-sm>[class*=col-] {
        padding-right: 8px;
        padding-left: 8px;
    }

    .mb-3,
    .my-3 {
        margin-bottom: 1rem !important;
    }

    .bg-gray-300 {
        background-color: #e2e8f0;
    }

    .h-100 {
        height: 100% !important;
    }

    .shadow-none {
        box-shadow: none !important;
    }

    body {
        height: 100%;
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

    body {

        align-items: center;

        padding-bottom: 40px;
        background-color: E7D3C1;
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

    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
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