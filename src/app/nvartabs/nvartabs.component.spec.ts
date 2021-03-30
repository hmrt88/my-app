import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvartabsComponent } from './nvartabs.component';

describe('NvartabsComponent', () => {
  let component: NvartabsComponent;
  let fixture: ComponentFixture<NvartabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvartabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvartabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
