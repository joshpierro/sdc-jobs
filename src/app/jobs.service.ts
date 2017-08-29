import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";

@Injectable()
export class JobsService {
  firebaseRef:any;
  job:any;

  constructor(af: AngularFire) {
    this.firebaseRef = af.database;
  }

  getJob(jobId:string){
    let path = 'jobs/' + jobId;
    return this.firebaseRef.object(path);
  }
  getCompany(companyId){
  let path = 'companies/'+ companyId;
  return this.firebaseRef.object(path)
  }

}
