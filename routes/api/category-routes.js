const router = require('express').Router();
const { Category, Product } = require('../../models');




// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
  // be sure to include its associated Products
  include: {
    model: Product,
    attributes: ['product_name', 'price', 'stock', 'category_id']
  }})
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  });



router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});



router.post('/', (req, res) => {
  // create a new category
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});




router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if(!dbCategoryData) {
        res.status(404).json({message: "No Tag with this ID"});
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});




router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if(!dbCategoryData) {
        res.status(404).json({message: "No Tag with this ID"});
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});




module.exports = router;
