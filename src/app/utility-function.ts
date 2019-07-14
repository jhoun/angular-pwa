export async function getHomeWorld(data: any, allPlanetData: any, backendService: any) {
  if(data.homeworld){
    let planetData: any = await backendService.getDynamicPageUrl(data.homeworld)
    allPlanetData.push(planetData);
  }
}