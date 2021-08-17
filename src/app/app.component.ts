import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dsize';

  files: File[] = [];
  base64Image: string=''

  ngOnInit(){

  }

	onSelect(event: any) {
		console.log(event);
		this.files.push(...event.addedFiles);
    this.fileToBase64(this.files[0]);
	}

  fileToBase64 = (file:File) => {
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = () =>{
          // @ts-ignore: Object is possibly 'null'.
          this.base64Image = reader.result.toString()
         } 
         return reader.onload;
        //  reader.onerror = error => error;
        //  return reader.onerror;
    }

	onRemove() {
		this.files.length=0;
    this.base64Image='';
	}

  onDrag(eventDetails: any){
    console.log(eventDetails);
  }

  onResize(eventDetails: any){
    console.log(eventDetails);
  }
}
