import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  data!: any;

  constructor(
    private _service: CryptoService
  ) { }

  async ngOnInit(): Promise<void> {
    const result = await this._service.getCrypto();
    console.log(result);
    this.data = result;
    
  }
}
