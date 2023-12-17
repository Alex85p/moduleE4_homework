class ElectricAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }

  plugIn() {
    this.pluggedIn = true;
    console.log(`${this.name} включен в розетку.`);
  }

  unplug() {
    this.pluggedIn = false;
    console.log(`${this.name} выключен из розетки.`);
  }
}

class DeskLamp extends ElectricAppliance {
  constructor(name, power, brightnessLevels) {
    super(name, power);
    this.brightnessLevels = brightnessLevels;
    this.brightness = 0;
  }

  setBrightness(level) {
    if (level >= 0 && level <= this.brightnessLevels) {
      this.brightness = level;
      console.log(`${this.name} установлена яркость ${level}.`);
    } else {
      console.log("Некорректный уровень яркости.");
    }
  }
}

class Computer extends ElectricAppliance {
  constructor(name, power, cpu, ram) {
    super(name, power);
    this.cpu = cpu;
    this.ram = ram;
    this.running = false;
  }

  start() {
    this.running = true;
    console.log(`${this.name} запущен.`);
  }

  shutDown() {
    this.running = false;
    console.log(`${this.name} выключен.`);
  }
}

// Создание экземпляров приборов
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