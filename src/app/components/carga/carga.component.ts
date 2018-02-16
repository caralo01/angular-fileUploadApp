import { Component, OnInit } from '@angular/core';

import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';


@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  archivos :FileItem[] = [];
  estaSobreElemento: boolean = false;


  constructor(private _ciS :  CargaImagenesService) { }

  ngOnInit() {
  }


  cargarImagenes(){
    this._ciS.cargarImagenesFirebase( this.archivos );
  }

  pruebaSobreElemento(event){
    this.estaSobreElemento = event;
  }

  limpiarImagenes(){
    this.archivos = [];
  }
}
