const showHideColumnToggle = () => {
    $("#showHideColumn").toggle(100,"swing");
};
const addShowColumn = () => {
    let selectedOption = $("#hidingColumn").val();
    if (selectedOption.length == 0) {
        return;
    }
    $(".loader").show();
    $(".loaderText").show();
    setTimeout(() => {
        selectedOption.forEach((value, index) => {
            $("#showingColumn").append($(`#hidingColumn option[value=${value}]`));
            $(`#content tr *:nth-child(${value})`).show();
        });
        reset();
    }, 10);

};
const removeShowColumn = () => {
    let selectedOption = $("#showingColumn").val();
    if (selectedOption.length == 0) {
        return;
    }
    $(".loader").show();
    $(".loaderText").show();
    setTimeout(() => {
        selectedOption.forEach((value, index) => {
            $("#hidingColumn").append($(`#showingColumn option[value=${value}]`));
            $(`#content tr *:nth-child(${value})`).hide();
        });
        reset();
    }, 10);
};
const reset = () => {
    $("#showingColumn option:selected").prop("selected", false);
    $("#hidingColumn option:selected").prop("selected", false);
    $(".loader").hide();
    $(".loaderText").hide();
};

