const router = require("express").Router();
const Car = require("../models/Car.model");
const auth = require("../middleware/auth");

router.route("/").get(auth, (req, res) => {
  const page = req.query.page || 1;
  const nPerPage = req.query.nPerPage || 2000;

  Car.find()
    .skip(page > 0 ? (page - 1) * nPerPage : 0)
    .limit(nPerPage)
    .then((response) => {
      Car.count()
        .then((count) => {
          res.json({
            array: response,
            count: count,
            nbOfPage: Math.ceil(count / nPerPage),
          });
        })
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

/*only teacher/admin should be able to access to this endpoint.*/
router.route("/addCar").post((req, res) => {
  addCar(
    req.body.car_id,
    req.body.car_name,
    req.body.car_brand,
    req.body.car_model,
    req.body.car_location,
    req.body.car_year,
    req.body.transmission_type,
    req.body.drive_type,
    req.body.miles,
    req.body.registration_due,
    req.body.VIN_number,
    req.body.engine_size,
    req.body.engine_power,
    req.body.max_speed,
    req.body.fuel_consumption,
    req.body.number_of_seats,
    req.body.air_condition,
    req.body.radio_type,
    req.body.navigation,
    req.body.sensors,
    req.body.alarm,
    req.body.description,
    req.body.Url
  )
    .then(() => {
      res.status(201).json({
        message: "Car added successfully!",
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

async function addCar(
  car_id,
  car_name,
  car_brand,
  car_model,
  car_location,
  car_year,
  transmission_type,
  drive_type,
  miles,
  registration_due,
  VIN_number,
  engine_size,
  engine_power,
  max_speed,
  fuel_consumption,
  number_of_seats,
  air_condition,
  radio_type,
  navigation,
  sensors,
  alarm,
  description,
  Url
) {
  const car = new Car({
    car_id: car_id,
    car_name: car_name,
    car_brand: car_brand,
    car_model: car_model,
    car_location: car_location,
    car_year: car_year,
    transmission_type: transmission_type,
    drive_type: drive_type,
    miles: miles,
    registration_due: registration_due,
    VIN_number: VIN_number,
    engine_size: engine_size,
    engine_power: engine_power,
    max_speed: max_speed,
    fuel_consumption: fuel_consumption,
    number_of_seats: number_of_seats,
    air_condition: air_condition,
    radio_type: radio_type,
    navigation: navigation,
    sensors: sensors,
    alarm: alarm,
    description: description,
    Url: Url,
  });

  try {
    await car.save();
  } catch (error) {
    throw error;
  }
}

/*only teacher/admin should be able to access to this endpoint.*/
router.route("/updateCar").post((req, res) => {
  Car.replaceOne(
    { car_id: req.body.car_id },
    {
      car_name: req.body.car_name,
      car_brand: req.body.car_brand,
      car_model: req.body.car_model,
      car_location: req.body.car_location,
      car_year: req.body.car_year,
      transmission_type: req.body.transmission_type,
      drive_type: req.body.drive_type,
      miles: req.body.miles,
      registration_due: req.body.registration_due,
      VIN_number: req.body.VIN_number,
      engine_size: req.body.engine_size,
      engine_power: req.body.engine_power,
      max_speed: req.body.max_speed,
      fuel_consumption: req.body.fuel_consumption,
      number_of_seats: req.body.number_of_seats,
      air_condition: req.body.air_condition,
      radio_type: req.body.radio_type,
      navigation: req.body.navigation,
      sensors: req.body.sensors,
      alarm: req.body.alarm,
      description: req.body.description,
    },
    { upsert: true }
  ) //This will create one if could found.
    .then(() => {
      res.status(201).json({
        message: "Car updated successfully!",
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
});

router.route("/searchCar").get(auth, (req, res) => {
  const value = req.query.value;

  Car.find({
    $or: [
      { car_name: { $regex: ".*" + value + ".*" } },
      { car_brand: { $regex: ".*" + value + ".*" } },
      { car_model: { $regex: ".*" + value + ".*" } },
    ],
  })
    .limit(20)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//This operation is VERY expensive in term of performance
//And should NOT be run often.
/*router.route("/scraping-courses-from-ius").get((req, res) => {
  fetchCourses()
    .then(() => {
      res.json("Done!");
    })
    .catch((err) => res.json("Error: " + err));
});

async function fetchCourses() {
  //First we clear all the courses registered.
  await Course.deleteMany();

  const cheerio = require("cheerio");
  const axios = require("axios");

  let run = true;
  let pageNumber = 0;

  while (run) {
    let response;
    try {
      response = await axios.get(
        "https://ecampus.ius.edu.ba/syllabi?page=" + pageNumber
      );
    } catch (error) {
      throw Error("IUS Server not happy");
    }

    pageNumber++;
    // Load the web page source code into a cheerio instance
    const $ = cheerio.load(response.data);
    const trArray = $("tbody").eq(0).find("tr");

    if (trArray.length === 0) run = false;
    else {
      try {
        await trArray.each(async function (index, value) {
          const fullname = $(value)
            .find(".views-field-title")
            .eq(0)
            .find("a")
            .eq(0)
            .text();
          const url = $(value)
            .find(".views-field-title")
            .eq(0)
            .find("a")
            .eq(0)
            .attr("href");
          const course_id = fullname.split(" ")[0];
          let name = "";
          fullname.split(" ").forEach((value, index) => {
            if (index !== 0) name += value + " ";
          });

          const lecturer = $(value)
            .find(".views-field-field-lecturer-")
            .eq(0)
            .text();
          const academicUnit = $(value)
            .find(".views-field-field-academic-unit")
            .eq(0)
            .text();
          const updateDate = $(value)
            .find(".views-field-changed-1")
            .eq(0)
            .text();

          //We need to get the prerequisite for each course...
          let coursesDetails;
          try {
            coursesDetails = await axios.get(
              "https://ecampus.ius.edu.ba" + url
            );
          } catch (error) {
            throw Error("IUS Server not happy (" + error + ")");
          }

          const $2 = cheerio.load(coursesDetails.data);
          const prerequisite = $2("[border=1]")
            .find("[colspan=4]")
            .eq(0)
            .text()
            .replace("/", "")
            .replace(",", "")
            .split(" ");

          await addCourse(
            course_id,
            name,
            lecturer.toString().trim(),
            academicUnit.toString().trim(),
            prerequisite,
            new Date(updateDate.replace("-", "")),
            url
          );
        });
      } catch (error) {
        throw Error("IUS Server not happy");
      }
    }
    console.log("pageNumber " + pageNumber + " parsed");
  }
}*/

module.exports = router;
