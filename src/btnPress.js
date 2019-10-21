function btnPress(cat, cmd) {
    let oldelement = document.getElementById('tableInfo');
    document.documentElement.style.setProperty('--mvmon', '0px');
    setTimeout(() => {
        if(oldelement) {
            oldelement.remove();
        }
    }, 500)
    if(curon == allcmds[cat][cmd].name) {
        curon = null; 
        return;
    };
    curon = allcmds[cat][cmd].name;
    var cmdInfo = document.createElement(`TABLE`);
    cmdInfo.innerHTML = `<tr class="bottomBorder"> <th>Permission</th> <th>Command Usage</th> <th>Description</th> </tr>`;
    cmdInfo.className = "main";
    cmdInfo.classList.add("tableInfoBG")
    cmdInfo.setAttribute("id", `tableInfo`);
    var info = '';
    var upper = allcmds[cat][cmd]
    for(const sub of allcmds[cat][cmd].more){
        info += `<tr ${upper.more.indexOf(sub) < upper.more.length - 1 ? `class="bottomBorder"` : ''}> <td>${sub.perms}</button></td> <td class="alleft">-=${upper.name} ${sub.usage}</td> <td>${sub.description}</td></tr>`
    };
    var cmdIB = document.createElement('tbody');
    cmdIB.innerHTML = info;
    cmdInfo.appendChild(cmdIB);
    setTimeout(() => {
        document.documentElement.style.setProperty('--mvmon', `${cmdInfo.offsetHeight}px`);
    }, 500)
    
    var tbl = (!oldelement || oldelement.rowIndex > cmd+2) ? document.getElementById(`table${cat}`).insertRow(cmd+2) : document.getElementById(`table${cat}`).insertRow(cmd+3);
    tbl.className = "bottomBorder";
    tbl.setAttribute("id", `tableInfo`);
    let tblcell = tbl.insertCell(0);
    tblcell.innerHTML = cmdInfo;
};