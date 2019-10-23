function btnPress(cat, cmd) {
    console.log('e')
    let oldelement = document.getElementById('tableInfo');
    var upper = allcmds[cat][cmd]
    if(oldelement) {
        $('.expand').slideUp(500, 'easeInOutSine', () => {
            oldelement.remove();
            // let oldelement = document.getElementById('tableInfo');
        });
    }
    curon = curon ? curon : [null, null]
    if(curon[0] == upper.name) {
        curon = [null, null];
        return;
    };
    let oldcat = curon[1]
    curon = [upper.name, cat];
    var headings = '<tr class="bottomBorder"><th>Command Usage</th><th>Permission</th><th>Description</th></tr>';
    var rows = [];
    var j = upper.more.length;
    for(var i = 0; i < j; i++) {
        rows[i] = `<tr ${(i < j - 1) ? `class="bottomBorder"` : ''}><td class="alleft">-=${upper.name[0]} ${upper.more[i].usage}</td><td>${upper.more[i].perms}</td><td>${upper.more[i].description}</td></tr>`;
    };
    

    var tbl = (!oldelement || oldelement.rowIndex > cmd+2 || oldcat != curon[1]) ? document.getElementById(`table${cat}`).insertRow(cmd+2) : document.getElementById(`table${cat}`).insertRow(cmd+3);
    tbl.className = "bottomBorder";
    tbl.setAttribute("id", `tableInfo`);
    let tblcell = tbl.insertCell(0);
    tblcell.colSpan = "3";
    tblcell.innerHTML = '<div class="expand"><table class="tableInfoBG" id="tableInfo"><thead>' + headings + '</thead><tbody>' + rows.join('') + '</tbody></table></div>';
    $(".expand").hide(0);
    $(".expand").slideDown(500, 'easeInOutSine');
};


// To fix
//   Jumping at the end of the transition.
//   Padding
//   command has bottomBorder
//   Fixed widths for tables