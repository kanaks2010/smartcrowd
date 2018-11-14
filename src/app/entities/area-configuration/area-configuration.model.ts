export class AreaConfiguration {
    constructor(
        public id?: number,
        public status?: boolean,
        public createDate?: any,
        public createBy?: number,
        public updateBy?: number,
        public updateDate?: any,
        public name?: string,
        public code?: string,
        public parentId?: number,
        public groupLebel?: string,
        public riskRating?: number,
    ) {
        this.status = false;
    }
}
