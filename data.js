const fs = require('fs')
const addPerson = (id,fname,lname,age,city) => {
    const allData = loadData()

    const duplicateData = allData.filter((x) =>{
        return x.id === id
    })

    if(duplicateData.length == 0){
        allData.push({
        id: id,
        fname: fname,
        lname: lname,
        age: age,
        city: city
    })
    console.log("person added successfully")
    saveData(allData)
    }else{
        console.log("Error: This id already exists")
    }
    
}
/////////////////////////////////////////
const loadData = () => {
    try {
        const dataJson = fs.readFileSync('data1.json').toString()
        return JSON.parse(dataJson)
    }
    catch {
        return []
    }
}
/////////////////////////////////////////
const saveData = (allData) => {
    const allDataJson = JSON.stringify(allData)
    fs.writeFileSync('data1.json', allDataJson)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const deletePerson = (id) => {
    const allData = loadData()

    const newData = allData.filter((x) => {
        return x.id !== id
    })
    console.log("person deleted successfully")

    saveData(newData)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const deleteAllPersons = (id=-1) => {
    const allData = loadData()

    const newData = allData.filter((x) => {
        return x.id == id
    })
    console.log("All persons deleted successfully")

    saveData(newData)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const readPerson = (id) => {
    const allData = loadData()

    const person = allData.find((x) => {
        return x.id === id
    })
    if (person) {
        console.log(person.fname + " " + person.lname+" lives in " + person.city)
    } else {
        console.log("Person not found")
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const readAllPersons = () => {
    const allData = loadData()

    if (allData) {
        allData.forEach((x) => {
            console.log(x.fname + " " + x.lname+" lives in " + x.city)
        });
    }else{
        console.log("No persons found")
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = {
    addPerson,
    deletePerson,
    deleteAllPersons,
    readPerson,
    readAllPersons
}
