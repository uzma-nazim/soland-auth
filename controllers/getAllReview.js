const ReviewModel = require("../models/reviewSchema");

const getAllReview = async (req, res) => {
    const count = await ReviewModel.countDocuments()

  ReviewModel.find({}, (error, users) => {
    if (error) {
      res.json({ error });
    } else {

        

      res.json({ users , count });
    }
  });
};

module.exports = getAllReview;
