$.ajaxSetup({
    beforeSend: function (xhr) {
        if (currentRequest != null) {
            currentRequest.abort();
        }
        $("#numberOfItem").html("<strong>Loading...</strong>");
        $(".loader").show();
        xhr.setRequestHeader("Authorization", "Basic " + btoa("dung:ABCD1234"));
    },
    error: function (json) {
        console.log(json);
    }
});

const domainTypeList = ["AGGREGATE", "TRACKER"];
const valueTypeList = ["AGGREGATE", "TRACKER"];
