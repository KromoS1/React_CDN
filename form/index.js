const ReactFromCDN = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submit = e => {
    e.preventDefault();

    const resultForm = formatDataForm(e.currentTarget);
		console.log(resultForm)
  };

  const changeInput = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;
    }
  };

  return (
    <form onSubmit={submit} className="form">
      <input
        name="email"
        value={email}
        onChange={changeInput}
        placeholder="email"
      />
      <input
        name="password"
        value={password}
        onChange={changeInput}
        placeholder="password"
      />
      <button type={"submit"}>Submit</button>
    </form>
  );
};

ReactDOM.render(<ReactFromCDN />, document.querySelector("#form"));
