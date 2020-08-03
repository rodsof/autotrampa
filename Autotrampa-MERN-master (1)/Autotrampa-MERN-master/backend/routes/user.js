const router = require("express").Router();

/*Models*/
const User = require("../models/User.model");
//const UserSession = require("../models/UserSession.model");
//const UserCars = require("../models/UserCars.model");

const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

//Display user's informations ONLY
router.route("/").get(auth, (req, res) => {
  const user_id = req.cookies["user_id"] || req.query.user_id;

  User.findById(user_id)
    .then((user) => {
      UserCourses.findOne({ user_id: user_id })
        .then((data) => {
          res.json({ user: user, courses: data ? data.courses : [] });
        })
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/userImport").post((req, res) => {
  const user = new User({
    user_id: user_id,
    user_name: user_name,
    user_surname: user_surname,
    username: username,
    password: password,
    phone_number: phone_number,
    number_of_posts: number_of_posts,
    address: address,
    email: email,
    picture: picture,
    type_of_account: type_of_account,
    Url: Url,
  });

  user
    .save()
    .then(() => {
      res.status(201).json({
        message: "User added successfully!",
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
});
router.route("/signup").post((req, res) => {
  User.findOne({ user_id: req.body.user_id }).then((user) => {
    if (!user) {
      return res.status(404).json({
        message: "User not found!",
        error: new Error("User not found!"),
      });
    } else if (user.password) {
      return res.status(405).json({
        message: "That user has alreday signed up!",
        error: new Error("That user has already signed up!"),
      });
    } else {
      user.password = user.generateHash(req.body.password);

      user
        .save()
        .then(() => {
          res.status(201).json({
            message: "You have registered successfully!",
          });
        })
        .catch((error) => {
          res.status(500).json({
            error: error,
          });
        });
    }
  });
});

router.route("/login").post((req, res) => {
  User.findOne({ user_id: req.body.user_id })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          error: new Error("User not found!"),
        });
      }

      if (user.validPassword(req.body.password)) {
        const token = jwt.sign({ user_id: user._id }, "RANDOM_TOKEN_SECRET", {
          expiresIn: "24h",
        });

        UserSession.replaceOne(
          { user_id: user._id },
          { user_id: user._id, token: token },
          { upsert: true }
        )
          .then((session) => {
            //console.log("replaceOne worked " + session);
            if (user.isAdmin) {
              res.status(200).json({
                user_id: user._id,
                token: token,
                expiresIn: 1,
                isAdmin: true,
              });
            } else {
              res.status(200).json({
                user_id: user._id,
                token: token,
                expiresIn: 1,
                isAdmin: false,
                name: user.name,
                surname: user.surname,
              });
            }
          })
          .catch((err) => {
            res.status(401).json("Error replaceOne: " + err);
          });
      } else {
        return res.status(401).json({
          message: "Incorrect password",
          error: new Error("Incorrect password!"),
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
});

router.route("/logout").get(auth, (req, res) => {
  const user_id = req.cookies["user_id"] || req.query.user_id;
  res.clearCookie("token");
  res.clearCookie("user_id");
  UserSession.findOneAndDelete({ user_id: user_id })
    .then(() => {
      res.status(200).json("Done!");
      console.log(user_id);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/userInfo").get(auth, (req, res) => {
  User.findOne({ user_id: req.body.user_id }).then((user) => {
    res.status(200).json({
      name: user.username,
    });
  });
});

/*This endpoint allow the frontend to check if the user is login*/
router.route("/auth").get(auth, (req, res) => {
  res.status(200).json("True");
});

router.route("/userCars").get(auth, (req, res) => {
  const user_id = req.cookies["user_id"] || req.query.user_id;
  console.log(user_id);
  UserCars.aggregate([
    {
      $match: { user_id: user_id },
    },
    {
      $project: {
        courses: {
          $map: {
            input: "$car",
            as: "item1",
            in: {
              $toObjectId: "$$item1",
            },
          },
        },
      },
    },
    {
      $lookup: {
        from: "car",
        localField: "car",
        foreignField: "_id",
        as: "information",
      },
    },
    {
      $project: {
        information: 1,
        car: 1,
      },
    },
  ]).exec((err, result) => {
    if (err) {
      res.status(500).json(err);
    }
    if (result) {
      if (result.length === 0) res.status(400).json("Error: can't found data");
      else res.status(200).json(result);
    }
  });
});

router.route("/addCar").post(auth, (req, res) => {
  /* probs redo
  console.log(req.body.user_id || req.query.user_id);

  const user_id = req.cookies["user_id"] || req.query.user_id;
  const courseId = req.body.courseId;
  if (!courseId) {
    res.json("Error course not define in queries.");
  }
  //add to the user a course
  UserCourses.updateOne(
    { user_id: user_id.trim() },
    { user_id: user_id, $push: { courses: courseId } },
    { upsert: true }
  )
    .then(() => {
      res.json("courseId updated");
    })
    .catch((err) => res.status(401).json("Error: " + err));
    */
});

router.route("/removeCar").post(auth, (req, res) => {
  const user_id = req.cookies["user_id"] || req.query.user_id;
  const courseId = req.query.car_id;
  if (!courseId) {
    res.json("Error course not define in queries.");
  }

  console.log("Deleting: " + courseId);

  //add to the user a course
  UserCourses.updateOne(
    { user_id: user_id.trim() },
    { user_id: user_id, $pull: { car: courseId } },
    { upsert: true }
  )
    .then(() => {
      res.json("Removed");
    })
    .catch((err) => res.status(401).json(err));
});

/*router.route("/setUserCar").post(auth, (req, res) => {
  console.log(req.body.user_id || req.query.user_id);
  //add to the user a course
  UserCourses.replaceOne(
    { user_id: req.body.user_id },
    { user_id: req.body.user_id, courses: req.body.courses },
    { upsert: true }
  )
    .then(() => {
      res.json("Added!");
    })
    .catch((err) => res.status(401).json("Error: " + err));
});*/

/*router.route("/delete").delete((req, res) => {
  User.findOneAndDelete({ name: req.body.name })
    .then(() => {
      res.status(200).json("Done!");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
}); */
//TODO: do update / edit / push / delete

/*
router.route('/:id').get((req,res)=> {
   User.findById(req.params.id)
       .then(user => res.json(user))
       .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res)=> {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('Deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res)=>{
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.password = req.body.password;

            user.save()
                .then(() => res.json('Saved!'))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));
});*/

module.exports = router;
