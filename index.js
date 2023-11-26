const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json([
    {
      id: 1,
      provinsi: "HOKA GANZ BANGET",
      kota: "MONTEVERDE",
      kecamatan: "JOSDAH",
      desa: "ASEK BANGET",
    },
    {
        id: 2,
        provinsi: "HOKA GANZ ANJAS",
        kota: "DYUAR",
        kecamatan: "MELEDAK",
        desa: "ASEK CUYY",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});