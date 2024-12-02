require("dotenv").config();
const express = require("express");
const { verifyBody } = require("./utils");
const { getInvoice } = require("./invoice");
const app = express();
app.use(express.json());
const PORT = process.env["PORT"] || 11000;

const deliveryOptions = {
  logo: "./kooslab_logo.png",
  name: "Kooslab",
  address1: "#604-2, 123 Unjung-ro, Bundang-gu, Seongnam-si",
  address2: "Gyeonggi-do, Republic of Korea, 13461",
  orderId: "INV-24120201",
  customerName: "PARKINGAI",
  date: "2024-12-02",
  paymentTerms: "Server Installation for Mississippi Site",
  items: [
    {
      name: "Server Installation Worked Hours",
      qty: 14.75,
      rate: "100,000.00",
      amount: "1,475,000.00",
    },
    {
      name: "Discount",
      qty: 1,
      rate: "N/A",
      amount: "-100,000.00",
    },
    {
      name: "Reimbursement for Windows OS purchase",
      qty: 1,
      rate: "N/A",
      amount: "127,460.00",
    },
    {
      name: "Reimbursement for UPS Shipping",
      qty: 1,
      rate: "N/A",
      amount: "215,851.00",
    },
  ],
  total: "1,718,311.00",
  balanceDue: "1,718,311.00",
  notes: "Thanks for choosing Kooslab.",
  terms:
    "This invoice is auto generated at the time of delivery. If there is any issue, Contact provider",
};

app.post("/getInvoice", (req, res) => {
  const result = verifyBody(req.body);
  console.log("result", result);
  if (result.success) {
    getInvoice(req.body)
      .then((pdf) => {
        console.log("PDF generated");
        res.status(200);
        res.contentType("application/pdf");
        res.send(pdf);
      })
      .catch((err) => {
        console.error("error", err);
        res.status(500).send({ success: false, error: "something went wrong" });
      });
  } else {
    res.status(400).send(result);
  }
});

app.get("/sample", (req, res) => {
  res.status(200).send(deliveryOptions);
});

app.get("/", (req, res) => {
  res.status(200).send({
    msg: "Hi there, welcome to Invoice API. Go to /sample route to get sample data",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
