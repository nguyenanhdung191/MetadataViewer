class DataElement {
    constructor() {
        this.formName = null;
        this.code = null;
        this.id = null;
        this.name = null;
        this.shortName = null;
        this.aggregationType = null;
        this.domainType = null;
        this.description = null;
        this.valueType = null;
        this.categoryCombo = null;
        this.optionSet = null;
        this.user = null;
        this.dataSets = null;
        this.organisationUnit = null;
    }
}

class Category {
    constructor() {
        this.id = null;
        this.name = null;
        this.shortName = null;
        this.user = null;
        this.categoryOptions = null;
    }
}

class CategoryCombo {
    constructor() {
        this.id = null;
        this.name = null;
        this.shortName = null;
        this.user = null;
        this.categories = [];
        this.categoryOptionCombos = [];
    }
}

class CategoryOption {
    constructor() {
        this.id = null;
        this.name = null;
        this.shortName = null;
        this.user = null;
    }
}

class CategoryOptionCombo {
    constructor() {
        this.id = null;
        this.name = null;
        this.shortName = null;
        this.user = null;
        this.categoryCombos = [];
        this.categoryOptions = [];
    }
}