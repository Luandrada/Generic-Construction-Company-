import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myCarousel = document.getElementById('myCarousel')

  
   
  }

  startCarousel(){
    let img= document.getElementById("img") as HTMLImageElement;
    let name= document.getElementById("name1");
    document.getElementById("button-play").style.display="none";
  
      setTimeout(() => {
        img.src="../../assets/img/person_5.jpg";
        name.innerText='ANNE BOEL';
        document.getElementById("1").style.backgroundColor="#ffa500";
        document.getElementById("0").style.backgroundColor="#fff"
          setTimeout(() => {
            img.src="../../assets/img/person_1.jpg";
            name.innerText='SAMUEL NEIM';
            document.getElementById("2").style.backgroundColor="#ffa500"
            document.getElementById("1").style.backgroundColor="#fff"
            setTimeout(() => {
              img.src="../../assets/img/person_2.jpg";
              name.innerText='JESSICA LECKMA';
              document.getElementById("3").style.backgroundColor="#ffa500"
              document.getElementById("2").style.backgroundColor="#fff"
              setTimeout(() => {
                img.src="../../assets/img/person_3.jpg";
                name.innerText='KATHRIN JUNK';
                document.getElementById("4").style.backgroundColor="#ffa500"
                document.getElementById("3").style.backgroundColor="#fff"
                setTimeout(() => {
                  img.src="../../assets/img/person_4.jpg";
                  name.innerText='JEFF FRESHMAN';
                  document.getElementById("0").style.backgroundColor="#ffa500"
                  document.getElementById("4").style.backgroundColor="#fff";
                  this.showButton();
                }, 3000);
              }, 3000);
            }, 3000);
          }, 3000);
      }, 3000);
     
      
  }
  showButton(){
    document.getElementById("button-play").style.display="initial";

  }
}
