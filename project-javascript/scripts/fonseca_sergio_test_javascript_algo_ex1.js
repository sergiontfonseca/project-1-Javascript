let to_verify = new Array(9);
for (let i=0; i < to_verify.length; i++){
    to_verify[i] = new Array(9);
}

function loadTableData() {
    for (let i in array_number){
        let row = array_number[i].split(' ');
        for (let j in row){
            to_verify[i][j]= parseInt(row[j]);
        }
    }
}

function createTable() {
    let table = document.getElementById('sudoku');
    for (let i=0; i < to_verify.length; i++){
        let tr = document.createElement('tr');
        for (let j=0; j < to_verify[i].length; j++){
            let td = document.createElement('td');
            td.innerHTML = to_verify[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}


