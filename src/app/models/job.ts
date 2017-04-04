export class Job {
  job: string;
  lat:number;
  lon:number;
  $key: string;
  constructor(job:any){
    this.$key = job.$key;
    this.job = job.job;
    this.lat = job.location.lat;
    this.lon = job.location.lon;
  }
}
