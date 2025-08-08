function average(phones){
  let phnTotalPrice = 0;
  for(phn of phones){
    phnTotalPrice += phn.price;
  }
    let avg = phnTotalPrice/ phones.length;
  return avg;
}
const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
const total = console.log(average(phones));