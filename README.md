# .NET MVC Identity + API + Nuxt-frontend
av Dennis Kjellin, dekj2100@student.miun.se
Projektuppgift för kursen Webbutveckling med .NET, Mittunivesitetet Sundsvall.

## Info - MVC applikation
Projektet är ett MVC projekt som är skapat i ASP .NET med Entity Framework med Identity. MVC applikation är tänkt att hantera produkter & kategorier mer CRUD funltionalitet. Det går även att skapa konton och logga in för att hantera just detta. MVC applikationens grundstyling har gjorts om med Bootstrap och har därmed skapat ett gränssnitt som jag tycker passar bra. Frontend delen kommer att göras i Nuxt.js och kommer sedan att konsumera API:delen och dess data för att skriva ut produkter till skärmen, alla produkter är lagrade i en SQLite databas.

## För att klona repot:
"git clone https://github.com/denniskjellin/Webshop.git"

## Delar
MVC-webbplats med Identity och dess API-controllers som är placerat i mappen 'backend' startas upp med följande kommando i terminalen (stå i mappen backend):
```sh
dotnet run
```
### Registrera/Logga in
Skapa sedan ett konto och logga in för att administrera produkter & kategorier.

## API endpoints
### Product
| Metod | Ändpunkt | Beskrivning |
| :---         | :---           | :---          |
| GET   |   /api/products    |  Hämta produkter  | 
| GET   |   /api/products/{id}    |  Hämta produkt med ID  | 
| POST   |   /api/product    |  Skapa produkt  | 
| PUT   |   /api/product/{id}    |  Uppdatera produkt  | 
| DELETE   |   /api/product/{id}    |  Radera produkt  | 


### JSON Struktur

```
{
  "title" : "Add title",
  "description" : "Product description",
  "price" : 399,
  "isHighlighted" : true/false (bool),
  "CategoryId" : 1
}
```