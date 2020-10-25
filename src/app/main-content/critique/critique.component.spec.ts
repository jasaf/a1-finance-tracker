import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CritiqueComponent } from './critique.component';

describe('CritiqueComponent', () => {
  let component: CritiqueComponent;
  let fixture: ComponentFixture<CritiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritiqueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CritiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
