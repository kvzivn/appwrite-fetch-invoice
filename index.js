export default async ({ req, res, error }) => {
  try {
    const { invoiceId } = req.body
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
    return res.json(data)
  } catch (err) {
    error("Error fetching data from EUKAPAY API:", err.message)
    return res.empty()
  }
}
