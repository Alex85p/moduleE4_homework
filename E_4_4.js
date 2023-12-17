// Родительская функция-конструктор для электроприборов
function ElectricAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.pluggedIn = false;
}

ElectricAppliance.prototype.plugIn = function() {
  this.pluggedIn = true;
  console.log(`${this.name} включен в розетку.`);
};

ElectricAppliance.prototype.unplug = function() {
  this.pluggedIn = false;
  console.log(`${this.name} выключен из розетки.`);
};

// Дочерние функции-конструкторы для конкретных приборов
function DeskLamp(name, power, brightnessLevels) {
  ElectricAppliance.call(this, name, power);
  this.brightnessLevels = brightnessLevels;
  this.brightness = 0;
}

DeskLamp.prototype = Object.create(ElectricAppliance.prototype);

DeskLamp.prototype.setBrightness = function(level) {
  if (level >= 0 && level <= this.brightnessLevels) {
    this.brightness = level;
    console.log(`${this.name} установлена яркость ${level}.`);
  } else {
    console.log("Некорректный уровень яркости.");
  }
};

function Computer(name, power, cpu, ram) {
  ElectricAppliance.call(this, name, power);
  this.cpu = cpu;
  this.ram = ram;
  this.running = false;
}

Computer.prototype = Object.create(ElectricAppliance.prototype);

Computer.prototype.start = function() {
  this.running = true;
  console.log(`${this.name} запущен.`);
};

Computer.prototype.shutDown = function() {
  this.running = false;
  console.log(`${this.name} выключен.`);
};

// Создание объектов приборов через new
const deskLamp = new DeskLamp("Настольная лампа", 10, 3);
const computer = new Computer("Компьютер", 500, "Intel Core i7", "16GB");

// Включение и выключение приборов
deskLamp.plugIn();
deskLamp.setBrightness(2);
deskLamp.unplug();

computer.plugIn();
computer.start();
computer.shutDown();

// Расчет потребляемой мощности
const appliances = [deskLamp, computer];
let totalPower = 0;

for (const appliance of appliances) {
  if (appliance.pluggedIn) {
    totalPower += appliance.power;
  }
}

console.log(`Общая потребляемая мощность: ${totalPower} Вт.`);

// Вывод результатов работы в консоль
console.log(deskLamp);
console.log(computer);