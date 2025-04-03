
import customHook from'./hook';

const TestPage=()=>{

    const[errorMessage, loading, data] = customHook('https://jsonplaceholder.typicode.com/users');

    if(loading){
        return (
            <>
            Fetching data...
            </>
            );
    }
    else{
        return (
            <>
                <text>
                    {JSON.stringify(data)}
                </text>
                <text>
                    {errorMessage}
                </text>
    
            </>
        );
    }

}

export default TestPage;