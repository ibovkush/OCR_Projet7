const db = require("../../connection").db

//affisher tous les post
module.exports = (req, res) => {

  db.query(
    `SELECT posts.id_post, posts.id_user, posts.date_post, posts.message, users.lastName, users.firstName, users.avatar_profil
    FROM users, posts
    WHERE posts.id_user = users.id_user`,
    [],
    (err, result_post) => {
      if(err) {
        res.status(400).json({error: err})
      } else {
        db.query(
          `SELECT *
          FROM
          
          (SELECT share.id_share, posts.id_post AS id_post_share, users.id_user AS id_user_share, users.lastName AS lastName_share, users.firstName AS firstName_share, share.date_share, users.avatar_profil as avatar_profil_share
          FROM share, posts, users
          WHERE share.id_post = posts.id_post
          AND share.id_user = users.id_user) AS share_table,
          
          (SELECT posts.id_post, posts.id_user AS id_user_create, posts.date_post, posts.message, users.lastName AS lastName_create, users.firstName AS firstName_create, users.avatar_profil as avatar_profil_create
          FROM users, posts
          WHERE posts.id_user = users.id_user) AS post_table
          
          WHERE id_post = id_post_share`,
          [],
          (err, result_share) => {
            if(err){
              res.status(400).json({error: err})
            } else {

              let post_table = []
              let share_table = []
              let final_table = []

              result_post.forEach(post => {
                post_table.push({
                  type: 'post',
                  id_post: post.id_post,
                  id_user_post: post.id_user,
                  picture_user_post: post.avatar_profil == '' ? '' : `${req.protocol}://${req.get("host")}/${post.avatar_profil}`,
                  name_user_post: `${post.firstName} ${post.lastName}`,
                  date_post: post.date_post,
                  date_sort: post.date_post,
                  message: post.message
                })
              })

              result_share.forEach(share => {
                share_table.push({
                  type: 'share',
                  id_share: share.id_share,
                  id_post: share.id_post,
                  id_user_post: share.id_user_create,
                  id_user_share: share.id_user_share,
                  name_user_post: `${share.firstName_create} ${share.lastName_create}`,
                  name_user_share: `${share.firstName_share} ${share.lastName_share}`,
                  picture_user_post: share.avatar_profil_create == '' ? '' : `${req.protocol}://${req.get("host")}/${share.avatar_profil_create}`,
                  date_post: share.date_post,
                  date_share: share.date_share,
                  date_sort: share.date_share,
                  message: share.message
                })
              })

              final_table = [...post_table, ...share_table]
              final_table.sort(function(a,b){
                return new Date(b.date_sort) - new Date(a.date_sort);
              });

              res.status(200).json(final_table)
              
            }
          }
        )
      }
    }
  )


}