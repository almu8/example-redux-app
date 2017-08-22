import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = "Little papaya ))";
}
