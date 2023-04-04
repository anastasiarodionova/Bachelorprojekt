const request = new PaymentRequest(paymentMethods, paymentDetails);
const supportedPaymentMethods = ["https://www.apple.com/apple-pay/"];

let shouldCallPaymentRequest = true;
let fallbackToLegacyOnPaymentRequestFailure = fasle;

new PaymentRequest(supportedMethods, {
  total: {
    id: "order-123",
    label: "Ring",
    amount: {
      currency: "EUR",
      value: "10.0",
    },
  },
});

// gibt die Zahlungsdetails für die Transaktion an
const paymentDetails = {
  displayItems: [
    {
      id: "order-123",
      label: "Ring",
      amount: { currency: "EUR", value: "1.0" },
    },
  ],
  total: {
    label: "Total due",
    amount: { currency: "EUR", value: "1.0" },
  },
};

request.show().then((PaymentResponse) => {
  paymentResponse.complete("success").then(() => {
    (introPanel.style.display = "none"), (successPanel.style.display = "block");
  });
});
doPaymentRequest();
