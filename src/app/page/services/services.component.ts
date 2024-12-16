import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as dataEn from '../../shared/dictionary/en.json';
import * as dataEs from '../../shared/dictionary/es.json';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent  implements OnInit{
    public assistantName:string = '';
    public assistantImage:string = '';
    public assistantDescription:string = '';
    public aId:string = ''
    public lang:any;
    ngOnInit(): void {
      this.lang = navigator.language;
      if (this.lang.slice(0,2) == 'es') {
        this.lang = dataEs
      } else {
        this.lang = dataEn

      }

      this.activatedRoute.params.subscribe((params:any) =>{
          this.aId = params.id
      })

      this.guessAssitant();
    }

    constructor(private activatedRoute:ActivatedRoute){}

    guessAssitant(){
      if (this.aId == '1') {
        this.assistantName  = this.lang.administrativeAssistant;
        this.assistantDescription = this.lang.administrativeAssitantDescription;
        this.assistantImage = 'assets/images/admin.jpeg'
      } else if( this.aId == '2'){
        this.assistantName  = this.lang.personalAssistant;
        this.assistantDescription = this.lang.personalAssistantDescription;
        this.assistantImage = 'assets/images/personal.jpeg'

      } else if( this.aId == '3'){
        this.assistantName  = this.lang.callCenterAssistant;
        this.assistantDescription = this.lang.callCenterAssistantDescription
        this.assistantImage = 'assets/images/call-center.jpeg'

      } else if( this.aId == '4'){
        this.assistantName  = this.lang.profesionalAssistant;
        this.assistantDescription = this.lang.profesionalAssistantDescription;
        this.assistantImage = 'assets/images/profesional.jpeg'

      } else if( this.aId == '5'){
        this.assistantName  = this.lang.salesAssistant;
        this.assistantDescription = this.lang.salesAssistantDescription
        this.assistantImage = 'assets/images/sales.jpeg'
      } else if( this.aId == '6'){
        this.assistantName  = this.lang.digitalMarketingAssistant;
        this.assistantDescription = this.lang.digitalMarketingAssistantDescription
        this.assistantImage = 'assets/images/marketing.jpeg'
      } else if( this.aId == '7'){
        this.assistantName  = this.lang.ecommerceAssistant;
        this.assistantImage = 'assets/images/ecommerce.jpeg'
        this.assistantDescription = this.lang.ecommerceAssistantDescription
      }

    }
}
