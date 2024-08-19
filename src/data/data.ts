import { colors } from "./colors";
import {
  song1,
  song2,
  song3,
  song4,
  song5,
  song6,
  song7,
  song8,
  song9,
  song10,
  song11,
  song12,
  song13,
} from "./songs";

// Usa Song1 - Song13 como antes

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    albumId: 1,
    title: "Chill Lo-Fi Music",
    color: colors.yellow,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    artists: ["NoSpirit", "Casiio"],
  },
  {
    id: "2",
    albumId: 2,
    title: "Lo-Fi Chill Session",
    color: colors.green,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    artists: ["Kupla", "Blue Fox"],
  },
  {
    id: "3",
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover: "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"],
  },
  {
    id: "4",
    albumId: 4,
    title: "Blue Note Study Time",
    color: colors.blue,
    cover: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"],
  },
  {
    id: "5",
    albumId: 5,
    title: "Chau Saura Session",
    color: colors.purple,
    cover: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"],
  },
  {
    id: "6",
    albumId: 6,
    title: "Like a Necessity",
    color: colors.orange,
    cover: "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["WFS", "Nadav Cohen"],
  },
  {
    id: "7",
    albumId: 7,
    title: "Brandon Playlist 1",
    color: colors.blue,
    cover:
      "https://i1.sndcdn.com/artworks-oGvaMt0dsBWPL7WZ-qgbAMA-t500x500.jpg",
    artists: ["40 canciones"],
  },
  {
    id: "8",
    albumId: 8,
    title: "Brandon Playlist 2",
    color: colors.blue,
    cover:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBQWFhYYGBwcGRgZGh8dIhgaHBgcGRocGhwaHyoiGRwnHRwaIzQjJysuMTExICE2OzYvOiowMS4BCwsLDw4PHBERHTAnIicwMDAzMTAwMDAwMjIyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIEBQYDB//EAEwQAAIBAQUEBwYEAwQIAwkAAAECEQMABBIhMUFRYfAFBhMicYGRMqGxwdHhI0JS8QcUcjNDYoIkNFNzg5KysxUWdDVjhJOio7TC0//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAtEQACAgIBAwIGAQQDAAAAAAAAAQIRAyExEkFRBGETInGBofCxFFKRwTIzQv/aAAwDAQACEQMRAD8A6PX38/tlkd+Vo9atv18NYg+edo71vXh9co+w4Wju+v08I8p+I4W+mjA8SU2zs9fj9xkT8/Q+NozufA68jh8ybMqP7/2HkPrbm1T9vQ/DnW2lURTY+o4Gc+/Tn5C3JjmdY8OYz2/GwZ/Hx47do4+tuFSoPTInw1jPKwaKNbOj1Ilj5en0tyapPu28dM9bcW50ERujSxGWZy+3lzxsDscCAMTafH78fjaM1XGZY4VHDW3K8XjGdyjQWjs5Phs2RPjlbKUzSMCTeL8Tkkqo9ct8HiLRcWXhv+ZOltD0R1HvNaGdRRp64nyYjZhpnvSdJbCNultMl36P6Ppds1NjUBgdqAapaNEU/h0x/wC8Tuj9RyB48nqop1HZ2w9JJq5aXuYq6dX6702rFBSoqJNaqezTPTDILOTswK02jXbo961Xs7ur1TshYJGmIgmEXLViBvjQbFuibz0i4rXtjRozKUh7UH9KsO7I1quMTbFwxGkut3pUafZ0UVF1gfmMRiYkku0bWJPEWx+PN/ujsw+geTfC8vlma6G6h06cNeiKrf7JSQgz/M2TPs0wj+rW2nVBAVVVVUQqgBVUDOABAVY+JmzC07/LLf6+HG2V67dPZNdqR2xWYH2iP7qRMqDAY7SMOgYGEnJ+WelNYvSY7S3+WV/W/rH/ADDdjRb8BCMx/euMsZ/wj8oOzvbQFy9epsU5DXnn6dKzxkJkzJ9RPqI8haMNvMfQW2dRVI8ZuWSTnLlj52nnbz87c3MabtPl6RssMQ8rAnZG22LZaCTz6elmq2eWz62aTx4n48+Wlu1FIGI66e/6fOy5GOBwLsmPv57LcKjcNtnYpz51+htzH2spMYfH6WHn7/pznYc8+6yAy54fe0DDNgzCwxc+6wGzWysDpibd7hY24+n/AD/eysBZ6CW88vp6i0e8XkDLVtw2cTutGvXSECFzO/y0G7Xhp425XVIGJsyQfhut9BZ4KhS2Si+gy++e7TZllsjSzWfPaNPtrp4+EaW4vWPPu25c6W4V60QB7R08/jZFrfB0rVu9h27TEfD1A+9mD5cxZgAUa5nM+lgjSJ36WVg4nRT7tTaJe7xiMCQPj5WF8rx3R5/T7W0nU/qeKqi8XmVokgKmYNWWCSxGa0sRAkQTmZUCThlzKC2dGDBLI9FT1f6u17034axTBhqjZKvAEZs23ConfhGdvQuhOrd3usMo7SqP714ldn4aZinO8S0ZFrWUhFCIoVVEKqgKFGwAAQvlblUqEDIYmMhFBAxsM4mDhUDMt+USTnAPnTySlt8eD6DD6PHhj1S2zn0p0oKQTuNVq1CVo0U9qq23M+yg/M5yA42pui+gzVqNer2xq1c1TCStNIME0IMhUIKq894hmg5O1j/J4CZfFeK4IqVh3cFFQuNaImadMYlpqNcdRXMlcpTEZABVUQFUCAAFACgbABl4CLYq5M1WN5Z3LhdiJe7+9LE1QNVp6msijHT3mrTTJ11mogG2UGp6JUSqqvTYOjTDqZDbMiJzG0eRzFuuLaJ4fW1VfuiQhetd6gu9TCXqCJpVQskmqmgMD21AIknMmbVTjxwbPqw7W1+UHrF0k1FFp0p7esYpwBKiYapOgMnCp3ksckNsB0lXRQEQ4lUZEZhjlL55x7IHCJEs1pnSPTFSoz1K6FKlVFA7pCpRhlYU5JPeMrOeRq5ntMqG8VSxJ4mPXLn9ra49fMzxs+V58lvjt9BkTmffPOQi3Mt4jn6/Oz0ps7KiKxd2CqAMyxOFQBqSSYAtK6UC0v8ARwQcDfiuB7VUSCFP6EMqNhONtoAmU90SkQJAsJjXPn72dsGROXPysDz8bTYxUqcnZ8bPqvMDUbeG362AeBx22YT7+fPSzukAn4WapsMXM2U6C0NlBxWBsrI/vzssgbFNhFiffnrzFmznZEg50P1srDshz+9lYsKNNdEkzHPz/a3SrXk8PKOGfpn8s7c2bCMI12+Mzs8rNmBJ2a6588xb3rPJcQ1KwUSR4DnXnxsyg0A1WknKPf6/e0VmLuNfpaYLi1WlWr+zRoBVxbGqOQqIN5zxHco4i2U8qirZpDH2IxqltdpjwFpF8qYR5D14yBpnyLQqBPaKN3Oy2p6sdDLVrGvXotVoUYGEGnDVCCwV+1dAVCwxEkmVGmK0ZMqhFyZccfU0iR1Y6pMBTrVkZnf8RaYXEyUVIxVSu2ocQCJqJLgMyhba2/dJXfsj2tSmtBlKSHUKylSjIgkOrqMsOGQQIzEDEdL9eavaVhdmZRUODE0VHwIxWktJzJYEFmlpM1DEQC0S7dTrxVJq3ip2bNmxcmpVbTNlnL/O4PC3nKM5vql3O/Hl+HairNF/53uzCHr1VYZM9Oip7Qg5VB2iNhxAyUIGFpHeGZ4UOtl27RmN7vQU4QGelRIK7VKCiSIcTKwCMO1bQqHVq5LAapUqH+umue3JULeWK0xeq9yI/sqg8KrT/wDVIPobU/TuuH+Cf6mb5f8AJd9F9IpVZjSvN3vBbCAneouEWcsLYixl3MYBJIzAyEtTJwEMj59xgATGuGCVYbTgZo2xoMP0h1DUj/R60mMkqgQdMu0UAA6aoBvIsOietVa7N/LX9GenIPflnpZyrA6uoOYIMiAUbIAw4ShwdeH1co6ZuQdOdfDQ2hdOQyLRZiiPL13GqXelDVSNxYlEH9TbrTMalca1FenkRUBBgGGGM5SpEEVMjpiyBqWpevNQ0bu7wZqPTRmhu5TpBqgRtgJrFjxDRsFhvqVI6fUZurG6+5hunOkDVqMxAUtmUGlNQMKU12YUQKgy/KDraBTpl8R2KpZySBAEDbtJIUbywFmtVESd5nwtrOr3QGN+zqCadFle8To9Yg9ld/BBOPcTUH6TapSSqKPLhFvSGdC0xc7tWvjSl4cYbsrAgqKgAFVMQAqHCx7y5ALBjHFsgF0jKOO7L5W2P8T+kCz0aE+yhqP/AF1DAy2EIoP+a2Na2aW2aSVOhKbIN5c6WLep5+lmxvsxBY8+dhPPntsojmNbd+j7k1Vwq5CCzMclRB7TsdigfICSQCmxkabG0npG8K2Faa4aaA4ZAxHPN3j87btAAqj2ZtGNkASefGzfOyjSy32RIV8Y5/awJsALCwMdB3+6yty51FlZhZeI5Os6c/Kwr1ZynIZ8+tm1nAGW3T72jO3HzPxt6jmcChRP6F6OqXip2dP2m2x7KgEsx8FHmYGpFtT1yo0aFzpU6QqQKyj8SnVSIp1C5QVEUFixEuJY7SBhVZPUzon+VLFwxq1KFNsAAlFerU7rEwEyp08WI+13RJABifxMvDFLuhQr3qp1DAx2SiIgyMR1UaiJFuGU+ua8JnZHEoYnJ8sx92zYGJg5+BIHxgeYtsuzwdF1XkYWrFSskY6j0qIUACIULjZs8wmHRmNqXoPoerhp1ICpXZ6CufyVWQGmGyyl2pkHbhbdbRdVHFSmbpUWCb0rMrLmA11rUnUg7VemAw3txs8+VSVLs0YY4tS+qYuonVx8HagAVWE9o4kUEPshRq1V1OIgRCsoJSTi1936Bu65uhrNrird+DOopnuLntCzA1OVplKmERaYzCKFB25CZOepIkzMyZ2zF6b6SF3oPVIBIgIp0eoxOEH/AAgDE0flDm0OUmjXoSI3WXrFdrooFRQzkStFAsldAxkYUSdp1zgNGXnfSPXOo7FqVC7UJnJKcmTqWnuM2ueCfUTXX96laq7MS7t3nY6kbWaNABs0AAAgC3a9dVqi0kcPTeo4DrQpF6lQKRkzimjKn+Yj4i2vSocvYmSrl13qg/jJTqptKqKbZnYR3CeBXZqLaG+3eh0hdxhcf+6qNk1FyJwVB+UExiAkQQyzAt53VQqSjAqRIIYEEcCG0+9rbqf0j2N5VST2dYim42ZmEfxVyG/pLD8xsnx7DLHqV0vVutdrrVJQyURGVmirizpMEDHs3JYAgMFYhwCC4be0Xw91ZwkHADmVCkq9GpMgshkCSZUMM+yJOF/iLcMJp3gZNIp1NR31GKk2XeBwq6Hb+GvjbZXK+itSSqI/EAY/4zgUYjsJKqoOgxKw2WxUGpnTgb6qM+/VlKN6N6RFamgD0qOWd5ZglJAD/ddoyPIyE4dATa86L6PFKmtJTjMy9T/a1XILud8tkJ2Bd1uhOm8GQdIaGWYGuTNkZiQdQDYMzBWKCXCPg/rwEoOBxQNbaLH0tyOhY4xbkjzPrY+K91XkHEwKxsTCBSzO+mEPCbVeUbfqPPTPK0zpdwbxWO6o6jgFYquUbFAFomGcgJOwDUk7htJ2RaI8HHZzMjSfdNul6oMmGY7yBgNoU+zPiAGH+Eqdtrnq10IKl4Za89hd+0e8MswVpe0isBHeMDfBJ3Wpr9ezVqNUaMTsWMaCZyG5RoNwA2C0XsAXW6vVqLTpridjCqPzHhw4nIAGbXfWXBdU/kaRDNKteqo/PUGa0lyyp05mNrHOCotcdFXQdG3RrzUH+kVAFpqw/sy0lVI/VAxvwVUylgcQxJMkkkkmSZJJOZO8zztsmrYNUN55ysjZ6AsQqgkmAAMyTkBAGpMx5263+hgqNTxYsMKTsLADGAdoDSoOhAnbZjI3GxCxYxsz5+trPqx0E97rLTHdSR2lSMkUmPNicgNupyDEJhRWMpEEgxsMHONY3x9bB5tO6dvK1KpNJcNBTgojdTUnD4sZLk/qcnbaEoz5926wtgO7Jtzf8o+ljbr3d/uP0srVSA6GZk6Tz8Pfa76jdFCrW7eooNKiQxB/vKmtOmDxILHgsGAbULN57xGv110t6P0Vc/5eilGBiHeqaZ1W9rPbhICDggO220pXoMGFTnvhFoK7Me8wLEy7DLG8ZnP8ojConJYEzmcx/E4ZXUbzWA8+wEW0N2B1EGYiTAA0liATEqwAUEsQfZALJTfxDH4d3xMC+OoQFUIABTUtCyxGeAZs3lZKupRXlHV6ulhcY9jTdRruj3EIyhkZ6mIMMjDAacMIz2QLWF76GQ3gXpCadYCHIErWQxiWokjvQohwQQVWcWEC0PqAo/kqR3vV91eoN3M2tLzWVASdBGgklmYKAAASzFiBAzJNspJOT+rM8eNPEr8I6c/MfK2Y6/1JK0/0JiiPzVWKKQY1C0qo8HO8WvrrfgzYWR6bmSEfDJiZgozIT3ScIaYBkZEij63XQtVdtnYUgD/RVvGLwgVKf/MLaY6c4/Uwk1HbMNfr4RQ7IKqjEXqMMzVOFQindTQTCyQSxMTFstU4wc+TbZ324TkRGXy+MzpajvHRJkx8+efXtyYv7UcnxYuVJlvSrre+jaz1mJr3V6XZuxkvSrN2fZEnNgrAuP05gQLZsg96NYMb5gx5zbslzwkGI1nL12ZbB5jfbQdRugxWvCYjJV1qYR/s0Jdiw2AstOmP94dxtzyh0RbZsnZoevl0c0b1RILVA1NljVprKEwrvwuyniG3WsernRdQ3OkyqP7Om6Iv5kqUkquV3MKr1ZU6jDG5rq/9HCrWp1WghUYMM5f8RalPMZwj42gall8LSrpSFNEpqIVFVFG4KoVfGABnbnlJ9Sa7HVCLTtGapVAwBGhmMtM44cZ8LdVPO7ZrsM85Ra06W6J7QmpSA7T867KuUTnktWNpybQ6Aioo1AwkTqfIjIg7ZBkEcIibdMJqSOhSsoetPVEV3arRwpUYB2UmEquWqAlTpTchZP5ZP5Zk0XVPow07zUq10Zf5Om9VkYQe1VWakpHiuMbwvGbb2fj8hwz/AH2Rbtd3JKrIgkDMAgZ5SDqBiJA9I1tlPFrTMpYlyjH9L3T+S6NqUjIqO1Oi2mbYe2rkEcZon/dpaB/D/oA1G/maiyqNFIR7dUbTOqJrxbCNA1rPrj0XXvNG7mjTJMvUen+ZWvLLVkjaqszKf07YBtadPXhbldIp6oBSo8XIPf8A6ox1CYzYDeLYwjXP74MlHz2Mb166VNWuaatip0cSA/qcn8R89ZYBQf0qp3znyIE87LGmnO4Wt+hOr73ipSE4UfEzHUrRRgpeNJZsSKNrLuzs2S9sf0Vd6l3ofz2FCMTU6WIkMKrIQKqKAQ2DC0SfaB/TajAytqf4i9IA1aV2pgLToIAEGis6gxO2EFMTvx7zbLopkAAkkwAASSSYAA2kk7OFpSrYmdLjdHquKdNSzEgAeJCgk7BJAniBtt6BfVS5XGqlI+yhXHoalWp+Gz8IQsVGwKNpM8Or3RZufdrIocgVXrKxdaY7yU6VSE/BVX7R8clC9NO9AkHrddzUa6XU/wB9WxMR/s1AQOI/LheqZ/wnW1Ra6W/sXHSZkum7oaSXamYB7AVSI/NVYkTx7NaQ8rVttB/EB8d8qH/DSAA2fgqxHh3rZ82SVaJYzFZWWHnL6WVgC16t08d7uy6jt6Uzu7RZ8Mhb0+/1R/MsJCjFS8Av8qTPAZfvby/q00Xy7RsvFL/uoPDS3pHTyjtyCJDJRJG8MwoEeEYhOzymze7o0wrTofdCcKzIZgHI2qWAhYG1FC08p9idSbV3XSkWodrBhKy0lzBBCUqnakf4u1qlD/ultMvnSiUE7SrnIxFRIao7MVSkkaFiKksCCqoR+YG0zrtcuz6LFMgF6b08WEQMTVMNUgbAXcmPvZqVSS8NF55dUHHx/JL6gR/IUf6qv/5FU2s7xTfErIygoSSrCQSdDIzEQRrmGY6hbVP8PP8AUU/rqj/7jNlt1bTja+Gp8ef3FlJba9x4940vYzl87btARRpzrUSpVRHqKsANQZWGYMGXCgQkhCARLu15pXg0yzw9NmRgy4WZXADUnQiaVXEtNwsQTTUrKk4bdlBGEgEA5Aic9h2556j5WqumegxVIZVGQKwGwsFjMITKldPwninOs2lt8mWSFkG/9BGWwIzQTmFz4THpak6U6FekYemyyO7iWJ2z4g8frbQ3TpWtQIDg1VQxK4kqoNYKDMgSMlxe0MqaYbdlY12XtL1eXyJRagopiX9SvQpd4QVMo8iQTFuqHq5rto5P6WPV1Lkw/wD4FUcgBGJbNUEYnAOyToBq5hVnMjbu+rHQK3WnhkNVfCajCYynCizmUWWzjMktAkAWFyutOkD2ShcUSZLFtAC7sS1SBtYk6gWeTPhyc9Z532ieSWTng6oYlF2AD4c+mdnDn055zsI+XMbsuOm3OxGvI4/X367IN0LtgsSQCxwrxMEx4907hkc9LQel+ig+KtSH4n51EfigZA8KgAGf5gADmAVPSh712XIlq+kbFu9d59VUeE+Np61OfPnmbTGTUtE3szFGoGAI92/aPH5xlss4jf8APfltmZ3Ws+nOj5m8UwSwE1UUE4wPzgAe2AMx+YZ5kCa1GBzBkZbddvzOfH16oyUlaNou0MYxl48JOh+XwtW9Y+gxe6ap2mB6ZZkmChJVQQ4USB3faGYk5G1keG7XP52Ct9vcB4WcoqSpilFSVGA6D6qVHrvTvCtSp0DNcjM4cOIJTicb1F9nDOWYmQDubpSSirvUVUn8Sqq6U6dNDhooRqtOmpUayxY7bSKQaYSTLs0jIyxkezphXCg/woNxFud+6Nd0qUuyqFWUKxQ0wcOMFoFR0wlkBGsd63O4dG5c1ow6VDb5PJL3e2qu9V/adi7RpiYlj5ScrbP+H/QeGL1UUYjlQB3Ewap96r5tsU2qejerbPfKlOtTalTpMWqiPZUy1NMakqmMQAxaAMRBMZ76qVcQChRl/JGEUYVYUqYhhFNRxZh/ZmIhTM4o4rWOTiRiIddhVAMNPWMPchyNjVHtR0rsp6TmngXsbtjIIYJiqArAC/2UisDIUgHEcJJM3dV5JJzJk/XgMiNloFwB/m788HS7KMtfwZOn9Kn6W2yQVRj7mko8IyHXmof5yqMJX2DBIOtKmAQVJBBCyOB0ByFGbaD+IVKL4zTONFI4BMVGOP8AZz52z59Lc9mbGTzlZWd52VgR3ud67OpTqfodX/5WDfK3rvWhaaHtXbDTWnUV2GxQ5iM83PagKN5HjbxzZHut6LdL+19S71KqnsKKqqo0fj3lKarUqtGRRAVy2k7iwFK7pdy8cmnS7h6v3F71e6d5vNPC+Om1KkNKVJMdbGw1JZ1Vc/8AbFv0xq+u2dwvE591CdulamSfERaP1bozWrViZJWlTJ2liO0cknUmn/Lzbt10P+gV4/Snqa1MRnrzvySjVlV0xkcf4d/6kv8AvKkzGUOQfeCfO1/7vdx58rU/USnhuNDj2jD/ADVqjDXgwz+trgD4c8z87W9tsePUEGdnzHnPOVliz555Nkeff8I4bcrKfjHI4/XdZFDL1dlqCGB0yIyIGeUjOPa25AnSSbV//h9UPSBYPTWoHnuoyEKwBAKklYcg94kycwDFrP4fL5aZR9rInkevOyyoXSgRz4c7d/GxXnkc+6yPp9vp8c7Lnbw55JsyhTzPPI4WXPO3yO6wnnnwHpYz8Pdr8MvD3AESspa8J+mnSqM3B6jCnTicgcC1/UWlHn6cNg87Fm5+PhzrYfX3c8iySEkOp1I0Jy0PgOOmvrNqrpu4YCaqDuE/iL+gzBdf8B2jYdsHKzUjLEYA1MaD9iY/c26CoQTO8yNnHKIOU5ePlUZOLtDTp6MyGkc8deGnJFmkc/toNOTbr0rc+wfL+yc9zP2Tq1M+ABK8Af0k2Yr8WHEQCM9QWBjLKYkTkRqOlStWjTqtWil6zdP0bvhR+zqFh3qbUTUBAaQcRqomHSO62c57sxV6YvDkml0fdgkyIuKN3TpJZGG0W2NK6UqTs1Kn+IzS1ZpeoxxfrbNdIyjiTmT1N4fCWLkIDmWeFB2gsxAnz3TbneGUvmkzmlF8yMevWfpK7gGpSIpqAAKlBqaiNMJQJggZQpA0yJztKuHXqizE1aLUXeMdWg0ydJZXzdRIhXaoojJdLXdLpOmD3LxRDHLu3imJyj9Qm0fpfoKlWzq0sLtOGqgCMc8zkMNUf1DZ7S6lfCf/AJaZFeGWl0rU61PtqdRXpznUSQFOsVqZzpZZ4vZ9olaaiRxutGK16kZ9rSn/AC3enHuY2w1e53no6qtelUymFqLo35sFRT7LZThO6VJiRq+rPS1O8i8VAFpkmmz0tlMil2bVFzzoymYPsSPygmyU2pJS7FKW1ZR/xGoCaFUT3nvKn/LeXZfc59LZRj8Leh9ebiWuj5d6lW7Tbo1R1YetRSf6bedg2zqmQxuHgbKxjhz6WVqEOVsojnnnfsOoV8DTdie8SXpbpOEVVg7YRXH9L7xOPTn5273CialWnTQkM9RFUgwQWYKCPM/CztraHFuLtHtfQS/gI2oqTVnTu1O9TniKPZLt9n0rv4k3oJco2vVTdouKr6fhD3WvQBJCxhGS8FGQAnhA8uFs71hT+Y6Ru11zKUQKtYTvwuVb/KlJf+MfN/8AGjbJqNGj6JunY0KNE606VNDxZUAbT/F8bSAOc9x3Zc7bFiTmdTJ25n5nX378wPrv18d51+thFJVoP25+Gthz9uI3DhZH4+/PPX57LEcnz47fEzO6wMUc8jjpyEfjwPPpvsiYz5+329UMvlt1z25+X3sBQjwnb89vp52U8+OzZrp5+NkR++cbt3PnFgDPJO7jrO37WY6FPPzMedgR7/lwOX38LOA9MvrPjYfbkH1sgBOzndnPwAshzHEec++y5yz9wy3WAHj8NnzAsxHKvSJNM4yopuGIAUioNQrTmIYZQd4Mybdp4667c8tp8Z87CePz0PPzsiePM+7Q5WEINeitVDTqCVYQQDmDqCu4gwQdhi2TvWOmzUX9tdokBlOauo3EbJyMiQRbVKdBv53Dfat61VKa0O2dQaiECkJ9p2/ujtKHNjuCltQRZwn0sL6TKdOdMJdliFaswlUOiLGTOAdojCsydTC+1gukr9UrtjquztsLflG5QAFQcAALW9G5Nea9THVwgK1WrVeclWMTQB3mJKgKBmSoGWY5dBNcRUqG9is1ID8JKeFWqGYHaMW7oj9JO3OBm8nuYTk29mfK2s+gun6t2bunFSJ79InuNxA/K+WTjMRtEi1pS6ufzdMvdBRNRZLXdKrtVw7xTqoC8TmUZgZ0m2ZII1BB47PG2N2SeoUa9OtSDr+JRqgyr5Aic6brsZDtGhCsuoNsV050a9zrLUpM3ZsZpviZSIgtSdkIIYSASCJBBymBP/h/fD+NSPs4BUHBldKbR4q+f9C20HSFw/mKL0MizCaemVVQSmv6pKTuadmW7j8SHV3RXKJnRD3etRwU3JpVFeUZ2d6SsmCpTJbOUABXYy6TgJPl94uzU3em4AZGZGg5AqSp941toepHT/ZLVokzi/EoqZI7dVyG4K0KGLd3CrAkAmzOuvQqUDRYP2jVA/asSTjqrhZ6in9LGoIjYs7bc9sTM72n9PoLGyjjZWdhQo8OeRa86hXfF0hdg2gq4jl/s1apof6bUajLO2g/h0G/8RoYQC34sAnCCexqamDhHkbDehLk9Wv3SNO7UzVqGAAxAOcwO8dRIEgcSyrq1q/qZcnwVL1eFiteTjKnVKf92kDaciduFUBzFo9Po7+aqdrUqdpQUjDlhW8MswESe7dUaYBJNRpJJERpcckyZnz/AH1tV9Wzob6nY8nnjt18v21Mc8jXndYA+u/k57Tzmhu+HPEbveRaiwjw58vIWSnjzkPhFkQefPnwNjz8R5eHA2QC9Od3uFkD48+vO6y8LA+6PdzzNgA5eM7vLP38fhZl4rKi4nOFZjixzyA2n7zbp9OHH58i1Df6y17y12Dyw7tSCR2VDs1d2/qqdoqKRoWJ/u4srS5BtLku6VTEiuAQGAYSAMjv1G0aH6kg/Pfns587Gow2eg9PSMvLdZoPnz7stbNBYSOc9d8xl67Tus0DhydYy+xsRlz5cjbZTz7s7MAH97I86cN/7ZjzBPHn66DkWWKMzsk/X3SfOwIB151Ek7fvbO9fpIpKPZC1GjexKIpndgFVeOM77WtXpFkMmi/ZYivaBhJKsVbDTBLFQ0iciYOFW1PDrDTDmi4IZHp1EkaMxCVkIO406dcg7ZGelhNdS+pPUtM8uvV2Iz45ZfPQ6m1LfFIMcLbXpC5lZyjj4TGfnPlak6Q6OnZHJPOnnbuy4XKPynFL1EHOil6M6SqUKi1aTFalM4lYbCPiCMiNoMWuv4k0KadJXoUiMJqYsthdFqOPJ2YWqmuZU6aT9PW3KpSiAB5ac/vbheJp2zVOy66gL+PVP6aLH1q01z/5vhbXhs8siCPLM58D9PG0HoPopKCOUbH2pVQ0+0tIYXYEfkar2hH+FFPjLp88xB008LdPp4/Jb7jRjul2a79Iu1NjTIqh1YR3BUAfRu6QFYiDlGRtp+ufQb3hMWJDWoK3cQv+IJLuMDYsDjPR3DQQIytl+vq/6XU3dnSz3/goLeidIU6oDBnC1TiXGDKKxnFUp4hiOUkUy0hsAjAMZ40lbQ0eO5bx7rG2/wD/ACdcN14/5x//ABsbHRPwPpfgwnvtadUGX+duwcBkaoEYHQip+GQRtU4swciJmZItWrzwsadVkYOvtIQynipke8WK0Qe94zlM7B7jHkB4Weh2Z7Pllbirq8OsFXCupG0OuIH0YaW6rz8fhzlbTto6+x1Hlv154WIOUfcfHPL4GzQefmCfDw87Onnk8fGyAUeWg/beBmct26x589N3gLDnw5j3eVkD+/unn72ACT4c/v8AGyE/XZszs2OTu8+Jmyjyy8PnkZ99gQ4fb4eX7G0K5dGrTq16wMvWZC0iIFOkKaqc8++HOzUbRaZzu2fIfDZYk6zz6jn0tLVg1YG+fy55iBsjhw4/TWx5+W308hvEo+7jHADz+1qGFtfpl6H0sDzrHw4nd7hZc+oM86WBj7+R++h3562AATx53bctm71sioORAIMgg7Qdh4EE2RPOvjA9Blxss+fDZ6WBFXeLhVRYT8WmueEk41iT3SBLakkrmdiFizGPdOlMKMCva0lIYkiHpDFMtgxBlDgsKigQwIYrhZheq8c8mZ8xbherotQ45NOoMxVWQZOWce1oo1BMYZIGEw4tcGcoutFPWudKqqlQM4h8RAYESuU4F35GGxSCRBNd0t1OvFOmz9niUAsSueWs5a5TmLWhuj0n7oWm5nEv91WkzIAA7Mk5nCACSZRWMjtdulsQZRXrXfKHouKeFJJWZKSoJBAbHDGcOLW20PVZII5Z+mhLbRgK9wJMYTu01mMo+m+zrh1ZxvNSRTU94g5swJBRCNsxJ0X+qFO6vnQSrRqVhUZytMuAMCqwTvsPw1DMGQHIsVJjI7aTtCYzmIAGQgDIKAMgBoAMhbb4nxDoUFVIbeCDAgBRAAGSgKIVV3AZAeGWcWbRpEwuUnjplmTnkNpz0Gu2yaOYE/UT87VfWa8VcNO7UFZqtdTiCkz2cgYVG5s5cwIDDTEbVkmoRE1Rnb2f52+kICVq1AF0BNNAFB70AN2aTnttvumL0lFGvFQgj9Kd0VapzK0xqoY987VBzk61nV3oCndab1qhxVBTYPJ7i0u8tQsYOFCYVWgs5Q4FcNFsp1i6Xa81sZJwgQg2KuuSyQpJzObcWbNjxQk03XIlKix/88Xv9F3/APkj62Vs7J/R7j9bK1b8h1PycV0s5eecosF55FnroPD97CQj13qDfe2uNEznTDUm/wCGe5P/AA2p58DbQKOfr6fHdA87/hJ0lhetdicqgFRNPbpg4gOJpmfBDb0QDn4Ae6xHWjoxu4jlPP7bftvycDlt047vdzvNmoeO7bu89k62I9fj7uc+GTGOHO2fT4/SynnwsgOfM5cdo4Z6bD9Z+8c+tkA0868Pp8PMn6+s6ellz9zprnoLD052eFgB3M7CM492e2wH0+P0+dgOfPbztsgefgPd8LAxE8+EbNZjL7RZDn3cOdNtkvD58OechPPOz0sAGeOzx3fQ8DnxsdvO8a+8WbPPln8t/rZE687N3kffZgIc8fdnkPjwsOdN3lpnZR8R6z+/p6D7fb52AFPPw4yPkfNBo2/DdM8eTYNz6bNm6wY885zYANZFdSjAFTsPHcZBGpz4kbYtVdMdGL+HUl1CYlxU4Dp2hXvrgEs0gGNHJIIOJUa0HPD7WIzBEAgiCCJBBGYI2yIEHfaXHwS0Ze6XmvRpMKr0agq0qiTRgKzGi4NQoMgRUwIWSFbtFkBlFoy0TA00+WXz0ytY9LsrVewor3aZIaCWNSqT3hJksKYOEZkBmcR3RaKscGzzwkBQRMhqmYyIIIQOwylRqdsNQjb7kRpBS6+4Ek6CM5JOgAB1OmVu9EnOIAwmXgL3AxaRiEdmCWOOqMG0K4OK0XpC+06SdpWcKkiDhyLBpHZ0ySalQZHExaIkdnNsR091kqXiUWUoSDgJlqhGeKqfzZ54R3Rlqe8Vkm3r9+5MmTOuHWMVooUD+ApBJz/Gf9RLd5gNmIyxhj+ULmyPPj5ixB554W4l7Z6RAMHAellZuLh7hZWXUBf1uiRVvz3eiMCo7JLd7AtPuvUY7c1Y8SVGUi0y99R6ozo1KdUaw34THKQIYlOPtm1n0J0f2N5vkxLYXpk/movVYkjwfs1bc3ha4BkxIE6k5ARMkk7MiSfO2mPGpRtsqMLWzDdH3a83at25o1EN2w1XDArKdqtMgGIYNjK5ZESZyNvZ0dWUMhxI6hkbM4kIxKfQzrbMXq69rRqpBDVqTqoIzAwN2Ckag4mLkHR6lQaKLcf4UdL9tdTRYy13O3/ZPLIfFWxrwGAbrZ7Ttjh8sq8muz3bvdlpzp6On0555g8wfD66/GI22cp+GXw+B50tRuOO/k+Ofhbj0iaypioKjup/s2kdoNMKuD3H3SCCcozBHWduf33Tnlp7t+Tw/j6n37vH6WlqyZK0VVy6yU2KpVVqDNkhf+zqGYIp1YAxAiMLBGnKJEWtqiRkeI+0fLjaNfuj0qB4Ck1Ixo4OCoRENUUaPh7vaL3owziCgCo6Mvj3Zhd7wSKTQtF3aTTOgpmrktamY7pyZcgyqCMMp1ySnXJfMeeNkTrGceHv3Z5WLzmPdzppFmM3zzOWonyyn42ssJ52cdNms85g87Y9/PrZE6+fwGUDZn791gTyPlpOUbfhZgEn05y9J+Pg0x46fD9rL7/E/TQbjlYYvnu8M+OzmLA6EeeY+P0sp5+m7Q++wJ2c8M/SwGznh8rMBe7w5y0Pw8EF5+Fm1HCqWZgqqJZmIULEZsTAA4nhbiK7v/ZJA/2tUELtEpTyqVd+eBTMh2ytLkkJySJDEBSxKhVnEzGFURmWY5AazMbbV976bAUihLMQIqE4UWfzKSC1RoMqVRkmO9bh0pWWm2GTXvAIIaoAy0CZgpTAwJVwnIBcQEFicg2d6U6Wo0GYVWLVST+EnfqsxM98n2SZzxZ55KbNRtXJ0vyQ350iwo0QQEjGIjDHdYQZlMTF9s9q1TQnK1R071up0JVCteqBGTfhp/Uw9qNMCGP8QiDHvNC+3sFakXOg2qZl3GcYlyd9NHwJpFonSCXW5A06S9tecpqVYbsNPZT2BUy0IJTaZyBKTS+VV792ZuXgz17vtW8P2lZy7RA3KNiqoyVc9AOOtubVI00n5fawq1tePnrGvH367bcQ202i6JCW5mzJsnM2EWlsdDfOxs3zsrK0FHrQqGNg8YyxawfygxnvjPSz7tSxHMd2Az8V/Kp3F2GYzBVKgPtC3NQMpmBBgakkgKFn8zMQg3lgN9pfsrhynViNMUAd3LNFAVF24VUnMm3fPb6V9zeux0pV4YNtBBjfBDe/K2F6Cvg6P6TcHu0lqvSqf7pm7rf5Rgf/AC22Kvn5/Y5bfv6Yz+Il1i8LV2VqSkmfzoOzYf8AKqE/1C2WaPBGVUkz1xlIMHUSJ19N+g91gD8NSfvrzstnf4f9Mm8XRQxmpRw03zzKgfhNrtVSvih32vg0ZciPtznbNbRpF2rOp28/vsHrYzzzzrZmLx+eWh4ZTYzz479mp99gBwfny0Hu+dhWVXUo6q6EQysMSkbjIgjy3WBP12+OQ2+HrOdhPhzv/fSLFWDDTQIoUTCiBLFiANO8xJMAga7s7OB3ZeHIIGeu6zJ51z0sMXMczYoB3Pvkc8kT8N/Eeug8vGwY67f28fDLhYF9c+fTLX9rOhjp5+2z557QLCfhz9PL1Zin4z8Z+fy2obyQoAkkmAAJkknQACSeGdjgVjgJMATOm3bI4k6W4G9kkikBUIMM5J7NSDBBYSajgzK0wQCIYoTZz0sYJOJaYzKzgLgCZrTBpof0ZEj24BKCs6d613a6qAzdq5AwUqWWIaLBAGFMyJAwkezOYtDlf0Icv8FnQuMsGYmq65qWyVI200nDS1PeMvE98ibUPTnXSkh7K7lq1YzIoDESduFohc/zAMw/SPatS9INe76f9MqG7UJkXWlkzDWak6HjUk6wgFpF1o06S4KVNaa5AhZJeP1u3ebbkYA2AWrHjlLhUiOp9iMt3vFQRVqi7UzM0qBxVGBOfaVjIWcicJIO1RaT0Xc6dGFoUghMDEoLOZifxM2z3LA4WTuArOxVUWMTk5CRpOpY/pAJO46WzHT3WgsGp0ZWmRDMfbqjbOf4dM/oBk54ifZGslDHztidIsOnusfZzSoMDU0aqpkIc5FMg95/8ei/lzgjHO8ZDPjvtzL85WRtzzm5O2II1s2bCbG2bYCFlYDhYWAFj4WVnYR+r3/eystgew3YQS36DAzH9oJR20nuZoJ/MauXdU251X/b7b9PqbPJEAAQAAoAEAAAAADZAA+9o5PPPjzJt6UI1zydKVC7SDM+m4TBz3xv4bCbVXXa6dpdcYiaDh8v0OQjx4HsTwAtY1H58hv2QB6DeYNN1YMrgsjqyMBqUZcLRxAOWmcWMkOqNCmrVGN6j9Oi63lWYxSqA06s7FYgh4/wNDeAYbbes1u6Y3GN/hbxHpK5tQqvSfNkMTsYaqw4FSGHA29E6gdPdvdxRY/i0FAH+KiO6pHFJCEbsB325Yvf1MISrRqRV8dPTL6izhVHDjGgiB5Z8fnMPFzO6OZ/ezsWX30jz3+XHbbXpNrJoqDnb9bAVNOec8rRQ3OXj7xyLPH7z7+TvHmnEDuX8p38x6QPKwL8+YP28rCnd2IkA+IG3ifX3Wh3npO70iRUr0wRlCnG3gVphm032WgtEwPPM7tvushMc/Tnw0pbx1spD+yo1ah3vFNYOZj2n02FQT62g1+nby/5xSG6kIMZZGo5LzE5qVtShJ9hda7GnvVVKcdq6oT7Kse839KCWPiB6bKq99LlmQ0lDKO8oqaMwzWrUUMJhRiVSwCiHYFsKpn1VQKjOYCjFVqOZGcAYmJLNM6SS2SwcZivqVHvoIl6Nzxd4n+0vLKZO8ASAc5VTmcbAC0Tik65fgzlPyS7909WvDtToVBVNPN7xUyo0AATNNAMJbIw5UsYOEGMVu9w6Kp3f8TvtWYkmvU9tmBh+zOfZkGZBOOcmYTAazqEFNB2dIeyiSIzEmTmWJEFicR9Lcr/AHtUUVK1QIuZWQJY7TTpjUzqQAJAki1fCr5ptfvgn3JPazkBrkAM59NddM4yzMAmD0v0xToSrHtKmnZqdDOlVxpt7gltnd1tEo17xepW7IaNEkg1mnE4zkAqJO4pT/zMQZsBXulxHcbHWG1YNScwe8Jp3ccFxONs2UszaqOl5CzneLhUqTeL/UNGlT0pKBjlswlNDlTLZ+1LZEkEAtbL3qsHYsqBAdFEmBEDM5scsydTNpXTPTD1yJAREySmswukkk5s5AEsdwAgAC1eLcrduwoMWRNgTZrWBscDYTYGwsCsNhNlNgbAh+KytziysAexfo8Dbk+i+HzWxsren3OsYNv9Xztwfn0NlZWokynXj/Wv+DS/7Vu38Ov/AGhQ8Kv/AGKtlZW85/7OY9Jvmn+T5Cwp6/5l+BsLK3X2Nh7+yfBfna36I9tOd9lZWzlwxvgw38V/7UeJ/wCo2qLh7Hl/+9lZWMRl3Jn5R4NZr+0f6h/0pZWVusEV/W//AFR//Wp/2HtaU/7G6/8ApqX/AE2VlbkX/exS5Ii6t/U/xa2c6/f69X8U/wC0tlZWfquEC4Nf0j/7H/8Ah6H/AEG3mi6c8LKytyvj7CQ47fKwXWysrQWJufUWafy+FlZWBMJsNnO+ysrMkG+zWsrKwLsCysrKwI//2Q==",
    artists: ["35 canciones"],
  },
  {
    id: "9",
    albumId: 9,
    title: "Samantha Playlist",
    color: colors.pink,
    cover: "https://i.ytimg.com/vi/i5zR6toPVQ8/maxresdefault.jpg",
    artists: ["40 canciones"],
  },
  {
    id: "10",
    albumId: 10,
    title: "Brandon Playlist 3",
    color: colors.blue,
    cover: "https://i.ytimg.com/vi/j3xbO5zPj4g/sddefault.jpg",
    artists: ["38 canciones - Brandon"],
  },
  {
    id: "11",
    albumId: 11,
    title: "Para ti Samantha",
    color: colors.green,
    cover:
      "https://www.lavoz.com.ar/resizer/usKssn9B43kU-4PdTs_km7-Qqdo=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/WGZ6GVIC2RFGZI4XP3MDZ46YI4.jpg",
    artists: ["Hecho para ti - Samantha"],
  },
  {
    id: "12",
    albumId: 12,
    title: "Brandon Playlist 4",
    color: colors.blue,
    cover:
      "https://i1.sndcdn.com/artworks-gxXwqOh40uEMqYCZ-lWg9Bg-t500x500.jpg",
    artists: ["Hecho para ti - Brandon"],
  },
  {
    id: "13",
    albumId: 13,
    title: "Electronica",
    color: colors.blue,
    cover:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electronic-music-album-cover-template-design-12b51a1ad56ef5851bc8068dd8c79aaf_screen.jpg?ts=1599075720",
    artists: ["Los mejores hits de electronica"],
  },
  {
    id: "14",
    albumId: 14,
    title: "Fiestera",
    color: colors.blue,
    cover:
      "https://i.pinimg.com/564x/77/96/86/779686fe5e9ec6dbff0d24aec7238603.jpg",
    artists: ["Disfruta la fiesta con estas canciones"],
  },
  {
    id: "15",
    albumId: 15,
    title: "Emyli Playlist",
    color: colors.pink,
    cover:
      "https://e1.pxfuel.com/desktop-wallpaper/412/93/desktop-wallpaper-fondos-de-pantalla-de-zelda-zelda-pc.jpg",
    artists: ["Hecho para ti - Emily"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}));

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}));

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

export const musics = [
  ...song1,
  ...song2,
  ...song3,
  ...song4,
  ...song5,
  ...song6,
  ...song7,
  ...song8,
  ...song9,
  ...song10,
  ...song11,
  ...song12,
  ...song13,
];

export const songs = musics;
