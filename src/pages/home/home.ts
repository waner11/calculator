import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  screen:string;
  
  constructor(public navCtrl: NavController) {
    
  }
  
  point() {
    if (parseInt(this.screen) == 0) {
      this.screen = ""; 
    }

    this.screen += ".";
  }

  zero(){
    if (parseInt(this.screen) == 0) {
      this.screen = ""; 
    }
    
    this.screen+="0";
  }
  
  one() {
    if (parseInt(this.screen) == 0) {
      this.screen = ""; 
    }
    
    this.screen+="1";
  }
  
  two() {
    if (parseInt(this.screen) == 0) {
      this.screen = ""; 
    }
    
    this.screen+="2";
  }
  
  three() {
    if (parseInt(this.screen) == 0) {
      this.screen = ""; 
    }
    
    this.screen+="3";
  }
  
  four() {
    if (parseInt(this.screen) == 0) {
      this.screen = ""; 
    }
    
    this.screen+="4";
  }
  
  five() {
    if (parseInt(this.screen) == 0) {
      this.screen = ""; 
    }
    
    this.screen+="5";
  }
  
  six() {
    if (parseInt(this.screen) == 0) {
      this.screen = ""; 
    }
    
    this.screen+="6";
  }
  
  seven() {
    if (parseInt(this.screen) == 0) {
      this.screen = ""; 
    }
    
    this.screen+="7";
  }
  
  eigth() {
    if (parseInt(this.screen) == 0) {
      this.screen = ""; 
    }
    
    this.screen+="8";
  }
  
  nine() {
    if (parseInt(this.screen) == 0) {
      this.screen = ""; 
    }
    
    this.screen+="9";
  }
  
  plus() {
    if (parseInt(this.screen) == 0) {
      this.screen = ""; 
    }
    
    this.screen+="+";
  }
  
  minus() {
    if (parseInt(this.screen) == 0) {
      this.screen = ""; 
    }
    
    this.screen+="-";
  }
  
  multiply() {
    if (parseInt(this.screen) == 0) {
      this.screen = ""; 
    }
    
    this.screen+="*";
  }
  
  divide() {
    if (parseInt(this.screen) == 0) {
      this.screen = ""; 
    }
    
    this.screen+="/";
  }
  
  clear() {
    this.screen="";
  }
  
  equal() {
    this.screen=eval(this.screen);
  }
}
