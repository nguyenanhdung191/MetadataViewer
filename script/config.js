$.ajaxSetup({
    beforeSend: function (xhr) {
        if (currentRequest != null) {
            currentRequest.abort();
        }
        $(".loader").show();
        $(".loaderText").show();
        xhr.setRequestHeader("Authorization", "Basic " + btoa("dung:ABCD1234"));
    },
    error: function (res) {
        if (res.statusText == "abort") {

        } else {
            alert(res.responseText);
        }
        $(".loader").hide();
        $(".loaderText").hide();
    }
});
const url = "http://localhost:8080/dhis";
const domainTypeList = {"AGGREGATE": "Aggregate", "TRACKER": "Tracker"};
const valueTypeList = {
    "TEXT": "Text",
    "LONG_TEXT": "Long text",
    "LETTER": "Letter",
    "PHONE_NUMBER": "Phone number",
    "EMAIL": "Email",
    "BOOLEAN": "Yes/No",
    "TRUE_ONLY": "Yes Only",
    "DATE": "Date",
    "DATETIME": "Date & Time",
    "TIME": "Time",
    "NUMBER": "Number",
    "UNIT_INTERVAL": "Unit interval",
    "PERCENTAGE": "Percentage",
    "INTEGER": "Integer",
    "INTEGER_POSITIVE": "Positive Integer",
    "INTEGER_NEGATIVE": "Negative Integer",
    "INTEGER_ZERO_OR_POSITIVE": "Positive or Zero Integer",
    "TRACKER_ASSOCIATE": "Tracker Associate",
    "USERNAME": "Username",
    "FILE_RESOURCE": "File",
    "COORDINATE": "Coordinate",
    "ORGANISATION_UNIT": "Organisation Unit"
};
const aggregationTypeList = {
    "SUM": "Sum",
    "AVERAGE": "Average",
    "AVERAGE_SUM_ORG_UNIT": "Average (sum in orgunit hierachy)",
    "COUNT": "Count",
    "STDDEV": "Standard deviation",
    "VARIANCE": "Variance",
    "MIN": "Min",
    "MAX": "Max",
    "NONE": "None"
};
const dataElementColumn = {
    "No": 1,
    "ID": 2,
    "Name": 3,
    "Short name": 4,
    "Form name": 5,
    "Code": 6,
    "Description": 7,
    "Value type": 8,
    "Domain type": 9,
    "Aggregation type": 10,
    "Category combination": 11,
    "Option set": 12,
    "User": 13,
    "Dataset": 14,
    "Store zero": 15
};
const filterOperatorSelectorHTML = `<div><select>
        <option value=":eq:">=</option>
        <option value=":!eq:">!=</option>
        <option value=":ilike:">like</option>
        <option value=":!ilike:">not like</option>
        <option value=":gt:">&gt;</option>
        <option value=":ge:">&gt;=</option>
        <option value=":lt:">&lt;</option>
        <option value=":le:">&lt;=</option>
    </select></div>`;
const dataElementFilteredPropertySelectorHTML = `<div><select onchange="generateSelector(this)">
        <option value="&filter=name">Name</option>
        <option value="&filter=shortName">Short name</option>
        <option value="&filter=formName">Form name</option>
        <option value="&filter=code">Code</option>
        <option value="&filter=valueType">Value type</option>
        <option value="&filter=domainType">Domain type</option>
        <option value="&filter=aggregationType">Aggregation type</option>
        <option value="&filter=categoryCombo.id">Category combination</option>
        <option value="&filter=optionSet.id">Option set</option>
    </select></div>`;
const domainTypeSelector = `<div><select>
            <option value="TRACKER">Tracker</option>
            <option value="AGGREGATE">Aggregate</option>
        </select></div>`;
const aggregationTypeSelector = `<div><select>
                    <option value="SUM">Sum</option>
                    <option value="AVERAGE">Average</option>
                    <option value="AVERAGE_SUM_ORG_UNIT">Average (sum in orgunit hierachy)</option>
                    <option value="COUNT">Count</option>
                    <option value="STDDEV">Standard deviation</option>
                    <option value="VARIANCE">Variance</option>
                    <option value="MIN">Min</option>
                    <option value="MAX">Max</option>
                    <option value="NONE">None</option>
                </select></div>`;
const valueTypeSelector = `<div><select>
                    <option value="TEXT">Text</option>
                    <option value="LONG_TEXT">Long text</option>
                    <option value="LETTER">Letter</option>
                    <option value="PHONE_NUMBER">Phone number</option>
                    <option value="EMAIL">Email</option>
                    <option value="BOOLEAN">Yes/No</option>
                    <option value="TRUE_ONLY">Yes Only</option>
                    <option value="DATE">Date</option>
                    <option value="DATETIME">Date & Time</option>
                    <option value="TIME">Time</option>
                    <option value="NUMBER">Number</option>
                    <option value="UNIT_INTERVAL">Unit interval</option>
                    <option value="PERCENTAGE">Percentage</option>
                    <option value="INTEGER">Integer</option>
                    <option value="INTEGER_POSITIVE">Positive Integer</option>
                    <option value="INTEGER_NEGATIVE">Negative Integer</option>
                    <option value="INTEGER_ZERO_OR_POSITIVE">Positive or Zero Integer</option>
                    <option value="TRACKER_ASSOCIATE">Tracker Associate</option>
                    <option value="USERNAME">Username</option>
                    <option value="FILE_RESOURCE">File</option>
                    <option value="COORDINATE">Coordinate</option>
                    <option value="ORGANISATION_UNIT">Organisation Unit</option>
                </select></div>`;
let categoryComboSelector;
let optionSetSelector;