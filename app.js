const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

const formatDateFromAPI = (apiDateString) => {
  const date = new Date(apiDateString);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

app.get("/api/data", async (req, res) => {
  const { type, status, original_launch } = req.query;

  let searchQuery = "";

  if (type) {
    searchQuery += `&type=${type}`;
  }

  if (status) {
    searchQuery += `&status=${status}`;
  }

  if (original_launch) {
    searchQuery += `&original_launch=${original_launch}`;
  }

  const apiUrl = `https://api.spacexdata.com/v3/capsules?${searchQuery}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginate = data.slice(startIndex, endIndex).map((capsule) => ({
      ...capsule,
      original_launch: formatDateFromAPI(capsule.original_launch),
    }));

    res.json({ message: "Success fetch", paginate });
  } catch (error) {
    console.error("Error fetching data from SpaceX API:", error);
    res.status(500).json({ message: "Error fetching data from SpaceX API" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
