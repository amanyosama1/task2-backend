const fs=require("fs")
const { loadavg } = require("os")
const addData=(id,fname,lname,age,city)=>{
    const allData=loadData()
    allData.push({
        id:id,
        fname:fname,
        lname:lname,
        age:age,
        city:city
    })
    saveAllData(allData)
}
loadData=()=>{
    try{
        const dataJSON=fs.readFileSync("data.json").toString()
        return JSON.parse(dataJSON)
    }catch{
        return []
    }
}
saveAllData=(allData)=>{
    const dataJSON=JSON.stringify(allData)
    fs.writeFileSync("data.json",dataJSON)
}
const deleteData=(id)=>{
    const allData=loadData()
    const DataNotDeleted=allData.filter((obj)=>{
        return obj.id !==id
    })
    saveAllData(DataNotDeleted)
}
const readData=(id)=>{
    const allData=loadData()
    const readStoredData=allData.find((obj)=>{
        return obj.id ==id
    })
    if(readStoredData){
        console.log(readStoredData)
    }else{
        console.log("Entered ID is Wrong")
    }
}
const listData=()=>{
    const allData=loadData()
    allData.forEach( (obj)=> {
        console.log(obj.fname,obj.lname,obj.city)
    });
}


module.exports={
    addData,
    deleteData,
    readData,
    listData
}