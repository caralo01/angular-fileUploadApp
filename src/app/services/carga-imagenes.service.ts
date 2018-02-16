import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

import { FileItem } from '../models/file-item';


@Injectable()
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img'

  constructor(private _db: AngularFirestore) { }


  cargarImagenesFirebase( imagenes: FileItem[]){

    console.log(imagenes);
    
    const storageRef = firebase.storage().ref();

    for(const item of imagenes) {
      item.estaSubiendo = true;
      if( item.progreso >= 100){
        continue;
      }
      const uploadTask: firebase.storage.UploadTask = 
              storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
                        .put(item.archivo);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                    (snapshot: firebase.storage.UploadTaskSnapshot) => {
                      item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    },
                    (error) => {
                      console.error('Error al subir', error);
                    },
                    () => {
                       console.log('Imagen cargada correctamente');
                       item.url = uploadTask.snapshot.downloadURL;
                       item.estaSubiendo = false;
                       this.guardarImage({nombre: item.nombreArchivo, url: item.url});
                     });
    }
  }

  private guardarImage( imagen: any ){
    this._db.collection(`/${this.CARPETA_IMAGENES}`)
            .add( imagen );
  }

}
