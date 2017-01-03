const filterToggle = () => {
    $("#filter").toggle(100, "swing");
};
const addFilter = () => {
    let HTML = `<div class="filterItemContainer">
        ${dataElementFilteredPropertySelectorHTML}
        ${filterOperatorSelectorHTML}
        <div><input type="text" /></div>
        <div><button onclick="removeFilter(this)" ><strong style="color:red">x</strong></button></div>
        </div>`;
    $(HTML).insertBefore($("#addFilterButton"));
};
const removeFilter = (element) => {
    $(element).parent().parent().remove();
};
const runFilter = () => {
    let fs = $(".filterItemContainer");
    if (fs.length == 0) {
        alert("No filter to run");
        return;
    }
    let filterUrl = "";
    Array.from(fs).forEach(f => {
        let property = $(f).children().eq(0).children().eq(0).val();
        let operator = $(f).children().eq(1).children().eq(0).val();
        let keyword = $(f).children().eq(2).children().eq(0).val();
        filterUrl += property + operator + keyword;
    });
    filterUrl += "&paging=false";
    getDataElementByFilter(filterUrl);
};
const generateSelector = (propertySelector)=> {
    switch(propertySelector.value){
        case "&filter=valueType": $(propertySelector).parent().next().next().replaceWith(valueTypeSelector); break;
        case "&filter=domainType": $(propertySelector).parent().next().next().replaceWith(domainTypeSelector); break;
        case "&filter=aggregationType": $(propertySelector).parent().next().next().replaceWith(aggregationTypeSelector); break;
        case "&filter=categoryCombo.id": $(propertySelector).parent().next().next().replaceWith(categoryComboSelector); break;
        case "&filter=optionSet.id" : $(propertySelector).parent().next().next().replaceWith(optionSetSelector); break;
        default: $(propertySelector).parent().next().next().replaceWith(`<div><input type="text" /></div>`);
    }
};