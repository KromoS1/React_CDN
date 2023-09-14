/// <reference path="../react.d.ts" />

const { render } = ReactDOM;
const { useState, useEffect, useCallback, Fragment } = React;

const Counter = () => {

	const [counter,setCounter] = useState(0)
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(0);

	const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "min":
        setMin(+value);
        break;

      case "max":
        setMax(+value);
        break;
    }
  };

	const saveSetting = () => {
		setCounter(+min);
	}

  const inc = () => {
    if(counter < max) {
      setCounter((value: number) => value + 1);
    }
  }

  const reset = () => {
    setCounter(min)
  }

  return (
    <Fragment>
      <Settings
        min={min}
        max={max}
        changeInput={changeInput}
        saveSetting={saveSetting}
      />
      <Display counter={counter} reset={reset} inc={inc} />
    </Fragment>
  );
};

type SettingsPropsType = {
  min: number;
  max: number;
  changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saveSetting: () => void;
};

function Settings({ min, max, changeInput, saveSetting }: SettingsPropsType) {
	
  return (
    <div className="settings">
      <span>min</span>
      <input type="number" name="min" value={min} onChange={changeInput} />
      <span>max</span>
      <input type="number" name="max" value={max} onChange={changeInput} />
      <button onClick={saveSetting}>Save setting</button>
    </div>
  );
};


type CounterPropsType = {
  counter: number;
  inc: () => void;
  reset: () => void;
}

function Display(props:CounterPropsType) {

  return (
    <div className="display">
      <div className="count">
      <span>{props.counter}</span>
      </div>
      <div className="btns">
        <button onClick={props.inc}>inc</button>
        <button onClick={props.reset}>reset</button>
      </div>
    </div>
  );
}

render(<Counter />, document.querySelector("#counter"));
