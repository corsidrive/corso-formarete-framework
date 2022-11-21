import { findTag } from "./todo_module.js";

const Todoist = [

    {
        id:"a",
        label:"Comprare il latte",
        done:true,
        tags: ['urgente','casa']
    },
    {   
        id:"b",
        label:"Comprare Farina",
        done:true,
        tags: ['casa']
    },
    {
        id:"c",
        label:"Meeting su zoom",
        done:true,
        tags: ['lavoro','urgente']
    },
    {
        id:"d",
        label:"Test per maiuscole",
        done:true,
        tags: ['lavoro','Urgente']
    },
    {
        id:"e",
        label:"Test per maiuscole",
        done:true,
        tags: ['lavoro','URGENTE']
    },
    {
        id:"f",
        label:"Test per maiuscole",
        done:true,
        tags: ['lavoro','urgEnTe']
    },
]


function test_trova_urgente(){
    const res = Todoist.filter(findTag("urgente"))
    console.log("mi aspetto di trovare 4 item", res.length === 5,res)
    
}
test_trova_urgente()


function test_trova_tag_lavoro(){
    const res = Todoist.filter(findTag("lavoro"))
    
    //console.log("mi aspetto di trovare 1 item", res.length === 1,res.length)
    //console.log("mi aspetto di trovare 1 item label", res[0].label === "Meeting su zoom")
}
// test_trova_tag_lavoro()
