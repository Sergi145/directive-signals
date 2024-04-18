import {Directive, ElementRef, OnInit, Input} from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Directive({
  selector: '[CustomLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmElement?:ElementRef<HTMLElement>;
  private _color:string = 'red';
  private _errors?:ValidationErrors | null;

  @Input() set color(value:string) { this._color = value; this.setStyle();}
  @Input() set errors(value:ValidationErrors | null | undefined){ this._errors =value; this.setErrorMessage()}

  constructor(private el:ElementRef<HTMLElement>) {
    this.htmElement = el;
    this.htmElement.nativeElement.innerHTML = 'HOla mundo'
  }

  ngOnInit():void {

    this.setStyle();
  }

  setStyle():void {
    if(!this.htmElement) return;
    this.htmElement.nativeElement.style.color = this._color;
  }

  setErrorMessage():void {
    if(!this.htmElement) return;
    if(!this._errors) {
      this.htmElement.nativeElement.innerText = 'no ahi errores';
      return;
    }

    const errors= Object.keys(this._errors);
    if(errors.includes('required')) {
      this.htmElement.nativeElement.innerText = 'campo requerido';
      return;
    }

    if(errors.includes('minLength')) {
      const min = this._errors!['minLength']['requiredLength'];
      const current = this._errors!['minLength']['actualLength'];

      this.htmElement.nativeElement.innerText = `Mínimo ${current}/${min} caracteres`;
      return;
    }

    if(errors.includes('email')) {

      this.htmElement.nativeElement.innerText = 'No tiene formato de correo';
      return;
    }


  }

}
