function tblCreate(id) {
    // A list of all the categories
    var allcmdcats = ['Bot', 'Fun', 'Music and Modify Role', 'Moderation', 'Administration', 'Other'];
    // Create an h2 element, set the text to '(category name) Category Commands', and add it to the titles class
    var headerCat = document.createElement(`H2`);
    headerCat.className = `titlesTable circlecol circle${id}`;
    headerCat.innerHTML = `${allcmdcats[id]} Category Commands`;
    // Create a table element, set some stuff as column headers, and set the classes
    var table = document.createElement(`TABLE`);
    table.innerHTML = `<tr class="bottomBorder"> <th class="tblwidth1">Command Name</th> <th class="tblwidth2">Aliases</th> <th class="tblwidth3">General Description</th> </tr>`;
    table.className = "main tblwidths tablepding";
    table.setAttribute("id", `table${id}`);
    var rowData = '';
    for(const cmd of allcmds[id]) {
        rowData += `<tr class="bottomBorder"> <td class="tblwidth1"><button type="button" class="tblBtns alleft" onclick="btnPress(${id}, ${allcmds[id].indexOf(cmd)})">${cmd.name[0] == 'getdbprefix' ? '' : '-='}${cmd.name[0]}</button></td> <td class="tblwidth2"><em>${cmd.name[1] ? cmd.name.slice(1).join(', '): ''}</em></td> <td class="tblwidth3">${cmd.desc}</td></tr>`;
    };
    var tableBody = document.createElement('TBODY');
    tableBody.innerHTML = rowData;
    document.body.appendChild(headerCat);
    document.body.appendChild(table);
    document.getElementById(`table${id}`).appendChild(tableBody);
};