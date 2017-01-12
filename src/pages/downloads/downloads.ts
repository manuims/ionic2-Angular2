import { Component } from '@angular/core';
import { NavController,Platform,AlertController } from 'ionic-angular';
import { Transfer,File,Zip } from 'ionic-native';

// Cordova
declare var cordova: any;

//ala
declare let alasql:any;


@Component({
  templateUrl: 'downloads.html'
})
export class DownloadsPage
{
    storageDirectory: string = '';
     private items:any;
     private perc:any;

    constructor(public navCtrl: NavController,public platform:Platform,public alertController:AlertController) 
    {
    //     this.platform.ready().then(() => {
    //   // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
    //   if(!this.platform.is('cordova')) {
    //     return false;
    //   }

    //   if (this.platform.is('ios')) {
    //     this.storageDirectory = cordova.file.documentsDirectory;
    //   }
    //   else if(this.platform.is('android')) {
    //        this.storageDirectory = cordova.file.applicationStorageDirectory;
         
    //   }
    //   else {
    //     // exit otherwise, but you could add further types here e.g. Windows
    //     return false;
    //   }
    // });
    this.items = [{
        name: "John Smith",
        email: "j.smith@example.com",
        dob: "1985-10-10"
    }, {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        dob: "1988-12-22"
    }, {
        name: "Jan Smith",
        email: "jan.smith@example.com",
        dob: "2010-01-02"
    }, {
        name: "Jake Smith",
        email: "jake.smith@exmaple.com",
        dob: "2009-03-21"
    }, {
        name: "Josh Smith",
        email: "josh@example.com",
        dob: "2011-12-12"
    }, {
        name: "Jessie Smith",
        email: "jess@example.com",
        dob: "2004-10-12"
}]
    }

    downloadFile()
    {

        
       
       // this.platform.ready().then(() => {

            

      const fileTransfer = new Transfer();
       let path:string = 'https://sfe.au.imshealth.com/ipad/testapps/sqlitedbfile.zip';
     // const imageLocation = `${cordova.file.applicationDirectory}www/data/sqlite/${path}`;

      fileTransfer.download(path, cordova.file.applicationStorageDirectory + '/library/localdatabase/' + 'myfile.zip').then((entry) => {

        const alertSuccess = this.alertController.create({
          title: `Download Succeeded!`,
          subTitle: `${path} was successfully downloaded to: ${entry.toURL()}`,
          buttons: ['Ok']
        });

        alertSuccess.present();

      }, (error) => {

        const alertFailure = this.alertController.create({
          title: `Download Failed!`,
          subTitle: `${path} was not successfully downloaded. Error code: ${JSON.stringify(error)}`,
          buttons: ['Ok']
        });

        alertFailure.present();

      });

   // });
    }


        exportData()
        {
          alasql("SELECT * INTO XLSX('Details.xlsx',{headers:true}) FROM ? ",[this.items]);
        }

        unZipFile()
        {
            
            let source: string = cordova.file.applicationStorageDirectory+'/library/localdatabase/myfile.zip';
    let dest: string = cordova.file.applicationStorageDirectory+'/library/localdatabase/';
    Zip.unzip(source, dest, (progress) => {this.perc = Math.round((progress.loaded / progress.total) * 100);})
        .then((result) => {
          if(result === 0) alert('SUCCESS'); // name of db file inside this zip file is 'appdata.db'
          if(result === -1) alert('FAILED');
        });
        }

        
    
}