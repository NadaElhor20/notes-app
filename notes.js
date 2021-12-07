const fs = require('fs')

// // Version1
// const addNote = (title,body) =>{
//     const notes = loadNotes() // []  // [{title:"task1",body:"body1"}]
//     notes.push(      // [{title:'task1',body:'body1'},{title:'task2',body:'body2'}]
//         {
//             title,
//             body
//         }
//     ) // [{title:'note1',body:'body1'}]
//     saveNotes(notes)
// }

////////////////////////////////////////////////////////////////////////////

// version 2

const addNote=(title,body)=>{
    const notes=loadNotes();
    const dapulicateTitles=notes.filter((note)=>{
        return note.title===title;
    });
    console.log(dapulicateTitles);
    console.log(dapulicateTitles.length);
    if (dapulicateTitles.length===0){
        notes.push(
            {
                title,
                body,
            }
        );
        saveNotes(notes);
        console.log("save succefully");
    }
    else{
        console.log("error");
    }
}
///////////////////////////////////////////////////
// delet

const deletNote=(title)=>{
    const notes=loadNotes();
    const notesToKeep=notes.filter((note)=>{
        return note.title!==title;
    });
        console.log(notesToKeep);
        saveNotes(notesToKeep);
        console.log("Removed");
  }

  ///////////////////////////////////////////////////
// read

const readNote=(title)=>{
    const notes=loadNotes();
    const note=notes.find((note)=>{
        return note.title===title;
    });
    if(note){
        console.log(note.body);
    }   
    else{
        console.log("Your Note  Not Found");
    }
        
      
  }
  ///////////////////////////////////////////////////
// list

const listNote=()=>{
    const lists=loadNotes(); 
    lists.forEach((list) =>{
        return console.log(list.body)} );
        
      
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const loadNotes = () => {
    // error begining of program
    // const dataBuffer = fs.readFileSync('notes.json').toString()
    // return JSON.parse(dataBuffer)
    try{
        //  [{"title":"task1","body":"body1"}]
        const dataBuffer = fs.readFileSync('notes.json').toString()
    return JSON.parse(dataBuffer)  //  [{title:"task1",body:"body1"}]
    }
    catch(e){
        return []
    }

}

const saveNotes = (notes) =>{
    // [{title:'task1',body:'body1'}]  ==> [{"title":'task1',"body":'body1'}]
    // [{title:'task1',body:'body1'},{title:'task2',body:'body2'}] ==> [{"title":'task1',"body":'body1'},{"title":'task2',"body":'body2'}]
const saveData = JSON.stringify(notes)   
// console.log(saveData)
fs.writeFileSync('notes.json',saveData)

}



///////////////////////////////////////////////////////////////////////////////////////////



module.exports = {
    addNote,
    deletNote,
    readNote,
    listNote
}