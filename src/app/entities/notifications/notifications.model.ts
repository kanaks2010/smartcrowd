import {BaseEntity, User} from '../../shared';

export class Notifications {
    constructor(
        public id?: number,
        public status?: boolean,
        public notifyDate?: any,
        public stateUrl?: string,
        public notes?: string,
        public sourceUserId?: number,
        public purpose?: string,
        public createDate?: any,
        public createBy?: number,
        public updateBy?: number,
        public updateDate?: any,
        public destinationUserId?: User,
    ) {
        this.status = false;
    }
}
