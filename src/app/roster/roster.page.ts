import { Component, OnInit } from '@angular/core';
import { Student, StudentsService } from '../../students.service';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-roster',
  templateUrl: './roster.page.html',
  styleUrls: ['./roster.page.scss'],
})
export class RosterPage implements OnInit {
  students: Student[] = [];

  constructor(
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private studentService: StudentsService,
    private toastController: ToastController
  ) 
  { }

  async deleteStudent(student: Student) {
    this.students = this.students.filter(x => x.id !== student.id);
    const alert = await this.toastController.create({
      message: `${student.firstName} ${student.lastName} has been deleted.`,
      position: 'top',
      duration: 2000
    });

    await alert.present();  
  }

  async presentDeleteAlert(student: Student) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      subHeader: `${student.firstName} ${student.lastName}`,
      message: 'This action cannot be undone.',
      buttons: [
        {
          text: 'Delete',
          handler: () => this.deleteStudent(student)
        },
        {
          text: 'Never mind',
          role: 'cancel'
        }
      ]
    });

    await alert.present();

  }



  async presentActionSheet(student: Student) {
    const actionSheet = await this.actionSheetController
    .create({
      header: `${student.firstName} ${student.lastName}`,
    
      buttons: [{
        text: 'Mark Present',
        icon: 'eye',
        handler: () => {
          student.status = 'present';
        }
      }, {
        text: 'Mark Absent',
        icon: 'eye-off-outline',
        handler: () => {
          student.status = 'absent';
        }
      }, {
        text: 'Delete',
        icon: 'trash',
        role: 'destructive',
        handler: () => {
          this.presentDeleteAlert(student);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });


      await actionSheet.present();
    }


  ngOnInit() {
    
      this.students = this.studentService.getAll();
    
  }

}

