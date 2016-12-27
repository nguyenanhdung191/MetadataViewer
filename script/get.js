const getAllDataElement = () => {
    var apiString = "https://dev.psi-mis.org/api/dataElements.json?fields=:all";
    return $.ajax({
        type: "GET",
        url: apiString,
        dataType: "json",
    }).then((json) => {
        let des = [];
        json.dataElements.forEach((value, index) => {
            let de = new DataElement();
            de.id = value.id;
            de.name = value.name;
            de.shortName = value.shortName;
            de.aggregationType = value.aggregationType;
            de.domainType = value.domainType;
            de.description = value.description;
            de.valueType = value.valueType;
            de.categoryCombo = value.categoryCombo;
            de.user = value.user;
            de.dataSets = value.dataSets;
            des.push(de);
        });
        showDataElement(des);
    });
};

const getDataElementByName = (keyword) => {
    var apiString = `https://dev.psi-mis.org/api/dataElements.json?fields=:all&filter=name:ilike:${keyword}&paging=false`;
    return $.ajax({
        type: "GET",
        url: apiString,
        dataType: "json",
    }).then((json) => {
        let des = [];
        json.dataElements.forEach((value, index) => {
            let de = new DataElement();
            de.id = value.id;
            de.name = value.name;
            de.shortName = value.shortName;
            de.aggregationType = value.aggregationType;
            de.domainType = value.domainType;
            de.description = value.description;
            de.valueType = value.valueType;
            de.categoryCombo = value.categoryCombo;
            de.user = value.user;
            de.dataSets = value.dataSets;
            des.push(de);
        });
        return showDataElement(des);
    });
};


