const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
  } = require('../../controllers/thought-controller');

  
  router.route('/').get(getAllThoughts);

  router.route('/:id').get(getThoughtById);
  router.route('/:id').put(updateThought);
  router.route('/:id').delete(deleteThought);

  router.route('/:userId').post(createThought);

  router.route('/:thoughtId/reactions').post(addReaction);

  router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

  module.exports = router;