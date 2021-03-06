import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabaseModule } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Booking } from '../models/Booking';

@Injectable()
export class BookingService {
  Bookings: FirebaseListObservable<any[]>;
  Booking: FirebaseObjectObservable<any>;

  constructor(
    public af: AngularFireDatabase
  ) {
    //get bookings as list this call the booking collection path is for booking collection
    this.Bookings = this.af.list('/booking') as FirebaseListObservable<Booking[]>;
    }
    
     //get booking
  //getBooking(vehicleno : string): FirebaseObjectObservable<any> {
   // return this.Booking = this.af.database.object('/bookings/'+ vehicleno);
  //}
  getBookings(){
    return this.Bookings;
  }

  newBooking(booking:Booking){

    var booki
      ={
        //$key?:string;
        email:'',
        //phone:'',
        vehicleNo:'',
        //millage:0 ,
        date: '',
        option:''
      }
    
    
    
    booki.email = booking.email;
    booki.option = booking.option;
    booki.vehicleNo = booking.vehicleNo;
    booki.date = booking.date.toDateString();

    this.Bookings.push(booki);
    console.log(booki);
  }

}
