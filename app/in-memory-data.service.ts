import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Wolfgang Dietersdorfer'},
      {id: 12, name: 'Britta Ketchup'},
      {id: 13, name: 'Emily Haube'},
      {id: 14, name: 'Jumbi the ney'},
      {id: 15, name: 'Magneta'},
      //{id: 16, name: 'RubberMan'},
      //{id: 17, name: 'Dynama'},
      //{id: 18, name: 'Dr IQ'},
      //{id: 19, name: 'Magma'},
      //{id: 20, name: 'Tornado'}
    ];
    return {heroes};
  }
}