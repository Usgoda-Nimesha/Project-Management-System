import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/chat/chat.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-lecturer-chat',
  templateUrl: './lecturer-chat.component.html',
  styleUrls: ['./lecturer-chat.component.css']
})
export class LecturerChatComponent implements OnInit {
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
