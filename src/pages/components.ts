
    /**
     * 命名空间  namespace
     * 命名空间也支持子命名空间，嵌套
     * 目前多用import，export
     */
      
     namespace Components {
        export class Header {
            constructor() {
              const elem = document.createElement("div");
              elem.innerText = "This is Header";
              document.body.appendChild(elem);
            }
          }
          
          export class Content {
            constructor() {
              const elem = document.createElement("div");
              elem.innerText = "This is Content";
              document.body.appendChild(elem);
            }
          }
          
          export class Footer {
            constructor() {
              const elem = document.createElement("div");
              elem.innerText = "This is Footer";
              document.body.appendChild(elem);
            }
          }
    }
     
     