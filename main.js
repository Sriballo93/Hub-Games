import './style.css'
import { printTemplate as LoginTemplate } from "./Pages/Login/Login";
import { printTemplate as HubTemplate} from './Pages/Hub/Hub';
import { printTemplate as PokeApiTemplate } from "./Pages/PokeApi/PokeApi";
import { printTemplate as HeaderTemplate} from './components/Header/Header';
import { printTemplate as TicTacTemplate} from './Pages/Tic_Tac/Tic_Tac';
import { printTemplate as HangTemplate} from './Pages/Hangman/Hangman';


 export const initContent = (route) => {
   switch (route) {
     case undefined:
       localStorage.getItem("user") ? HubTemplate() : LoginTemplate();
       break;
     case "Hub":
       HubTemplate();
       break;
       case "Login":
        (LoginTemplate);
        break;
        case "PokeApi":
        PokeApiTemplate();
        break;
        case"Tictac":
        TicTacTemplate();
        break;
        case "Hangman":
          HangTemplate();
          break;


  
   }
 };


initContent();

