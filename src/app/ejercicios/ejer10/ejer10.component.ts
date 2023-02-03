import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer10',
  templateUrl: './ejer10.component.html'
})
export class Ejer10Component {  

  letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  conju = ['h','l','r','y']
  noConju = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
  vocales = ['a','e','i','o','u']

  fakeRows = new Array(2)
  fakeColumns = new Array(3)

  imgLike = '../../../assets/images/heart.png'
  imgLikeGray = '../../../assets/images/heart-gray.png'
  imgChange = true

  likesMap = new Map<string, boolean>()
  namesMap = new Map<string, string>()
  favImages: string[] = []

  likeChange(key: any) {
    var valor = this.likesMap.get(key)
    console.log("************* Value: " + this.likesMap.get(key))
    if (valor == true) valor = false
    else valor = true
    this.likesMap.set(key, valor);
    console.log("************* Value: " + this.likesMap.get(key))
    var name = this.namesMap.get(key)
    this.favImages.push(name!)
    console.log("************* Name Inn: " + name)
    console.log("************* favImage: " + this.favImages[this.favImages.length - 1])
  }

  setMap(key: string) {
    this.likesMap.set(key, true)
  }

  setNames(key: string) {
    var name = this.getNombre()
    this.namesMap.set(key, name)
    return name
  }

  generarNombres() {
    
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

}
