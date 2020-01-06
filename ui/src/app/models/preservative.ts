export class Preservative {

  name: String;

  description: String;

  type: String;

  expirationDate: String;

  _links: Map<String, Map<String, String>>;

  getSelfLink() : String {
    return this._links.get('self').get('href')
  }
}
