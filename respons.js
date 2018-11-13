let btnMenu = document.getElementById('btn-menu');
let menuResp = document.getElementById('menu-responsive');
let sublist1 = document.getElementsByClassName('sub-list-1');
let sublist2 = document.getElementsByClassName('sub-list-2');
let sublist3 = document.getElementsByClassName('sub-list-3');
let sublist4 = document.getElementsByClassName('sub-list-4');

function testmenu() {
  if(menuResp.style.display == "block") { 
      menuResp.style.display = "none";    
      iconChange.className += "fas fa-bars"; 
  }else{
      menuResp.style.display = "block";   
      iconChange.className += "fas fa-times"; 
  }
}

function headlerEvent(list,evento) {
    if(list == "list-1" && evento == 1 ) {
        for(var i = 0 ; i < sublist2.length; i++) {
            if(sublist2[i].style.display == 'block') {
                sublist2[i].style.display = "none";
            }
        }
        for(var i = 0 ; i < sublist3.length; i++) {
            if(sublist3[i].style.display == 'block') {
                sublist3[i].style.display = "none";
            }
        }
        for(var i = 0 ; i < sublist4.length; i++) {
            if(sublist4[i].style.display == 'block') {
                sublist4[i].style.display = "none";
            }
        }
    }

    if(list == "list-2" && evento == 1 ) {
        for(var i = 0 ; i < sublist1.length; i++) {
            if(sublist1[i].style.display == 'block') {
                sublist1[i].style.display = "none";
            }
        }
        for(var i = 0 ; i < sublist3.length; i++) {
            if(sublist3[i].style.display == 'block') {
                sublist3[i].style.display = "none";
            }
        }
        for(var i = 0 ; i < sublist4.length; i++) {
            if(sublist4[i].style.display == 'block') {
                sublist4[i].style.display = "none";
            }
        }
    }

    if(list == "list-3" && evento == 1 ) {
        for(var i = 0 ; i < sublist1.length; i++) {
            if(sublist1[i].style.display == 'block') {
                sublist1[i].style.display = "none";
            }
        }
        for(var i = 0 ; i < sublist2.length; i++) {
            if(sublist2[i].style.display == 'block') {
                sublist2[i].style.display = "none";
            }
        }
        for(var i = 0 ; i < sublist4.length; i++) {
            if(sublist4[i].style.display == 'block') {
                sublist4[i].style.display = "none";
            }
        }
    }

    if(list == "list-4" && evento == 1 ) {
        for(var i = 0 ; i < sublist1.length; i++) {
            if(sublist1[i].style.display == 'block') {
                sublist1[i].style.display = "none";
            }
        }
        for(var i = 0 ; i < sublist2.length; i++) {
            if(sublist2[i].style.display == 'block') {
                sublist2[i].style.display = "none";
            }
        }
        for(var i = 0 ; i < sublist3.length; i++) {
            if(sublist3[i].style.display == 'block') {
                sublist3[i].style.display = "none";
            }
        }
    }
       
}

function show_sublist_one() {
    for(var i = 0 ; i < sublist1.length; i++) {
        if(sublist1[i].style.display == 'none') {
            sublist1[i].style.display = "block";
            headlerEvent("list-1",1);
        }else{
            sublist1[i].style.display = "none";
            headlerEvent("list-1",0);
        }
    }
}

function show_sublist_two() {
    for(var i = 0 ; i < sublist2.length; i++) {
        if(sublist2[i].style.display == 'none') {
            sublist2[i].style.display = "block";
            headlerEvent("list-2",1);
        }else{
            sublist2[i].style.display = "none";
            headlerEvent("list-2",0);
        }
    }
}

function show_sublist_three() {
    for(var i = 0 ; i < sublist3.length; i++) {
        if(sublist3[i].style.display == 'none') {
            sublist3[i].style.display = "block";
            headlerEvent("list-3",1);
        }else{
            sublist3[i].style.display = "none";
            headlerEvent("list-3",0);
        }
    }
}


function show_sublist_four() {
    for(var i = 0 ; i < sublist4.length; i++) {
        if(sublist4[i].style.display == 'none') {
            sublist4[i].style.display = "block";
            headlerEvent("list-4",1);
        }else{
            sublist4[i].style.display = "none";
            headlerEvent("list-4",0);
        }
    }
}




