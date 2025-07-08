import { useRecoilValue, useSetRecoilState } from 'recoil';
import './App.css'
import { counterAtom, evenSelector } from './store/atoms/counter';



function Selector(){


    return <div>
        <Button/>
        <Counter/>
        <IsEven/>
    </div>

}

function Button(){
 const setCount = useSetRecoilState(counterAtom)
    function inc(){
        setCount(c=> c+2);
    }

    function dec(){
         setCount(c=> c-1);
    }

    return <div>
        <button onClick={inc}>Increase</button>
        <button onClick={dec}>Decrease</button>
    </div>
}

function Counter(){
    const count = useRecoilValue(counterAtom);

    return <div>
        {count}
    </div>
}

function IsEven(){

    const even = useRecoilValue(evenSelector);

    return <div>
        {even ? "even" :"odd " }
    </div>
}

export default Selector;