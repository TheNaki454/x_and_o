var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');
var fifth = document.getElementById('fifth');
var sixth = document.getElementById('sixth');
var seventh = document.getElementById('seventh');
var eighth = document.getElementById('eighth');
var ninth = document.getElementById('ninth');
var result = document.getElementById('span')
var counter = 1;

first.onclick = function(){
    if(counter % 2 == 1){
        first.innerHTML = 'x';
        counter++;
        result.innerHTML = 'Ходит нолик!'
    }
    else{
        first.innerHTML = 'o'
        counter++;
        result.innerHTML = 'Ходит крестик!'
    }
}
second.onclick = function(){
    if(counter % 2 == 1){
        second.innerHTML = 'x';
        counter++;
        result.innerHTML = 'Ходит нолик!'
    }
    else{
        second.innerHTML = 'o'
        counter++;
        result.innerHTML = 'Ходит крестик!'
    }
}
third.onclick = function(){
    if(counter % 2 == 1){
        third.innerHTML = 'x';
        counter++;
        result.innerHTML = 'Ходит нолик!'
    }
    else{
        third.innerHTML = 'o'
        counter++;
        result.innerHTML = 'Ходит крестик!'
    }
}
fourth.onclick = function(){
    if(counter % 2 == 1){
        fourth.innerHTML = 'x';
        counter++;
        result.innerHTML = 'Ходит нолик!'
    }
    else{
        fourth.innerHTML = 'o'
        counter++;
        result.innerHTML = 'Ходит крестик!'
    }
}
fifth.onclick = function(){
    if(counter % 2 == 1){
        fifth.innerHTML = 'x';
        counter++;
        result.innerHTML = 'Ходит нолик!'
    }
    else{
        fifth.innerHTML = 'o'
        counter++;
        result.innerHTML = 'Ходит крестик!'
    }
}
sixth.onclick = function(){
    if(counter % 2 == 1){
        sixth.innerHTML = 'x';
        counter++;
        result.innerHTML = 'Ходит нолик!'
    }
    else{
        sixth.innerHTML = 'o'
        counter++;
        result.innerHTML = 'Ходит крестик!'
    }
}
seventh.onclick = function(){
    if(counter % 2 == 1){
        seventh.innerHTML = 'x';
        counter++;
        result.innerHTML = 'Ходит нолик!'
    }
    else{
        seventh.innerHTML = 'o'
        counter++;
        result.innerHTML = 'Ходит крестик!'
    }
}
eighth.onclick = function(){
    if(counter % 2 == 1){
        eighth.innerHTML = 'x';
        counter++;
        result.innerHTML = 'Ходит нолик!'
    }
    else{
        eighth.innerHTML = 'o'
        counter++;
        result.innerHTML = 'Ходит крестик!'
    }
}
ninth.onclick = function(){
    if(counter % 2 == 1){
        ninth.innerHTML = 'x';
        counter++;
        result.innerHTML = 'Ходит нолик!'
    }
    else{
        ninth.innerHTML = 'o'
        counter++;
        result.innerHTML = 'Ходит крестик!'
    }
}

var arr = setInterval(
    function(){
        if((first.innerHTML == 'x' && fifth.innerHTML == 'x' && ninth.innerHTML == 'x') || 
        (first.innerHTML == 'x' && second.innerHTML == 'x' && third.innerHTML == 'x') || 
        (first.innerHTML == 'x' && fourth.innerHTML == 'x' && seventh.innerHTML == 'x')|| 
        (third.innerHTML == 'x' && fifth.innerHTML == 'x' && seventh.innerHTML == 'x') ||
        (second.innerHTML == 'x' && fifth.innerHTML == 'x' && eighth.innerHTML == 'x') || 
        (third.innerHTML == 'x' && sixth.innerHTML == 'x' && ninth.innerHTML == 'x') || 
        (fourth.innerHTML == 'x' && fifth.innerHTML == 'x' && sixth.innerHTML == 'x') || 
        (seventh.innerHTML == 'x' && eighth.innerHTML == 'x' && ninth.innerHTML == 'x')){
            alert('Крестик победил!');
            first.innerHTML = '';
            second.innerHTML = '';
            third.innerHTML = '';
            fourth.innerHTML = '';
            fifth.innerHTML = '';
            sixth.innerHTML = '';
            seventh.innerHTML = '';
            eighth.innerHTML = '';
            ninth.innerHTML = '';
            counter = 1;
            result.innerHTML = 'Ходит крестик!'
        }
        else if((first.innerHTML == 'o' && fifth.innerHTML == 'o' && ninth.innerHTML == 'o') || 
        (first.innerHTML == 'o' && second.innerHTML == 'o' && third.innerHTML == 'o') || 
        (first.innerHTML == 'o' && fourth.innerHTML == 'o' && seventh.innerHTML == 'o')|| 
        (third.innerHTML == 'o' && fifth.innerHTML == 'o' && seventh.innerHTML == 'o') ||
        (second.innerHTML == 'o' && fifth.innerHTML == 'o' && eighth.innerHTML == 'o') || 
        (third.innerHTML == 'o' && sixth.innerHTML == 'o' && ninth.innerHTML == 'o') || 
        (fourth.innerHTML == 'o' && fifth.innerHTML == 'o' && sixth.innerHTML == 'o') || 
        (seventh.innerHTML == 'o' && eighth.innerHTML == 'o' && ninth.innerHTML == 'o')){
            alert('Нолик победил!');
            first.innerHTML = '';
            second.innerHTML = '';
            third.innerHTML = '';
            fourth.innerHTML = '';
            fifth.innerHTML = '';
            sixth.innerHTML = '';
            seventh.innerHTML = '';
            eighth.innerHTML = '';
            ninth.innerHTML = '';
            counter = 1;
            result.innerHTML = 'Ходит крестик!'
        }
        else if(
            first.innerHTML != ''
            &&
            second.innerHTML != ''
            &&
            third.innerHTML != ''
            &&
            fourth.innerHTML != ''
            &&
            fifth.innerHTML != ''
            &&
            sixth.innerHTML != ''
            &&
            seventh.innerHTML != ''
            &&
            eighth.innerHTML != ''
            &&
            ninth.innerHTML != ''
        ){
            alert('Ничья!')
            first.innerHTML = '';
            second.innerHTML = '';
            third.innerHTML = '';
            fourth.innerHTML = '';
            fifth.innerHTML = '';
            sixth.innerHTML = '';
            seventh.innerHTML = '';
            eighth.innerHTML = '';
            ninth.innerHTML = '';
            counter = 1;
            result.innerHTML = 'Ходит крестик!'
        }
    }
    
    , 10);