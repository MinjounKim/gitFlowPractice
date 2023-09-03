class Master {
    master: string | null;
    Dev: string | null;

    constructor() {
        this.master = null;
    }

    changeMaster() {
        this.master = 'master-work1';
    }

    DevWorkSpace() {
        this.Dev = 'dev-work ready to merge';
    }
}