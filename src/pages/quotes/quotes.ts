import { QuotesService } from './../../services/quotes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';



@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quotegroup: {category: string, quotes: Quote[], icon: string}
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
  private quotesService: QuotesService) {
    this.quotegroup=this.navParams.data
  }

//ionViewDidLoad(){
  //this.quotegroup=this.navParams.data
  //add (?) operator in HTML page to use this approach
//}

onAddToFavorites(selectedQuote: Quote){
  const alert = this.alertCtrl.create({
    title: 'Add Quote',
    subTitle: 'Are you Sure?',
    message: 'Are you sure you want to add the quote?',
    buttons: [
      {
        text: 'Yes, go ahead',
        handler: () =>{
          this.quotesService.addQuoteToFavorites(selectedQuote);
        }
      },
      {
        text: 'No, am Cancelling',
        role: 'cancel',
        handler: () =>{
          console.log('Cancelled!');
      }
    }
    ]
  });
  alert.present();

}
onRemoveToFavorites(quote: Quote){
  
}
isFavorite(quote: Quote){
  return this.quotesService.isQuoteFavorite(quote);
}
}
