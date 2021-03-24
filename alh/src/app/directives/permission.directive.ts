import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from '../modules/user/user.service';

@Directive({
  selector: '[appPermission]',
})

export class PermissionDirective {
  // @Input('appPermission') permission: { component: string; item: string, condition?: boolean };
  private hasView = false;
  constructor(
    private el: ElementRef,
    private vcr: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    public userService: UserService,
  ) {}

    @Input() set appPermission(permission: { component: string; item: string, condition?: boolean }) {
    this.userService.displayGuard(permission)
        .subscribe((showElement: boolean) => {
          if (showElement && !this.hasView) {
            this.vcr.createEmbeddedView(this.templateRef);
            this.hasView = true;
          } else if (showElement && this.hasView) {
            return;
          } else {
            this.vcr.clear();
            this.hasView = false;
          }
        });
  }
}
