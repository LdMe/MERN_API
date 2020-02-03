const category = require('../../Model/category');
let user = require('../../Model/user');

const CategoryCreateController= {
	create(req,res){
		console.log(req.file);
		let body=req.body;
		let filter= {
			username: req.session.username,
			
		}
		// only create categorys if admin
		filter["roles"]={$all:["admin"]};
		user.findOne(filter, function(err,new_user){
			if(err){
				return res.status(401).send(err);
			}
			if(!new_user){
				return res.status(401).send("user does not exist or it has no rights to do this action");
			}
			let new_category= {
				title: body.title,

			}
			if(body.description){
				new_category["description"]=body.description;
			}
			category.create(new_category, function(error,category_created){
				if(err){
					console.log("error");
						console.log(err.message);
						return res.send(err.message);
					}
					if(!category_created){
						return res.send("category not created");
					}
					console.log("category created");
					return res.send("category created");
			});
		})
		
	}
}
module.exports=CategoryCreateController;