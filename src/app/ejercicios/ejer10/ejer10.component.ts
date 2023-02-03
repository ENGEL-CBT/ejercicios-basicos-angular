import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer10',
  templateUrl: './ejer10.component.html'
})
export class Ejer10Component {  

  card = {
    id: 0,
    name: '',
    like: false
  }

  cards = [
    {id: 0, name: this.getNombre(), like: false},
    {id: 1, name: this.getNombre(), like: false},
    {id: 2, name: this.getNombre(), like: false},
    {id: 3, name: this.getNombre(), like: false},
    {id: 4, name: this.getNombre(), like: false},
    {id: 5, name: this.getNombre(), like: false},
    {id: 6, name: this.getNombre(), like: false},
    {id: 7, name: this.getNombre(), like: false}
  ]
  likes: string[] = []  

  imgLike = '../../../assets/images/heart.png'
  imgLikeGray = '../../../assets/images/heart-gray.png'

  setCard(id: any) {
    var card = { id: id, name: this.getNombre(), like: false }
    this.cards.push(card)
    return card
  }

  setCards() {
    while (this.cards.length > 0) {
      this.cards.pop()
    }
    console.log("************ cards.length: " + this.cards.length)
    for (var i = 0; i < 8; i++){
      this.cards[i] = this.setCard(i+1)
    }
  }

  getCard(id: any) {
    var n = 0
    for (var i = 0; i < this.cards.length; i++) {
      if (this.cards[i].id == id) {
        n = i
      }
    }
    return this.cards[n]
  }

  setLikeName(name: any) {
    this.likes.push(name)
  }

  setLike(id: any, name: any) {
    this.likes.push(name)
    for (var i = 0; i < this.cards.length; i++) {
      if (this.cards[i].id == id) {
        this.cards[i].like = false
      }
    }
  }

  getRandom() {
    return Math.floor(Math.random() * 50) + 1;
  }

  getLetra(l: any){
    var n = Math.floor(Math.random() * l.length);
    return l[n];
  }

  getNombre(){
    var letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var conju = ['h','l','r','y']
    var noConju = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
    var vocales = ['a','e','i','o','u']
    var n = Math.floor(Math.random() * 8) + 3;
    var name = '';
    var la = '';
    let l = '';
    for (var i = 0; i < n; i++) {
      l = this.getLetra(letras);
      if (i <= 0) {
        la = l;
        name = l;
      } else {
        var conso = false;
        var vocal = 0;
        for (const x in noConju) {
          if (name[name.length - 1] == noConju[x]) { 
            conso = true;
          } 
        }
        if (name.length >= 3) { 
          for (const x in vocales) { 
            if (name[name.length - 1] == vocales[x]) { 
              vocal++;
            }
            if (name[name.length - 2] == vocales[x]) { 
              vocal++;
            }
            if (name[name.length - 3] == vocales[x]) { 
              vocal++;
            }
          }
        }
        if (conso) {
          l = this.getLetra(vocales);
        } else if (vocal == 3) {
          l = this.getLetra(conju);
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
