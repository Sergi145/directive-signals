import {Component, computed, effect, signal} from '@angular/core';
import {User} from "../../interfaces/user-request.interface";

@Component({
  selector: 'app-properties-pages',
  templateUrl: './properties-pages.component.html',
  styleUrl: './properties-pages.component.css'
})
export class PropertiesPagesComponent {

  public counter = signal(10);

  public fullName = computed(() => `${this.user().first_name} ${this.user().last_name}` )

  public user = signal<User>({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  })

  public userChangedEffect = effect(()=> {
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  increaseBy(num:number) {
        this.counter.update( as => as +num);
  }

  onFieldUpdated(field:keyof User, value:string):void {

   this.user.update(current => {
      switch (field){
        case 'email':
          current.email = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'id':
          current.id= Number(value);
      }
      return current
   })
  }
}
