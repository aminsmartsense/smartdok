import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
