const mobiles = [
  { id: 1, name: "iPhone 15 Pro", price: 450000, brand: "Apple", stock: 5 },
  { id: 2, name: "Samsung S24 Ultra", price: 380000, brand: "Samsung", stock: 0 },
  { id: 3, name: "Google Pixel 8", price: 280000, brand: "Google", stock: 3 },
  { id: 4, name: "OnePlus 12", price: 220000, brand: "OnePlus", stock: 8 },
  { id: 5, name: "iPhone 13", price: 250000, brand: "Apple", stock: 2 }
]


mobilesNameArray = mobiles.map((mobileNames)=>{
    return mobileNames.name

})

console.log(mobilesNameArray)
 const availableMobiles = mobiles.filter((mobile)=>{

    return mobile.stock>0 && mobile.brand === "Apple"

 })

 console.log(availableMobiles)

 const totallInventoryValue = mobiles.reduce((total, mobile)=>{
    return total + (mobile.price * mobile.stock)    
 },0)

 console.log(`Total Inventory Value: ${totallInventoryValue}`)