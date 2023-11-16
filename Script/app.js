const fs=require("fs")
const data=require("./data")
const yargs = require("yargs")



yargs.command({
    command:"add",
    describe:"add new item",
    builder:{
        id:{
            describe:"id of added item",
            demandOption:true,
            type:"string"
        },
        fname:{
            describe:"first name of added item",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"id of added item",
            demandOption:false,
            type:"string"
        },
        age:{
            describe:"age of added item",
            demandOption:false,
            type:"string"
        },
        city:{
            describe:"city of added item",
            demandOption:false,
            type:"string"
        }
    },
    handler:(x)=>{
        data.addData(x.id,x.fname,x.lname,x.age,x.city)
    }
})
yargs.command({
    command:"delete",
    describe:"delete an existed item",
    builder:{
        id:{
            describe:"id of deleted item",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        data.deleteData(x.id)
    }
})
yargs.command({
    command:"read",
    describe:"read the existed items",
    builder:{
        id:{
            describe:"id of read item",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        data.readData(x.id)
    }
})
yargs.command({
    command:"list",
    describe:"list the existed items",
    handler:(x)=>{
        data.listData()
    }
})
yargs.parse()