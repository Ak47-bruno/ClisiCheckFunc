import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: Array<any>, filtro: string): any {
        if (filtro) {
            filtro = filtro.toUpperCase();

            const filteredValue = value.filter(a =>
                a.Template.toUpperCase().includes(filtro) ||
                a.UserName.toUpperCase().includes(filtro) ||
                a.Server.toUpperCase().includes(filtro) ||
                a.ComputerName.toUpperCase().includes(filtro) ||
                a.Date.toUpperCase().includes(filtro) ||
                a.ServiceTag.toUpperCase().includes(filtro)
            );

            return filteredValue;
        } else {
            return value;
        }
    }
}
