import { observable } from "mobx";
class CarsStore {
  @observable caritems = [
    {
      id: 1,
      make: "Alfa Romeo",
      model: "156",
    },
    {
      id: 2,
      make: "Alfa Romeo",
      model: "159",
    },
    {
      id: 3,
      make: "Alfa Romeo",
      model: "Giulietta",
    },
    {
      id: 4,
      make: "Alfa Romeo",
      model: "Giulia",
    },
    {
      id: 5,
      make: "Alfa Romeo",
      model: "MiTo",
    },
    {
      id: 6,
      make: "BMW",
      model: "series 1",
    },
    {
      id: 7,
      make: "BMW",
      model: "series 3",
    },
    {
      id: 8,
      make: "BMW",
      model: "series 4",
    },
    {
      id: 9,
      make: "BMW",
      model: "series 5",
    },
    {
      id: 10,
      make: "BMW",
      model: "series 7",
    },
  ];
}

export default new CarsStore();
