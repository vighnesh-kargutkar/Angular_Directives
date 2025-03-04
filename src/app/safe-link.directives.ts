import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector:'a[appSafeLink]',
    standalone:true,
    host:{
        '(click)':'onClick($event)'
    }
})
export class SafeLinkDirective {
    queryParam = input('my-app')
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

    onClick(event: MouseEvent){
        const wantsToLeave = window.confirm('Are you sure you want to leave this page?');
        if(wantsToLeave){
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href =address + '?safe=' + this.queryParam();
            return
        }
        event?.preventDefault()
    }
}