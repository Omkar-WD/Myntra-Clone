function appendDatao(orderdata, orderDateArr, loco) {
  if (orderdata.length !== 0) {
    // orderdata.forEach(function (ele, i) {
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
      orderId.textContent = `Order Id :${i + 1}`;
      let name = document.createElement("p");
      name.textContent = `Product :${ele.title}`;
      let size = document.createElement("p");
      size.textContent = `Description:${ele.desc}`;
      let price = document.createElement("p");
      price.textContent = ele.price;
      let date = document.createElement("p");
      date.textContent = `Order Date : ${orderDateArr[i]}`;
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
  }
}
export default appendDatao;
