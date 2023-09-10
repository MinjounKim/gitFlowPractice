class Feature1 {
    feature1:string|null;
    constructor(){
        this.feature1=null;
    }

    featureWorkSpace(){
        this.feature1='feature/0001-work1';
    }

    squashTest(){
        this.feature1='first commit';
        this.feature1='second commit';
        this.feature1='third commit';
    }
}