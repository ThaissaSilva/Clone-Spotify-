import { Injectable } from '@angular/core';
import { spotifyConfigurations } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;


  constructor() { 
    this.spotifyApi = new Spotify();
  }

  obterUrlLogin(){
    const authEndpoint = `${spotifyConfigurations.authEndpoint}?`;
    const clientId = `client_id=${spotifyConfigurations.clientId}&`;
    const redirectUrl = `redirect_uri=${spotifyConfigurations.redirectUrl}&`;
    const scopes = `scope=${spotifyConfigurations.scopes.join("%20")}&`;
    const responseType = `response_type=token&show_dialog=true`;

    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  obterTokenUrlCallback(){
    if(!window.location.hash){
      return '';
    }
    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  definirAccessToken(token: string){
    this.spotifyApi.setAccessToken(token);

    localStorage.setItem('token', token);
  }
}
