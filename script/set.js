const updateDataElement = () => {
    currentDataElement.id = $("#detailID").val();
    currentDataElement.name = $("#detailName").val();
    currentDataElement.shortName = $("#detailShortName").val();
    currentDataElement.code = $("#detailCode").val();
    currentDataElement.description = $("#detailDescription").val();
    currentDataElement.displayFormName = $("#detailFormName").val();
    currentDataElement.domainType = $("#detailDomainType").val();
    currentDataElement.valueType = $("#detailValueType").val();
    currentDataElement.zeroIsSignificant = ($("#detailAllowNull").val() == "true");
    currentDataElement.categoryCombo = {id: $("#detailCategoryCombo").val()};
    currentDataElement.optionSet = ($("#detailOptionSet").val() == "") ? null : {id : $("#detailOptionSet").val()};
    console.log(currentDataElement);
};
