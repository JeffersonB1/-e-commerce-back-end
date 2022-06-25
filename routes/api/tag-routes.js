const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  }).then((tags) => res.json(tags));
});


//---------------------------------------------------------------------

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  }).then((tag) => res.json(tag));
});

//-------------------------------------------------------------------


router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((tag) => res.json(tag))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});


//-----------------------------------------------------------------------

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.json(tag))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


//-----------------------------------------------------------------------

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => {
      if (!tag) {
        res.status(404).json({ message: "The tag was  not found with this id" });
        return;
      }
      res.json({message: 'The tag has been deleted!'});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
