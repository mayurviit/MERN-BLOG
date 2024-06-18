

const express=require('express');

const {test} =require('../controllers/user.controller');
const {updateUser}=require('../controllers/user.controller')
const {verifyToken} =require('../utils/verifyUser')

const router=express.Router();
router.get('/test',test);
router.put('/update/:userId',verifyToken,updateUser);
module.exports = router