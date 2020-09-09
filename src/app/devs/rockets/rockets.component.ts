import { Component, OnInit } from '@angular/core';
// import { RocketControllerService } from 'src/app/rocket-controller.service';

  
var Thruster = /** @class */ (function () {
  function Thruster(currentPower, maxPower) {
      this.currentPower = currentPower;
      this.maxPower = maxPower;
  }
  return Thruster;
}());
//----------------------------------------------------------//
var Rocket = /** @class */ (function () {
  function Rocket(code) {
      this.thrusters = new Array();
      this.code = code;
  }
  Rocket.prototype.addThruster = function (thruster) {
      this.thrusters.push(thruster);
  };
  Rocket.prototype.thrustersPower = function () {
      return this.thrusters.map(function (elem) {
          return elem.maxPower;
      }).join(", ");
  };
  Rocket.prototype.currentSpeed = function () {
      var i, currentSpeed = 0;
      for (i = 0; i < this.thrusters.length; i++) {
          currentSpeed += this.thrusters[i].currentPower;
      }
      return currentSpeed;
  };
  Rocket.prototype.maxPower = function () {
      var i, maxPower = 0;
      for (i = 0; i < this.thrusters.length; i++) {
          maxPower += this.thrusters[i].maxPower;
      }
      return maxPower;
  };
  Rocket.prototype.accelerate = function () {
      var i, newSpeed = 0;
      for (i = 0; i < this.thrusters.length; i++) {
          if (this.thrusters[i].currentPower < this.thrusters[i].maxPower) {
              this.thrusters[i].currentPower += 10;
              newSpeed += this.thrusters[i].currentPower;
          }
      }
      return newSpeed;
  };
  Rocket.prototype.decelerate = function () {
      var i, newSpeed = 0;
      for (i = 0; i < this.thrusters.length; i++) {
          if (this.thrusters[i].currentPower > 0) {
              this.thrusters[i].currentPower -= 10;
              newSpeed += this.thrusters[i].currentPower;
          }
      }
      return newSpeed;
  };
  return Rocket;
}());
//----------------------------------------------------------//

function RocketsRace(){
  var rockets = new Array();
// ---------------- GLOBAL FUNCTION CREATE ROCKET---------------- //
function createRocket(code) {
    if (code === '32WESSDS') {
        var outputRocket1 = document.getElementById('rocket1');
        var thruster1 = new Thruster(0, 10);
        var thruster2 = new Thruster(0, 30);
        var thruster3 = new Thruster(0, 80);
        var thrusters = [thruster1, thruster2, thruster3];
        create(code, thrusters);
    }
    if (code === 'LDSFJA32') {
        var thruster1 = new Thruster(0, 30);
        var thruster2 = new Thruster(0, 40);
        var thruster3 = new Thruster(0, 50);
        var thruster4 = new Thruster(0, 50);
        var thruster5 = new Thruster(0, 30);
        var thruster6 = new Thruster(0, 10);
        var thrusters = [thruster1, thruster2, thruster3, thruster4, thruster5, thruster6];
        create(code, thrusters);
    }
    function create(code, thrusters) {
        var i;
        var existent = false;
        for (i = 0; i < rockets.length; i++) {
            if (rockets[i].code === code) {
                existent = true;
                var outputRocket = document.getElementById('rocket' + (i + 1));
                outputRocket.style.color = '#d43648';
                outputRocket.innerHTML = "ALERT!<br>Rocket " + rockets[i].code + " already exists. Cannot be created again.";
                break;
            }
        }
        if (existent === false) {
            var rocket = new Rocket(code);
            var j;
            for (j = 0; j < thrusters.length; j++) {
                rocket.addThruster(thrusters[j]);
            }
            rockets.push(rocket);
            var outputRocket = document.getElementById('rocket' + (i + 1));
            outputRocket.style.color = '#38a3b7';
            outputRocket.innerHTML = "Rocket " + rocket.code + " was created.<br><br>";
        }
    }
}
// ---------------- GLOBAL FUNCTION ACCELERATE ROCKET ---------------- //
function accelerateRocket(code) {
    var i;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].code === code && rockets[i].currentSpeed() < rockets[i].maxPower()) {
            rockets[i].accelerate();
            var outputRocket = document.getElementById('rocket' + (i + 1));
            outputRocket.style.color = '#3ea648';
            outputRocket.innerHTML = "Accelerating rocket " + rockets[i].code + " ...<br><br>";
            break;
        }
        if (rockets[i].code === code && rockets[i].currentSpeed() === rockets[i].maxPower()) {
            var outputRocket = document.getElementById('rocket' + (i + 1));
            outputRocket.style.color = '#d43648';
            outputRocket.innerHTML = "ALERT!<br>Rocket " + rockets[i].code + " cannot accelerate. It is at maximum power.";
            break;
        }
    }
}
// ---------------- GLOBAL FUNCTION DECELLERATE ROCKET ---------------- //
function decelerateRocket(code) {
    var i;
    for (i = 0; i < rockets.length; i++) {
        if (rockets[i].code === code && rockets[i].currentSpeed() > 0) {
            rockets[i].decelerate();
            var outputRocket = document.getElementById('rocket' + (i + 1));
            outputRocket.style.color = '#d43648';
            outputRocket.innerHTML = "Decelerating rocket " + rockets[i].code + " ...<br><br>";
            break;
        }
        if (rockets[i].code === code && rockets[i].currentSpeed() === 0) {
            var outputRocket = document.getElementById('rocket' + (i + 1));
            outputRocket.style.color = '#d43648';
            outputRocket.innerHTML = "ALERT!<br>Rocket " + rockets[i].code + " cannot decelerate. Its current speed is 0.";
            break;
        }
    }
}
// ---------------- GLOBAL FUNCTION PRINT ROCKET ---------------- //
function printRocket(code) {
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].code === code) {
            var outputRocket = document.getElementById('rocket' + (i + 1));
            outputRocket.style.color = '#fac027';
            outputRocket.innerHTML = "Rocket " + rockets[i].code + " has " + rockets[i].thrusters.length + " thrusters.<br>\n                                        Its current speed is " + rockets[i].currentSpeed() + "<br><br>";
        }
    }
}
// ------------- PRINT ALL ROCKETS ------------- //
function printAllRockets() {
    var outputAllRockets = document.getElementById('allRockets');
    outputAllRockets.innerHTML = '';
    outputAllRockets.style.color = '#fac027';
    for (var i = 0; i < rockets.length; i++) {
        outputAllRockets.innerHTML += "Rocket " + rockets[i].code + " has " + rockets[i].thrusters.length + " thrusters. Its current speed is " + rockets[i].currentSpeed() + ".<br><br>";
    }
}

}
@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
  // providers: [ RocketControllerService ]
})
export class RocketsComponent implements OnInit {

    constructor() {}
 ngOnInit(): void {
 RocketsRace();
 }
}