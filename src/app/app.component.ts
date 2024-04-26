import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items=[
    new WishItem('Learn Angular'),
    new WishItem('Make coffee', true),
    new WishItem('Find grass that cuts itself')
  ];
  title = 'wishlist';
  //console.log("OK");
  
}
