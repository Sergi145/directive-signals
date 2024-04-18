import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {User} from "../../interfaces/user-request.interface";

@Component({
  selector: 'app-user-info-pages',
  templateUrl: './user-info-pages.component.html',
  styleUrl: './user-info-pages.component.css'
})
export class UserInfoPagesComponent implements OnInit{
    private userService = inject(UserServiceService);
    public userId= signal(1);
    public currentUser = signal<User|undefined>(undefined);
    public userWasfount = signal(true);
    public fullName = computed<string>(()=> {
      if (!this.currentUser()) return 'Usuario no encontrado';
      return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`

    })

  ngOnInit():void {
      this.loadUser(this.userId());
  }

  loadUser(id:number) {
      if(id<=0) throw new Error('HAS BAJADO DEL -1');
      this.userId.set(id);
      this.currentUser.set(undefined);

      this.userService.getUserById(id)
        .subscribe(
          {
            next: (user)=> {
              this.currentUser.set(user);
              this.userWasfount.set(true);
            },
            error: ()=> {
              this.userWasfount.set(false);
            }
          }
        )
  }
}
