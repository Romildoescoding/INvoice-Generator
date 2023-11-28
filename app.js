//taxable amt = (rate*qty*100)/(100+gst);

const updateValues = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const product = document.getElementById("product").value;
    const hsn = document.getElementById("hsn").value;
    const quantity = document.getElementById("quantity").value;
    const rate = document.getElementById("rate").value;
    const gst = document.getElementById("gst").value;
    const delivery = document.getElementById("delivery").value;
    // console.log(name, address, product, hsn, quantity, rate, gst);

    //Updating values
    const newname = document.querySelector(".name");
    const newaddress = document.querySelector(".address");
    const newproduct = document.querySelector(".product");
    const newhsn = document.querySelector(".hsn");
    const newquantity = document.querySelector(".quantity");
    const newrate = document.querySelector(".rate");
    const newgst = document.querySelector(".gst");
    const newdelivery = document.querySelector(".delivery");
    let taxable_amount = document.querySelector('.taxable-amount');
    let gst_amount = document.querySelector('.gst-amount');
    let sub_total = document.querySelector('.sub-total');

    let total_taxable_amount = document.querySelector('.total-taxable-amount');
    let total_gst_amount = document.querySelector('.total-gst-amount');
    // let rounded = document.querySelector('.rounded');
    let grand_total = document.querySelector('.grand-total');

    newname.textContent = name;
    newaddress.textContent = address;
    newproduct.textContent = product;
    newhsn.textContent = hsn;
    newquantity.textContent = quantity;
    newrate.textContent = rate;
    newgst.textContent = gst + "%";
    newdelivery.textContent = delivery.toUpperCase() + " DELIVERY";

    // Calculate the taxable amount, GST amount, and sub-total
    const taxableAmount = (parseFloat(rate) * parseFloat(quantity) * 100) / (100 + parseFloat(gst));
    const gstAmount = (taxableAmount * gst) / 100;
    const subTotal = taxableAmount + gstAmount;

    total_taxable_amount.textContent = taxableAmount.toFixed(2);
    total_gst_amount.textContent = gstAmount.toFixed(2);
    // rounded.textContent = grand_total.toFixed(0);
    grand_total.textContent = subTotal.toFixed(2);

    taxable_amount.textContent = taxableAmount.toFixed(2);
    gst_amount.textContent = gstAmount.toFixed(2);
    sub_total.textContent = subTotal.toFixed(2);

    document.querySelector("#invoice-form").classList.remove("visible");
    document.querySelector("#invoice-form").classList.add("hidden");

    document.querySelector(".invoice-div").style.display = "";
    setTimeout(()=> {
        document.querySelector(".invoice-div").classList.remove("hidden");
        document.querySelector(".invoice-div").classList.add("visible");
}, 1000);

    setTimeout(()=> document.querySelector("#invoice-form").style.display = "none", 1000);
    // document.querySelector(".invoice-div").classList.add("position");

};
document.getElementById("submit-button").addEventListener("click", updateValues);