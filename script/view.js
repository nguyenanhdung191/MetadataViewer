const showDataElement = (des) => {
    let index = 0;
    let HTML = `<thead>
                    <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Short name</th>
                    <th>Value type</th>
                    <th>Domain type</th>
                    <th>Aggregation type</th>
                    </tr>
                </thead><tbody class="table-hover">`;
    des.forEach((de, index) => {
        index += 1;
        HTML += `<tr name="data">
                    <td align="center">${index}</td>
                    <td>${de.id}</td>
                    <td>${de.name}</td>
                    <td>${de.shortName}</td>
                    <td align="center">${de.valueType}</td>
                    <td align="center">${de.domainType}</td>
                    <td align="center">${de.aggregationType}</td>
                </tr>`;
    });
    HTML += "</tbody>";
    $("#numberOfItem").html(`Count: <strong>${des.length}</strong> item(s)`);
    $("#content").html(HTML);
    $(".loader").hide();
};
const showDataElementDetail = (de)=> {
    $("#myModal").show();
    $("#detailID").val(de.id);
    $("#detailName").val(de.name);
    $("#detailShortName").val(de.shortName);
    $("#detailCode").val(de.code);
    $("#detailDescription").val(de.description);
    $("#detailFormName").val(de.formName);
    $("#detailDomainType").val(de.domainType);
    $("#detailValueType").val(de.valueType);
    $("#detailAggregationType").val(de.aggregationType);
    $("#detailAllowNull").val(de.aggregationType);
    $("#detailCategoryCombo").val(`${de.categoryCombo.name} (${de.categoryCombo.id})`);
    if(de.optionSet != null){
        $("#detailOptionSet").val(`${de.optionSet.name} (${de.optionSet.id})`);
    }
    $("#detailUser").val(`${de.user.name} (${de.user.id})`);
    console.log(de.optionSet);
};