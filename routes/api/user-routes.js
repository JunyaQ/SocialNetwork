// Require express router
const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
  } = require('../../controllers/user-controller');

router.route('/').get(getAllUsers);
router.route('/').post(createUser);

router.route('/:id').get(getUserById);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);

router.route('/:id/friends/:friendId').post(addFriend);
router.route('/:id/friends/:freindId').delete(deleteFriend);

module.exports = router; 