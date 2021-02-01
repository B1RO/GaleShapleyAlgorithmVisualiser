import React, {useEffect, useRef, useState} from 'react';
import './App.css';


type Matches = { [key: string]: string }
type Preferences = { [key: string]: string[] }

function isLetter(c : any) {
    return c.toLowerCase() != c.toUpperCase();
}

function useInterval(callback : any, delay: any) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            // @ts-ignore
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

function App() {
    let [matches, setMatches] = useState<Matches>({})

    let [initialBs,setInitialBs] = useState<Preferences>(null as any);

    let [initialAs, setInitialAs] = useState<Preferences>(null as any);

    let [as, setAs] = useState<Preferences>(null as any);
    let [bs, setBs] = useState<Preferences>(null as any);
    let [index, setIndex] = useState(0);

    useEffect(()=>{
        if(initialAs != null && initialBs != null)
        {
            setAs(initialAs);
            setBs(initialBs);
        }
    }, [initialAs,initialBs]);

    let [aInput, setAInput] = useState("a1 : b4  b3  b1  b2\na2 : b2  b4  b1  b3\na3 : b4  b1  b2  b3\na4 : b3  b2  b1  b4");
    let [bInput, setBInput] = useState("b1 : a1  a3  a4  a2\nb2 : a1  a3  a2  a4\nb3 : a2  a1  a3  a4\nb4 : a2  a4  a1  a3");
    let [run, setRun] = useState(false);

    useInterval(() => {
        if(run)
            foo(false);
    }, 1000);

    let foo = (cont : boolean) => {
        if (Object.keys(matches).length !== Object.keys(bs).length) {
            let b = Object.keys(bs)[index];
            if (Object.values(matches).findIndex(bMatch => bMatch === b) === -1) {
                let preferences = bs[b];
                let preferredMatch = preferences[0];
                setBs({...bs, [b]: bs[b].slice(1)})
                if (Object.keys(matches).findIndex(a => a === preferredMatch) === -1) {
                    setMatches({...matches, [preferredMatch]: b});
                } else if (as[preferredMatch].indexOf(b) < as[preferredMatch].indexOf(matches[preferredMatch])) {
                    setMatches({...matches, [preferredMatch]: b});
                }
            }

            if (index + 1 === Object.keys(as).length) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }
    }

    if(as == null || bs == null)
    {
        return <div style={{"display" : 'flex', alignItems : "center", justifyContent : "center", flexDirection : "column"}}>
            <div>Please fill in the inputs:</div>
            <div style={{fontSize : 16}}>Note that we try to guess the separator, so you shoulnd't have to worry about that :)</div>
        <div style={{display : "flex", flexDirection : "row", alignItems : "space-around", justifyContent : "space-around", height : "70vh", width : "100vw", padding : 128}}>
            <div>
            <div>As:</div>
            <div style={{fontSize : 14}}>(e.g. : a1 : b1,b2,b3)</div>
            <textarea
                value={aInput}
                onChange={(e)=>{
                setAInput(e.currentTarget.value as any)
            }} rows={20} cols={64}/>
            </div>
            <div>
            <div>Bs:</div>
            <div style={{fontSize : 14}}>(e.g. : b1 : a2,a1,a3)</div>
            <textarea
                onChange={(e)=> {
                    setBInput(e.currentTarget.value as any)
                }}
                value={bInput} rows={20} cols={64}/>
            </div>
        </div>
            <div className="multi-button">
            <button style={{width: ""}} onClick={(e) => {
                // @ts-ignore
                var weirdCharOccurences = Object.fromEntries(Object.entries([...aInput].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {})).filter(([char, occurence])=>!isLetter(char) && isNaN(char)));
                var lineCount = aInput.split('\n').length;
                var keyPairSeparator = Object.entries(weirdCharOccurences).filter(([char, count])=>{
                    return count == lineCount;
                })[0][0]
               var preferenceSeparator =  Object.entries(weirdCharOccurences).filter(([char, count])=>{
                   return count != lineCount;
               })[0][0];
                let as = Object.fromEntries(aInput.split('\n').map(line=>{
                    let [key, valueAsStr] = line.split(keyPairSeparator)
                    return [key.trim(), valueAsStr.split(preferenceSeparator).map(x=>x.trim())]
                }));

                // @ts-ignore
                var weirdCharOccurences2 = Object.fromEntries(Object.entries([...bInput].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {})).filter(([char, occurence])=>!isLetter(char) && isNaN(char)));
                var lineCount2 = bInput.split('\n').length;
                var keyPairSeparator2 = Object.entries(weirdCharOccurences2).filter(([char, count])=>{
                    return count == lineCount2;
                })[0][0]
                var preferenceSeparator2 =  Object.entries(weirdCharOccurences2).filter(([char, count])=>{
                    return count != lineCount2;
                })[0][0];
                let bs = Object.fromEntries(bInput.split('\n').map(line=>{
                    let [key, valueAsStr] = line.split(keyPairSeparator)
                    return [key.trim(), valueAsStr.split(preferenceSeparator).map(x=>x.trim())]
                }));
                setInitialAs(as);
                setInitialBs(bs);
            }}>
                Continue
            </button>
        </div>
        </div>
    }
    else
    {
        return <div style={{backgroundColor: "#ECEFF1", width: '100vw', height: '100vh', display : 'flex', flexDirection : "column", alignItems : "center"}}>
            <div style={{height : "30vh", paddingTop : 28}}>
                Matches :
                {Object.entries(matches).map(([a,b])=>{
                    return <div style={{fontSize : 16}}>{a} - {b}</div>
                })}
            </div>
            <div style={{display: "flex", justifyContent: "space-around", width: "90vw", height: "50vh"}}>
                <div style={{
                    margin: 48,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    flexGrow: 1,
                    height: "80%"
                }}>
                    {Object.entries(initialBs).map(([b
                                                        , preferences]) => {
                        let chosenIndex = initialBs[b].findIndex(x => matches[x] === b);
                        let possibleChoiceStartIndex = initialBs[b].length - bs[b].length;
                        return <div style={{
                            display: "flex",
                            alignContent: "center",
                            flexGrow: 1,
                            flexDirection: "row",
                            height: "100%",
                            justifyContent: "center"
                        }}>
                            <div style={{
                                backgroundColor: b == Object.keys(bs)[index] ? "#FDD835" : "#FFEB3B",
                                width: 64
                            }}>{b}</div>
                            {preferences.map((preference, preferenceIndex) =>
                                <div style={{
                                    display: "flex",
                                    flexGrow: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: 16,
                                    fontWeight: 1000,
                                    textAlign: "center",
                                    backgroundColor: chosenIndex == preferenceIndex ? "#2E7D32" : preferenceIndex >=
                                                                                                  possibleChoiceStartIndex ? "#66BB6A" : "#C8E6C9"
                                }}>{preference}, </div>)}</div>
                    })}
                </div>
                <div style={{
                    margin: 48,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    flexGrow: 1,
                    height: "80%"
                }}>
                    {Object.entries(initialAs).map(([a
                                                        , preferences]) => {
                        let chosenIndex = initialAs[a].findIndex(b=>b===matches[a]);
                        let possibleChoiceStartIndex = initialAs[a].length - as[a].length;
                        return <div style={{
                            display: "flex",
                            alignContent: "center",
                            flexGrow: 1,
                            flexDirection: "row",
                            height: "100%",
                            justifyContent: "center"
                        }}>
                            <div style={{
                                backgroundColor: a == Object.keys(bs)[index] ? "#2E7D32" : "#66BB6A",
                                width: 64
                            }}>{a}</div>
                            {preferences.map((preference, preferenceIndex) =>
                                <div style={{
                                    display: "flex",
                                    flexGrow: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: 16,
                                    fontWeight: 1000,
                                    textAlign: "center",
                                    backgroundColor: chosenIndex == preferenceIndex ? "#FDD835" : preferenceIndex >=
                                                                                                  possibleChoiceStartIndex ? "#FFEB3B" : "#FFF9C4"
                                }}>{preference}, </div>)}</div>
                    })}
                </div>
            </div>
            <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div className="multi-button">
                    <button style={{width: ""}} onClick={() => {
                        foo(false);
                    }}>
                        Step by step
                    </button>
                    <button style={{width: ""}} onClick={() => {
                        setRun(true);
                    }}>
                        Run
                    </button>
                </div>
            </div>
            {/*<div>*/}
            {/*    {Object.entries(matches).map(([a, b]) => <div>*/}
            {/*        {b} - {a}*/}
            {/*    </div>)}*/}
            {/*</div>*/}
        </div>
    }


}

export default App;
