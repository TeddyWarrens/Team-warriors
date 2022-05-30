const post =[];
const mongoose=require('mongoose');
const postSchema = mongoose.Schema({
    voltage: Number,
    resistance:Number,
    power:Number,
    
})
// class Post{
//     constructor(username,password,voltage,resistance,time){
//         this.username = username;
//         this.password=password;
//         this.time=time;
//         this.voltage=voltage;
//         this.resistance=resistance;
//     }
    
//      static addData(data){
//         if(data){
//             post.push(data);
//             return post
//         }
//         return post;
//     }
//     static getData(){
//         return post;
//     }
    
// }
const Post = mongoose.model('post',postSchema)
module.exports = {
    Post
}