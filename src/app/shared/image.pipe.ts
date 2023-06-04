import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Image} from "./models/product/image";

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  constructor(
    private sanitizer:DomSanitizer,
  ) {
  }

  sanitize( url:string ) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
  }

  transform(value: Image) {
    return this.sanitize('data:'+value.type+';base64, '+this._arrayBufferToBase64(value.data.data))
  }

}
