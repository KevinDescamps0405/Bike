import {Component, OnInit} from '@angular/core';
import {BikeService} from '../../services/bike.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'Globo MTB 20 Full Suspension',
    'Globo Carbon Fiber Racer Series',
    'Globo Time Trial Blade'
  ];
  // @ts-ignore
  bikeForm: FormGroup;
  validMessage: string = "";

  constructor(private bikeService: BikeService) {
  }

  ngOnInit(): void {
    this.bikeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    })
  }

  submitRegistration() {
    if (this.bikeForm.valid) {
      this.validMessage = "Votre Vélo a bien été enregistré";
      this.bikeService.createBikeRegistration(this.bikeForm.value).subscribe(
        data => {
          this.bikeForm.reset();
          return true;
        },
        error => {
          console.error()
          return false;
        }
      )
    } else {
      this.validMessage = "Veuillez remplir les champs requis avant de valider"
    }
  }
}
