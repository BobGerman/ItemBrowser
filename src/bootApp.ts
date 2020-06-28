
export class bootstrapper {

  public onInit(): void {

    const workspace = document.getElementById('spaContainer');

    if (workspace) {

      workspace.innerText = "Hello, world";
      // const service = ReManagerServiceFactory.getService(false);
      // service.getReProperties(tenant, clientId, resourceId, endpointUrl)
      //   .then ((data: IReProperty[]) => {
      //     ComponentManager.render(workspace, workspace, data);
      //   })
      //   .catch ((error: string) => {
      //     console.log(`Error in CustomHeaderFooterApplicationCustomizer: ${error}`);
      //   });
  
    } else {

      // The elemement we want to attach to is missing
      console.log('Error in CustomHeaderFooterApplicationCustomizer: Unable to find element to attach header and footer');
      
    }
  }
}

// In-line code starts here
(() => {
  let b = new bootstrapper();
  b.onInit();  
})();
