const { Router } = require("express");
const ProductModel = require("../model/product.model");
const ProductRouter = Router();

ProductRouter.get("/", async (req, res) => {
  let data = await ProductModel.find({});

  res.send({ data: data, message: "request successfull" });
});

ProductRouter.get("/:id",async(req,res)=>{
  let {id}=req.params
  try {
      const product=await ProductModel.findById({_id:id})
      res.send(product)
  } catch (error) {
      res.send({msg:"Failed",error:error.message})
  }
})
let sortQuery = {
  rel: "",
  plth: { price: 1 },
  phtl: { price: -1 },
  rlth: { ratings: 1 },
  rhtl: { ratings: -1 },
};
ProductRouter.get("/filter", async (req, res) => {
  let { brand, sort, discount } = req.query;

  let data;
  if (brand) {
    brand = brand.split(",");
  }
  if (brand && sort && discount) {
    data = await ProductModel.find({
      brand: { $in: brand },
      discount: { $gt: discount },
    }).sort(sortQuery[sort]);
  } else if (brand && sort) {
    data = await ProductModel.find({
      brand: { $in: brand },
    }).sort(sortQuery[sort]);
  } else if (sort && discount) {
    data = await ProductModel.find({
      discount: { $gt: discount },
    }).sort(sortQuery[sort]);
  } else if (brand && discount) {
    data = await ProductModel.find({
      brand: { $in: brand },
      discount: { $gt: discount },
    }).sort(sortQuery[sort]);
  } else if (brand) {
    data = await ProductModel.find({
      brand: { $in: brand },
    });
  } else if (sort) {
    data = await ProductModel.find().sort(sortQuery[sort]);
  } else if (discount) {
    data = await ProductModel.find({
      discount: { $gt: discount },
    });
  } else {
    data = await ProductModel.find();
  }

  res.send({ data: data, message: "filtered successfully" });
});

ProductRouter.get("/search", async (req, res) => {
  //  console.log(req.query.q);
  try {
    let result = await ProductModel.aggregate([
      {
        $search: {
          autocomplete: {
            query: `${req.query.q}`,
            path: "productName",
            fuzzy: {
              maxEdits: 2,
              prefixLength: 3,
            },
          },
        },
      },
    ]);
  //  let result = await ProductModel.find({brand:"Tata 1mg"})
  //  console.log(result)
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

module.exports = ProductRouter;
