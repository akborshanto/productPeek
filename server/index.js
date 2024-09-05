require("dotenv").config();
const express = require("express");

const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;
const app = express();
const corsOptions = {
  origin: ["https://peekproducts-14eff.web.app", "http://localhost:5173"],

  Credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

const uri =
  "mongodb+srv://productPeek:Ni5ZjLKbRROqoJzR@cluster1.phei2xm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //await client.connect();
    const productCollection = client.db("ProductPeek").collection("product");
    const itemProduct = client.db("ProductPeek").collection("pdItem");
    /* inser may  */

    /* insert all data in Product collection */
    const products = [
      {
        productName: "Wireless Bluetooth Headphones",
        productImage:
          "https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074246.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "High-quality wireless headphones with noise cancellation.",
        price: 399.99,
        category: "Electronics",
        ratings: 4.5,
        productCreationDate: "2024-08-15T10:00:00Z",
        brand: "TechBrand",
      },
      {
        productName: "Monitor Asus",
        productImage:
          "https://img.freepik.com/free-photo/view-computer-monitor-display_23-2150757434.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "High-quality Asus Monitor with noise cancellation.",
        price: 23499.99,
        category: "Electronics",
        ratings: 4.5,
        productCreationDate: "2024-08-15T10:00:00Z",
        brand: "TechBrand",
      },
      {
        productName: "Keyboard Asus",
        productImage:
          "https://img.freepik.com/free-photo/person-working-animation-porject_23-2149269893.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "High-quality Asus Monitor with noise cancellation.",
        price: 33499.99,
        category: "Electronics",
        ratings: 4.5,
        productCreationDate: "2024-08-15T10:00:00Z",
        brand: "TechBrand",
      },
      {
        productName: "DSLR HD",
        productImage:
          "https://img.freepik.com/free-photo/black-camera-lens-brown-wooden-table_417767-6.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "High-quality Asus Monitor with noise cancellation.",
        price: 23499.99,
        category: "Electronics",
        ratings: 4.5,
        productCreationDate: "2024-08-15T10:00:00Z",
        brand: "TechBrand",
      },
      {
        productName: "Smart LED TV",
        productImage:
          "https://img.freepik.com/free-photo/modern-monitor-elegant-table_23-2150706393.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "4K Ultra HD Smart LED TV with HDR.",
        price: 49449.99,
        category: "Electronics",
        ratings: 4.7,
        productCreationDate: "2024-08-15T11:00:00Z",
        brand: "VisionTech",
      },
      {
        productName: "Gaming Mouse",
        productImage:
          "https://img.freepik.com/free-photo/view-neon-illuminated-gaming-desk-setup-with-keyboard_23-2149529377.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
        price: 33349.99,
        category: "Electronics",
        ratings: 4.6,
        productCreationDate: "2024-08-15T17:00:00Z",
        brand: "GameMaster",
      },
      {
        productName: "Fitness Tracker",
        productImage:
          "https://img.freepik.com/free-vector/flat-design-fitness-trackers-settings-menu_23-2148515783.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Wearable fitness tracker with heart rate monitor and step counter.",
        price: 79.99,
        category: "Electronics",
        ratings: 4.4,
        productCreationDate: "2024-08-15T18:00:00Z",
        brand: "FitPulse",
      },
      {
        productName: "Noise-Cancelling Headphones",
        productImage:
          "https://img.freepik.com/premium-photo/noisecanceling-headphone-with-soundabsorbing-cotton-background-3d-rendering_641503-58446.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Premium noise-cancelling headphones with 30 hours of battery life.",
        price: 199.99,
        category: "Electronics",
        ratings: 4.9,
        productCreationDate: "2024-08-15T20:00:00Z",
        brand: "QuietComfort",
      },
      {
        productName: "Hp Laptop",
        productImage:
          "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Premium noise-cancelling headphones with 30 hours of battery life.",
        price: 199999.99,
        category: "Electronics",
        ratings: 4.9,
        productCreationDate: "2024-08-15T20:00:00Z",
        brand: "QuietComfort",
      },
      {
        productName: "Camera Light",
        productImage:
          "https://img.freepik.com/free-vector/classical-cinematographic-movie-shooting_1284-9314.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Premium noise-cancelling headphones with 30 hours of battery life.",
        price: 199999.99,
        category: "Electronics",
        ratings: 4.9,
        productCreationDate: "2024-08-15T20:00:00Z",
        brand: "QuietComfort",
      },
      {
        productName: "Sofa Set",
        productImage:
          "https://img.freepik.com/premium-photo/empty-sofa-home_636537-258473.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Luxury leather sofa set with adjustable headrests.",
        price: "35999.99",
        category: "Furniture",
        ratings: 4.8,
        productCreationDate: "2024-08-15T12:00:00Z",
        brand: "ComfortLiving",
      },
      {
        productName: "Dining Table Set",
        productImage:
          "https://img.freepik.com/free-photo/scrambled-eggs-meat-with-fried-potatoes-toast_155003-11532.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Modern dining table set with 6 chairs.",
        price: 4949.99,
        category: "Furniture",
        ratings: 4.7,
        productCreationDate: "2024-08-15T14:00:00Z",
        brand: "HomeStyle",
      },
      {
        productName: "King Size Bed",
        productImage:
          "https://img.freepik.com/free-photo/doble-bed-with-two-nightstand_1203-40.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Wooden king-size bed with storage compartments.",
        price: 7499.99,
        category: "Furniture",
        ratings: 4.6,
        productCreationDate: "2024-08-15T16:00:00Z",
        brand: "SleepWell",
      },
      {
        productName: "Recliner Chair",
        productImage:
          "https://img.freepik.com/free-photo/interior-decor-furniture-inspired-by-fruits-vegetables_23-2151361885.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Comfortable recliner chair with footrest and massage function.",
        price: 2499.99,
        category: "Furniture",
        ratings: 4.5,
        productCreationDate: "2024-08-15T15:00:00Z",
        brand: "RelaxPro",
      },
      {
        productName: "Bookshelf",
        productImage:
          "https://img.freepik.com/premium-photo/blank-frame-photo-cozy-modern-living-room-with-bookshelf-floor-lamp_46686-1041.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Stylish wooden bookshelf with 5 shelves.",
        price: 13449.99,
        category: "Furniture",
        ratings: 4.6,
        productCreationDate: "2024-08-15T13:00:00Z",
        brand: "BookNest",
      },

      {
        productName: "Computer Table",
        productImage:
          "https://img.freepik.com/free-photo/computer-keyboard-cup-tea-wooden-table-night_169016-50573.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Stylish wooden Computer Table with .",
        price: 1349.99,
        category: "Furniture",
        ratings: 4.6,
        productCreationDate: "2024-08-15T13:00:00Z",
        brand: "BookNest",
      },
      {
        productName: " Single Chair",
        productImage:
          "https://img.freepik.com/free-photo/computer-keyboard-cup-tea-wooden-table-night_169016-50573.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Stylish wooden  Chair with .",
        price: 1249.99,
        category: "Furniture",
        ratings: 4.6,
        productCreationDate: "2024-08-15T13:00:00Z",
        brand: "BookNest",
      },
      {
        productName: " Single Cot",
        productImage:
          "https://img.freepik.com/free-photo/horror-scene-domestic-space_23-2151503700.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Stylish wooden Single cot Chair with .",
        price: 31249.99,
        category: "Furniture",
        ratings: 4.6,
        productCreationDate: "2024-08-15T13:00:00Z",
        brand: "BookNest",
      },
      {
        productName: "Book Shelf",
        productImage:
          "https://img.freepik.com/free-photo/home-interior-design-arrangement_23-2148986615.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Stylish wooden book shlf .",
        price: 1249.99,
        category: "Furniture",
        ratings: 4.6,
        productCreationDate: "2024-08-15T13:00:00Z",
        brand: "BookNest",
      },

      {
        productName: "Organic Almonds",
        productImage:
          "https://img.freepik.com/free-photo/peeled-almonds-wooden-bowl-dark-table_176474-5495.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "High-quality organic almonds, rich in nutrients.",
        price: 19.99,
        category: "Grocery",
        ratings: 4.8,
        productCreationDate: "2024-08-15T21:00:00Z",
        brand: "NutHarvest",
      },
      {
        productName: "Whole Wheat Bread",
        productImage:
          "https://img.freepik.com/free-photo/baked-cake-hot-chocolate-mug_23-2148238734.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Freshly baked whole wheat bread, perfect for a healthy diet.",
        price: 2.99,
        category: "Grocery",
        ratings: 4.5,
        productCreationDate: "2024-08-15T22:00:00Z",
        brand: "BakeFresh",
      },
      {
        productName: "Organic Honey",
        productImage:
          "https://img.freepik.com/free-photo/organic-natural-honey-illuminated-by-bright-sunlight-glass-jar_166373-825.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Pure organic honey, harvested from natural sources.",
        price: 144.99,
        category: "Grocery",
        ratings: 4.7,
        productCreationDate: "2024-08-15T23:00:00Z",
        brand: "SweetHarvest",
      },
      {
        productName: "Free-Range Eggs",
        productImage:
          "https://img.freepik.com/free-photo/chicken-eggs-scattered-canvas-table_23-2148067289.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Fresh free-range eggs, rich in protein and omega-3.",
        price: 13.99,
        category: "Grocery",
        ratings: 4.6,
        productCreationDate: "2024-08-15T23:30:00Z",
        brand: "FarmFresh",
      },
      {
        productName: "Greek Yogurt",
        productImage:
          "https://img.freepik.com/free-photo/high-angle-delicious-healthy-dessert_23-2148579387.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Creamy Greek yogurt, perfect for a healthy snack.",
        price: 4.99,
        category: "Grocery",
        ratings: 4.5,
        productCreationDate: "2024-08-16T00:00:00Z",
        brand: "DairyDelight",
      },
      {
        productName: "Fresh Flour",
        productImage:
          "https://img.freepik.com/free-photo/brown-loaf-bread-board_23-2147761370.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Creamy Fresh Flour, perfect for a healthy snack.",
        price: 46.99,
        category: "Grocery",
        ratings: 4.5,
        productCreationDate: "2024-08-16T00:00:00Z",
        brand: "DairyDelight",
      },
      {
        productName: "Fresh Pulse",
        productImage:
          "https://img.freepik.com/free-photo/top-view-fresh-raw-lentil-with-buckwheat-dark-space_140725-97942.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Creamy Fresh Pulse, perfect for a healthy snack.",
        price: 44.99,
        category: "Grocery",
        ratings: 4.5,
        productCreationDate: "2024-08-16T00:00:00Z",
        brand: "DairyDelight",
      },
      {
        productName: "Coffe Powder",
        productImage:
          "https://img.freepik.com/free-photo/pouring-hot-coffee-cup-fresh-aroma-banners_1268-27770.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Creamy Coffe Powder, perfect for a healthy snack.",
        price: 544.99,
        category: "Grocery",
        ratings: 4.5,
        productCreationDate: "2024-08-16T00:00:00Z",
        brand: "DairyDelight",
      },
      {
        productName: "Milk Powder",
        productImage:
          "https://img.freepik.com/free-vector/milk-advertising-realistic-poster_1284-26187.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Creamy Milk Powder, perfect for a healthy snack.",
        price: 344.99,
        category: "Grocery",
        ratings: 4.5,
        productCreationDate: "2024-08-16T00:00:00Z",
        brand: "DairyDelight",
      },
      {
        productName: "Tea Pack",
        productImage:
          "https://img.freepik.com/free-vector/green-tea-packaging-realistic-design_1284-25630.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description: "Creamy Milk Powder, perfect for a healthy snack.",
        price: 244.99,
        category: "Grocery",
        ratings: 4.5,
        productCreationDate: "2024-08-16T00:00:00Z",
        brand: "DairyDelight",
      },

      {
        productName: "Lipstick Set",
        productImage:
          "https://img.freepik.com/free-photo/top-view-red-pink-lipsticks_23-2148978201.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Set of 5 vibrant lipstick shades, long-lasting and hydrating.",
        price: 229.99,
        category: "Makeup",
        ratings: 4.7,
        productCreationDate: "2024-08-16T01:00:00Z",
        brand: "GlamourShades",
      },
      {
        productName: "Foundation",
        productImage:
          "https://img.freepik.com/free-photo/foundation-bottles-advertising-arrangement_23-2149511225.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Full-coverage foundation with SPF 15, suitable for all skin types.",
        price: 24.99,
        category: "Makeup",
        ratings: 4.6,
        productCreationDate: "2024-08-16T02:00:00Z",
        brand: "FlawlessBase",
      },
      {
        productName: "Eyeshadow Palette",
        productImage:
          "https://img.freepik.com/free-photo/close-up-hand-holding-eyeshadow_23-2148978130.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Palette of 12 blendable eyeshadow shades for a variety of looks.",
        price: 119.99,
        category: "Makeup",
        ratings: 4.8,
        productCreationDate: "2024-08-16T03:00:00Z",
        brand: "ColorPop",
      },
      {
        productName: "Necklace",
        productImage:
          "https://img.freepik.com/free-photo/luxury-shine-diamonds-digital-art_23-2151695038.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Palette of 12 blendable eyeshadow shades for a variety of looks.",
        price: 13339.99,
        category: "Makeup",
        ratings: 4.8,
        productCreationDate: "2024-08-16T03:00:00Z",
        brand: "ColorPop",
      },
      {
        productName: "Skin cream",
        productImage:
          "https://img.freepik.com/free-vector/vector-realistic-cosmetic-promo-banner-moisturizing-cosmetics_33099-1354.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Screen Creame of 12 blendable eyeshadow shades for a variety of looks.",
        price: 252.99,
        category: "Makeup",
        ratings: 4.8,
        productCreationDate: "2024-08-16T03:00:00Z",
        brand: "ColorPop",
      },
      {
        productName: "Hair Cream",
        productImage:
          "https://img.freepik.com/free-vector/vector-3d-realistic-cosmetic-advertising-mock-up-night-cream-jar_33099-1144.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Hari Cream lendable eyeshadow shades for a variety of looks.",
        price: 219.99,
        category: "Makeup",
        ratings: 4.8,
        productCreationDate: "2024-08-16T03:00:00Z",
        brand: "ColorPop",
      },
      {
        productName: "Eye Linear",
        productImage:
          "https://img.freepik.com/free-photo/bride-with-mascara-brush-side-view_23-2149640937.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Hari Cream lendable eyeshadow shades for a variety of looks.",
        price: 219.99,
        category: "Makeup",
        ratings: 4.8,
        productCreationDate: "2024-08-16T03:00:00Z",
        brand: "ColorPop",
      },
      {
        productName: "Vaseline",
        productImage:
          "https://img.freepik.com/free-vector/green-glass-jar-with-open-lid_88138-22.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Hari Cream lendable eyeshadow shades for a variety of looks.",
        price: 219.99,
        category: "Makeup",
        ratings: 4.8,
        productCreationDate: "2024-08-16T03:00:00Z",
        brand: "ColorPop",
      },
      {
        productName: "Nail Polish",
        productImage:
          "https://img.freepik.com/free-vector/red-nail-polish-3d-realistic-vector-advertising-banner-with-glass-bottle-glossy_33099-1331.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Hari Cream lendable eyeshadow shades for a variety of looks.",
        price: 219.99,
        category: "Makeup",
        ratings: 4.8,
        productCreationDate: "2024-08-16T03:00:00Z",
        brand: "ColorPop",
      },
      {
        productName: "MakeUp  Brush",
        productImage:
          "https://img.freepik.com/free-photo/top-view-arrangement-with-make-up-brushes_23-2148301852.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Makeup Brudsh lendable eyeshadow shades for a variety of looks.",
        price: 119.99,
        category: "Makeup",
        ratings: 4.8,
        productCreationDate: "2024-08-16T03:00:00Z",
        brand: "ColorPop",
      },
      {
        productName: "MakeUp  Brush",
        productImage:
          "https://img.freepik.com/free-photo/top-view-arrangement-with-make-up-brushes_23-2148301852.jpg?ga=GA1.1.306506650.1720623851&semt=ais_hybrid",
        description:
          "Makeup Brudsh lendable eyeshadow shades for a variety of looks.",
        price: 119.99,
        category: "Makeup",
        ratings: 4.8,
        productCreationDate: "2024-08-16T03:00:00Z",
        brand: "ColorPop",
      },
    ];

    /* like funtion */

    app.post("/like/:id", async (req, res) => {
      const { id } = req.params;

      try {
        const result = await collection.updateOne(
          { _id: new ObjectId(id) },
          { $inc: { likes: 1 } }
        );
        res.status(200).send(result);
      } catch (error) {
        res.status(500).send({ error: "Error updating like count" });
      }
    });

    //  const result = await productCollection.insertMany(products);

    /* pagination */

    app.get("/prduct_pagination", async (req, res) => {
      //default page1 and limit 10 product

      const { page = 1, limit = 10 } = req.query;
      const products = await productCollection
        .find({})
        .skip((page - 1) * limit)
        .limit(size)
        .toArray();
    });
    app.get("/pagination", async (req, res) => {
      //const result = await addQuariesCollection.find().toArray();
      //1.cclg
      // console.log(req.query);
      const count = await productCollection.estimatedDocumentCount();
      res.send({ count });

      //  res.send(result);
    });

    {
      /* item component */
    }

    app.get("/item-products", async (req, res) => {
      const searchQuery = req.query.q || "";
      console.log(searchQuery);
      const products = await productCollection
        .find({ name: { $regex: searchQuery, $optins: "i" } })
        .toArray();
      res.send(products);
    });

    /* all product */
    // app.get("/allProduct", async (req, res) => {
    //   console.log(req.query);

    //   const page = parseInt(req.query.pages);
    //   const size = parseInt(req.query.size);
    //   console.log(page, size);

    //   const result = await productCollection
    //     .find()
    //     .skip(page * size)

    //     .toArray();

    //   res.send(result);
    // });

    /* electronic */
    app.get("/electronic", async (req, res) => {
      const result = await productCollection
        .find({ category: "Electronics" })
        .limit(3)
        .toArray();
      res.send(result);
    });
    app.get("/Grocery", async (req, res) => {
      const result = await productCollection
        .find({ category: "Grocery" })
        .limit(3)
        .toArray();
      res.send(result);
    });
    app.get("/Furniture", async (req, res) => {
      const result = await productCollection
        .find({ category: "Furniture" })
        .limit(3)
        .toArray();
      res.send(result);
    });
    app.get("/Makeup", async (req, res) => {
      const result = await productCollection
        .find({ category: "Makeup" })
        .limit(3)
        .toArray();
      res.send(result);
    });

    /* =================LIKE AND FUNCTIONALY========== */
    app.post("/pull-item", async (req, res) => {
      const { userId, item } = req.body;

      try {
        const result = await itemProduct.updateOne(
          { _id: new ObjectId(userId) },
          { $pull: { item: item } }
        );
        res.status(500).send("Error Pulling item");
      } catch (err) {
        res.status(500).send("Error Pooping item");
      }
    });
    /* pop */
    app.post("/pop-item", async (req, res) => {
      const { userId } = req.body;
      try {
        const result = await itemProduct.findOneAndUpdate(
          { _id: new ObjectId(userId) },
          { $pop: { items: 1 } },
          { returnOrgial: false }
        );

        res.status(200).send(result.value);
      } catch (eror) {
        res.status(500).send("errop pulling item");
      }
    });

    // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
