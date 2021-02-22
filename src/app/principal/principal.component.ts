import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
 menuIsOpen:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){
    let menu= document.getElementById("options");
    let close = document.getElementById("close");
    let menuIcon= document.getElementById("menu");
    if (this.menuIsOpen) {
      menu.style.display="none";
      close.style.display="none";
      menuIcon.style.display="block";
      menuIcon.style.visibility="unset";
      this.menuIsOpen=false;
    }else{
      menu.style.display="flex";
      close.style.display="block";
      menuIcon.style.display="none";
      menuIcon.style.visibility="hidden";
      this.menuIsOpen=true;
    }

  }
  closeMenu(){

  }
}
