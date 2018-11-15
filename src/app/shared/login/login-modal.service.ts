import {Injectable} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {JhiLoginModalComponent} from './login.component';
import {GlobalValues} from '../model/global-values';

@Injectable()
export class LoginModalService {
    private isOpen = false;

    constructor(
        private modalService: NgbModal,
        private globalValues: GlobalValues
    ) {
    }

    open(): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        this.globalValues.propertyIdFromLandingPageToViewDetails = 0;
        const modalRef = this.modalService.open(JhiLoginModalComponent, {
            container: 'nav'
        });
        modalRef.result.then((result) => {
            this.isOpen = false;
        }, (reason) => {
            this.isOpen = false;
        });
        return modalRef;
    }

    openWithPropertyDetailsId(propertyId): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        console.log('propertyId in login modal');
        console.log(propertyId);
        this.globalValues.propertyIdFromLandingPageToViewDetails = propertyId;
        const modalRef = this.modalService.open(JhiLoginModalComponent, {
            container: 'nav'
        });
        modalRef.result.then((result) => {
            this.isOpen = false;
        }, (reason) => {
            this.isOpen = false;
        });
        return modalRef;
    }
}
