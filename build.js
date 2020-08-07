const inquirer = require('inquirer');
const chalk = require('chalk');
var { spawn } = require('child_process');

var pjson = require('./package.json');

function hello_msg(){
    console.log(pjson.name + " :")
    console.log(`      - version :  ${chalk.grey(pjson.version)}`);
    console.log(`      - author :  ${chalk.grey(pjson.autho)}`);
    console.log(`      - license : ${chalk.grey(pjson.license)}`);
    console.log(`      - repository :  ${chalk.grey(pjson.repository)}`);
    console.log(`      - description :  ${chalk.grey(pjson.description)}`);
}

function main_nav(){
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'main_nav',
                message: 'what want to do ?',
                choices: [
                    'Info',
                    'Development',
                    'Compiled',
                    'Exit'
                ],
            },
        ])
        .then(answers => {
            switch (answers.main_nav ) {
                case 'Info':
                    console.clear()
                    main_process()
                  break;
                case 'Development':
                        console.clear()
                        run_compil(true)
                    break;
                case 'Compiled':
                        console.clear()
                        run_compil()
                break;
                case 'Exit':
                    console.clear()
                    console.log('console closes successfully')
                  break;
                
                default:
                  console.log(`Sorry, navigation error  (${answers.main_nav}).`);
              }
            
        }
    );
}

function main_process(){
    hello_msg()
    main_nav()
}

function run_compil(devolop = false){
    if( devolop ){
        var  rc  = spawn('npm.cmd', ['run', 'dev']);
    }else{
        var  rc  = spawn('npm.cmd', ['run', 'build']);
    }

    rc.stdout.on('data', (data) => {
        console.log(`${data}`);
      });
      
      rc.stderr.on('data', (data) => {
        console.error(`${data}`);
      });
      
      rc.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });
}

main_process()
