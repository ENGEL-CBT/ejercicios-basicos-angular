import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-ejer12',
  templateUrl: './ejer12.component.html',
  styleUrls: ['./ejer12.component.css']
})

export class Ejer12Component implements OnInit {

  usersObj: any;
  users: any[] = []

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.retornar()
      .subscribe( 
        result =>  {
        this.usersObj = result
        console.log(this.usersObj)
        this.users = this.usersObj.users
        console.log(this.users)
        }
        )
  }

}
