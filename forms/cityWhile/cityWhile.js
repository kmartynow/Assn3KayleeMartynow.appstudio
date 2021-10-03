 cityList = []

while (location == 'true') { 
    location = prompt("Do you have a city to enter: ")
    if (location == "yes") {
    city = prompt("Enter a city: ")
    cityList.push(city)
}  

else {
    location = false
    }
    }
count = 0
while(cityList.length !== count) {
    let outputCity = cityList[count]
    console.log(outputCity.toLowerCase())
    count++
}

