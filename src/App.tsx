import { RouterProvider } from "react-router-dom";
import router from "./app/router";

import { faTradeFederation, fa500px, faAmilia, faGgCircle, faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faAddressCard, faUser } from "@fortawesome/free-regular-svg-icons";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAdjust, faHandHoldingUsd, faPencilRuler, faRetweet } from "@fortawesome/free-solid-svg-icons";

library.add(faTradeFederation, fa500px, faAmilia, faGgCircle, faAccessibleIcon, faAddressBook, faAddressCard, faUser, faAdjust, faHandHoldingUsd, faPencilRuler, faRetweet)

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}


export default App;
