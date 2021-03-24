import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { UserService } from '../modules/user/user.service';

@Directive({
  selector: '[appPermissionDisabled]',
})
export class PermissionDisabledDirective {
  // @Input('appPermission') permission: { component: string; item: string, condition?: boolean };
  constructor(
    private el: ElementRef,
    // private vcr: ViewContainerRef,
    // private templateRef: TemplateRef<any>,
    public userService: UserService,
    private renderer: Renderer2,
  ) { }

  @Input() set appPermissionDisabled(permission: { component: string; item: string, condition?: boolean }) {
    this.userService.displayGuard(permission)
        .subscribe((showElement: boolean) => {
          if (showElement) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'false');
          } else {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
          }
        });
  }
}
