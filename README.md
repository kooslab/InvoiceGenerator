# InvoiceGenerator

An Nodejs Invoice generator API which uses HTML and render it in browser then save it as PDF.

## Requirements

Nodejs v16.0+

## Installation

```sh
> Clone Repo
npm i
```

## Setup

- You can Add the port to expose in .env file `PORT=11000`

## Run

```sh
node api.js
```

## Routes

- `GET /sample` - returns the sample request object needed for the invoice to generate
- `POST /getInvoice` - returns the pdf as content-type `application/pdf`

## Sample Request Object

You may create and update `data.json` like below format. `client.js` loads this `data.json` file for invoice generation.

```js
{
  "logo": "https://www.kooslab.net/img/koala.png",
  "name": "Kooslab",
  "address1": "#604-2, 123 Unjung-ro, Bundang-gu, Seongnam-si",
  "address2": "Gyeonggi-do, Republic of Korea, 13461",
  "orderId": "INV-24120201",
  "customerName": "my_customer_name",
  "date": "2024-12-02",
  "paymentTerms": "payment terms",
  "items": [
    {
      "name": "Server Installation",
      "qty": 10,
      "rate": "100000.00",
      "amount": "1,000,000.00"
    },
    {
      "name": "Discount for over 1,000,000 KRW invoice",
      "qty": 1,
      "rate": "0.00",
      "amount": "-100,000.00"
    }
  ],
  "total": "1,000,000.00",
  "balanceDue": "1,000,000.00",
  "notes": "Thanks for choosing Kooslab.",
  "terms": "If you have any questions, please contact us at johnnyko@kooslab.net"
}
```

## Sample PDF

The sample PDF can be found [here](https://github.com/SandeepDev1/InvoiceGenerator/blob/main/response.pdf)

## Contributions

Feel free to contribute this project by adding any other features which its useful for different usecases. I'll be happy to accept the pull requests :)
