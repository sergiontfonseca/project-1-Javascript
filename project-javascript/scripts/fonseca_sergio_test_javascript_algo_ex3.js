function validateRows(){
    validateMatrixAndBuildErrors(to_verify,'Line');
}

function validateColumns(){
    let columns_to_verify = new Array(9);
    for (let i=0; i < columns_to_verify.length; i++){
        columns_to_verify[i] = new Array(9);
    }
    for(let i=0; i < to_verify.length; i++){
        for (j=0; j < to_verify[i].length; j++){
            columns_to_verify[j][i] = to_verify[i][j];
        }
    }
    let errorTable = document.getElementById('errors');
    validateMatrixAndBuildErrors(columns_to_verify,'Column');
}

function validateRegion(x,y){
    let region_to_verify = [];
    let xstartindex = x*3;
    let ystartindex = y*3;
    let errorTable = document.getElementById('errors');
    
    for (let i=xstartindex; i < xstartindex + 3; i++){
        for (let j=ystartindex; j < ystartindex + 3; j++){
            region_to_verify.push(to_verify[i][j]);
        }
    }
    
    if (!validate(region_to_verify)){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = `Region ${3*y + x + 1} incorrect`;
        tr.appendChild(td);
        for (let i=0; i < region_to_verify.length; i++){
            let dataValue = document.createElement('td');
            dataValue.innerHTML = region_to_verify[i];
            tr.appendChild(dataValue);
        }
        errorTable.appendChild(tr);
    }
}

function validateRegions(){
    for (let i=0; i < 3; i++){
        for (let j=0; j < 3; j++){
            validateRegion(i,j);
        }
    }
}

function validateMatrixAndBuildErrors(matrix,text){
    let errorTable = document.getElementById('errors');
    for(let i=0; i < matrix.length; i++){
        if (!validate(matrix[i])){
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            td.innerHTML = `${text} ${i+1} incorrect`;
            tr.appendChild(td);
            for (let j=0; j < matrix[i].length; j++){
                let dataValue = document.createElement('td');
                dataValue.innerHTML = matrix[i][j];
                tr.appendChild(dataValue);
            }
            errorTable.appendChild(tr);
        }         
    }
}

function checkSuccess(){
    let errorTable = document.getElementById('errors');
    if(!errorTable.innerHTML){
        let success = document.getElementById('success');
        success.innerHTML = 'the table is correct';
    }
}