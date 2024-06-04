export default async ({ req, res, log, error }) => {
  log(req)
  try {
    const { invoiceId } = req.body
    log("Request body:", req.body)
    log("invoiceId:", invoiceId)
    const response = await fetch(
      `https://api.eukapay.com/invoices/${invoiceId}`,
      {
        headers: {
          "x-api-key": process.env.EUKAPAY_API_KEY,
          "Content-Type": "application/json",
        },
      }
    )

    const data = await response.json()
    log("Data fetched from EUKAPAY API:", data)
    return res.json(data)
  } catch (err) {
    error("Error fetching data from EUKAPAY API:", err.message)
    return res.empty()
  }
}
