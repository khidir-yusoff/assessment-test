import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bar;
  bar_val = [];
  bar_lable = [];
  donut;
  donut_val = [];
  donut_lable = [];
  table;
  table_firstname = [];
  table_lastname = [];
  table_username = [];

  chartDonut = []
  chartBar = []

  constructor(private service:AppService) { }

  ngOnInit() {
    this.service.getDashboardStuff().subscribe(data => {
      
      this.bar = data["chartBar"]
      this.donut = data["chartDonut"]
      this.table = data["tableUsers"]

      console.log(this.table)

      this.donut.forEach(element => {
        this.donut_val.push(element.value)
        this.donut_lable.push(element.name)
      })

      this.chartDonut = new Chart ('canvas', {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: this.donut_val
            }
          ],
          labels: this.donut_lable
        }
      })

      this.bar.forEach(element => {
        this.bar_val.push(element.value)
        this.bar_lable.push(element.name)
      })

      this.chartBar = new Chart ('bass', {
        type: 'bar',
        data: {
          datasets: [
            {
              label: "data/data",
              data: this.bar_val,
            }
          ],
          labels: this.bar_lable,
        }
      })

      this.table.forEach(element => {
        this.table_firstname.push(element.firstName)
        this.table_lastname.push(element.lastName)
        this.table_username.push(element.username)
      })

      console.log(this.table_firstname)
      console.log(this.table_lastname)
      console.log(this.table_username)
    })
  }

}
