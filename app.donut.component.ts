import { Component, OnInit, SimpleChanges, OnChanges,  Input } from '@angular/core';
import {Router } from '@angular/router';
import {GlobalService} from './global.service';
//import { InfoComponent } from './info.component';
//import {PieComponent } from './demograph/pie.component';
//import jQuery= require("jquery");
declare let d3: any;
import * as angular from 'angular';
declare let $scope:any;
import "jquery";
//declare let varN: number;
//import { NvD3Module } from './ng2-nvd3.module';
//import {selection, select} from "d3-selection";
//import * as d3Multi from "d3-selection-multi";
//import $ = require("jquery");


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  inputs: ['showComp']
})
export class AppComponent implements OnChanges, OnInit {
  //public var: boolean= false;
  @Input() showF: any;
 showComp: number;
  //@Output() showComp: number;
  showAbout1: boolean;
  showAbout2: boolean;
  showExp: boolean;
  showSkills: boolean;
  showPro: boolean;
  showAchi: boolean;
  showEdu: boolean;

  


  title = 'app';
  options;
  data;
  varVal;
  showLabel: boolean= true;
  height: number;
  showDonut: boolean=true;
  label: boolean = true;
  showTooltip: boolean = true;
  showLegends: boolean = true;
  grow: boolean = true;
  chartHieght: number= 700;
  donutRatio: number = 0.5;
  //app1 = angular.module('app-root', [])
      //.controller('Ctrl33', function($scope){
  onClick1(){

    if(this.showLabel == true ){
      this.showLabel = false;
    }
    else{
      this.showLabel = true;
    }
    this.draw();
    
  }
   
onClick2(){
   if(this.showDonut == true){
     this.showDonut = false;
   }
   else{
     this.showDonut = true;
   }
   this.draw();
}

hideLabel(){
    if(this.label == true){
      this.label = false;
    }else{
      this.label = true;
    }
    this.draw();
  }

changeTooltip(){
    if(this.showTooltip == true){
      this.showTooltip = false;
    }
    else{
      this.showTooltip = true;
    }
    this.draw();
}
changeLegend(){
    if(this.showLegends == true){
      this.showLegends = false;
    }
    else{
      this.showLegends = true;
    }
    this.draw();
}
changeGrow(){
  if(this.grow == true){
    this.grow = false;
  }else{
    this.grow = true;
  }
  this.draw();
}

changeHeight(val: string){
      this.chartHieght = Number(val);
      
      this.draw();
}
changeDonutRatio(value: string){
  this.donutRatio = Number(value);
    this.draw();
}
  

ngOnChanges(changes: SimpleChanges) {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add 'implements OnChanges' to the class.
  //console.log(this.data);
  console.log(this.showComp);
  
}
constructor(public myService:GlobalService){
  this.showAbout1=true;
      this.showAbout2=false;
      this.showAchi = false;
      this.showExp = false;
      this.showPro = false;
      this.showSkills = false; 
      this.showEdu = false;
      this.showComp =1;
      //console.log(this.showComp);
      this.myService.setValue(1);
}

  ngOnInit(){
    this.draw();
    this.showF = 22;
    //his.showComp = varN;
    //console.log(this.varVal);
  }

  changeVal(){
      //this.showComp = this.myService.setValue(e.data.y)?1 :1;
  }

reL($event, $scope){
  //console.log($event);
}





  public draw(){
    this.varVal = 1;
      
    var myv =1;
    this.options = {
            chart: {
                type: "pieChart",
                height: this.chartHieght, //1
                donut: this.showDonut, //2
                showLabels: this.label, //3
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                
                pie: {
                    startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
                    endAngle: function(d) { return d.endAngle/2 -Math.PI/2 },
                    dispatch: {
                    elementClick: function(e) {

                    //e.data.Add({key:'newVar', y:Number(e.data.varVal) });
                    myv = Number(e.data.varVal);
                    //this.data.Add({key:'newVar', y:Number(e.data.varVal)});
                    
                  },        
                      },
                    arcsRadius: [],
                    width: 500,
                    height: this.chartHieght,
                    title: true,
                    titleOffset: 20,
                    labelThreshold: 0.02,  
                    id: 971,
                    padAngle: false,
                    cornerRadius: 0,
                    donutRatio: this.donutRatio, //5
                    labelSunbeamLayout: false,
                    growOnHover: true,
                    margin: {
                         top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    labelType: "key"
                     },
                duration: 500, //7
                legend: {
                margin: {
                    top: 0,
                    right: 20,
                    bottom: 5,
                    left: 0
                    },
                dispatch: {},
                width: 400,
                height: 20,
                align: true,
                maxKeyLength: 20,
                rightAlign: true,
                padding: 32,
                updateState: true,
                radioButtonMode: false,
                expanded: true,
                vers: "classic"
    },
    dispatch: {},
    tooltip: {
      duration: 0,
      gravity: "w",
      distance: 25,
      snapDistance: 0,
      classes: null,
      chartContainer: null,
      enabled: this.showTooltip,  //8
      hideDelay: 200,
      headerEnabled: false,
      fixedTop: null,
      
      hidden: true,
      data: null,
      id: "nvtooltip-8093"
    },
    arcsRadius: [],
    width: null,
    title: false,
    titleOffset: 0,
    labelThreshold: 0.02,
    padAngle: false,
    cornerRadius: 0,
    donutRatio: 0.5,    //9
    labelsOutside: this.showLabel, //10
    labelSunbeamLayout: false,
    growOnHover: this.grow, //11
    margin: {
      top: 0,
      right: 10,
      bottom: 20,
      left: 20
    },
    labelType: "key",
    noData: null,
    showLegend: this.showLegends, //13
    legendPosition: "top",
    defaultState: null,
    
  },
  title: {
    enable: true,
    html: "<h4 style='color:black;'>I am clickable</h4>"
  },
  subtitle: {
    enable: true,
    text: "Write Your Subtitle",
    css: {
      width: "nullpx",
      textAlign: "center"
    }
  },
  caption: {
    enable: true,
    text: "Figure 1. Write Your Caption text.",
    css: {
      width: "nullpx",
      textAlign: "center"
    }
  },
  styles: {
    classes: {
      "with-3d-shadow": true,
      "with-transitions": true,
      gallery: false
    },
    css: {},
    
    
  }
  
},
this.showComp = myv;

this.data = [
            {
                key: "About Me",
                y: 8
            },
            {
                key: "Experience",
                y: 7
            },
            {
                key: "skills",
                y: 4
            },
            {
                key: "projects",
                y: 5
            },
            {
                key: "Education",
                y: 6
            },
            {
                key: "Achievements",
                y: 9
            },

        ];
  }

  
}

