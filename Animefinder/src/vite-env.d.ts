/// <reference types="vite/client" />


type Animetype={
    title:string,
    genres:string[],
    episodes:number,
    image:string,
    status:string,
    synopsis:string,
    type:string,
    link:string
    ranking:number
}

interface Statetype{
   anime:Animetype[],
   loading:boolean,
   error?:string
}