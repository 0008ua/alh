import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShedulePage } from './shedule.page';

describe('ShedulePage', () => {
  let component: ShedulePage;
  let fixture: ComponentFixture<ShedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
