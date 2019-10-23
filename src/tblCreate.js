function tblCreate(id) {
    var allcmdcats = ['Bot', 'Fun', 'Music and Modify Role', 'Moderation', 'Administration', 'Other'];
    // Create an h2 element, set the text to '(category name) Category Commands', and add it to the titles class
    var headerCat = document.createElement(`H2`);
    headerCat.className = `titlesTable circlecol circle${id}`;
    headerCat.innerHTML = `${allcmdcats[id]} Category Commands`;
    // Create a table element, set some stuff as column headers, and set the class to main
    var table = document.createElement(`TABLE`);
    table.innerHTML = `<tr class="bottomBorder"> <th>Command Name</th> <th>Aliases</th> <th>General Description</th> </tr>`;
    table.className = "main tblwidths tablepding";
    table.setAttribute("id", `table${id}`);
    var rowData = '';
    for(const cmd of allcmds[id]) {
        rowData += `<tr class="bottomBorder"> <td><button type="button" class="tblBtns alleft" onclick="btnPress(${id}, ${allcmds[id].indexOf(cmd)})">${cmd.name[0] == 'getdbprefix' ? '' : '-='}${cmd.name[0]}</button></td> <td><em>${cmd.name[1] ? cmd.name.slice(1).join(', '): ''}</em></td> <td>${cmd.desc}</td></tr>`;
    };
    var tableBody = document.createElement('TBODY');
    tableBody.innerHTML = rowData;
    document.body.appendChild(headerCat);
    document.body.appendChild(table);
    document.getElementById(`table${id}`).appendChild(tableBody);
};