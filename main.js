const sorter = ['Aladár', 'Béla', 'Ádám', 'Géza', 'István', 'alma'];
    sorter.sort((a,b) => a.toLowerCase().localeCompare(b));
    console.log(sorter);

const sorter2 = [2, 3, 9, 6, 7, 10];
    sorter2.sort((a,b) => a - b);
    console.log(sorter2);

const sorter3 = ['Aladár', 'Zsolt', 'Ferenc', 'Ádám', 'Géza', 'István', 'alma'];
    sorter3.sort(new Intl.Collator('hu').compare);
    console.log(sorter3);


    const customerList = [
        {"id": 1, "name":"Kiss Péter", "email":'adskf@sdfdsf.hu', "rating":3},
        {"id": 2, "name":"Nagy Viktor", "email":'rwerw@sdfdsf.hu', "rating":2},
        {"id": 3, "name":"Horváth Gréta", "email":'qwe@ert.hu', "rating":1}
];


const cityFilter = (list, population, area) => {
    const output = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].population < population && list[i].area > area) {
            output.push(list[i].name)
        }
    }
}

const cityFilter2 = (list, population, area) => {
    return list
    .filter(city => city.population < population && city.area > area)
    .map(item => item.name)
}


const customerFilter = (list, name, rating) => {
    return list.filter( c => c.name.includes(name()) )
    .map(c => c.name );
}

function chnageElements() {
    const examples = document.querySelectorAll('.example');
    for (let i =0; i < examples.length; i++) {
        examples[i].style.backgroundColor = 'red';
        examples[i].style.fontStyle = 'italic';
    }
}

function chnageElements() {
   Array.from(document.querySelectorAll('.example')).forEach( e => {
       e.style.backgroundColor = 'red';
       e.style.fontStyle = 'italic';
   })
}