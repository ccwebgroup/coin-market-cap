const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Coinmarketcap API");
});

//Get Cryptocurrencies List
app.get("/listings/latest/:limit", async (req, res) => {
  const limit = req.params.limit;
  const { api_key } = req.query;
  try {
    response = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${limit}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": api_key,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.json(error);
  }
});

// Get Cryptocurrency Map
app.get("/cryptocurrency/map/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  const { api_key } = req.query;
  try {
    response = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?symbol=${symbol}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": api_key,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.json(error);
  }
});

// Get Cryptocurrency Metadata
app.get("/cryptocurrency/info/:id", async (req, res) => {
  const id = req.params.id;
  const { api_key } = req.query;
  try {
    response = await axios.get(
      `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${id}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": api_key,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
