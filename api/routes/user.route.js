

const express=require('express');

const {test} =require('../controllers/user.controller');
const {updateUser}=require('../controllers/user.controller')
const {verifyToken} =require('../utils/verifyUser')
const {deleteUser,signout}=require("../controllers/user.controller")
const router=express.Router();
router.get('/test',test);
router.put('/update/:userId',verifyToken,updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.post('/signout',signout);
module.exports = router