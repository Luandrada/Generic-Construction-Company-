import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeText(id:number){
    let paragraph= document.getElementById('description-text');
    if (id===1) {
      paragraph.innerHTML='We are an expert group in architectural desing and interior design with <br>a residential approach, where we generate creative, authentic and <br>innovative solutions, achieving results that exceed the expectations of <br>each client.'
    }
    if (id===2) {
      paragraph.innerHTML='Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industrys standard dummy text ever since <br>Lorem Ipsum has been the industrys standard dummy text ever since <br>the 1500s, '
    }
    if (id===3) {
      paragraph.innerHTML='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,t enim ad minim veniam,dolor sit amet, consectetur <br>quis nostrud exercitation '
    }
    this.changeStyle(id);
  }
  changeStyle(id:number){
    let buttons=document.getElementsByClassName('change') ;
    let position=id-1;
    for (let i = 0; i < buttons.length; i++) {
      if (i===position) {
        let chosenBtn=buttons[position]as HTMLButtonElement;
        chosenBtn.style.backgroundColor='#fb5e27';
        chosenBtn.style.color='#fff'
      }else{
        let btn = buttons[i] as HTMLButtonElement;
        btn.style.backgroundColor='#fff';
        btn.style.color='#1f273c'
      }
      
    }
    
  }
  noBorder(){
    let buttons=document.getElementsByClassName('change') ;
    for (let i = 0; i <buttons.length; i++) {
      let button =buttons[i]as HTMLButtonElement;
      button.style.border='none'
    }
  }
}
