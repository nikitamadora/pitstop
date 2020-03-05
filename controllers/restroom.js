// RESTROOM CONTROLLER
// Bringing in the database from the models folder since we'll need to manipulate our database

const db = require('../models');

const index = (req, res) => {
     db.Restroom.find({}, (err, foundRestrooms) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.' });

          res.json(foundRestrooms);
     });
};

const show = (req, res) => {
     db.Restroom.findById(req.params.id, (err, foundRestroom) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.'});
     
          res.json(foundRestroom);
     });
};

const create = (req, res) => {
  db.Restroom.create(req.body, (err, newRestroom) => {
    if (err) {
      return res.json(err);
    }
    console.log(req.body);

    // Look through the Cities in the db
    // Try to findOne with a cityState that matches the query

    db.City.findOne({ cityState: req.body.cityState }, (err, foundCity) => {
      
      if (err) {
        return res.json(err);
      }

      // IF No City Found
      if (foundCity === null) {
        console.log("City not found, creating...", req.body);
        db.City.create(req.body, (err, city) => {
          if (err) {
            return res.json(err);
          }

          city.restrooms.push(newRestroom);
          city.save((err, savedCity) => {
            if (err) {
              return res.json(err);
            }
            console.log("Pushed new restroom into new city");
            return res.json(newRestroom);
          });
        }); 
      }

    // If City IS Found
      if (foundCity !== null) {
        console.log("City was found");
        foundCity.restrooms.push(newRestroom);
        foundCity.save((err, savedCity) => {
          if (err) {
            return res.json(err);
          } 
          res.json(newRestroom);
          
          console.log("Pushed new restroom into existing city");
        });  
      }
});
});
};


const update = (req, res) => {
     db.Restroom.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedRestroom) => {
          if (err) return res.status(400).json({ status: 400, error:'Something went wrong, please try again.'});

          res.json(updatedRestroom);
     });
};

const destroy = (req, res) => {
     db.Restroom.findByIdAndDelete(req.params.id, (err, deletedRestroom) => {
          if (err) return res.status(400).json({ status: 400, error: 'Something went wrong, please try again.' });

          res.json(deletedRestroom);
     });
};

module.exports = {
     index,
     show,
     create,
     update,
     destroy
};