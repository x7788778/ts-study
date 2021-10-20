namespace Home {
    //暴露出口
    export class Page {
      constructor() {
        new Components.Header();
        new Components.Content();
        new Components.Footer();
      }
    }
}