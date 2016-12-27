const showDataElement = (des) => {
    let HTML = "";
    HTML += `<tr>
                <td>UID</td>
                <td>Name</td>
                <td>Short Name</td>
             </tr>`;
    des.forEach((value, index) => {
        HTML += `<tr>
                    <td>${value.id}</td>
                    <td>${value.name}</td>
                    <td>${value.shortName}</td>
                </tr>`;
    });
    $("#content").html(HTML);
    $(".loader").hide();
};
