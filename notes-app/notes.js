const fs = require('fs')
const dataFileName = 'notes.json'

const getNotes = function(){
    try{
        const notes = fs.readFileSync(dataFileName)
        return JSON.parse(notes)
    }catch(e){
        return [];
    }
}

const addNote = function (title, body){
    const notes = getNotes()
    const duplicated = notes.filter(function (note){
        return note.title === title
    })

    if(duplicated.length == 0){
        notes.push({
            'title': title,
            'body': body
        })
    
        saveNotes(notes)
        console.log('Note added!')
    }else{
        const stringNote = JSON.stringify({
            'title': title,
            'body': body
        })
        console.log('Note ', stringNote, ' already exits!')
    }
}

const saveNotes = function (notes){
    const jsonString = JSON.stringify(notes)
    fs.writeFileSync(dataFileName, jsonString)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    saveNotes: saveNotes
}