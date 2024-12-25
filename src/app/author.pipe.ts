import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  transform(name:String): String {
    return 'Bonjour je suis'+name+' un Etudiant ISETSBZ';
  }

}
