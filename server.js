const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');


// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: "{Eccentrics613",
        database: 'tracker'
    },
    console.log('Connected to the tracker database.')
);

db.connect((err) => {
    if (err) {
        console.log(err)
    }
});

const viewDepartments = () => {
    db.query("SELECT * FROM department;", (err, data) => {
        console.table(data)
        mainPrompt();
    })
};

const viewRoles = () => {
    db.query("SELECT * FROM role;", (err, data) => {
        console.table(data)
        mainPrompt();
    })
};

const viewEmployees = () => {
    db.query("SELECT * FROM employee;", (err, data) => {
        console.table(data)
        mainPrompt();
    })
};

const addDepartments = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "departmentName",
            message: "What is the department name you would like to add?"
        }
    ]).then((answers) => {
        db.query("INSERT INTO department (name) VALUES (?);", [answers.departmentName],(err, data) => {
            console.table(data)
            mainPrompt();
        })
    })
};

const addRoles = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "roleName",
            message: "What is the name of the role?"
        },
        {
            type: "number",
            name: "salary",
            message: "What is the salary of the role?"
        },
        {
            type: "input",
            name: "departmentName",
            message: "Which department does the role belong to?", 
        }
    ]).then((answers) => {
        db.query("INSERT INTO role (name, salary) VALUES (??);", [answers.roleName, answers.salary],(err, data) => {
            console.table(data)
            mainPrompt();
        })
    })
};

const addEmployees = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employee's last name?"
        },
        {
            type: "input",
            name: "employeeRole",
            message: "What is the employee's role?"
        },
        {
            type: "input",
            name: "managerName",
            message: "Who is the employee's manager?"
        },

    //   NEED TO ADD IN THE DEPARTMENT THE ROLE RELATES TO
    ]).then((answers) => {
        db.query("INSERT INTO employee (firstName, lastName, employeeRole, managerName) VALUES (????);", [answers.firstName, answers.lastName, answers.employeeRole, answers.managerName],(err, data) => {
            console.table(data)
            mainPrompt();
        })
    })
};

const updateEmpRole = () => {

};

const mainPrompt = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "What would you like to do?",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add Department",
                "Add Role",
                "Add Employee",
                "Update Employee Role"
            ]
        }
    ]).then((answers) => {
        if(answers.userChoice == "View All Departments") {
            viewDepartments()
        } else if (answers.userChoice == "View All Roles") {
            viewRoles();
        } else if (answers.userChoice == "Add Department") {
            addDepartments();
        } else if (answers.userChoice == "Add Role") {
            addRoles();
        } else if (answers.userChoice == "Add Employee") {
            addEmployees();
        } else if (answers.userChoice == "View Employee") {
            viewEmployees();
        }
    })
}

mainPrompt();
