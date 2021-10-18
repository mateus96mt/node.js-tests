const chalk = require('chalk');

const yargs = require('yargs');

// console.log("chalk.green('Green text'): ", chalk.green('Green text'));

// console.log("chalk.red('Red text'): ", chalk.red('Red text'));

// console.log("chalk.cyan('Cyan text'): ", chalk.cyan('Cyan text'));

// const validator = require('validator')

// const getNotes = require('./notes')

// console.log("getNotes():", getNotes())

// console.log("validator.isEmail('mateus96mt@gmail.com'): ", validator.isEmail('mateus96mt@gmail.com'))

// console.log("validator.isEmail('asd.com'): ", validator.isEmail('asd.com'))

// console.log("validator.isURL('googlecom'): ", validator.isURL('googlecom'))

// console.log("validator.isURL('https://google.com'): ", validator.isURL('https://google.com'))

// console.log("process.argv: ", process.argv)

// yargs.version('1.2.1')

yargs.command({
    command: 'add',
    description: 'Add a new note',
    handler: function (argv){
        console.log('Add a new note: ', argv.title)
    },
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'number'
        }
    }
});

yargs.command({
    command: 'del',
    description: 'Delete a note',
    handler: function (){
        console.log('Note deleted!')
    }
});

yargs.command({
    command: 'read',
    description: 'Read a note',
    handler: function (){
        console.log('Note readed!')
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

// console.log("yargs.argv: ", yargs.argv)

//commands for the app: add, remove, read lista

