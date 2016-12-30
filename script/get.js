let currentRequest = null;
let ccs = [];
let oss = [];
let des = [];
const getDataElement = (keyword) => {
    var apiString;
    if (keyword == "") {
        apiString = `${url}/api/dataElements.json?fields=:all,categoryCombo[id,name,isDefault],user[id,name],optionSet[id,name]&paging=false`;
    }
    else {
        apiString = `${url}/api/dataElements.json?fields=:all,categoryCombo[id,name,isDefault],user[id,name],optionSet[id,name]&filter=name:ilike:${keyword}&paging=false`;
    }
    currentRequest = $.ajax({
        type: "GET",
        url: apiString,
        dataType: "json",
        success: function (json) {
            des.length = 0;
            json.dataElements.forEach((value, index) => {
                let de = new DataElement();
                de.code = value.code;
                de.id = value.id;
                de.name = value.name;
                de.shortName = value.shortName;
                de.formName = value.displayFormName;
                de.aggregationType = value.aggregationType;
                de.domainType = value.domainType;
                de.description = value.description;
                de.valueType = value.valueType;
                de.categoryCombo = value.categoryCombo;
                de.user = value.user;
                de.dataSets = value.dataSets;
                de.optionSet = value.optionSet;
                de.user = value.user;
                de.zeroIsSignificant = value.zeroIsSignificant;
                des.push(de);
            });
            showDataElement(des);
            showShowingColumn(dataElementColumn);
            $("[name=data]").each((index, element) => {
                $(element).on("click", (event) => {
                    let index = $(event.target).parent().index();
                    showDataElementDetail(des[index]);
                });
            });
        }
    });
};
const getDataElementByFilter = (filterUrl) => {
    var apiString;
    apiString = `${url}/api/dataElements.json?fields=:all,categoryCombo[id,name,isDefault],user[id,name],optionSet[id,name]${filterUrl}`;
    currentRequest = $.ajax({
        type: "GET",
        url: apiString,
        dataType: "json",
        success: function (json) {
            des.length = 0;
            json.dataElements.forEach((value, index) => {
                let de = new DataElement();
                de.code = value.code;
                de.id = value.id;
                de.name = value.name;
                de.shortName = value.shortName;
                de.formName = value.displayFormName;
                de.aggregationType = value.aggregationType;
                de.domainType = value.domainType;
                de.description = value.description;
                de.valueType = value.valueType;
                de.categoryCombo = value.categoryCombo;
                de.user = value.user;
                de.dataSets = value.dataSets;
                de.optionSet = value.optionSet;
                de.user = value.user;
                de.zeroIsSignificant = value.zeroIsSignificant;
                des.push(de);
            });
            showDataElement(des);
            showShowingColumn(dataElementColumn);
            $("[name=data]").each((index, element) => {
                $(element).on("click", (event) => {
                    let index = $(event.target).parent().index();
                    showDataElementDetail(des[index]);
                });
            });
        }
    });
};
const getCategoryCombo = () => {
    var apiString = `${url}/api/categoryCombos.json?fields=id,name,isDefault&paging=false`;
    $.ajax({
        beforeSend: function (xhr) {
            $(".loader").show();
            xhr.setRequestHeader("Authorization", "Basic " + btoa("dung:ABCD1234"));
        },
        type: "GET",
        url: apiString,
        dataType: "json",
        success: function (json) {
            ccs.length = 0;
            json.categoryCombos.forEach((value, index) => {
                let cc = new CategoryCombo();
                cc.isDefault = value.isDefault;
                cc.id = value.id;
                cc.name = value.name;
                ccs.push(cc);
            });
            showCategoryComboOnSelect(ccs);
        }
    });
};
const getOptionSet = () => {
    var apiString = `${url}/api/optionSets.json?fields=id,name&paging=false`;
    $.ajax({
        beforeSend: function (xhr) {
            $(".loader").show();
            xhr.setRequestHeader("Authorization", "Basic " + btoa("dung:ABCD1234"));
        },
        type: "GET",
        url: apiString,
        dataType: "json",
        success: function (json) {
            oss.length = 0;
            json.optionSets.forEach((value, index) => {
                let os = new CategoryCombo();
                os.id = value.id;
                os.name = value.name;
                oss.push(os);
            });
            showOptionSetOnSelect(oss);
        }
    });
};