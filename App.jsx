import { createRoot } from 'react-dom/client';
import Main from "./src/components/Main";

function App(){
    return (
        <Main />
    )
}

const rootApp = createRoot(document.querySelector("#root"));
rootApp.render(<App/>);