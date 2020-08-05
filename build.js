const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs')

var pjson = require('./package.json');
var cjson = require('./config_ck.json')

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

function CheckSrcListing(){
    let dir = cjson.directory.main
    let src_dir = cjson.directory.view
    let view_list = cjson.view
    let final_dir = dir + '/' + src_dir

    let config_cmd = '';

    var loop = new Promise((resolve, reject) => {
        view_list.forEach((item, array) => {
            let view = final_dir + "/" + item

            fs.access(view, fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return false
                }
            
                console.log('file ok ' + view)
                config_cmd += view
            })

        console.log(array, item.length );

            if (item === item.length -1) resolve();
        })
    });

    loop.then(() => {
        console.log("config_cmd");
    });
      
}

function run_compil(devolop = false){
    CheckSrcListing()


    if( devolop ){
        console.log("run develop")
    }else{
        console.log("run prod")
    }
}

main_process()
