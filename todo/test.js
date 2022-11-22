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
    // TEST PER FIX tag case insensitive
    {
        id:"d",
        label:"Test per maiuscole",
        done:true,
        tags: ['Urgente']
    },
    {
        id:"e",
        label:"Test per maiuscole",
        done:true,
        tags: ['URGENTE']
    },
    {
        id:"f",
        label:"Test per maiuscole",
        done:true,
        tags: ['urgEnTe']
    },
]


function test_trova_urgente(){
    const res = Todoist.filter(findTag("urgente"))
    console.log("mi aspetto di trovare 5 item", res.length === 5)
    
}
test_trova_urgente()


function test_trova_tag_lavoro(){
    const res = Todoist.filter(findTag("lavoro"))

    console.log("test_trova_tag_lavoro mi aspetto di trovare 1 item", res.length === 1,res.length)
    console.log("test_trova_tag_lavoro mi aspetto di trovare 1 item label", res[0].label === "Meeting su zoom")
}
test_trova_tag_lavoro()
