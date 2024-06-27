const express = require("express")
const router = express.Router();

const {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask,
} = require("../controllers/task");

router.post('/createtask',createTask)
router.get('/gettask',getAllTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

// /api/v1/tasks/ => get => getAllTask => post => createTask

module.exports = router;