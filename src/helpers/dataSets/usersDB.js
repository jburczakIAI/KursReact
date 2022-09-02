// Task 1
// Wyświetl listę userów w tabeli
// Lista powinna pokazywać:
// Imię, nazwisko, wynagordzenie, umiejętności wypisane w formie listy punktowanej

// Task 2
// Dodaj mozliwość dodawania nowych userów do tabeli
// Wykonaj formularz, który:
// Będzie zbierał informacje - imie, nazwisko, wynagrodzenie, skillsy
// Skillsy muszą posiadać mozliwość podania nazwy skilla i jego wartości
// Po kliknięciu w przycisk wysyłania danych lista powinna się zaktualizować o nowy rekord

// Task 3
// Dodaj mozliwość usuwania rekordów z listy userów
// Opcjonalnie: Dobrze by było gdyby user musiał potwierdzić usunięcie rekordu

// ==========

// Task 4
// Przy uycia hooka useEffect przygotuj mechanizm sumowania wypłat, skillów (ile mamy userów np. znających php, ile js etc.)
// Wyświetl ponizej tabeli podsumowanie obliczen

// Task 5
// Dodaj mechanizm edycji istniejącego rekordu

// Task 6
// Dodaj przycisk do czyszczenia całej listy
// Must have - alert

// Task 7
// Dodaj mozliwosc sortowania tablicy po wypłacie rosnąco / malejąco / wyłaczenie

export const usersDB = [
  {
    name: "Bartosz",
    surname: "Władyka",
    skills: {
      php: 4,
      js: 6,
    },
    salary: 2800,
  },
  {
    name: "Patryk",
    surname: "Kubicki",
    skills: {
      php: 8,
      js: 2,
    },
    salary: 2300,
  },
  {
    name: "Jędrzej",
    surname: "Burczak",
    skills: {
      php: 3,
      js: 7,
    },
    salary: 1000,
  },
  {
    name: "Karol",
    surname: "Jezierski",
    skills: {
      php: 2,
      js: 8,
    },
    salary: 2500,
  },
  {
    name: "Piotr",
    surname: "Kozera",
    skills: {
      php: 6,
      js: 6,
    },
    salary: 2100,
  },
  {
    name: "Grzegorz",
    surname: "Szukalski",
    skills: {
      php: 10,
      system: 10,
      js: 2,
    },
    salary: 25000,
  },
  {
    name: "Piotr",
    surname: "Piska",
    skills: {
      php: 2,
      js: 10,
      ts: 10,
    },
    salary: 15000,
  },
];
