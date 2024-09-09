import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Chirpus-Pizza';

  alfredosPizzaCafe: MenuItem[] = [
    {name: "Shroom", category: "Pizza", price: 17, vegetarian: true, soldOut: false},
    {name: "Pepperoni", category: "Pizza", price: 19, vegetarian: true, soldOut: false},
    {name: "Spinach & Goat Cheese", category: "Pizza", price: 20, vegetarian: true, soldOut: false},
    {name: "Crudo", category: "Pizza", price: 21, vegetarian: false, soldOut: false},
    {name: "Neopolitan", category: "Pizza", price: 21, vegetarian: true, soldOut: true},
    {name: "Sesame Heirloom", category: "Salad", price: 14, vegetarian: true, soldOut: false},
    {name: "Arugula", category: "Salad", price: 12, vegetarian: true, soldOut: false},
    {name: "Italian Street Corn", category: "Appetizer", price: 12, vegetarian: true, soldOut: false},
    {name: "Sausage Calzone", category: "Appetizer", price: 16, vegetarian: false, soldOut: true},
    {name: "Prosciutto & Burrata Board", category: "Appetizer", price: 17, vegetarian: false, soldOut: false},
    {name: "Meatballs", category: "Antipasta", price: 13, vegetarian: false, soldOut: true},
    {name: "Rotolo", category: "Antipasta", price: 7, vegetarian: true, soldOut: false},
    {name: "Nutella Pizza", category: "Dessert", price: 13, vegetarian: true, soldOut: true},
    {name: "Cannoli", category: "Dessert", price: 6, vegetarian: true, soldOut: false},
    {name: "Tiramisu", category: "Dessert", price: 12, vegetarian: true, soldOut: false},
    {name: "Panna Cotta", category: "Dessert", price: 15, vegetarian: true, soldOut: false},
    {name: "Cappuccino", category: "Dessert", price: 7, vegetarian: true, soldOut: false},
    {name: "Olive Oil Cupcake", category: "Dessert", price: 12, vegetarian: true, soldOut: true},
  ]




}
