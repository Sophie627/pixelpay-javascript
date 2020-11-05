function pixelpay(keyid, hash, endpoint, orderid, amount, fullname, mail, cardnumber, cvv, cardholder, expiry, city, state, country, zip, address, phonenumber) {
    PixelPay.setup(keyid, hash, endpoint);

    //Valores mínimos requeridos de la orden de compra
    var order = PixelPay.newOrder();
    order.setOrderID(orderid);
    order.setAmount(amount)
    order.setFullName(fullname)
    order.setEmail(mail)

    // Creación del objeto Card
    var card = PixelPay.newCard();
    card.setCardNumber(cardnumber)
    card.setCvv(cvv)
    card.setCardHolder(cardholder)
    card.setExpirationDate(expiry)
    order.addCard(card);

    // Creación del objeto Billing
    var billing = PixelPay.newBilling();
    billing.setCity(city);
    billing.setState(state);
    billing.setCountry(country);
    billing.setZip(zip);
    billing.setAddress(address);
    billing.setPhoneNumber(phonenumber);

    // Generar orden de pago.
    PixelPay.payOrder(order).then(function(response) {
        console.log(response);
    }).catch(function(err) {
        console.error('Error: ', err);
    });
}