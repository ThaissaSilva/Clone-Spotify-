export const environment = {
  production: true
};

export const spotifyConfigurations = {
  clientId: '5da8e4f1a0284b9fa33169569fefebe9',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes:[
    "user-read-currently-playing", //musica tocando agora
    "user-read-recently-played", //ler musicas tocadas recentimente
    "user-read-playback-state", //ler estado do player do usuario
    "user-top-read", //top artistas e musicas do usuario
    "user-modify-playback-state", //alterar o player do usuario
    "user-library-read", //ler biblioteca do usuario
    "playlist-read-private", //ler playlists privadas
    "playlist-read-collaborative" //ler playlists colaborativas
  ]
}