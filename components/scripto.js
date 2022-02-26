function appendDatao(gettingHistoryData, loco) {
  let orderDateArr = "put date here";
  gettingHistoryData("http://localhost:2345/orderHistory", {}).then((data) => {
    console.log("history data:", data);
    let orderdata = data.productId;
    for (let i = orderdata.length - 1; i >= 0; i--) {
      let ele = orderdata[i];
      let carddiv = document.createElement("div");
      carddiv.setAttribute("id", "carddiv");
      let carddivposterimage = document.createElement("div");
      carddivposterimage.setAttribute("id", "carddivposterimage");
      let imagediv = document.createElement("div");
      imagediv.setAttribute("id", "imagediv");
      let image = document.createElement("img");
      image.src = ele.img;
      imagediv.append(image);
      let descriptondiv = document.createElement("div");
      descriptondiv.setAttribute("id", "descriptondiv");
      let orderId = document.createElement("p");
      orderId.textContent = `Order Id : ORD-${i}${ele._id}`;
      let name = document.createElement("p");
      name.textContent = `Product : ${ele.title}`;
      let size = document.createElement("p");
      size.textContent = `Description : ${ele.desc}`;
      let price = document.createElement("p");
      price.textContent = `Rs.${ele.price}`;
      let date = document.createElement("p");
      date.textContent = `Order Date : ${String(
        new Date(data.createdAt)
      ).substring(0, 15)}`;
      descriptondiv.append(orderId, name, size, price, date);
      carddivposterimage.append(imagediv, descriptondiv);
      let buttondiv = document.createElement("div");
      buttondiv.setAttribute("id", "buttondiv");
      let butt1 = document.createElement("button");
      butt1.setAttribute("class", "btnStyle");
      butt1.textContent = "Cancel";
      let butt2 = document.createElement("button");
      butt2.setAttribute("class", "btnStyle");
      butt2.textContent = "Track";
      buttondiv.append(butt1, butt2);
      carddiv.append(carddivposterimage, buttondiv);
      loco.append(carddiv);
    }
  });
}
export default appendDatao;
