const {User, Thought} = require('../models');


const userController = {
    // get all users
    getAllUsers(req,res){
        User.find({})
        // populate users thought
        .populate({
            path:'thoughts',
            select:'-_v'
        })
        // populate user freind
        .populate({
            path:'friends',
            select:'-_v'
        })
        .then(data => res.json(data))
        .catch(error=>{
            res.status(500).json(error);
        })
    },
    getUserById({params},res){
        User.findOne({id:params.id})
        .populate({
            path:'thoughts',
            select:'-_v'
        })
        .populate({
            path:'friends',
            select:'-_v'
        })
        .then(data=>{
            if(!data){
                res.status(404).json({message:"no such a user"})
                return;
            }
            res.json(data)
        })
        .catch(error=>{
            res.status(400).json(error)
        })
    },
    //create a user
    createUser({ body }, res){
        User.create(body)
        .then(data=> res.json(data))
        .catch(error => res.status(400).json(error));
    },
    // update a user by choosing a id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ id: params.id }, body, { new: true, runValidators: true })
            .then(data => {
                if (!data) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(data);
            })
            .catch(error => res.status(400).json(error));
    },

    // delete user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ id: params.id })
            .then(data => {
                if (!data) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                // bonus: return Thought.deleteMany({ _id: { $in: dbUserData.thoughts } })
            })
            .then(() => {
                res.json({ message: 'user has been deleted.' });
            })
            .catch(error => res.status(400).json(error));
    },

    // add friend
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { id: params.id }, 
            { $addToSet: { friends: params.friendId } }, 
            { new: true, runValidators: true })
            .then(data => {
                if (!data) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(data);
            })
            .catch(error => res.status(400).json(error));
    },

    // remove friend
    deleteFriend({ params }, res) {
        User.findOneAndUpdate({ id: params.id }, { $pull: { friends: params.friendId } }, { runValidators: true })
            .then(data => {
                if (!data) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(data);
            })
            .catch(error => res.status(400).json(error));
    },

}

module.exports = userController;