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
                    <td align="center">${valueTypeList[de.valueType]}</td>
                    <td align="center">${domainTypeList[de.domainType]}</td>
                    <td align="center">${aggregationTypeList[de.aggregationType]}</td>
                </tr>`;
    });
    HTML += "</tbody>";
    $("#numberOfItem").html(`Count: <strong>${des.length}</strong> item(s)`);
    $("#content").html(HTML);
    $(".loader").hide();
    $(".loaderText").hide();
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
    if (de.zeroIsSignificant == true) {
        $("#detailAllowNull").val("true");
    }
    else {
        $("#detailAllowNull").val("false");
    }
    $("#detailCategoryCombo").val(de.categoryCombo.id);
    if (de.optionSet != null) {
        $("#detailOptionSet").val(de.optionSet.id);
    }
    else {
        $("#detailOptionSet").val("");
    }
    if (de.user != null) {
        $("#detailUser").val(`${de.user.id} - ${de.user.name}`);
    } else {
        $("#detailUser").val("");
    }
};
const showCategoryComboOnSelect = (ccs) => {
    let HTML = "";
    ccs.forEach((cc, index) => {
        if (cc.isDefault == true) {
            HTML += `<option value=${cc.id}>&lt;No value&gt;</option>`;
        }
    });
    ccs.forEach((cc, index) => {
        if (cc.isDefault == false) {
            HTML += `<option value=${cc.id}>${cc.id} - ${cc.name}</option>`;
        }
    });
    $("#detailCategoryCombo").html(HTML);
};
const showOptionSetOnSelect = (oss) => {
    let HTML = `<option value="">&lt;No value&gt;</option>`;
    oss.forEach((os, index) => {
        HTML += `<option value=${os.id}>${os.id} - ${os.name}</option>`;
    });
    $("#detailOptionSet").html(HTML);
};