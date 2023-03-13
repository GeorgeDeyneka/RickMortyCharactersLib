export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

interface IOrigin extends IObject {}

interface ILocation extends IObject {}

interface IObject {
  name: string;
  url: string;
}
