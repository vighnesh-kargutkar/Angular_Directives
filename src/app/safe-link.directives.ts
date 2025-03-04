import { Directive, input } from "@angular/core";

@Directive({
    selector:'a[appSafeLink]',
    standalone:true,
    host:{
        '(click)':'onClick($event)'
    }
})
export class SafeLinkDirective {
    queryParam = input('my-app')

    onClick(event: MouseEvent){
        const wantsToLeave = window.confirm('Are you sure you want to leave this page?');
        if(wantsToLeave){
            const address = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href = address + '?safe=' + this.queryParam();
            return
        }
        event?.preventDefault()
    }
}