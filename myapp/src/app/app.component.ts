import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Lecture';
  author:string = "Martina Basquez";
  states: string[] = ["MI", "OH", "MO"]
  isHungry: boolean = true;
  currentUser: User = {
    name: "Marty Farty",
    tired: true,
    hometown: "Edinburg"
  }

  allUsers: User[] = [ 
    { name: "Justin Jones", tired: true, hometown: "Columbus" }, 
    { name: "Marty Farty", tired: true, hometown: "Edinburg" }, 
    { name: "Ethan", tired: false, hometown: "Rolla" }, 
    { name: "Joey Molinski", tired: true, hometown: "Toledo" },
    { name: "David Brameijer", tired: false, hometown: "Grand Rapids" }, 
    { name: "Brady Hartman", tired: true, hometown: "Saranac" }, 
    { name: "DeAngelo Robinson", tired: true, hometown: "Detroit" }, 
    { name: "Alain Rene", tired: true, hometown: "Brooklyn" }, 
    { name: "DVD", tired: true, hometown: "Jersey City" },
    { name: "Afseen", tired: true, hometown: "India" }, 
    { name: "Wren Grasley", tired: true, hometown: "Columbus" } 
  ];
  changeUser(u:User):void{
    this.currentUser = u;
  }
}
