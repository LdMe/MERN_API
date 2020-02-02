post= require('../../Model/post');
user= require('../../Model/user');
const config = require('../../Config/config');
const uploadPath = require('./imageUploadController').uploadPath;
imageShowController = {
	show:function(req,res){

		let temp =req.originalUrl.split("images/");
		let url= temp[temp.length - 1];
		let username= url.split("/")[0];
		let post_id = config.ObjectId(url.split(username+"/")[1]);
		if(!req.session.username){
			post.findOne({_id: post_id, visibility:"public"},function(err,result){
				if(err){
					res.status(500).send("error searching image");
				}
				if(result){
					let url= config.dirname+uploadPath + username + '/posts/'+ result.image;
					return res.sendFile(url);
				}
				return res.status(404).send("image not found");
			});
		}
		user.findOne({username: req.session.username},function(err,result){
			if(err){
				res.status(500).send("error searching image");
			}
			if(result){
				let filter={$or :[{_id: post_id,visibility: "public"},{_id:post_id,user: result._id}]};
				post.findOne(filter,function(err,result){
					if(err){
						res.status(500).send("error searching image");
					}
					if(result){
						if(!result.image){
							return res.status(400).send("post has no image");
						}
						let url= config.dirname+uploadPath + username + '/posts/'+ result.image;
						return res.sendFile(url);
					}
					return res.status(404).send("image not found");
				});
			}
		});

	}
}
module.exports= imageShowController;