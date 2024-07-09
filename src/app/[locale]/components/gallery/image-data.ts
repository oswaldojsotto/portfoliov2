function getPaths(basePath: string, pics: number) {
  const paths = [];

  for (let i = 1; i <= pics; i++) {
      paths.push(`${basePath}${i}.png`);
  }

  return paths;
}



const movieTrailersData = {
  count: 5,
  role: "Design & Development",
  location: "Caracas, Venezuela © 2022",
  imagesArray: getPaths("/projects/movie-trailers/", 5),
} 
const sevenSuiteData = {
  count: 7,
  role: "Development",
  location: "San Jose, Costa Rica © 2022-2024",
  imagesArray: getPaths("/projects/seven-suite/", 7),
} 
const blockchainAppData = {
  count: 4,
  role: "Design & Development",
  location: "Sao Paulo, Brazil © 2024",
  imagesArray: getPaths("/projects/blockchain-app/", 4),
} 
const nextAuthData = {
  count: 5,
  role: "Design & Development",
  location: "Caracas, Venezuela © 2024",
  imagesArray: getPaths("/projects/next-auth/", 5),
} 
const shopData = {
  count: 5,
  role: "Design & Development",
  location: "Caracas, Venezuela © 2022",
  imagesArray: getPaths("/projects/shop-app/", 5),
} 
  
  export { movieTrailersData, sevenSuiteData, blockchainAppData, nextAuthData, shopData }