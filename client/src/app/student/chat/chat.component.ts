import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat-service/chat.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatForm!:FormGroup
  messageList: string[] = [];

  constructor(private chatService: ChatService,
              private formBuilder:FormBuilder,){

  }

  ngOnInit(){
    this.chatForm = this.formBuilder.group({
      chatMsg: ['', Validators.required],

    });

    this.chatService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
    })
  }

  sendMessage() {
    this.chatService.sendMessage(this.chatForm.value['chatMsg']);
  }

}
