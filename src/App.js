import './style/index.css'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import Header from "./components/header/Header";
import AppRoutes from "./Routes/AppRoutes";


const queryClient = new QueryClient();

function App() {
  return(
      <QueryClientProvider client={queryClient}>
        <div className='app'>
            <Header/>
           <div className='container'>
               <AppRoutes/>
           </div>

        </div>
  </QueryClientProvider>
);
}

export default App;
