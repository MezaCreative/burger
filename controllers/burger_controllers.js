const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Create all routes and set up logic within those routes where required
router.get("/", function(req, res) {
    burgers.all(function(data)  {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
    } );
});

router.post("/api/burgers", function (req,res) {
    burger.create([
        "burger", "devoured"
    ], [
        req.body.burger, req.body.deboured
    ], function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertID});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var devoured = "id = " + req.params.id;
    console.log("condition", devoured);

    burger.update({
        devoured: 1
    }, condition, function(result) {
        if (result.changedRows == 0) {
            "If no rows were changed, then the ID does not exist"
            return res.status(404).end();
        } else {
            res.status(200).end
        }
    });
});

module.exports = router;