const yargs = require('yargs')
const fs = require('fs')
const notes = require('./notes');

yargs.command({
    command: 'add',
    description: 'Add a new note',
    handler: function (argv){
        notes.addNote(argv.title, argv.body)
    },
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    }
});

yargs.command({
    command: 'del',
    description: 'Delete a note',
    handler: function (argv){
        notes.removeNote(argv.title)
    },
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    }
});

yargs.command({
    command: 'read',
    description: 'Read a note',
    handler: function (){
        console.log(notes.getNotes())
    }
});

yargs.command({
    command: 'list',
    description: 'List all notes',
    handler: function (){
        console.log('Notes listed')
    }
});

yargs.parse()
