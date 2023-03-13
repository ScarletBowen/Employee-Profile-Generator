// Create the manager card
const createManager = function (manager) {
    return `
    <div class="col-4 mt-4 wholeCard">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.office}</p>
            </div>
        </div>
    </div>
    `;
}

// create Engineer card
const createEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4 wholeCard">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `}

// create intern card

const createIntern = function (intern) {
    return `
    <div class="col-4 mt-4 wholeCard">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};


generateHTML = (data) => {

    // array for cards 
    cardArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager card function
        if (role === 'Manager') {
            const managerCard = createManager(employee);

            cardArray.push(managerCard);
        }

        // call engineer card function
        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);

            cardArray.push(engineerCard);
        }

        // call intern card function 
        if (role === 'Intern') {
            const internCard = createIntern(employee);

            cardArray.push(internCard);
        }
        
    }

    // joining strings 
    const employeeCards = cardArray.join('')

    // return to generated page
    const createTeam = createTeamPage(employeeCards); 
    return createTeam;

}


// generate the HTML 
const createTeamPage = function (employeeCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">        
        <link rel="stylesheet" href="./stylesheet.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.6.1.slim.min.js"></script>
    </html>
    `;
    }

    module.exports = generateHTML; 
