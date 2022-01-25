const {Thought, User} = require('../models');

// Set up Thoughts Controller
const thoughtController = {

    // Get all available Thoughts
    getAllThoughts(req,res) {
        Thought.find({})
        .populate({path: 'reactions', select: '-__v'})
        .select('-__v')
        .then(data => res.json(data))
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
    },

    // Get a certain thought by ID
    getThoughtById({params}, res) {
        Thought.findOne({ id: params.id })
        .populate({path: 'reactions',select: '-__v'})
        .select('-__v')
        .then(data => {
            if(!data) {
            res.status(404).json({message: 'No thoughts with this particular ID!'});
            return;
        }
        res.json(data)
        })
        .catch(error => {
            res.sendStatus(400);
        });
    },
       // Create a new thought
       createThought({params, body}, res) {
        Thought.create(body)
        .then(({id}) => {
            return User.findOneAndUpdate(
        { id: params.userId}, {$push: {thoughts: id}}, {new: true});
        })
        .then(data => {
            if(!data) {
                res.status(404).json({message: 'No thoughts with this particular ID!'});
                return;
            }
            res.json(data)
        })
        .catch(error => res.json(error)); 
    },

    // Update a current thought by ID
    updateThought({params, body}, res) {
        Thought.findOneAndUpdate({id: params.id}, body, {new: true, runValidators: true})
        .populate({path: 'reactions', select: '-__v'})
        .select('-___v')
        .then(data => {
            if (!data) {
                res.status(404).json({message: 'No thoughts with this particular ID!'});
                return;
            }
                res.json(data);
        })
        .catch(error => res.json(error));
    },

    // Delete a current thought by ID
    deleteThought({params}, res) {
        Thought.findOneAndDelete({id: params.id})
        .then(data => {
            if (!data) {
                res.status(404).json({message: 'No thoughts with this particular ID!'});
                return;
            }
            res.json(data);
            })
            .catch(error => res.status(400).json(error));
    },

    // Add a new Reaction
    addReaction({params, body}, res) {
        Thought.findOneAndUpdate({id: params.thoughtId}, {$push: {reactions: body}}, {new: true, runValidators: true})
        .populate({path: 'reactions', select: '-__v'})
        .select('-__v')
        .then(data => {
        if (!data) {
            res.status(404).json({message: 'No thoughts with this particular ID!'});
            return;
        }
        res.json(data);
        })
        .catch(error => res.status(400).json(error))

    },

    // Delete a reaction by ID
    deleteReaction({params}, res) {
        Thought.findOneAndUpdate({id: params.thoughtId}, {$pull: {reactions: {reactionId: params.reactionId}}}, {new : true})
        .then(data => {
            if (!data) {
                res.status(404).json({message: 'No thoughts with this particular ID!'});
                return;
            }
            res.json(data);
        })
        .catch(error => res.status(400).json(error));
    }

};

// Export module thought controller
module.exports = thoughtController;