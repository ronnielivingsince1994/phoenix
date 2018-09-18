import { Component } from '@angular/core';
import { MatButtonModule,MatCardModule } from '@angular/material';
import { WebService } from './web.service'

@Component({
    selector:'messages',
    template: 
    `<div>
        <mat-card>
            <mat-card-header>
                <mat-card-title><p>My Awesome Messanger Component </p></mat-card-title>
            </mat-card-header>
            <mat-card-content> Total Messages On Server :: {{messages.length}} </mat-card-content>
        </mat-card>     
    </div><br>
    
    <div *ngFor="let message of messages">
        <mat-card class="card">
            <mat-card-header>
                <mat-card-title> {{message.owner}} </mat-card-title>
            </mat-card-header>
            <mat-card-content> {{message.text}} </mat-card-content>
        </mat-card>
    </div>`
})
export class MessagesComponent{
    constructor(private webService: WebService){}

    async ngOnInit(){
       const response = await this.webService.getMessages();
       this.messages = response.json();

    }

    messages = [];

    
}