export default ({ app }, inject) => {
  inject('basePath', ()=>{
    return '/fgo-scenes/'
  })
}