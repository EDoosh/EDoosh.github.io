function btnPress(cat, cmd) {
    console.log('e')
    let oldelement = document.getElementById('tableInfo');
    document.documentElement.style.setProperty('--mvmon', '0px');
    // setTimeout(() => {
        if(oldelement) {
            oldelement.remove();
        }
    // }, 500)
    if(curon == allcmds[cat][cmd].name) {
        curon = null; 
        return;
    };
    curon = allcmds[cat][cmd].name;
    var cmdInfo = [ '<table class="tableInfoBG" id="tableInfo"> <tbody> <tr class="bottomBorder"> <th>Permission</th>    </tr> </tbody>',
                    '<table class="tableInfoBG" id="tableInfo"> <tbody> <tr class="bottomBorder"> <th>Command Usage</th> </tr> </tbody>',
                    '<table class="tableInfoBG" id="tableInfo"> <tbody> <tr class="bottomBorder"> <th>Description</th>   </tr> </tbody>'];
    var info = ['', '', ''];
    var upper = allcmds[cat][cmd]
    for(const sub of allcmds[cat][cmd].more){
        info[0] += (`<tbody> <tr ${(upper.more.indexOf(sub) < upper.more.length - 1) ? `class="bottomBorder"` : ''}> <td>${sub.perms}</td></tr> </tbody>`)
        info[1] += (`<tbody> <tr ${(upper.more.indexOf(sub) < upper.more.length - 1) ? `class="bottomBorder"` : ''}><td class="alleft">-=${upper.name} ${sub.usage}</td></tr> </tbody>`)
        info[2] += (`<tbody> <tr ${(upper.more.indexOf(sub) < upper.more.length - 1) ? `class="bottomBorder"` : ''}><td>${sub.description}</td></tr> </tbody>`)
    };
    cmdInfo[0] = cmdInfo[0] + info[0] + '</table>'
    cmdInfo[1] = cmdInfo[1] + info[1] + '</table>'
    cmdInfo[2] = cmdInfo[2] + info[2] + '</table>'
    // setTimeout(() => {
        document.documentElement.style.setProperty('--mvmon', `${cmdInfo.offsetHeight}px`);
    // }, 500)

    // document.body.appendChild(cmdInfo)
    
    var tbl = (!oldelement || oldelement.rowIndex > cmd+2) ? document.getElementById(`table${cat}`).insertRow(cmd+2) : document.getElementById(`table${cat}`).insertRow(cmd+3);
    tbl.className = "bottomBorder";
    tbl.setAttribute("id", `tableInfo`);
    let tblcell = [tbl.insertCell(0), tbl.insertCell(1), tbl.insertCell(2)];
    tblcell[0].innerHTML = cmdInfo[0];
    tblcell[1].innerHTML = cmdInfo[1];
    tblcell[2].innerHTML = cmdInfo[2];
};