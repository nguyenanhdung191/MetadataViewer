let currentRequest = null;
let des = [];
const getDataElement = (keyword) => {
    var apiString;
    if(keyword == ""){
        apiString = `https://dhis2.asia/lao/api/dataElements.json?fields=:all,categoryCombo[id,name],user[id,name],optionSet[id,name]&paging=false`;
    }
    else{
        apiString = `https://dhis2.asia/lao/api/dataElements.json?fields=:all,categoryCombo[id,name],user[id,name],optionSet[id,name]&filter=name:ilike:${keyword}&paging=false`;
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
                des.push(de);
            });
            showDataElement(des);
            $("[name=data]").each((index, element) => {
                $(element).on("click", (event) => {
                    let index = $(event.target).parent().index();
                    showDataElementDetail(des[index]);
                });
            });
        }
    });
};
