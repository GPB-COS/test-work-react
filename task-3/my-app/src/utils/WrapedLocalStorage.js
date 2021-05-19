class WrapedLocalStorage 
{
  constructor()
  { }

  getItem(key)
  {
    const data   =  window.localStorage.getItem(key);
    const parsed = JSON.parse(data);

    console.log(key, parsed, data);

    return parsed;
  }

  setItem(key, storage)
  {
    window.localStorage.setItem(key, JSON.stringify(storage));
  }

  removeItem(key)
  {
    window.localStorage.removeItem(key);
  }

  clear()
  {
    window.localStorage.clear();
  }
}


export default new WrapedLocalStorage();