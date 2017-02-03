import { Component, OnInit } from '@angular/core';
import {document} from "@angular/platform-browser/src/facade/browser";

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  usnews = true;
  leapfrog = false;
  annualCheckupDiv = true;
  symptopCheckerDiv = false;
  blogSection = true;
  loadOne = true;
  loadTwo = false;

  annualCheckup(){
    this.annualCheckupDiv = true;
    this.symptopCheckerDiv = false;
    document.getElementById("symptomText").style.background = "#e8e8e9";
    document.getElementById("symptomText").style.color = "#9e9ea4";
    document.getElementById("symptomText").style.boxShadow = "0 -3px 6px #babdc1 inset";
    document.getElementById("symptomText").style.fontSize = "16px";
    document.getElementById("symptomText").style.textDecoration = "none";
    document.getElementById("annualText").style.background = "#F9F9F9";
    document.getElementById("annualText").style.color = "black";
    document.getElementById("annualText").style.fontSize = "18px";
    document.getElementById("annualText").style.textDecoration = "underline";
    document.getElementById("annualText").style.boxShadow = "none";
  }

  symptopChecker(){
    this.annualCheckupDiv = false;
    this.symptopCheckerDiv = true;
    document.getElementById("annualText").style.background = "#e8e8e9";
    document.getElementById("annualText").style.color = "#9e9ea4";
    document.getElementById("annualText").style.boxShadow = "0 -3px 6px #babdc1 inset";
    document.getElementById("annualText").style.fontSize = "16px";
    document.getElementById("annualText").style.textDecoration = "none";
    document.getElementById("symptomText").style.background = "#F9F9F9";
    document.getElementById("symptomText").style.color = "black";
    document.getElementById("symptomText").style.boxShadow = "none";
    document.getElementById("symptomText").style.fontSize = "18px";
    document.getElementById("symptomText").style.textDecoration = "underline";
  }

  usnewsDiv(){
    this.usnews = false;
    this.leapfrog = true;
    document.getElementById('boxOne').style.boxShadow = "none";
    document.getElementById('boxTwo').style.boxShadow = "0 0 15px #757474";
  }

  leapfrogDiv(){
    this.usnews = true;
    this.leapfrog = false;
    document.getElementById('boxTwo').style.boxShadow = "none";
    document.getElementById('boxOne').style.boxShadow = "0 0 15px #757474";
  }

  urgentCare(){
  }

  flag = 0;

  blogs(){
    if(this.flag == 0) {
      this.blogSection = false;
      this.flag = 1;
      document.getElementById('angleUp').style.transform = 'rotate(180deg)';
    }
    else{
      this.blogSection = true;
      this.flag = 0;
      document.getElementById('angleUp').style.transform = 'rotate(0deg)';
    }

  }

  recommendedDoctors(){
    this.loadOne = true;
    this.loadTwo = false;
    document.getElementById('switch').style.transition = '0.2s all ease-in';
    document.getElementById('switch').style.transform = 'translate(0px,0px)';
  }

  topExperts(){
    this.loadOne = false;
    this.loadTwo = true;
    document.getElementById('switch').style.transition = '0.2s all ease-in';
    document.getElementById('switch').style.transform = 'translate(190px,0px)';
  }

  prev(){

  }

  next(){

  }

  constructor() { }

  ngOnInit() {
  }

}
