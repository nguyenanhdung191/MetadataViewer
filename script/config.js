$.ajaxSetup({
    async: true,
    beforeSend: function (xhr) {
        $(".loader").show();
        xhr.setRequestHeader("Authorization", "Basic " + btoa("thai:ABCD1234"));
    },
    error: function (json) {
        console.log(json);
    }
});

