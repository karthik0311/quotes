import { LibraryPage } from './../library/library';
import { FavoritesPage } from './../favorites/favorites';
import { Component } from '@angular/core';




@Component({
    
    selector: 'page-tabs',
    template:`
    <ion-tabs>
    <ion-tab [root]="favoritespage" tabTitle="Favorites" tabIcon="star"> </ion-tab>
    <ion-tab [root]="librarypage" tabTitle="Library" tabIcon="book"> </ion-tab>
    </ion-tabs>
    `
  })

export class TabsPage{
    favoritespage=FavoritesPage;
    librarypage=LibraryPage;

}