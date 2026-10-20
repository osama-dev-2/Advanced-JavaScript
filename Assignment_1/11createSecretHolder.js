  function createSecretHolder(val) {
    let pass = val;
    return {
      getPass: function () {
        return pass;
      },
    };
  }

  const secret = createSecretHolder("123");

  console.log(secret.getPass());
  console.log(secret.pass);
