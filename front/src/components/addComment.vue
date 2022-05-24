<script>
import avatarProfil from "../avatarProfil.vue"
export default {
    name:"addComment",
    components:{
      avatarProfil
    },
    data() {
      return {
        isAdmin: false,
        currentUserId: "", 
        newComment: "",
        comments: [],
        
      }
    },
    methods: {
        callName() {
            let name = localStorage.getItem('userName');
            return name.charAt(0).toUpperCase() + name.slice(1);
        },
        callNumber() {
            return localStorage.getItem('MessageId')
        },
        send() {
            if (!this.newComment || !localStorage.getItem("userId") || !localStorage.getItem("MessageId" || this.newComment.lemgth > 800)) {
                this.isInvalid = true;
            } else {
                let UserId      = localStorage.getItem("userId");
                let comment     = this.newComment.toString();
                let MessageId   = localStorage.getItem("MessageId");
                
                method: `POST`("http://localhost:3000/api/:id_post/comments", { UserId, comment, MessageId } , { "Authorization":"Bearer " + localStorage.getItem("token")})
                .then(()=> {
                    this.UserId = ""
                    this.newMessage = ""
            
                    alert('Commentaire publié')
                    router.push({path : 'Comment'})
                    
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
}
</script>
<template>
    <div class="d-flex gap-1">
     <avatarProfil></avatarProfil>
     <input type="text" class="form-control" placeholder="commenter" >
     <button type="submit" @click.prevent="send()" class="btn btn-danger  ms-auto">poster</button>
    </div>
</template>
<style>
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
</style>