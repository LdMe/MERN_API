/*
**********************************************************
*   Main Router, include here the new routers you create *
**********************************************************
*/
const router=require('express').Router();

//-- Router for Login/Register
const AuthRouter = require('./AuthRouter');
router.use(AuthRouter);
//-- Router for User related routes
const UserRouter = require('./UserRouter');
router.use(UserRouter);
//-- Router for Post related routes
const PostRouter = require('./PostRouter');
router.use(PostRouter);
//-- Router for readme
const ReadmeRouter = require('./ReadmeRouter');
router.use(ReadmeRouter);

module.exports=router;