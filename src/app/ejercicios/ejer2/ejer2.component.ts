import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer2',
  templateUrl: './ejer2.component.html'
})
export class Ejer2Component {  

  letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  conju = ['h','l','r','y']
  noConju = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
  vocales = ['a','e','i','o','u']

  nombre = this.getNombre();
  apellido = this.getRandomName();
  edad = this.getRandom()
  edades = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
  sueldos = [1500, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre']
  consulta = ''

  sumarSueldos() {
    let suma = 0;
    for (let i = 0; i < this.sueldos.length; i++) {
      suma += this.sueldos[i];
    }
    return suma;
  }

  getRandom() {
    return Math.floor(Math.random() * 50) + 1;
  }

  getLetra(l: any){
    var n = Math.floor(Math.random() * l.length);
    return l[n];
  }

  getNombre(){
    var n = Math.floor(Math.random() * 8) + 3;
    var name = '';
    var la = '';
    let l = '';
    for (var i = 0; i < n; i++) {
      l = this.getLetra(this.letras);
      if (i <= 0) {
        la = l;
        name = l;
      } else {
        var conso = false;
        var vocal = 0;
        for (const x in this.noConju) {
          if (name[name.length - 1] == this.noConju[x]) { 
            conso = true;
          } 
        }
        if (name.length >= 3) { 
          for (const x in this.vocales) { 
            if (name[name.length - 1] == this.vocales[x]) { 
              vocal++;
            }
            if (name[name.length - 2] == this.vocales[x]) { 
              vocal++;
            }
            if (name[name.length - 3] == this.vocales[x]) { 
              vocal++;
            }
          }
        }
        if (conso) {
          l = this.getLetra(this.vocales);
        } else if (vocal == 3) {
          l = this.getLetra(this.conju);
        }
        la = l;
        name += l;
      }
    }
    const letraPrima = name.charAt(0).toUpperCase();
    var letraResto = '';
    for (i=1; i < name.length; i++) {
      letraResto += name[i];
    }
    return letraPrima + letraResto;
  }

  // Método creado por Chat GPT3
  getRandomName(): string {
    const nameLength = Math.floor(Math.random() * 6) + 3;
    let name = '';
    let previousLetter = '';
  
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonients = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  
    for (let i = 0; i < nameLength; i++) {
      let letter = '';
      if (previousLetter === '' || vowels.includes(previousLetter)) {
        letter = consonients[Math.floor(Math.random() * consonients.length)];
      } else {
        letter = vowels[Math.floor(Math.random() * vowels.length)];
      }
      name += letter;
      previousLetter = letter;
    }
  
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

}
