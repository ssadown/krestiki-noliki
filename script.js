let block = {
    block1: document.querySelector('#block-1'),
    block2: document.querySelector('#block-2'),
    block3: document.querySelector('#block-3'),
    block4: document.querySelector('#block-4'),
    block5: document.querySelector('#block-5'),
    block6: document.querySelector('#block-6'),
    block7: document.querySelector('#block-7'),
    block8: document.querySelector('#block-8'),
    block9: document.querySelector('#block-9'),
}
let order = 0;
let X = {
    X1: 0,
    X2: 0,
    X3: 0,
    X4: 0,
    X5: 0,
    X6: 0,
    X7: 0,
    X8: 0,
    X9: 0,
}
let O = {
    O1: 0,
    O2: 0,
    O3: 0,
    O4: 0,
    O5: 0,
    O6: 0,
    O7: 0,
    O8: 0,
    O9: 0,
}

function blockActive1 () {
    if (order == 0) {
        block.block1.innerHTML = '<h1>X</h1>';
        order = order + 1;
        X.X1 = X.X1 + 1;
    } else if (order == 1) {
        block.block1.innerHTML = '<h1>O</h1>';
        order = order - 1;
        O.O1 = O.O1 +1; 
    }
}
function blockActive2 () {
    if (order == 0) {
        block.block2.innerHTML = '<h1>X</h1>';
        order = order + 1;
        X.X2 = X.X2 + 1;
    } else if (order == 1) {
        block.block2.innerHTML = '<h1>O</h1>';
        order = order - 1;
        O.O2 = O.O2 +1; 
    }
}
function blockActive3 () {
    if (order == 0) {
        block.block3.innerHTML = '<h1>X</h1>';
        order = order + 1;
        X.X3 = X.X3 + 1;
    } else if (order == 1) {
        block.block3.innerHTML = '<h1>O</h1>';
        order = order - 1;
        O.O3 = O.O3 +1; 
    }
}
function blockActive4 () {
    if (order == 0) {
        block.block4.innerHTML = '<h1>X</h1>';
        order = order + 1;
        X.X4 = X.X4 + 1;
    } else if (order == 1) {
        block.block4.innerHTML = '<h1>O</h1>';
        order = order - 1;
        O4 = O4 +1; 
    }
}
function blockActive5 () {
    if (order == 0) {
        block.block5.innerHTML = '<h1>X</h1>';
        order = order + 1;
        X.X5 = X.X5 + 1;
    } else if (order == 1) {
        block.block5.innerHTML = '<h1>O</h1>';
        order = order - 1;
        O.O5 = O.O5 +1; 
    }
}
function blockActive6 () {
    if (order == 0) {
        block.block6.innerHTML = '<h1>X</h1>';
        order = order + 1;
        X.X6 = X.X6 + 1;
    } else if (order == 1) {
        block.block6.innerHTML = '<h1>O</h1>';
        order = order - 1;
        O.O6 = O.O6 +1; 
    }
}
function blockActive7 () {
    if (order == 0) {
        block.block7.innerHTML = '<h1>X</h1>';
        order = order + 1;
        X.X7 = X.X7 + 1;
    } else if (order == 1) {
        block.block7.innerHTML = '<h1>O</h1>';
        order = order - 1;
        O.O7 = O.O7 +1; 
    }
}
function blockActive8 () {
    if (order == 0) {
        block.block8.innerHTML = '<h1>X</h1>';
        order = order + 1;
        X.X8 = X.X8 + 1;
    } else if (order == 1) {
        block.block8.innerHTML = '<h1>O</h1>';
        order = order - 1;
        O.O8 = O.O8 +1; 
    }
}
function blockActive9 () {
    if (order == 0) {
        block.block9.innerHTML = '<h1>X</h1>';
        order = order + 1;
        X.X9 = X.X9 + 1;
    } else if (order == 1) {
        block.block9.innerHTML = '<h1>O</h1>';
        order = order - 1;
        O.O9 = O.O9 +1; 
    }
}
function winX {

}