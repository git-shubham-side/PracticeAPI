fetch("https://practiceapi.up.railway.app/api/v1/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
