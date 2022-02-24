import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs';

interface ApiResponseInterface {
  market_data:{
    current_price:{
      chf: string;
      user: string;
      toto: string;
    }
  };
  ath:{
    user: string;
  }
}

@Injectable()
export class CryptoService {

  constructor(
    private _http: HttpClient
  ) { }

    async getCrypto():Promise<ApiResponseInterface> {
      //get bitcoin price from coingecko
      const url = 'https://api.coingecko.com/api/v3/coins/bitcoin';
      const req = this._http.get<ApiResponseInterface>(url);
      const data = await firstValueFrom(req);
      if (!data?.market_data?.current_price?.chf){
        throw new Error('No data');
      }
      return data;
  }
}