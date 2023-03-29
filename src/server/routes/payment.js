const request = new PaymentRequest(paymentMethods, paymentDetails);

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