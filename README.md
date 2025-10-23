# Aplikacja webowa 
Celem zadania jest przygotowanie aplikacji z wykorzystaniem Reacta. 
Twoja aplikacja będzie częścią sklepu z owocami, na wejściu dostaniesz JSONa z owocami, na wyjściu generujesz JSONa z zamówieniem. 
W katalogu  jest plik JSON opisujący owoce, w katalogu img grafiki: 
{id:1,typ:"gruszka",odmiana:"pospolita",grafika:"Pospolita",opis:"Najczęściej występująca gruszka w Polsce", sztuk:21, cena:7.55} 
{id:2,typ:"gruszka",odmiana:"Radana",grafika:"Radaba",opis:"odmiana uprawna (kultywar) gruszy należąca do grupy grusz zachodnich otrzymanych w Czechach", sztuk:12, cena:6.50} 
…
{id:9,typ:"śliwka",odmiana:"Kalifornijska",grafika:"Kalifornijska",opis:"Granatowe, wydłużone, przy szypułce zwężone, czasem elipsoidalne lub jajowate, miąższ zwięzły, aromatyczny, winnosłodki, dobrze odchodzi od pestki", sztuk:13, cena:9.43} 
 
## Zadanie: 
- Przygotuj komponent wyświetlający wszystkie owoce, wyświetl je za pomocą funkcji map()
- Użyj bootstrapa (pobierz i zainstaluj) do stylizacji elementów komponentu, przygotuj aplikację responsywną
- Dodaj trzy checkboxy, pozwalające na wybranie: jabłek, gruszek, śliwek. Domyślnie wybrane są wszystkie
- Dodaj przycisk: "do koszyka", po kliknięciu odejmowana jest liczba elementów
- Dodaj przycisk: "pokaż koszyk", po kliknieciu do logu ma być zapisany JSON opisujący jaki produkt jest w koszyki i ile sztuk, przykład: 
