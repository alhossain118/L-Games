import { Component, OnInit } from '@angular/core';
import { MessageService } from '../messages/message.service';

@Component({
    selector: 'user-profile',
    templateUrl: './user.profile.component.html',
    providers: [MessageService]
})
export class UserProfile implements OnInit{

    constructor(){};

    ngOnInit(){

    }

}