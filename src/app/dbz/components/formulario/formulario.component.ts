import { Component, EventEmitter, Output } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character:Character={
    name:'',
    power: 0

  }

addCharacter():void{
   if( this.character.name.length === 0 ) return;
   this.onNewCharacter.emit(this.character)
   this.character = {name:'', power: 0}
}

}
