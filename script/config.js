$.ajaxSetup({
    beforeSend: function (xhr) {
        if (currentRequest != null) {
            currentRequest.abort();
        }
        $(".loader").show();
        $(".loaderText").show();
        xhr.setRequestHeader("Authorization", "Basic " + btoa("dung:ABCD1234"));
    },
    error: function (json) {
        console.log(json);
    }
});
const url = "https://dev.psi-mis.org";
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
