const data = require("./data.js")
const yargs = require("yargs")

yargs.command({
    command: "add",
    describe: "Add a person",
    builder:{
        id:{
            describe: "This is the id in add command",
            demandOption: true,
            type: "number"
        },
        fname:{
            describe: "This is the first name in add command",
            demandOption: true,
            type: "string"
        },
        lname:{
            describe: "This is the last name in add command",
            demandOption: true,
            type: "string"
        },
    },
    handler: (x) =>{
        data.addPerson(x.id,x.fname, x.lname, x.age, x.city) 
    }

})

yargs.command({
    command: "delete",
    describe: "Delete a person",
    builder:{
        id:{
            describe: "This is the id in delete command",
            demandOption: true,
            type: "number"
        }
    },
    handler: (x) =>{
        data.deletePerson(x.id)
    }
})

yargs.command({
    command: "deleteall",
    describe: "Delete all persons",
    handler: () =>{
        data.deleteAllPersons()
    }
})

yargs.command({
    command:"read",
    describe: "Read a person",
    builder:{
        id:{
            describe: "This is the id in read command",
            demandOption: true,
            type: "number"
        }
    },
    handler: (x) =>{
        data.readPerson(x.id)
    }
})

yargs.command({
    command:"readall",
    describe: "Read all person",
    handler: () =>{
        data.readAllPersons()
    }
})
yargs.parse()