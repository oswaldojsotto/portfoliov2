function getPaths(basePath: string, pics: number) {
  const paths = [];

  for (let i = 1; i <= pics; i++) {
      paths.push(`${basePath}${i}.png`);
  }

  return paths;
}



const movieTrailersData = {
  count: 5,
  role: 2,
  location: "Caracas, Venezuela © 2022",
  imagesArray: getPaths("/projects/movie-trailers/", 5),
  url: "https://oswaldojsotto.github.io/moviesapp/",
} 
const sevenSuiteData = {
  count: 7,
  role: 1,
  location: "San Jose, Costa Rica © 2022-2024",
  imagesArray: getPaths("/projects/seven-suite/", 7),
  url: "https://sandbox.sevensuite.app/",
} 
const blockchainAppData = {
  count: 4,
  role: 2,
  location: "Sao Paulo, Brazil © 2024",
  imagesArray: getPaths("/projects/blockchain-app/", 4),
  url: "https://blockchainapp-eta.vercel.app/",
} 
const nextAuthData = {
  count: 5,
  role: 2,
  location: "Caracas, Venezuela © 2024",
  imagesArray: getPaths("/projects/next-auth/", 5),
  url: "https://www.next-authorization.xyz/",
} 
const shopData = {
  count: 5,
  role: 2,
  location: "Caracas, Venezuela © 2022",
  imagesArray: getPaths("/projects/shop-app/", 5),
  url: "https://oswaldojsotto.github.io/store/",
} 
  
  export { movieTrailersData, sevenSuiteData, blockchainAppData, nextAuthData, shopData }