const express = require("express")
var router = express.Router();
var Employees = require("../models/Employees");

//post
router.post("/", async(req, res) => {
    try {
        const emp = new Employees({
            name: req.body.name,
            position: req.body.position,
            office: req.body.office,
            salary: req.body.salary
        });
        await emp.save()
        res.json({ msg: "Created a product" })
    } catch (error) {
        return res.status(500).json({ msg: err.message })
    }
});


//localhost:3000/employees/

router.get("/", async(req, res) => {
    try {
        const employees = await Employees.find();
        if (!employees) throw Error("No item found")
        res.status(200).json(employees);
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
});


//localhost:3000/employees/:id

router.get("/:id", async(req, res) => {
    try {
        const employee = await Employees.findById(req.params.id);
        if (!employee) throw Error("No item found")
        res.status(200).json(employee);
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
});

//routes for delete api/post/:id
//delete an employee
router.delete("/:id", async(req, res) => {
    try {
        const employee = await Employees.findByIdAndDelete(req.params.id);
        if (!employee) throw Error("No employee found!");
        res.status(200).json({ success: true })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
});

//routes for update api/post/:id
//update an employee
router.put('/:id', (req, res) => {


    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };
    Employees.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); } else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;