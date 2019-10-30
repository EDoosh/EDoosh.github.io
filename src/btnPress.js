function btnPress(cat, cmd) {
    let oldelement = document.getElementById('tableInfo');
    var upper = allcmds[cat][cmd];
    curon = curon ? curon : [null, null];
    let olddata = curon;
    if(oldelement) {
        oldelement.remove();
        if(olddata[0]){
            let oldtbl = document.getElementById(`table${olddata[1]}`).rows;
            for(i=0; i < oldtbl.length; i++) {
                if(i == cmd+1 && olddata[0] != upper.name) continue;
                oldtbl[i].classList.add('bottomBorder');
            };
        };
    };
    if(curon[0] == upper.name) {
        curon = [null, null];
        return;
    };
    curon = [upper.name, cat];
    var headings = '<tr class="bottomBorder"><th class="tblwidth1">Command Usage</th><th class="tblwidth2">Permission</th><th class="tblwidth3">Description</th></tr>';
    var rows = [];
    var j = upper.more.length;
    for(var i = 0; i < j; i++) {
        rows[i] = `<tr ${(i < j - 1) ? `class="bottomBorder"` : ''}><td class="alleft tblwidth1">-=${upper.name[0]} ${upper.more[i].usage}</td><td class="tblwidth2">${upper.more[i].perms}</td><td class="tblwidth3">${upper.more[i].description}</td></tr>`;
    };
    

    var a = (!oldelement || oldelement.rowIndex > cmd+2 || olddata[1] != curon[1]) ? cmd+2 : cmd+3;
    document.getElementById(`table${cat}`).rows[a-1].classList.remove('bottomBorder');
    let tbl = document.getElementById(`table${cat}`).insertRow(a);
    tbl.className = "bottomBorder";
    tbl.setAttribute("id", `tableInfo`);
    let tblcell = tbl.insertCell(0);
    tblcell.colSpan = "3";
    tblcell.innerHTML = '<div class="expand"><table class="tableInfoBG" id="tableInfo"><thead>' + headings + '</thead><tbody>' + rows.join('') + '</tbody></table></div>';
};


// To fix
//   Jumping at the end of the transition.