import { Component } from '@angular/core';
import { MessageService } from '../messages/message.service';

@Component({
    selector: 'user-profile',
    templateUrl: './user.component.html',
    providers: [MessageService]
})
export class UserProfile {


}