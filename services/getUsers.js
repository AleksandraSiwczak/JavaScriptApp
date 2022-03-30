export const getUser = () => {
    return fetch("https://randomuser.me/api/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { name, picture, registered, nat, location } = data.results[0];
  
        return {
          name: name.first,
          lastName: name.last,
          img: picture.medium,
          registerData: registered.date,
          nationality: nat,
          locationAdress: location.city,
          locationCountry: location.country,
        };
      });
  
  };