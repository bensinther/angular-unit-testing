import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AddComponent } from './add.component';

describe('TestComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddComponent],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#add', () => {
    it('should return 8 for inputs 3 and 5', () => {
      const result = component['add'](3, 5);
      expect(result).toBe(8);
    })
  })

  describe('adding two numbers and showing the result in the HTML', () => {
    it('should correctly show 10 for inputs 5 and 5', fakeAsync(() => {

      component.input1 = 5;
      component.input2 = 5;

      const page = fixture.debugElement.nativeElement;

      page.querySelector('#add-btn').click();

      tick();
      fixture.detectChanges();

      const result = page.querySelector('#result').textContent.trim();
      expect(result).toEqual("10");

    }));

    it('should correctly show 106 for inputs 6 and 100', fakeAsync(() => {

      component.input1 = 6;
      component.input2 = 100;

      const page = fixture.debugElement.nativeElement;

      page.querySelector('#add-btn').click();

      tick();
      fixture.detectChanges();

      const result = page.querySelector('#result').textContent.trim();
      expect(result).toEqual("106");

    }))
  })


});
