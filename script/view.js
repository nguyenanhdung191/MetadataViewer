const showDataElement = (des) => {
    let HTML = `<thead>
                    <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Short name</th>
                    <th>Form name</th>
                    <th>Code</th>
                    <th>Description</th>
                    <th>Value type</th>
                    <th>Domain type</th>
                    <th>Aggregation type</th>
                    <th>Category combination</th>
                    <th>Option set</th>
                    <th>User</th>
                    <th>Dataset</th>
                    <th>Store zero</th>                   
                    </tr>
                </thead><tbody class="table-hover">`;
    des.forEach((de, index) => {
        HTML += `<tr name="data">
                    <td>${index + 1}</td>
                    <td>${de.id}</td>
                    <td>${de.name}</td>
                    <td>${de.shortName}</td>
                    <td>${(de.formName == null) ? "" : de.formName}</td>
                    <td>${(de.code == null) ? "" : de.code}</td>
                    <td>${(de.description == null) ? "" : de.description}</td>
                    <td>${valueTypeList[de.valueType]}</td>
                    <td>${domainTypeList[de.domainType]}</td>
                    <td>${aggregationTypeList[de.aggregationType]}</td>
                    <td>${(de.categoryCombo.isDefault) ? "" : de.categoryCombo.name}</td>
                    <td>${(de.optionSet == null) ? "" : de.optionSet.name}</td>
                    <td>${(de.user == null) ? "" : de.user.name}</td>
                    <td></td>
                    <td>${(de.zeroIsSignificant) ? "Yes" : "No"}</td>
                </tr>`;
    });
    HTML += "</tbody>";
    $("#numberOfItem").html(`Result: <strong>${des.length}</strong> item(s)`);
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
const showShowingColumn = (columns) => {
    $("#showingColumn").html("");
    $("#hidingColumn").html("");
    let HTML = "";
    Object.keys(columns).forEach((key, index) => {
        HTML += `<option value=${columns[key]}>${key}</option>`;
    });
    $("#showingColumn").html(HTML);
};
