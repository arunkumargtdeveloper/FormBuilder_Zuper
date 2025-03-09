import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  fieldGroups = [
    { name: 'AMC Reports', description: 'Reports related to AMC' },
    { name: 'HVAC Repair', description: 'Repair tracking forms' }
  ];
  selectedGroupIndex: number | null = null;
  formElements: any[] = [];
  availableElements = ['Single Line Text', 'Multi Line Text', 'Date', 'Time', 'Dropdown', 'Upload'];
  selectedElement: any = null;

  selectGroup(index: number) {
    this.selectedGroupIndex = index;
    this.formElements = []; // Fetch stored elements if required
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  editElement(element: any) {
    this.selectedElement = element;
  }

  // exportJSON() {
  //   console.log(JSON.stringify(this.formFields, null, 2));
  // }

}
