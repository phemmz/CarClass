//Car class that can be used to instantiate various vehicles
class Car {

//constructor to initialize the arguments
  constructor(name, model, type) {
//if argument supplied is a string initialize with the following
    if(typeof(name) == typeof("")){
      this.name = name;
      this.model = model;
      this.type = type;
      
    }
//if no argument is supllied initialize with the following
    else{
      this.name = "General";
      this.model = "GM"
    }
  }
//method that gets number of doors of the car
  get numOfDoors() { 
    let numbOfDoors;
    if (this.name === "Porsche" || this.name === "Koenigsegg") {
      numbOfDoors = 2;
    } 
    else {
      numbOfDoors = 4;
    }
    return numbOfDoors;
  }
//method that checks if the car is saloon
  get isSaloon() {
    if (this.name === "Koenigsegg") {
      return true;
    }
  }
  
  get drive() {
    this.name = speed();
  }
//method to get speed of the car  
  get speed() {
    if (this.name === "Porsche") {
      return '250km/h';
    }
    else if(this.name === "MAN") {
      return '77 km/h';
    }
  }
  
}

