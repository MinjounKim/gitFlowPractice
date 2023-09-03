class Master {
    master: string | null;
    Dev: string | null;
    feature1: string | null;
    feature2: string | null;
    constructor() {
        this.master = null;
        this.Dev = null;
        this.feature1 = null;
        this.feature2 = null;
    }

    masterWorkSpace() {
        this.master = 'master-work1';
    }

    devWorkSpace() {
        this.Dev = 'dev-work rebase success!!';
    }

    feature1WorkSpace() {
        this.feature1 = 'feature/0001-work';
    }

    feature2WorkSpace() {
        this.feature2 = 'feature/0002-work';
    }
}