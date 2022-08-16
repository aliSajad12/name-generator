const genBtn = document.getElementById('genBtn');
const output = document.getElementById('output');
const listItem = document.getElementById('listItem');
const themeToggler = document.getElementById('themeToggler');

//First Name
const firstNames = ['Ali', 'Kevin', 'Mike', 'Jimmy', 'Franklin', 'Peter', 'Sherlock', 'Elissa', 
                    'Mahdi', 'Justin', 'Joe', 'Mac', 'Tylor', 'Selena', 'Erick', 'Elon', 'Mark'];
//Last Name
const lastNames = ['Ahmadi', 'Johnny', 'Willer', 'Yaun', 'Mendiz', 'Wilhelm', 'Holmes', 'Byer', 
                    'Musk', 'Zucker', 'Gomez', 'Swift', 'Donald'];

//Random Generator
const randomGenerator = () =>{
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}

//Result
const randomNames = () =>{
    output.innerHTML = randomGenerator();
    genBtn.innerHTML = 'Generated';
}

genBtn.addEventListener('click', randomNames);


//Night Theme
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('nightTheme');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})