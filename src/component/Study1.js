function Input1({value, onChange, name, placeholder, type='text'}) {
  return(
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
    />
  )
}

function App() {
  
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const handleCalc =() => {
    const na = parseFloat(a);
    const nb = parseFloat(b);
    if (a === '' || b === '') {
      setResult(null);
      return;
    }
    if (isNaN(na) || isNaN(nb)) {
      setResult('입력값을 확인하세요');
      return;
    }
    setResult(na + nb);
  };

  return (
    <div className="App">
      <Input1 name="a" value={a} onChange={(e) => setA(e.target.value)} placeholder="값 1" type='number'/>
      <Input1 name="b" value={b} onChange={(e) => setB(e.target.value)} placeholder="값 2" type='number'/>
      <button onClick={handleCalc}>계산</button>
      <div>
          {result !== null && <div>합계: {result}</div>}
        </div>
    </div>
  );
}

export default App;
