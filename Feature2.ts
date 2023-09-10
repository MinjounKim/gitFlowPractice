class Feature2 {
    feature2:string|null;
    constructor(){
        this.feature2=null;
    }

    featureWorkSpace(){
        this.feature2='feature/0002-work00';
    }

    sampleFun(){
        this.feature2='rebase test';
    }

    squashTest(){
        this.feature2='add1';
        this.feature2='add2';
        this.feature2='add3';
    }
}